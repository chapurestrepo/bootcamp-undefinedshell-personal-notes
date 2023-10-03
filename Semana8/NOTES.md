# Semana 8

## Clase 1

Node js

---

- Usar js de parte del servidor
[Ejemplo CLI y ejemplo crreación y lectura de archivos planos](https://github.com/glrodasz/undefined-academy/commit/a187e4d57158e8643157582b29115ad59f5c24cd#diff-cdf137fc29cd4ec74f48dc591a119e0fd58dd73295bbe8bc35c75fc170d1f093)


## Clase 2

Intro a Express

---

- Servidor con Node
    - los header ayudan a identificar el tipo de contenido que se entregará en el body
    - Se levanta con `node FILE-NAME.js`
    - Se puede agregar el flag para que se refresque solo con `node --watch FILE-NAME.js`

    ```js
    const http = require('http')

    function serverCallback(request, response){
        response.writeHead(
            200,
            {
                'Content-Type': 'application/json'
            }
        )
        response.end(
            JSON.stringify({message: "que pasa calabaza"})
        )
    }

    // Función callback que se ejecuta cuado llamamos a server
    const server = http.createServer(serverCallback)

    server.listen(
        3000,
        () => console.log('Esto se levanto en el 3000')
    )
    ```


## Express.js

- Es un framework que crea servidores muy livianos

`npm i express`

- en index.js (teniendo en cuenta que hay que poner el type: module en el package.json) 
    ```js
    import  express  from "express";

    const app = express();
    const port = 3000;

    app.get("/", (req, res) =>{
        res.send("Hola express!");
    })


    app.listen(port, () => console.log(`Servidor listo papa http://localhost:${port}`))
    ```

- Express facilita mucho las cosas, por ejemplo se pueden enviar parámetros por medio de la url. Esta es la manera para comunicarme con base de datos

    ```js
    app.get("/hello/:name", (req, res) =>{
        res.json({message: `Muy buenas ${req.params.name}!`});
    })
    ```

- Un ejemplo de endpoint que suma 2 parámetros por url (los valores por defecto son string y hay que pasarlos a Number para que sume)

    ```js
    app.get("/sum/:num1/:num2", (req, res) =>{
        res.send(`la suma de ${req.params.num1} y ${req.params.num2} es <strong>${Number(req.params.num1) + Number(req.params.num2)} </strong>`);
    })
    ```

- También se pueden enviar datos en el body, esto sirve por ejemplo para enviar datos desde un formulario
- Si en formato es tipo Json se debe usar el middleware 
- Se puede usar la [app] (https://httpie.io/) para probar esto

```js
app.use(express.json());
app.get("/fullname", (req, res) => {
    const {name, lastname} = req.body;
    res.send(`Hola ${name} ${lastname}`)
})
```

- En express todo es middleware, pero la definición de un middleware tiene un parámetro de más `next`, usado para que pase al siguiente middleware

- El middleware se declara en los parámetros del endpoint y se pueden usar los que quieras

    ```js
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
    ```