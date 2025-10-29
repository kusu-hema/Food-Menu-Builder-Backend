const generateInvoicePDF = require('../utils/pdfgenerator');
const pool = require('../config/dbconn');
const path = require('path');

exports.createMenuInvoice = async (req, res) => {
  try {
    const {
      menu_id,
      subtotal,
      gst,
      total_amount,
      advance,
      balance,
      lead_counters,
      water_bottles,
      cooking_charges,
      labour_charges,
      transport_charges,
      customer_name,
      contact,
      place,
      items = [],
    } = req.body;

    // Save invoice record in PostgreSQL
    const result = await pool.query(
      `INSERT INTO menu_invoice (
        menu_id, subtotal, gst, total_amount, advance, balance,
        lead_counters, water_bottles, cooking_charges, labour_charges, transport_charges
      ) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11) RETURNING *`,
      [
        menu_id, subtotal, gst, total_amount, advance, balance,
        lead_counters, water_bottles, cooking_charges, labour_charges, transport_charges,
      ]
    );

    const invoiceRecord = result.rows[0];

    // Client details for PDF
    const client = {
      name: customer_name || 'Customer',
      contact: contact || 'N/A',
      place: place || 'N/A',
      date: new Date().toLocaleDateString(),
    };

    // Generate PDF
    const pdfPath = await generateInvoicePDF({
      client,
      items,
      charges: invoiceRecord,
    });

    // ✅ Return file download URL
    const fileName = path.basename(pdfPath);
    const fileUrl = `http://localhost:4000/invoices/${fileName}`;

    res.json({
      success: true,
      message: 'Invoice created successfully!',
      invoice: invoiceRecord,
      pdfUrl: fileUrl,
    });
  } catch (error) {
    console.error('❌ Error creating invoice:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
