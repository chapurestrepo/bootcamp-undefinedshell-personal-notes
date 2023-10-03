import  express  from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) =>{
    res.json({message: "Hola express!"});
})

app.get("/hello/:name", (req, res) =>{
    res.json({message: `Muy buenas ${req.params.name}!`});
})

function numberMiddleware(req, res, next){
    const num1 = req.params.num1;
    const num2 = req.params.num2;

    if(num1 === "0" || num2 === "0"){
        res.send(`En 0 no ome`)
    }

    next()
}

app.get("/sum/:num1/:num2", numberMiddleware, (req, res) =>{
    res.send(`la suma de ${req.params.num1} y ${req.params.num2} es <strong>${Number(req.params.num1) + Number(req.params.num2)} </strong>`);
})


app.use(express.json());
app.get("/fullname", (req, res) => {
    const {name, lastname} = req.body;
    res.send(`Hola ${name} ${lastname}`)
})


app.listen(port, () => console.log(`Servidor listo papa http://localhost:${port}`))