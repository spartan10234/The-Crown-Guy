const express = require('express') 
const PORT = process.env.PORT || 3000;
const app = express() 

app.get('/', function(request, response){
    response.sendFile(__dirname +'/Public/index.php');
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