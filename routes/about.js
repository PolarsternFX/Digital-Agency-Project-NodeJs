var express = require('express');
var router = express.Router();

router.get('/', function(req,res) {
res.render( 'about.hbs', { title: 'About' });
});
    
module.exports = router;
    