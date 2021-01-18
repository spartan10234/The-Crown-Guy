const express = require('express') 
const PORT = process.env.PORT || 3000;
const app = express() 

// use the express-static middleware
app.use(express.static("Public"))

app.get('/', function(request, response){
    res.send("<h1>Hello World!</h1>")
   // response.sendFile(__dirname +'/Public/index.php');
});

app.listen(PORT, () => {
    console.log(`App up at port ${PORT}`);
});

/*const app = require("express")();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res)=> {
    res.sendFile(path.join(__dirname+"/Public/index.html")); //send("Hello World");
});

app.listen(PORT, () => {
    console.log(`App up at port ${PORT}`);
});
*/