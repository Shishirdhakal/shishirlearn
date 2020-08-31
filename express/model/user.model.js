const mongoose=require('mongoose');
const schema=mongoose.Schema;

var userSchema = new schema({
    firstName:String,
    lastNAme:String,
    emailAddress:{
        type:String,
        required:true,
        unique:true
    },    
    username:{
        type:String,
        lowercase:true,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    phoneNumber:Number,
    role:{
        type:String,
        enum:['admin','user'],
        default:'user'
    }
},{
    timestamps:true
});

const userModel =mongoose.model('user',userSchema);
module.exports =userModel;
