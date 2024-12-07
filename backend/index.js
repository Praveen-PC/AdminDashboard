const express=require('express')
const cors=require('cors')
require('dotenv').config()
const {PrismaClient} =  require( '@prisma/client')
const userroutes=require('./routes/userdetails')

const prisma= new  PrismaClient()

const app=express()
app.use(express.json())
app.use(cors({
    origin:'http://localhost:5173',
    methods:['POST','GET','PUT','DELETE']
}))

app.get('/',(req,res)=>{
    res.send('hello  from backend')
})

app.use('/api',userroutes)


const PORT=process.env.PORT||8000
app.listen(PORT,()=>{
    console.log(`server running on ${PORT}`)
})
