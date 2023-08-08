# Semana 5

## Clase 1
### ECMAScript 2015

- NUNCA usar `Var`. Usar `const` (Por defecto) o `let` (Cuando se quiere reasignar el valor )
- Definir valores por defecto para un parametro
```js
    function saludar(name = "Humano"){
        console.log(`hola ${name}`);
    }

    saludar()
```

- **Rest parameters** tomar el resto de parametros `...parameter`.
Toma los 2 parametros y el resto los mete en un objeto
```js
function listFruits(fav1,fav2,...fruits){
    console.log(fav1);
    console.log(fav2);
    console.log(fruits);
}

listFruits("Arandano", "Mango", "Pera", "Banano")
```

Resultado:

```
Arandano
Mango
['Pera', 'Banano']
```

- **for of:** Pinta el objeto como elementos
 
```js
function listFruits(fav1,fav2,...fruits){
    console.log(fav1);
    console.log(fav2);
    for (let fruit of fruits){
        console.log(fruit)
    }
}

listFruits("Arandano", "Mango", "Pera", "Banano")
```
Resultado:

```
Arandano
Mango
Pera
Banano
```
---
```js
const fruits=["Arandano", "Mango", "Pera", "Banano"]

const [primero, ...elResto] = fruits;

console.log(primero);
console.log(elResto);
```

Resultado:

```
Arandano
['Mango', 'Pera', 'Banano']
```
- **Express operator:** coge un arreglo y transformarlo en parametros separados por comas

```js
const fruits=["Arandano", "Mango", "Pera", "Banano"]

const [primero, ...elResto] = fruits;

function listFruits(fruta1, fruta2){
    console.log(fruta1);
    console.log(fruta2);
}

console.log(elResto);
listFruits(...elResto);
```
Resultado:

```
['Mango', 'Pera', 'Banano']
'Mango'
'Pera'
```

- Si quiero mezclar arrays l oque debo hacer es usar la expresión de express

```js
const fruits=["Arandano", "Mango", "Pera", "Banano"]

const [primero, ...elResto] = fruits

const verduras = ['Cebolla', 'Calabacín']

const frutasYVerduraa = [...elResto , ...verduras]

frutasYVerduraa
```
```
['Mango', 'Pera', 'Banano', 'Cebolla', 'Calabacín']
```

-**Template literals:** Usado para concatenar

```js
const nombre = "Daniel"

console.log("Hola " + nombre)

//es igual a 
console.log(`Hola ${nombre}`)


```

- **Arrow functions: ** Nueva forma de hacer funciones que siempre y cuando no tengan la necesidad de usar el `this`

```js
const nombre = "Daniel"

function diHola(name){
    console.log(`Hola ${name}`)
}

diHola(nombre)

//es igual a 
const diHola = (name) => {
    console.log(`Hola ${name}`)
}

```

- **New Map():** El map a diferencia de un objeto nos permite establecer cosas. Se usa cuando no se sabe cuantos elementos van a ir y los vas metiendo uno a uno

```js
const numeros = new Map()

numeros.set("Uno" , 1)
numeros.set("Dos" , 2)


numeros.get("Uno")
numeros.get("Dos")


```


- **New Set():** no hay que pasarle keys, directamente le metes el valor. Lo interesante es que no permite duplicados.

```js
const numeros = new Set()

numeros.add(1)
numeros.add(2)
numeros.add(2)

numeros

```

Respuesta

```
{1, 2}
```

- - **EJEMPLO PRACTICO:** como eliminar duplicados de un array:
Tip, para pasar de set a aarray se usa el express operator


```js
const todosLosNumeros = [1,2,3,4,4,4,3,2,1,5,6]

new Set(todosLosNumeros)
//resp: Set(6) {1, 2, 3, 4, 5, …}

//Para convertirlo en array
const numerosUnicos = [...new Set(todosLosNumeros)]

numerosUnicos
//resp: [1, 2, 3, 4, 5, 6]

```

-**Clases:** formas de crear propiedades y atributos propios de la clase. Ordena el código mejot y es herencia prototipada

```js
//Se pone la primera letra en mayúscula cuando es una clase
class Perro{

    constructor(nombre = "Lukas"){
        this.nombre = nombre
    }

//propiedad solo del perro
    ladra(){
        console.log(`${this.nombre} guau, guau!`)
    }

}

const kaicer = new Perro("Kaicer")
kaicer.ladra()

```


### ES 2016+

- no hay cambios 

### ES 2017+

- **Clases estáticas:** sirven para definir "Utilidades" para la clase, no está asociado a cada instancia. Ayuda a mejorar la legibilidad y el rendimiento.

```js
class Product {
    constructor(name, price, quantity){
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }

    value(){
        return this.price * this.quantity
    }

    static totalValue(products){
        let total = 0;

        for(const product of products){
            total = total + product.value();
        }

        return `El total es ${total}`

    }
}

const product1 = new Product("Bike", 100, 1)
product1.value()
//resp: 100 

const product2 = new Product("Moto", 800, 2)
product2.value()
// resp: 1600

const inventory = [product1, product2]

Product.totalValue(inventory)
// resp: El total es 1700
```

- **String padding:** para poner numeros o caracteres de relleno

```js
"5".padStart(3, "0");
// resp: 005

"5".padEnd(3, "X");
// resp: 5XX

```

- **flat & flatMap:** aplanar, ayuda a unir arrays

```js
const fruits=["Arandano", "Mango", "Pera", "Banano"]

const fruitsAndOneOnion = ["Cebolla", fruits]
fruitsAndOneOnion
// resp: ['Cebolla', ["Arandano", "Mango", "Pera", "Banano"]]

fruitsAndOneOnion.flat();
// resp: ['Cebolla', 'Arandano', 'Mango', 'Pera', 'Banano']

```

 - **Nullish coalescing operator:** Reemplasa la condición `"||"` que valida False, undefined y null. Se usa cuando solo quiero considerar undefined o null

```js
let human = 0;

const specie = human || "Alien"
specie
//resp: "Alien"


const specie = human ?? "Alien"
specie
//resp: "0"

```

## ES 2021+

- **String prototype replaceAll:** reemplaza cadenas de texto sin necesidad de RegExp (Expresiones regulares)

```js
"Mi coche es verde".replaceAll("verde","Azul")
//resp: Mi coche es Azul
```

- **Numeric separators:** Permite separar en el codigo los numeros con `_` para leerlos mejor sin afectar el numer

```js
10000000
// es igual que 
10_000_000

```

## Clase 2 Asincronismo

- `setTimeot` Función para que otra se ejecute desps de un tiempo determinado
- **Callback:** es una función que se va a ejecutar en el futuro

```js
function cocinar(ingrediente, callback, tiempo){
    setTimeout(function(){ callback(ingrediente)}, time)
}

cook("arroz", console.log, 10000)
//RESP desps de 10s imprime "arroz"

cook("huevo", console.log, 2000)
//RESP desps de 2s imprime "huevo"
```

- el **infierno de los callbacks** es algo con lo que hay que tener cuidado porque un callback puede ser otra función para garantizar tener 



```js
function cocinar(ingrediente, callback, tiempo){
    setTimeout(function(){ callback(ingrediente)}, time)
}

cook("arroz",
function(ingrediente){
    console.log(`Ya tengo el ${ingrediente}`)
    //RESP desps de 10s imprime "Ya tengo el arroz"

    cook("huevo", console.log, 2000)
    //Cuandose entrega el arroz empizan los 2 seg para pintar el hevo
    //RESP desps de 2s imprime "huevo"
},
10000)
```

### Promesas
Con la palabra `new Promise()` se retorna una promesa
Ya no se usa el callback

```js
// Con callback
function calculandoCuadrado(numero, callback){
const result = numero ** 2;

setTimeout(function(){
    callback(result);
}, 2000)

}

calculandoCuadrado(2, console.log);
// RESP: devuelve en consola 4 desps de 2 segundos

calculandoCuadrado(2, function(result){
    calculandoCuadrado(result, function(result){
        calculandoCuadrado(result, console.log)
        //RESP: devuelve 256 desps de los segundos que pasen pasandoresultado de calback en callback
    });
})

// Con PROMESAS
function calculandoCuadrado(numero){
    return new Promise(
        function(resolve){
            const result = numero ** 2;
            
            setTimeout(function(){
                //se reempla
                resolve(result);
            }, 2000)
        }
    )
}

calculandoCuadrado(2).then(console.log)
// RESP: ddevuelve 4 desps de 2s


function calcular(result){
    return calculandoCuadrado(result, console.log)
}

calculandoCuadrado(2).then(calcular).then(calcular).then(console.log)
 
```

- Las promesas son muy comunes cuando se hacen llamados a APIs haciendo fetch
- `fetch` es una promesa

```js
//llana la API 
fetch('https://dog.ceo/api/breeds/list/all')
// caundo lo tenga los devulve transforma en formato JSON
.then(function(data) {
    return data.json()
})
// Cuando lo tenga los pinta en consola
.then(function(jsonData){
    console.log(jsonData)
})
```

Hay una mejor forma de trabajar con promesas
## Async / Await 
- funciona con promesas 

```js
async function main(){ 
    // Al poner el await resuelve la promesa y se la asigna a result sin necesidad del .then
    const result = await calculandoCuadrado(2)
    console.log(result)
    // RESP: 4 desps de 2s

    const result2 = await calculandoCuadrado(result)
    const result3 = await calculandoCuadrado(result2)
    console.log(result3)
}

main()

```

## Clase 2 Asoncronismo