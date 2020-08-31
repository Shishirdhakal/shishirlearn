const mongoose=require('mongoose');
const conxUrl='mongodb://localhost:27017/shishirdb';

mongoose.connect(conxUrl,function(err,done){
    if(err){
        console.log('database connection failed');
    }else{
        console.log("database connection sucessful");
    }
})