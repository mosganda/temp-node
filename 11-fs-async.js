const { readFile, writeFile} = require('fs');
//Here we will need to provide a callback
console.log('start');
readFile('./content/first.txt','utf8',(err,result)=>{
    if(err){
        console.log(err);
        return;
    }
   const first = result;
   readFile('./content/second.txt', 'utf-8',(err, result)=>{
       if(err){
           console.log(err);
           return;
       }
       const second = result;
       writeFile('./content/result-async.txt',
       `Hey, here is the async result: ${first}, ${second}`, (err,result)=>{
           if(err){
               console.log(err);
               return;
           }
           console.log('done with this task');
       }
       )
   })
})
console.log('starting the next one')