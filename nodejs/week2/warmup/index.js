const express = require("express");
const app = express();

app.get("/", (req, res) => res.send("nodejs week2 homework"));
app.get("/numbers/add", (req, res)=>{
    console.log(req.query)
    const firstNumber = parseFloat(req.query.first);
    const secondNumber = parseFloat(req.query.second);
    let sum  = firstNumber + secondNumber;
    sum || sum === 0 ? res.send(`${sum}`) : res.status(404).send("Inputs must be numbers")
})
app.get("/numbers/multiply/:first/:second", (req, res) => {
    const firstNumber = parseFloat(req.params.first);
    const secondNumber = parseFloat(req.params.second);
    console.log(secondNumber);
    let result = firstNumber * secondNumber;
    console.log(result);
    result || result ===0 ? res.send(`${result}`) : res.status(404).send("Inputs must be numbers")
})
app.listen(3000, () => console.log(`Calculator:listening on port 3000`));
