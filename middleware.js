module.exports= reqFilter=(req,resp,next)=>{
    if(!req.query.age)
    {
        resp.send("Please provide age to access the app")
    }
    else if(req.query.age<18)
    {
        resp.send("You can not access this app")
    }
    else if(req.query.age>=18);
    {
        next();
    }

    
}