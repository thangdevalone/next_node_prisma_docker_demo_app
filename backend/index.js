const express =require('express')
const {PrismaClient}=require('@prisma/client')

const prisma= new PrismaClient()
const app =express()

app.use(express.json())

app.use((req,res,next)=>{
    res.header('Access-Control-Allow-Origin','*');
    res.header('Access-Control-Allow-Methods','GET,POST,PUT,DELETE')
    res.setHeader('Access-Control-Allow-Headers','Content-type')
    next()
})

app.get('/test',(req,res)=>{
    try{
        res.status(200).json({message:'Api is working'});
    } catch (error){
        res.status(500).json({message:error.message})
    }
})

//get all users
app.get('/users',async (req,res)=>{
    try{
        const users= await prisma.user.findMany();
        res.status(200).json(users);
    } catch (error){
        res.status(500).json({message:error.message})
    }
})

//get user by id
app.get('/users/:id', async (req, res) => {
    const userId = parseInt(req.params.id); // Lấy id từ đường dẫn URL
    try {
        const user = await prisma.user.findUnique({
            where: {
                id: userId,
            },
        });
        if (!user) {
            res.status(404).json({ message: "Không tìm thấy người dùng" });
        } else {
            res.status(200).json(user);
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});


//create user
app.post('/users',async (req,res)=>{
    try{
        const user=await prisma.user.create({
            data:{
                name:req.body.name,
                email:req.body.email,
                password:req.body.password
            }
        })
        res.status(201).json(user)
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
})

//put user by id
app.put('/users/:id', async (req, res) => {
    const userId = parseInt(req.params.id); // Lấy id từ đường dẫn URL
    try {
        const user = await prisma.user.update({
            where: {
                id: userId,
            },
            data:{
                name:req.body.name,
                email:req.body.email 
            }
        });
        
        res.status(200).json(user);
 
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});
// delete user by id
app.delete('/users/:id', async (req, res) => {
    const userId = parseInt(req.params.id); // Get the id from the URL
    try {
        await prisma.user.delete({
            where: {
                id: userId,
            },
        });
        res.status(200).json({ message: "User deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

const  PORT =process.env.PORT ||4000;
app.listen(PORT,()=>console.log(`Server running on port ${PORT}`))
