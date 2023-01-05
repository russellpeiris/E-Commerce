const { verifyTokenAndAuthorization, verifyTokenAndAdmin, verifyToken } = require("./verifyToken");
const Cart = require("../models/Cart")
const router = require("express").Router();


router.post("/", verifyToken, async (req, res) => {
    const newCart = new Cart(req.body);
  
    try {
      const savedCart = await newCart.save();
      res.status(200).json(savedCart);
    } catch (err) {
      res.status(500).json(err);
    }
  });
//update
router.put("/:id", verifyTokenAndAuthorization, async (req, res)=>{

    try{
        const updateCart = await Cart.findByIdAndUpdate(
            req.params.id, 
            {
                $set: req.body
            },
            { new: true }
        );
        return res.status(200).json(updateCart);
    }catch(err){
        return res.status(500).json(err)}
})

//delete

router.delete("/:id", verifyTokenAndAuthorization, async (req, res) => {
    try {
        await Cart.findByIdAndDelete(req.params.id);
        res.status(200).json("Cart has been deleted...");
        } catch (err) {
        res.status(500).json(err);
        }
    });

//retrieve id here is user's
router.get("/find/:userId", verifyTokenAndAuthorization,async (req, res) => {
    try {
        const cart = await Cart.findOne({userId: req.params.userId});
        return res.status(200).json(cart);
        } catch (err) {
        return res.status(500).json(err);
        }
    });

//retrieve all

router.get("/", verifyTokenAndAdmin, async (req, res) => {
   
    try {
        const carts = await Cart.find();
        return res.status(200).json(carts);
    } catch (err) {
      res.status(500).json(err);
    }
    });


module.exports = router;