const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const jsonwebtoken = require("jsonwebtoken");
require('dotenv').config()

const getUsers = async (req, res) => {
  try {
    const user = await prisma.userdeatails.findMany();
    res.status(200).send(user);
  } catch (error) {
    console.log(error);
    res.status(400).send("error while getting user data", error);
  }
};

const loginUser = async (req, res) => {

    
    
  try {
    console.log(req.body)
    const { email, password } = req.body;
    const user = await prisma.userdeatails.findUnique({
      where: {
        email: email,
      },
    });
    if(!user){
     return   res.status(400).send('no user found')
    }
    const currentPassword= password
    if (currentPassword===user.password){
    const token=jsonwebtoken.sign({id:user.id,email:user.email,role:user.userole},process.env.SECRET_KEY,{expiresIn:'1d'})
    res.status(200).send({token:token})
        
    }else{
        res.status(400).send('invalid password')
    }

  } catch (error) {
    console.log(error);
    res.status(400).send({ "error while login": error });
  }
};

module.exports = { getUsers ,loginUser};
