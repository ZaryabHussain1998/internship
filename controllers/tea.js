
const con = require('../config');

const homeIn =(req,res,next)=>{
    res.json({message: "Welcome to Home Page"});
    next();
};  
const userIn =(req,res,next)=>{
    res.json({message: "Welcome to user Page"});
    next();
};  
const aboutIn =(req,res,next)=>{
    res.json({message: "Welcome to about Page"});
    next();
};  
const contactIn =(req,res,next)=>{
    res.json({message: "Welcome to contact Page"});
    next();
};  
    
    
//GET '/tea'
const getAllTea = (req, res, next) => {
    res.json({message: "GET all tea"});
    next();
};

//POST '/tea'
const newTea = (req, res, next) => {
    res.json({message: "POST new tea"});
    next();
};

//DELETE '/tea'
const deleteAllTea = (req, res, next) => {
    res.json({message: "DELETE all tea"});
    next();
};

//GET '/tea/:name'
const getOneTea = (req, res, next) => {
    res.json({message: "GET 1 tea"});
    next();
};

//POST '/tea/:name'
const newComment = (req, res, next) => {
    res.json({message: "POST 1 tea comment"});
    next();
};

//DELETE '/tea/:name'
const deleteOneTea = (req, res, next) => {
    res.json({message: "DELETE 1 tea"});
    next();
};
const getApi = (req, resp) => {
    con.query("select * from users", (err, result) => {
      if (err) { resp.send("error in api") }
      else { resp.send(result) }
    })
  };
  const postApi = (req, resp) => {
    const data = req.body;
    con.query("INSERT INTO users SET?", data, (error, results, fields) => {
      if (error) throw error;
      resp.send(results)
    })
  };
  const putApi = (req,resp)=>{
    const data= [req.body.name,req.body.password,req.body.user_type,req.params.user_id];
    con.query("UPDATE users SET name = ?, password = ?, user_type = ? WHERE user_id = ?",
    data,(error,results,fields)=>{
      if(error) throw error;
      resp.send(results)
    })
   
  };
  const deleteApi = (req,resp)=>{
    con.query("delete from users where user_id="+ req.params.user_id,(error,results)=>{
        if (error) throw error;
        resp.send(results)
    })
}



//export controller functions
module.exports = {
    homeIn,
    userIn,
    aboutIn,
    contactIn,
    getAllTea, 
    newTea,
    deleteAllTea,
    getOneTea,
    newComment,
    deleteOneTea,
    getApi,
    postApi,
    putApi,
    deleteApi,

};