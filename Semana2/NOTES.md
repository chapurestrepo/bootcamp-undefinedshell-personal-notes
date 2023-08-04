# Semana 2

## Clase 1 - JS

- `typeof` ayuda a detectar el tipo de contenido. ejemplo:
```js
typeof "Hola"
String
```

- Objetos: se define con `{}`  TODO LO QUE NO ES UN PRIMITOVO ES UN OBJETO EN JAVASCRIPT
- Para asignar variables siempre usar `Const` y si se tiene que redefinir el valor usar `let` NUNCA usar `Var`


## Clase 1 - JS

 Presentación: https://file.notion.so/f/s/6a1a2f1d-497e-474a-b5bf-a7722886c8f5/_Bootcamp__Semana_2_Clase_2_compressed.pdf?id=bf8ce477-d3b8-4e16-8b5b-370a8dc44b10&table=block&spaceId=082b0d77-7ddb-4991-b999-b81463c2246a&expirationTimestamp=1691164800000&signature=s9tDnKAXJ3hO6bpORrl3c5UzXumT40Oh-z3pSEuL6Pc&downloadName=%E2%9B%BA%EF%B8%8F+Bootcamp+%E2%80%94+Semana+2%2C+Clase+2_compressed.pdf

### Objetos y sus propiedades

- Se definen como variable, entre llaves, contiene objeto(key) y valor(value)

```js
const humano = {
    nombre: "Daniel",
    apellido: "Restrepo",
    edad: 34
    }
```

- se puede consultar una propiedad individial con la variable + la clave. e.g. `humano.nombre`

- se agregan valores al objeto con la variable + la nueva propiedad. e.g. `humano.ciudad`

```js
const humano = {
    nombre: "Daniel",
    apellido: "Restrepo",
    edad: 34
    }

humano.ciudad = "Barcelona";
humano.pais = "España";

console.log(humano);
// RESP: {nombre: 'Daniel', apellido: 'Restrepo', edad: 34, ciudad: 'Barcelona', pais: 'España'}
```

- es valido definir una clave con espacios usando comillas

```js
const humano = {
    nombre: "Daniel",
    apellido: "Restrepo",
    "nombre completo": "Daniel Felipe Restrepo",
    edad: 34
}

//Para llamarlo se usan las llaves
humano["nombre completo"]
// RESP: Daniel Felipe Restrepo
```

- Se pueden borrar propiedades del objeto. e.g. `delete humano.edad`

### Funciones

- Function Statement (sentencia de función)

```js
function walk() {
console.log("I'm walking");
}
walk()
// RESP: I'm walking
```

- Funtion expression. Aquie la variable está almacenando la función

```js
const walk = function () {
console.log("I'm walking");
}
walk()
// RESP: I'm walking
```

### Operadores lógicos

- `||` (or) retorna el primer valor verdader

```js
0 || null || "Dani" || 24
// RESP: 'Dani'
```

- `&&` (and) retorna el primer valor falso

```js
0 && null && "Dani" && 24
// RESP: 0
```

### Operadores lógicos
```js
if (age >= 18) {
    console.log("Adult")
} else if (age >= 10) {
    console.log("Young")
} else {
    console.log("Baby")
}
```

### Operadores ternarios

```js
const age = 33;

let msg = age >= 18 ? "Adult" : "Young";

msg
// RESP: Adult
```



### Condicionales y ciclos

- para hacer listas se usan los arreglos (Array) `[]`. Los arreglos en JS son Objetos

```js
const fruits = [
"Banana",
"Orange",
"Apple"
]
console.log(fruits[0])
// RESP: 'Banana'
```

- Para recorrer un arreglo se puede usar `for`

```js
for (let i = 0; i < 3; i++) {
console.log(i);
}
// RESP:
// 0
// 1
// 2
```