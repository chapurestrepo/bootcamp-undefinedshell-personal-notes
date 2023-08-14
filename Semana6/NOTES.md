# Semana 6

## Clase 1 
Js en producción
- - -

- `Shim` Resuelve problemas de compatibilidad del PASADO. es un código que da compatibilidad entre diferentes navegadores

- `Polyfill` es como un Shim pero para funcionalidad del futuro

- `Ponyfill` este no permite modificar los prototipos, es una función aparte


- `Babel` transpila código. Usa polyfills. Permite usar código del futuro y da soporte para navegadores del pasado. Se puede configurar para dar soporte al navegador que tú quieras
- `Transpilar` al mismo nivel
- `Compilar` diferente nivel


### Minificación de código
- `Source maps` configuración que se debe configurar, por ejemplo, en Vite. Por defecto está en false. Según el entorno se recomienda usar una otra configuración. Hay técnicas que se utilizan para ocultar información vulnerable.




## Clase 2 
JS prácticas
- - -

Una prueba práctica de una prueba técnica

## Clase 3
Intro a React
---

- Biblioteca de Js para crear contenido a través de componentes
- React usa el `Virtual DOM` que es una representación virtual del Document Object Model (DOM). Representación del HTML en JS. El Virtual DOM ayuda a mejorar las operaciones que suelen ser pesadas y solo actualizar lo necesario.
- React hace `re-render` actualización de la representación visial de un componente 

    - **1** - cambio de estado de un compoentne
    - **2** - Al recibir nuevas props
    - 3 - Al montar un componente
    - 4 - Al actualizar el contexto

- `JSX` es la forma de escribir js de forma amigable con HTML 

### creae un proyecto de react con Vite

```terminal
npm create vite@latest my-react-app -- --template react
```

- `SPA` single page aplication. se trabaja sobre una página

- No se debería usar `class`. esto es JS asi que se debe usar `className`
- dentro de las `{}` de un compoenete de react se puede almacenar cualquier cosa que retorme un valor, por ejemplo `{2+2}`
- Un ejemplo de un componente para una card

    ```js
    function Card(props) {
        return (
            <div className="article">
                <h1>Title</h1>
                <p>text...</p>
            </div>
        )
    };

    export default Card;
    ```

- Se pueden pasar atribotos llamados props

    ```js
    function Card(props) {
        return (
            <div className="article">
                <h1>{props.title}</h1>
                <p>{props.text}</p>
            </div>
        )
        
    };

    export default Card;
    ```

- Para mejorarlo se puede hacer destructuring 

    ```js
    function Card(props) {
        const {title, text} = props;
        return (
            <div className="article">
                <h1>{title}</h1>
                <p>{text}</p>
            </div>
        )
        
    };

    export default Card;

    ```


- Y la se puede destructurar en la declaración

    ```js
    function Card({title, text}) {
        return (
            <div className="article">
                <h1>{title}</h1>
                <p>{text}</p>
            </div>
        )
        
    };

    export default Card;

    ```

    - La `prop` `children` define que lo que tenemos deltro de un componente se pinta dentro de el 

    ```js
     export const CardChildren = ({ title, children }) => (
        <div className="article">
            <h1>{title}</h1>
            <p>{children}</p>
        </div>
    );
    ```

    En HTML sería

    ```html
    <div class="article">
      <h1>{title}</h1>
      <p>
        <!-- children -->
        <div class="article">
          <h1>{title}</h1>
          <p>
            <!-- children -->
            <div class="article">
              <h1>{title}</h1>
              <p>
                <!-- children -->
                Lo que sea que le metas dentro...
                </p>
            </div>
          </p>
        </div>
      </p>
    </div>
    ```