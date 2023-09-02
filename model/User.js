var mongoose = require("mongoose");
var userSchema = mongoose.Schema({
    employeeName: {
        type: String,
        required: true
    },
    DOB:{
       type:Date,
       required: false
    },
    userName :{
        type: String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    emailId:{
        type:String,
        required:true
    },
    Address:{
        type:String,
        required:true
    },
    AadharId:{
        type:String,       //store url sw3 bucket to store images and files etc
        required:true 
    },
    salary: {
        type:Number,
        required:true
    },
    photo:{
        type:String,
        required:true
    },
    tasks:{
        type:[mongoose.Schema.Types.objectId],
        ref:"Task",
        required:true
    },
    createdAt:{
        type:Date,
        default:new Date(),
        required:false
    },
    isDeleted:{
        type:Boolean,
        required:false
    },
    isVerified:{
        type:Boolean,
        default:false
    },
    projeks:{
        type:Array,
        required:false
    }
})