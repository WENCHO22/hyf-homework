const express = require("express");
const app = express();
app.use(express.urlencoded({ extended: true }))

app.get("/", async (req, res) => res.send("nodejs week3 homework"));


app.get("/calculator/:operation", (req, res) => {
    const operation = req.params.operation
    let values = Object.values(req.query).flat().map(n => Number(n));
    if (values.every(item => typeof item === "number")) {
        let result = 0;
        if (operation === "add") {
            result = values.reduce((a, b) => a + b)
        } else if (operation === "subtract") {
            result = values.reduce((a, b) => a - b)
        } else if (operation === "multiply") {
           result = values.reduce((a, b) => a * b)
        } else if (operation === "division") {
            result = values.reduce((a, b) => a / b)
        }
        res.send(`${result}`)
    } else {
        res.status(400).send({ error: "All values must be numbers" })
    }
});


app.post("/calculator/:operation", async (req, res) => {
    const operation = req.params.operation
    let values = Object.values(req.body).flat().map(n => Number(n));
    console.log(values)
    if (values.every(item => typeof item === "number")) {
        if(operation === "add"){
        var result = values.reduce((a, b) => a + b)
        } else if(operation ==="subtract"){
         var result = values.reduce((a, b) => a - b)   
        } else if(operation === "multiply"){
            var result = values.reduce((a, b) => a * b)
        } else  if( operation === "division"){
            var result = values.reduce((a, b) => a / b)
        }
        res.send(`${result}`)
    } else {
        res.status(400).send({ error: "All values must be numbers" })
    }
});

app.listen(3000, () => console.log(`Calculator:listening on port 3000`));