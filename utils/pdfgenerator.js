const fs = require('fs');
const path = require('path');
const PDFDocument = require('pdfkit');

/**
 * Generate and save an invoice PDF for the given data
 * @param {Object} invoiceData - The invoice data object
 * @param {Object} invoiceData.client - Customer details
 * @param {Array} invoiceData.items - Array of items [{ sno, event, members, price, total }]
 * @param {Object} invoiceData.charges - Additional charges like gst, advance, etc.
 * @returns {string} - Path to the saved PDF
 */
const generateInvoicePDF = (invoiceData) => {
  const {
    client,
    items,
    charges,
  } = invoiceData;

  // Create output folder if it doesn't exist
  const outputDir = path.join(__dirname, '../invoices');
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir);
  }

  // Generate file name
  const fileName = `Invoice_${client.name.replace(/\s+/g, '_')}_${Date.now()}.pdf`;
  const filePath = path.join(outputDir, fileName);

  // Create a new PDF document
  const doc = new PDFDocument({ margin: 40, size: 'A4' });
  const stream = fs.createWriteStream(filePath);
  doc.pipe(stream);

  // Header
  doc
    .fontSize(20)
    .fillColor('#FFC100')
    .text('SHANMUKHA CATERERS PVT. LTD', { align: 'center' });

  doc
    .moveDown(0.3)
    .fontSize(10)
    .fillColor('black')
    .text('An ISO 22000:2018 CERTIFIED COMPANY', { align: 'center' })
    .text('VIDYA NAGAR, HYDERABAD - 500 044 | CUSTOMER CARE: 1800 890 3081', {
      align: 'center',
    })
    .moveDown(0.5)
    .fillColor('#00B254')
    .fontSize(12)
    .text('WE CATER TO YOUR HEALTH', { align: 'center' });

  doc.moveDown(1);

  // Customer Details
  doc
    .fontSize(12)
    .fillColor('black')
    .text(`Name: ${client.name}`)
    .text(`Contact: ${client.contact}`)
    .text(`Place: ${client.place}`)
    .text(`Date: ${client.date}`)
    .moveDown(1);

  // Items Table Header
  doc
    .fontSize(12)
    .fillColor('#000')
    .text('S.No', 50, doc.y, { continued: true })
    .text('Event', 100, doc.y, { continued: true })
    .text('Members', 250, doc.y, { continued: true })
    .text('Price', 350, doc.y, { continued: true })
    .text('Total', 450, doc.y);

  doc.moveTo(50, doc.y + 3).lineTo(550, doc.y + 3).stroke();

  // Items Rows
  let y = doc.y + 8;
  items.forEach((item, index) => {
    doc
      .fontSize(11)
      .text(item.sno, 50, y, { continued: true })
      .text(item.event, 100, y, { continued: true })
      .text(item.members.toString(), 250, y, { continued: true })
      .text(`₹${item.price}`, 350, y, { continued: true })
      .text(`₹${item.total}`, 450, y);
    y += 18;
  });

  doc.moveDown(1);

  // Charges / Totals
  doc
    .fontSize(12)
    .fillColor('black')
    .text(`Lead Counters: ₹${charges.lead_counters}`, { align: 'right' })
    .text(`Water Bottles: ₹${charges.water_bottles}`, { align: 'right' })
    .text(`Cooking Charges: ₹${charges.cooking_charges}`, { align: 'right' })
    .text(`Labour Charges: ₹${charges.labour_charges}`, { align: 'right' })
    .text(`Transport Charges: ₹${charges.transport_charges}`, { align: 'right' })
    .moveDown(0.5)
    .fillColor('#FF0000')
    .fontSize(13)
    .text(`Subtotal: ₹${charges.subtotal}`, { align: 'right' })
    .fillColor('black')
    .text(`GST (5%): ₹${charges.gst}`, { align: 'right' })
    .fillColor('#FF0000')
    .text(`Grand Total: ₹${charges.total_amount}`, { align: 'right' })
    .moveDown(0.5)
    .fillColor('black')
    .text(`Advance: ₹${charges.advance}`, { align: 'right' })
    .text(`Balance: ₹${charges.balance}`, { align: 'right' });

  // Footer
  doc.moveDown(2);
  doc
    .fontSize(10)
    .fillColor('black')
    .text('NOTE: ADDITIONAL WILL BE CHARGED FOR EXTRA PLATES', { align: 'center' })
    .moveDown(0.5)
    .text('*** With best Wishes from Shanmukha Caterers Pvt. Ltd ***', { align: 'center' })
    .moveDown(0.5)
    .text('Manager', { align: 'center' });

  // Finalize PDF file
  doc.end();

  return new Promise((resolve, reject) => {
    stream.on('finish', () => resolve(filePath));
    stream.on('error', reject);
  });
};

module.exports = generateInvoicePDF;
