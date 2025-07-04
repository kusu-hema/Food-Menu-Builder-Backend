// const express = require("express");
// const app = express();
// const bodyparser = require("body-parser");
// const router =require('./routes/authroute');
// app.use(bodyparser.json());
// app.use('/',router);
// const port = process.env.PORT || 3000;
// app.listen(port,()=>{
//     console.log(`server is running on${port}`);
// });


const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const router = require("./routes/authroute");

app.use(cors());
app.use(bodyParser.json());

app.use('/', router); // API base route

const port = 4000;
app.listen(port, () => {
  console.log(`✅ Server is running on http://localhost:${port}`);
});
