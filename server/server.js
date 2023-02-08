const http = require("http")
let requestsCount = 0
 
http.createServer(function(request, response){
    requestsCount++

    switch(request.url){
        case('/students'):
            response.write('students ')
            break
        case('/cousrses'):
            response.write('cousrses ')
            break
        default:
            response.write('404 not found ')
    }
    response.write("Count:" + requestsCount)
    response.end()
}).listen(3003)