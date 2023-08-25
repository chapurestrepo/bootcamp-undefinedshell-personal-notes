# Semana 6

## Clase 1

HTML en React

---

- En react todas las etiquetas se tienen que cerrar `<img> | <input> ...`
- La carpeta `public` se va servir completa. va directamente a root se carga con ruta relativa`/folder.file.svg`
- en el mismo archivo se pueden crear componentes dentro del componente para ir ordenando

- Express operato exparce las props en el map de un componente

  ```js
  {articles.map((article) => (<Card {...article}>))}
  ```

## Clase 2
Componentes en react
---

- tags es un arreglo, y se puede mapear como componente. se usa el `?` por si no llega el array

  ```js
  {
    tags?.map((tag) => <Tag>{tag}</Tag>);
  }
  ```

- Props dinamicas para modificar los estilos cada x elementos

  - Si existe la propiedad pinta clase, sino no

  ```js

  // DONDE SE LLAMA EL COMPONENTE

  {articles.map((article) => {(

      // Evalua en cada elemento si esto es verdad para darle a isProp true o false y cada 4 elementos agregar la clase quese defina en el componente
      cosnt isProp = (index + 1) % 4 === 0;

      return(
          <Card {...article}>
          )
      )
  })}

  // EN EL COMPONENTE
  const card (...) {
      ...
  return(
      <content className={`card ${ isProp ? "class" : ""}`}>
      ...
      )
  }
  ```

  - Esto mismo se puede hacer con la dependencia de classNames

  ```js
  import classnames from "classnames";

  ...

  <content className={"card", {
      "clase-a-poner": isProp,
  } }>

  ```

- los componentes botón siempre deben de tener una pop onclick
- para cambiar el tipo de botón tambien usamos classnames y una prop de `type`
- Hace que la clase tipo sea compuesta por ejemplo `button-${type}` donde type es primary entonces el resiltado es `button-primary`

    ```js
    <button className={classnames("button", {
        [`button-${type}`]: type
    })}>
    ```

- Estado para que un listado de filtros cambie haciendo click en el filtro

    ```js

    //EN EL COMPONENTE
    const Filter = ({children , href = "#", onClick}) => {
        return (
            <a className="..." onClick={(event)=>{
                event.preventDefault();
                onClick(children)
            }}></a>
        )
    }

    // DONDE ESTOY USANDO EL COMPONENTE
    const Tagfilters = ({filters = []}) => {

        const fistFilter = filters[0];
        const [activeFilter, setActiveFilter] = useState(fistFilter.name)

        return(
            ....
            {filters.map(({name, href}) => (<Filter href={href} isActive={activeFilter === name} onClick={setActiveFilter}>))}
        )

    }
    ```

## Clase 3
introducción a Next
---

- La forma mas rápida de instalar next es directamente con el comando de next
- 

```js
npx create-next-app@latest
```

- En next en la carpeta pages cada componente que se crea y se exporta por defecto es una página

```js
const About =() => {
    return(
        <div>About</div>
    )
}

export default About;
```

- en next se pueden nombrar los archivos como js, no necesita que sea JSX
- se puede usar la ruta `@/route/file` para localizar ficheros que esten en el root proyecto 

## Clase 3
Route API en Next.js
---

- Así como en pages defino las rutas del project en `api` ejecuta código desde el lado del servidor
- es un lugar para ejecutar variables de entorno seguras
- es el lugar perfecto para consumir los datos de una api
```js
export default async function handler(req, res){
    const posts = await fetch('https://jsonplaceholder.typicode.com/posts').then((data) => data.json());
    res.status(200).json(posts);
}
```
- Tambien es el lugar para trabajar los datos y adaptarlos a lo que necesita recibir el frontend por ejemplo remapear o meter otros campos
```js
export default async function handler(req, res) {
  const posts = await fetch("https://jsonplaceholder.typicode.com/posts").then(
    (data) => data.json()
  );

  const mappingPosts = posts.map((post) => ({
    cover: "url.jpg",
    authorId: post.userId,
    id: post.id,
    title: post.title,
    body: post.body,
  }));

  res.status(200).json(mappingPosts);
}

```


- Para pintarlo en el componente tenemos que hacer uso de los estados y un use efect que se actualice el estado

```js
const [articles, setArticles] = useState([]);

  useEffect(() => {
    async function fetchArticles() {
      const articlesPosts = await fetch('api/posts').then((data) => data.json());

      setArticles(articlesPosts)
    }

    fetchArticles();
  }, []);

  const articlesMap = articles.map((post) => (
    <div>
      <h2>{post.title}</h2>
      ...
    </div>
  ));
```