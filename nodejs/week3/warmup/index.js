const express = require("express");
const app = express();
app.use(express.urlencoded({extended: true}))

app.get("/", async(req, res) => res.send("nodejs week3 homework"));


app.get("/add", (req, res) =>{
    let values = Object.values(req.query)
    values = values.flat()
    values = values.map(n=> Number(n))
    let sum = values.reduce((a,b) => a + b)
    res.send(`${sum}`)
});


app.get("/substract", (req, res) =>{
    let values = Object.values(req.query)
    values = values.flat()
    values = values.map(n=> Number(n))

    let subst = values.reduce((a,b) => a - b)
    res.send(`${subst}`)
});

app.get("/multiply", (req, res) =>{
    let values = Object.values(req.query)
    values = values.flat()
    values = values.map(n=> Number(n))
    let mult = values.reduce((a,b) => a * b)
    res.send(`${mult}`)
});

app.get("/division", (req, res) =>{
    let values = Object.values(req.query)
    values = values.flat()
    values = values.map(n=> Number(n))
    let div = values.reduce((a,b) => a / b)
    res.send(`${div}`)
});


/*----------------------------------------------------------------*/
app.post("/add", async (req, res) =>{
    let values = Object.values(req.body)
    values = values.flat()
    values = values.map(n=> Number(n))
    let sum = values.reduce((a,b) => a + b)
    res.send(`${sum}`)
})

app.post("/substract", (req, res) =>{
    let values = Object.values(req.body)
    values = values.flat()
    values = values.map(n=> Number(n))
    let subst = values.reduce((a,b) => a - b)
    res.send(`${subst}`)
});

app.post("/multiply", (req, res) =>{
    let values = Object.values(req.body)
    values = values.flat()
    values = values.map(n=> Number(n))
    let mult = values.reduce((a,b) => a * b)
    res.send(`${mult}`)
});

app.post("/division", (req, res) =>{
    let values = Object.values(req.body)
    values = values.flat()
    values = values.map(n=> Number(n))
    let div = values.reduce((a,b) => a / b)
    res.send(`${div}`)
});


app.listen(3000, () => console.log(`Calculator:listening on port 3000`));
