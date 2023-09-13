const express = require('express')
const router = express.Router();



router.get('/',(req,res)=>{
  res.send('<h1>WellCome To The Assignment!</h1>')
})

router.get('/about',(req,res)=>{
  res.send('<h1>This Is The About Page</h1>')
})
router.get('/contact',(req,res)=>{
  res.send('<h1>Contact us at <i>saqibraheem1999@gmail.com</i></h1>')
})
router.get('*',(req,res)=>{
    res.send('<img  src="https://colorlib.com/wp/wp-content/uploads/sites/2/404-error-page-templates.jpg" alt="images"/>')
})
module.exports = router