const http = require('http');

const server = http.createServer((req,res)=>{
   if(req.url === '/'){
       res.end('This is our home page');
   }
   if(req.url === '/about'){
       res.end('This is the about page');
   }
   res.end(`
   <h1>Ooops</h1>
   <p>We can't fing that page</p>
   <a href='/'>Go to home page</a>
   `)
})
server.listen(5000);