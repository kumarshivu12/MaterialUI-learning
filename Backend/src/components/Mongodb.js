const {MongoClient}=require('mongodb')
const url='mongodb://127.0.0.1:27017';
const database='User';
const client=new MongoClient(url);
module.exports = connectDB = async()=>{
    const result= await client.connect();
    const db=result.db(database);
    return db.collection('UserData');
}