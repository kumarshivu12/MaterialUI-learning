// //Make HTML Pages
// // const filePath=path.join(__dirname,'src')
// // app.use(express.static(publicPath))
// // app.listen(5000)

// //remove extension from url 
// // const filePath=path.join(__dirname,'src')
// // app.get('',(req,res)=>{
// //     res.sendFile(`${filePath}/home.html`)
// // })
// // app.get('',(req,res)=>{
// //     res.sendFile(`${filePath}/about.html`)
// // })
// // app.get('*',(req,res)=>{
// //     res.sendFile(`${filePath}/404page.html`)
// // })
// // app.listen(5000)

// //Template Engine
// // app.set('view engine','ejs')
// // app.get('/profile',(req,res)=>{
// //     const user={
// //         name:"shivam kumar",
// //         id:"2020uce0060",
// //         skills:["python","c++","javascript","reactjs","nodejs"]
// //     }
// //     res.render('profile',{user})
// // })
// // app.get('/login',(req,res)=>{
// //     res.render('login')
// // })

//NODE JS---------------------------------------->
console.log("Hello Shivam kumar")

// console.log(global)

//OS Module----------------------->
// const os=require('os');
// console.log(os.type())
// console.log(os.version())
// console.log(os.homedir())

// console.log(__dirname)
// console.log(__filename)

//PATH Module-------------------------->
// const path=require('path');
// console.log(path.dirname(__filename))
// console.log(path.basename(__filename))
// console.log(path.extname(__filename))
// console.log(path.parse(__filename))

//IMPORT_EXPORT------------------------->
// const math=require('./components/Math')
// console.log(math.add(2,3))
// console.log(math.subtract(2,3))
// console.log(math.multiply(2,3))
// console.log(math.divide(2,3))
// const {add,subtract,multiply,divide}=require('./components/Math')
// console.log(add(2,3))
// console.log(subtract(2,3))
// console.log(multiply(2,3))
// console.log(divide(2,3))

//BASIC SERVER------------------------------>
// const http = require('http');
// http.createServer((req,res)=>{
//     res.write('Hello Shivam Kumar');
//     res.end();
// }).listen(5000)

//BASIC API------------------------------------->
// const http = require('http');
// const data=require('./components/Data')
// http.createServer((req,res)=>{
//     res.writeHead(200,{"Content-Type":"application/json"});
//     res.write(JSON.stringify(data));
//     res.end();
// }).listen(5000)

//INPUT FROM COMMAND LINE----------------------->
// console.log(process)
// console.log(process.argv)
// const fs=require('fs');
// const input = process.argv
// if(input[2]=='add'){
//     fs.writeFileSync(input[3],input[4])
// }
// else if(input[2]=='remove'){
//     fs.unlinkSync(input[3])
// }
// else{
//     fs.write('Invalid input')
// }

//SHOW LIST---------------------->
// const path=require('path');
// const fs=require('fs');
// const dirPath=path.join(__dirname,'files')
// // fs.writeFileSync(`${dirPath}/Kumar.txt`,'Hello ')
// fs.readdir(dirPath,(err,files)=>{
//     console.log(files)//-> array of all files in this directory
//     files.forEach((item)=>{
//         console.log(item)
//     })
// })

//CRUD WITH FILE SYSTEM------------------>
// const fs=require('fs');
// const path=require('path');
// const dirPath=path.join(__dirname,'files')
//CREATE
// fs.writeFileSync(`${dirPath}/Mistu.txt`,'Welcome')
// READ
// fs.readFile(`${dirPath}/shivam.txt`,'utf8',(err,item)=>{
//     console.log(item)
//     // console.log(item.toString())
// })
//UPDATE
// fs.appendFile(`${dirPath}/Mistu.txt`," Mistu",(err)=>{
//     if(!err){
//         console.log('file is updated')
//     }
// })
//RENAME
// fs.rename(`${dirPath}/Mistu.txt`,`${dirPath}/Shiv.txt`,(err)=>{
//     if(!err){
//         console.log('file is renamed')
//     }
// })
//DELETE
// fs.unlinkSync(`${dirPath}/Shiv.txt`)

// Asyncronous & Syncronous----------------->
// const a=10;
// const b=0;
// setTimeout(()=>{
//     b=20;
// },2000)
// console.log(a+b)

// HANDLE ASYNCHRONOUS DATA------------------------------------>
// const a=10;
// const b=20;
// const waitingData=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve(30)
//     },2000)
// })
// waitingData.then((data)=>{
//     console.log(a+data)
// })

// EXPRESS JS---------------------------------->
// const express=require('express');
// const app=express();
// app.get('',(req,res)=>{
//     res.send('Hello This is Home Page')
// })
// app.get('/about',(req,res)=>{
//     res.send('Hello This is About Page')
// })
// app.listen(5000)

// ROUTING PARAMS AND REQUEST---------------------------------------->
// const express=require('express');
// const app=express();
// app.get('',(req,res)=>{
//     console.log(`data sent by browseer ${req.query.name}`)
//     res.send(`Hello ${req.query.name}`)
// })
// app.listen(5000)

// RENDER HTML AND JSON------------------>
// const express=require('express');
// const app=express();
// const data=require('./components/Data')
// app.get('',(req,res)=>{
//     res.send(`
//     <input type="text" placeholder="Username" value=${req.query.name}/>
//     <button> Click Me</button>
//     <a href="/about"> Go to about page</a>
//     `)
// })
// app.get('/about',(req,res)=>{
//     res.send(JSON.stringify(data))
// })
// app.listen(5000)

// MIDDLEWARE--------------------------------->
// const express=require('express');
// const app=express();
// const reqFilter=(req,res,next)=>{
//     if(!req.query.age){
//         res.send('Please Provide age')
//     }
//     else if(req.query.age<10){
//         res.send('You cannot access the page')
//     }
//     else{
//         next();
//     }
// }
// app.use(reqFilter)
// app.get('',(req,res)=>{
//     res.send('Welcome to Home Page')
// })
// app.get('/profile',(req,res)=>{
//     res.send('Welcome to Profile Page')
// })
// app.listen(5000)

//ROUTE LEVEL MIDDLEWARE------------------------------->
// const express=require('express');
// const app=express();
// const reqFilter=require('./components/Middleware');
// const route=express.Router();
// route.use(reqFilter);
// app.get('',(req,res)=>{
//     res.send('Welcome to Home Page')
// })
// route.get('/profile',(req,res)=>{
//     res.send('Welcome to Profile Page')
// })
// app.listen(5000)
// app.use('/',route);

//CONNECT NODE WITH MONGODB-------------------------------->
// const {MongoClient}=require('mongodb')
// const url='mongodb://127.0.0.1:27017';
// const database='User';
// const client=new MongoClient(url);
// const connectDB = async()=>{
//     const result= await client.connect();
//     const db=result.db(database);
//     const collection=db.collection('UserData');
//     const response=await collection.find({}).toArray();
//     console.log(response)
// }
// connectDB();

//CRUD WITH MONGODB----------------------------------------->
//READ
// const connectDB=require('./components/Mongodb');
// connectDB().then((result)=>{
//     result.find().toArray().then((data)=>{
//         console.log(data)
//     })
// })
// const read= async()=>{
//     const db=await connectDB();
//     const result = await db.find().toArray();
//     console.log(result)
// }
// read();
//CREATE/INSERT
// const create=async()=>{
//     let db=await connectDB();
//     const result=await db.insert({name:"shiv",email:"2020uce0062",mobile:"555"})
//     console.log(result)
//     if(result.acknowledged){
//         console.log("data inserted")
//     }
// }
// create();
//UPDATE
// const update=async()=>{
//     const db=await connectDB();
//     const result=await db.update({name:"sonu"},{$set:{name:"shiv",email:"2020uce0063"}})
//     console.log(result)
//     if(result.acknowledged){
//         console.log("data updated")
//     }
// }
// update();
//DELETE
// const deleteData=async()=>{
//     const db= await connectDB();
//     const result= await db.deleteOne({name:"shiv"})
//     console.log(result)
//     if(result.acknowledged){
//         console.log("data deleted")
//     }
// }
// deleteData();

//API WITH MONGODB
const connectDB=require('./components/Mongodb');
const express=require('express');
const app=express();
//GET
// app.get('',async(req,res)=>{
//     const db=await connectDB();
//     const result=await db.find().toArray();
//     res.send(result)
// })
// app.listen(5000);
//POST
app.post('',async(req,res)=>{
    const db=await connectDB();
    const result=await db.insert(req.body)
    res.send(result)
})
app.listen(5000)