module.exports = reqFilter=(req,res,next)=>{
    if(!req.query.age){
        res.send('Please Provide age')
    }
    else if(req.query.age<10){
        res.send('You cannot access the page')
    }
    else{
        next();
    }
    
}