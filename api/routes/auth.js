const router = require("express").Router();
const User = require("../models/User")
const CryptoJs = require("crypto-js")

// Registration
router.post("/register", async (req, res) =>{
    const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: CryptoJs.AES.encrypt(
            req.body.password, process.env.PASS_SEC
            )
            .toString()
    });
    try {
        const savedUser = await newUser.save()
        res.status(200).json(savedUser)       
    } catch (error) {
        
        res.status(500).json(error);
    }

});

// // Login
router.post("/login", async (req, res)=>{
    try {
        
        const user = await User.findOne(
            {
                username: req.body.username
            }
        );
        //if no user
        !user && res.status(401).json("Wrong Username");

        const hashedPass = CryptoJs.AES.decrypt(
            user.password,
            process.env.PASS_SEC
        );
        const inputPassword = hashedPass.toString(CryptoJs.enc.Utf8);

        inputPassword !== req.body.password && 
            res.status(401).json("Wrong Password");
        
            res.status(200).json(user);

    }
     catch (err) {
        console.log(err);
    }
});


module.exports = router;