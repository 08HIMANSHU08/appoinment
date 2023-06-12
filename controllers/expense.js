
const User = require('../models/user');


exports.postExpense = async(req,res,next)=>{
    try{
        const item = req.body.item;
        const description = req.body.desc;
        const price = req.body.price;
        const quantity = req.body.quantity;
        const data = await User.create({itemname:item,description:description,amount:price,quantity:quantity});
        // console.log(data);
        res.status(201).json({newExpense:data});
    }catch(err){
        console.log(err);
        res.status(500).json({
            error:err
        })
    }
}

exports.buyExpense = async(req,res,next)=>{
    try{
        if(req.params.id == 'undefined'){
            console.log("ID is Missing");
            return res.status(400).json({err:"ID is Missing"})
        }
        const userId = req.params.id;
        const item = req.body.item;
        const description = req.body.desc;
        const price = req.body.price;
        const quantity = req.body.quantity;
        
            await User.update({itemname:item,description:description,amount:price,quantity:quantity},{where:{id:userId}})
            const users = await User.findByPk(userId);
            res.status(201).json({allExpense:users});
    }
    catch(err){
        res.status(500).json({error:err})
    }
}

exports.getExpense = async(req,res,next)=>{
    try{
        const users = await User.findAll();
        // console.log(users);
        res.status(200).json({allExpense:users});
    }catch(err){
        console.log('get user is failed',JSON.stringify(err))
        res.status(500).json({error:err})
    }
}

