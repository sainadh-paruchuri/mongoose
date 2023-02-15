const mongoose=require('mongoose');
const { DOUBLE, STRING } = require('sequelize');
const Schema=mongoose.Schema;

const expenseSchema=new Schema({
    amount:{
        type:Number,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    userId:{
        type:Schema.Types.ObjectId,
        ref:'User',
        required:true
    }
 
})
module.exports=mongoose.model('Expense',expenseSchema);

// const userSchema=new Schema({
//     username:{
//         type:String,
//         required:true
//     },
//     useremail:{
//         type:String,
//         required:true
//     },
//     password:{
//         type:String,
//         required:true
//     },
//     ispremiumuser:{
//         type:Boolean,
//         default:true
//     }

// })

// module.exports=mongoose.model('User',userSchema);

// const Sequelize=require('sequelize');
// const sequelize=require('../util/database')

// const Expense=sequelize.define('expense',{

//     id:{
//         type:Sequelize.INTEGER,
//         autoIncrement:true,
//         allowNull:false,
//         primaryKey:true
//     },
//     amount:{
//         type:Sequelize.DOUBLE,
//         allowNull:false
//     },
//     description:{
//         type:Sequelize.STRING,
//         allowNull:false
//     },
//     category:{
//         type:Sequelize.STRING,
//         allowNull:false
//     }
// })

// module.exports=Expense;