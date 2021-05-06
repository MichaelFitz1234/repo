const mysql = require("mysql2");
const jwt = require("jsonwebtoken")
const bcrypt = require("bcryptjs");
const db = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_Password,
    database: process.env.DATABASE
  })
exports.gallary =  async(req,res) => {
    // db.query("SELECT n * FROM user WHERE email = ?", [email], async(error, result) =>{
        db.query('INSERT INTO user SET ?', {user_ID: 4, u_name: name, phone_number: phone, email: email, address: address, password:password},(error, result)=>{
            if (error){
                console.log(error);
            }else{
                return res.status(200).redirect("/homePage");
            }
                });
        return 
}
    exports.login = async(req,res) => {
    try {
        const {email, password} = req.body
        if(!email || !password){
        return res.status(400).render('login',{
            message: "Please Provide Email and Password"
        })
        }
    db.query("SELECT * FROM user WHERE email = ?", [email], async(error, result) =>{
        if(!result|| !(await password !== results[0].password)){
        res.status(401).render('login',{
            message: "email or password incorrect"
        })
        }else{
            return res.status(200).redirect("/homePage");
        }
    }) 
    } catch (error) {
      console.log(error)  
    }
}
exports.register = (req, res) => {
    console.log(req.body);
    const name = req.body.name
    const email = req.body.email
    const password = req.body.password
    const phone = req.body.Phone
    const dob = req.body.dob
    const address = req.body.address
    const confirmpassword = req.body.confirmpassword
    db.query('SELECT email FROM user WHERE email = ?', [email],async (error, result)=>{
    if(error){
        console.log(error)
    }
    if(result.length > 0){
        return res.render('register',{
            message: 'email already in use'
        })
    }
    let hashedPassword = await bcrypt.hash(password, 8);
    db.query('INSERT INTO user SET ?', {user_ID: 4, u_name: name, phone_number: phone, email: email, address: address, password:password},(error, result)=>{
    if (error){
        console.log(error);
    }else{
        return res.status(200).redirect("/homePage");
    }
        });
    });
}