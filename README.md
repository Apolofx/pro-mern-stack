## Express

#### express.static()

#### app.use()

#### app.listen()

## Babel

JavaScript transpiler from ES6+ to ES5

#### App.jsx to App.js

```html
<script src="https://unpkg.com/react@16/umd/react.development.js"></script>
<script src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"></script>
<script src="https://unpkg.com/@babel/polyfill@7/dist/polyfill.min.js"></script>
```

## React

### this.props

### this.props.children

### Dynamic Composition

Si tenemos un array con el que creamos un componente dinamico, cada elemento de ese componente tiene que tener una Key, para que React sepa que compoenente tiene que actualizar (en lugar de actualizar toda la pagina) cada vez que hay un cambio. NO USAR EL ARRAY INDEX como componente, ya que cada vez que un elemento desaparece del render, todos los index cambian. En cambio lo mejor es que cada elemento del array tenga su propio ID.

#### JSX {JS **expression**}

#### JSX {{JS **Object**}}

#### props vs children:

Si tenemos solo datos simples, los pasamos por _props_. Si vamos a pasar un componentes, lo pasamos usando children.

### React State

El state es donde se almacena todo lo que puede provocar cambios en el DOM durante el renderizado del/los componentes. En nuestro caso, la lista de issues en la IssueTable es un candidate obligatorio a depender del state.

El state de un React.Component se inicializa (se le asigna un valor) en el `constructor()` del componente. Es decir:

```javascript
class LoQueSea extends React.Component {
  constructor() {
    super();
    this.state = {
      estado1: el_tipo_de_dato_que_sea_que_le_asignemos,
      estado2: otro_dato_y_asi,
    };
  }
}
```

A la hora de invocarlo lo llamamos con `this.state.estado1` o como se llame.
Una vez creado el objeto state dentro del constructor, ya no se pueden inicializar nuevas variables dentro del mismo. Solo se puede modificar el objeto estado existente y creado en el constructor cuando se instancia el compomente.
Para modificar el `state` se usa el metodo de `setState()` de `React.Component`. Acepta un solo argumento y es el objeto state con los nuevos valores de las variables del state.
Ejemplo:

```javascript
this.setState({ estado2: nuevo_valor });
```
