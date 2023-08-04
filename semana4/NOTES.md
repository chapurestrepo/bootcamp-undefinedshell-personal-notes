## Semana 4

#### Maps, Filters, reduce
- **Map:** devulelve la misma cantidad de elementos, pasandolos por una transformación.
- **Filter:** devielve una lista que cumpla las condiciones de la funcionalidad que le pasemos
- **Reduce:** Devuelve casi cualquier cosa pero su función principal es reducir la lista por ejemplo una sonatoria.

#### Lodash
biblioteca de JS 

- Colecciones son listas de objetos
- Se usa normalmente por las colecciones porque JS ya tiene muchas cosas fáciles de usar
- Se importa con "_" para usarlo mas fácil `Import _ from "lodash"`
- La idea es usar un lenguaje coherente en todo el proyecto, que sea consistente

## Trabajando con las collecciones
- Usando Lodash
- - `const nameConst = lodashImportName.groupby(DATA, KEY_AGRUPADOR);`

```js
const entriesGrouppedByAuthor = _.groupBy(entries, "autor") 
console.log(entriesGrouppedByAuthor)

```

Resp:

```
{
  'Autor1': [
    {
      titulo: 'Introducción a HTML5',
      descripcion: '...',
      fecha: '2022-01-15',
      autor: 'Juan Pérez',
      tags: [Array]
    },
    {
        ...
    }
  ],
  'Autor 2': [
    {
    ...
  }
  ]
}
```

- Para devolver solo los elementos del autor1 se puede uasr despues de la agrupación:
```js
console.log(entriesGrouppedByAuthor["Autor1"])
```

- Para usar filtro se pasa la colección, y si el filtro que queremos está en un array podemos crear una función que evalue si existe o no mi condición filtradora
```js
//2 - función que evalua si en el objeto existe el elemento CSS3
function filterbyCssTag(entry){
  return _.includes(entry.tags, "CSS3");
}

//1 - El filtro evalua uno por uno los elementos de la colección
const entriesFilterByCssTag = _.filter(entries, filterbyCssTag);

console.log(entriesFilterByCssTag)
```

- Ordenar es una de las cosas mas dificiles en JS. Lodash ayuda con su función groupgy

```js
// puedes recibir varios parametros de por que ordenar, en este casi si la fecha es la misma ordena por título ["fecha", "titulo"]

// y luego se le dice como se ordena, en este caso las fechas descendeinte y si hay fechas iguales los titulos ascendentes 

const entriesOrderedByDate = _.orderBy(entries, ["fecha", "titulo"], ["desc", "asc"])
```
## Trabajando con los objetos de las colecciones

- se pueden fusionar 2 objetos. Si tienen claves iguales quedan las del 2do objeto. tiene sentido por ejemplo para mezclar objetos quese complemetan.
- `Pick` saca los atributos que le pido
```js
 const pickedTitleTagsEntry = _.pick(entries[0], ["titulo", "tags"])
```
RESP:
```
{
    titulo: '...',
    tags: [Array]
},
{
    titulo: '...',
    tags: [Array]
}...
```


- `Omit` saca atributos que le paso, es como el pick pero 




---
### Fechas

- Son jodidas las fechas
- timestamp son los segundos desde 1970
- Segun algunos calendarios la semana empieza el domingo 
- Se empieza el 0
- Para sumar fechas hay que pasarlo a timestamp 
- cont EN_MAYUSCULA se usa cuando es una convención un valor que no cambiará en el tiempo


**Days.js**
- Moment ya no se usa porque no la actualizan
- tiene treeshaking, usando vite por ejemplo
- 