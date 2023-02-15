const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const userSchema=new Schema({
    username:{
        type:String,
        required:true
    },
    useremail:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    ispremiumuser:{
        type:Boolean,
        default:true
    }

})

module.exports=mongoose.model('User',userSchema);
// const Sequelize=require('sequelize')
// const sequelize=require('../util/database')

// const User=sequelize.define('user',{

//     id:{
//         type:Sequelize.INTEGER,
//         autoIncrement:true,
//         allowNull:false,
//         primaryKey:true
//     },
//     username:{
//         type:Sequelize.STRING,
//         allowNull:false,
//     },
//     useremail:{
//          type:Sequelize.STRING,
//          allowNull:false,
//          unique:true
//     },
//     password:{
//           type:Sequelize.STRING,
//           allowNull:false,
//     },
//     ispremiumuser:Sequelize.BOOLEAN

// }

// )

// module.exports=User