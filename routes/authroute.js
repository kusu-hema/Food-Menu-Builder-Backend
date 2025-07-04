// const express = require('express');
// const router = express.Router();
// const controller = require('../controller/authcontroller'); // ✅ path should be correct

// router.post('/signup', controller.signup); // ✅ matches exported name

// module.exports = router;



const express = require('express');
const router = express.Router();
const controller = require('../controller/authcontroller');

router.get('/', controller.getUsers); // React will call this

module.exports = router;
