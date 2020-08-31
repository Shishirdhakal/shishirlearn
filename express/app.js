const express=require('express');
const app=express();
const bodyParser =require('body-parser');
require('./config/dbConnection');

const authRoutes=require('./controllers/auth.routes');
const userRoutes =require('./controllers/user.routes');

//third party middlewarw
app.use(bodyParser.urlencoded({extended:false}));


app.use('/auth',authRoutes);
app.use('/user',userRoutes);

app.use(function(req,res,next)
{
    console.log('page not found');
    next('404:page not found');
})
//Error handling middleware
app.use(function(err,req,res,next){
    console.log('i am error handling middleware');
    res.json({
        message:err
    })
})

app.listen(8080,function(err,done){
    if(err){
        console.log('server connection failed');
    }else{console.log('server connection successful');

    }
})
/* app.get('/home',function(req,res){
      res.end('hi  i am shishir from home page');
});

app.listen(8080,function(err,done){
    if(err){
        console.log('server connection failed');
    }else{console.log('server connection successful');

    }
}) */
//yo app.listen ko muni code lekna hudaina
//http verb ()method
//1.get -> newsfeed of facebook (read)
//2. post ->register page(signup),login 
//3.put ->edit or update page(information)
//4. delete->delete information


//middleware
//->erpress pani middleware ho
// is a function that has eccess to http request object,  http response object and next middleware reference
//-> middleware chai request ra response cycle ko bich ma use huncha
/* var home=function(req,res,next){
    res.end('this is a middleware')
}
app.use(home);
app.listen(8080,function(err,done){
    if(err){
        console.log('server connection failed');
    }else{console.log('server connection successful');

    }
}) */
/* var home=function(req,res,next){
    res.end('this is a middleware')
}
app.use(home);
app.get('/home',function(req,res){
    res.end('hi i am shishir from home page')
})
app.listen(8080,function(err,done){
    if(err){
        console.log('server connection failed');
    }else{console.log('server connection successful');

    }
}) */
//5.types of middleware
//1.application level middleware
//2.routine level middleware
//3.inbult middleware
//4.third party middleware
//5.error handling middleware
