//function
//function is a block of code that performs specific task that can be reused as many times as we like

/* 
function shishir(){

}//{}>>block of code */

//syntax ->2 types
//1.expression syntax

/* var shishir=function(){
    console.log('i am shishir function');

}
shishir(); */

//2. declarative syntax

/* function shishir(){
    console.log('i am shishir function with declarative function');

}
shishir(); */

//function tyoes
//1. named function
/* function shishir(){//name declare gareko
    console.log('i am shishir function');

}
shishir();  */

//2. unnamed function
/* (function (){
    console.log('i am unnamed function ');

}
)();
(function (name){
    console.log('arguments>>',name);


}
)('shishir');
(function (name, address){
    console.log('arguments>>',name);
    console.log('address>>',address);

}
)('shishir');
(function (name, address){
    console.log('arguments>>',name);
    console.log('address>>',address);

}
)('shishir','pokhara');
(function (name, address){
    console.log('arguments>>',name);
    console.log('address>>',address);

}
)('shishir','pokhara','dhakal'); */

//IIFE-> immediately invoked function expression
//unnamed function call garna ko lagi use huney
//syntax;
// (unnamed function)();

//3.funvtion eith arguments
/* function shishir(name){
    console.log('argument>name>>',name);
    

}
shishir('shishir dhakal'); */

//4. function with return type
/* function shishir(){
    return 5;

}
var a= shishir();
console.log("return from function>>>",a); */
/* function shishir(){
    return 'sargam';

}
var a= shishir();
console.log("return from function>>>",a); */

//5. function with argument and retutn type
/* function shishir(surname){
    console.log("suname is>>",surname)
    return true;

}
var a= shishir('dhakal');
console.log("return type>>>",a); */

//function scope
/* var name ="shishir"
function hello(){
    var surname ="dhakal"
    console.log('hello'+name+' '+surname+'from inside function');


}
hello(); */
//console.log('hello'+name+''+surname+'from outside of function');

//closure 
//-> it is an inner function inside of another function
/*  var test="shishir"
 function welcome(){
     var hello='hi';
     function final(){
         console.log(hello+" "+test);

     }
     final();
}
welcome(); */
/* 
function welcome(name){
    function location(loc){
        //console.log("i am closer function>>>"+name+' '+loc); 
        return 'i am shishir from pokhara';
    }
    return location('pokhara');
}
var result =welcome('shishir');
console.log("result>>>",result); */
/* 
function welcome(name){
    function location(loc){
        //console.log("i am closer function>>>"+name+' '+loc); 
        return 'hi ' +name+ ' from ' +loc;
    }
    return location;
}
var result =welcome('shishir')('pokhara');
//var result =welcome(req.name)(req.loc);
console.log("result>>>",result); */

//asyncronous
/* console.log('step 1');
setTimeout(function(){
      console.log('step 2');
},5000);
console.log('step 3');
setTimeout(function(){
    console.log('step 4');
},3000);
setTimeout(function(){
    console.log('step 5');
},1000); */



//callback function
//->it is a type of function that handles asynchronous result

//story to buy a bicycle
//-> visit shop
//->cycle with  desired color not available
//->wait for 1 week for desired color
//->buy cycle
//->go for a ride

/* console.log('i want to buy a cycle');
console.log('go to shop to buy cycle');
console.log('ask for gaint with matt black');
console.log('color not available wait for a week'); */

/* function buyCycle(){
    console.log('wait for the duration');
    setTimeout(function () {
        console.log('go to shop and ask for cycle');
        console.log('cycle arrived');
        console.log('buy bicycle');
        console.log('go for the ride')  
    },6000);
}
 */
/* buyCycle(); */
/* setTimeout(function (){
  console.log('go to shop and ask for cycle');
  console.log('cycle arrived');
  console.log('buy bicycle');
  console.log('go for the ride')
},5000); */

/* console.log('go home and do regular task');
console.log('complete assignments'); */

/*  function waitCycle(cb){
    console.log('wait for the duration');
    setTimeout(function () {
        cb();  
    },6000);
} 

waitCycle(function buyCycle(){
    console.log('go to shop and ask for cycle');
        console.log('cycle arrived');
        console.log('buy bicycle');
        console.log('go for the ride');
});
console.log('go home and do regular task');
console.log('complete assignments');  */






//promise
//it is an object that holds future value from asynchronous value

//then-> it handles sucess and failure
//catch->it handles failure
//finally-> checks wheather promise is settle or not

