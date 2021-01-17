const app = require("express")();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res)=> {
    res.sendFile(path.join(__dirname, 'Public', 'index.html'));//send("Hello World");
});

app.listen(PORT, () => {
    console.log(`App up at port ${PORT}`);
});