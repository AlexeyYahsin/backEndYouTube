const http = require("http")
const fs = require("fs")
// let requestsCount = 0
 
// http.createServer(function(request, response){
//     requestsCount++;
    
//     if (request.url === "/favicon.ico") {
//       response.writeHead(200, { "Content-Type": "image/x-icon" });
//       requestsCount - 1;
//       response.end();
//       return;
//     }
//     switch (request.url) {
//       case "/students":
//         response.write("students ");
//         break;
//       case "/cousrses":
//         response.write("cousrses ");
//         break;
//       default:
//         response.write("404 not found ");
//         break;
//     }
//     response.write("Count:" + requestsCount);
//     response.end();
// }).listen(3003)


const delay = (ms) => {
  return new Promise((resolve, reject) => {
    setTimeout(()=> {
      resolve()
    }, ms)
  })
}
const readFile = (path) => {
  return new Promise((resolve, reject) => {
   fs.readFile(path, (err, data)=> {
      if(err) reject(err)
      else resolve(data)
    })
  })
}

http.createServer(async (request, response) => {
  switch(request.url){
    case('/home'):{
      const data = await readFile('pages/home.html')
      response.write(data)
      response.end()
      break
    }
    case('/about'): {
      await delay(3000)
      response.write('about page')
      response.end()
      break
    }
    default:
      response.write('404 not found')
      response.end()
     
  }
}).listen(3003)