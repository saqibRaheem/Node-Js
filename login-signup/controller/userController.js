const Users = require("../model/userModel");
const bcrypt = require("bcrypt");

const Signup = (req, res) => {
  const { name, email, password, phone } = req.body;

  if (!name || !email || !password || !phone) {
    res.send({ message: "Invalid Data" });
  } else {
    bcrypt.hash(password, 10, function (err, hash) {
      const user = new Users({
        name,
        email,
        password: hash,
        phone,
      });
      user.save();
    });

    res.send({ message: "Register SuccessFully" });
  }
};


const Login = async (req,res) =>{
  try{
    const {email ,password} = req.body;
    
    const user = await Users.findOne({email:email})
    if(!user){
       return res.send({message:"user not Exist"})
    }
      
    const match = await bcrypt.compare(password,user.password)
    if(!match) return res.send({message:"password not match"})
   
    res.send({message:"Logiin SuccessFully"})
    
  }catch(err){
  return res.status(500).json({msg:err.message})
  }


}

module.exports = {
  Signup,
  Login
};
