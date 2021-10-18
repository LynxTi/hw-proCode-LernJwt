var express = require('express');
var router = express.Router();
const multer = require('multer');
const upload = multer();

const createUserCntrl = require('../controlers/auth/createUser');
const authCntrl = require('../controlers/auth/auth');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/createUser', upload.none(), async (req, res) => {
  const {nameUser, passwordUser} = req.body;
  const doc = createUserCntrl(nameUser, passwordUser);
});

router.post('/loginUser', upload.none(), async (req, res) => {
  const { nameUser, passwordUser } = req.body;

  const rezalt = await authCntrl.login(nameUser, passwordUser);
  res.json({status: rezalt.status, token: rezalt.token})
});


module.exports = router;
