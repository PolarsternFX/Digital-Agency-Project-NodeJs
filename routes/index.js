var express = require('express');
const { message } = require('statuses');
var router = express.Router();

const sqlConnect = require('../utilities/connection');

/* GET home page. */
        
router.get('/', function(req,res) {
res.render( 'index.hbs', { title: 'Index'});

  /* QUERY para Obtener Datos desde DBA/*  */
  sqlConnect.query('SELECT * FROM contactform', (error, result) => {
    if (error) {
      console.error(error);
      res.render('error');
    }
  console.log(result);
  res.render('index', { title: 'index', visitors: result });
  });
});


/* ENVIAR Datos a la DB 

router.get('/contactform', (req, res) => {
  res.render('contactform');
});

router.post('/create-user', (req, res) => {
  const visitor = (req.body);
  if (!visitor.name)
  return res.render('error');
  
  
  sqlConnect.query(`
  INSERT INTO \`name\` (\`email\`, \`phone\`, \`message\`)
  VALUES ('${visitor.name}', '${visitor.email}', '${visitor.phone}', '${visitor.message}');
  `,
  
  (err, result) => {
    if (err) {
      console.error(error);
      return res.render('error');
    }
    console.log(result);
    res.render('success', { name: visitor.name, result});
  }
  );
  });
  
router.get('/api', function(req, res) {
  res.json({message: ''});
});*/
  
module.exports = router;
