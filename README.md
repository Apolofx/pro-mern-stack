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

### Inicializando el state

Lo mas probable es que cuando la aplicacion se cargue, y se monten sus componentes, en todo ese proceso de inicializacion y carga, haya API's haciendo peticiones a servidores externos para traer informacion asyncronamente.
En nuestro ejemplo, ese seria el caso de las issues, las cuales van a tener que ser traidas mediante ajax desde la base de datos hasta la nuestra react app corriendo en el navegador.

**¿En que momento/lugar inicializo el estado con `this.setState` si lo hago asyncronamente?**
No las hacemos en el `constructor()` porque llamar a `this.setState` antes de que el componente este listo para ser renderizado puede traernos problemas. Y si la peticion Ajax vuelve antes del renderizado, estamo al horno.
Para esto, es que existen los llamados _lifecycle methods_, donde ciertas funciones deben ser ejecutadas dependiendo la etapa o los cambios de estado del componente.

## Lifecycle Methods

- `constructor()`
- `render()`
- `componentDidMount()`. Se llama a este metodo ni bien el componente se inserta en el DOM. Un `setState()` se puede llamar aca adentro.
- `componentDidUpdate()`. Tambien se puede llamar a `setState()` aca. El metodo es llamado ni bien ocurre una actualizacion pero no es llamado en el primer `render()`.
- `componentWillUnmount()`.
- `shouldComponentUpdate()`.

Entonces, el `this.setState` lo vamos a llamar en `componentDidMount()`.

```javascript
class IssueTable extends React.Component {
  constructor() {
    super();
    this.state = { issues: [] };
  }
  loadData() {
    //API call to fetch issues from server;
    this.setState({issues: {data traida del fetch}})
  }
  componentDidMount() {
    this.loadData();
  }
  render() {...}
```

## Compartiendo State entre siblings

En React se puede pasar `state` como props de padre a hijo y de esa manera ser compartido verticalmente, pero no se puede compartirlo horizontalmente, es decir, entre componentes hermanos. Por lo cual lo que vamos a hacer es meter todos los componentes que tienen que compartir estado, en un nivel debajo de un componente padre que sea el constructor de dicho `state`. Si algun componente necesita usar, modificar, o actualizar este estado, se lo pasamos por props como `propiedad={this.state.propiedad}`.

## Compartiendo Metodos entre padre/hijo

A su vez, podemos tener un componente padre con muchos hijos, y pasar los metodos deseados como props a sus hijos. Esto es muy practico, pero hay que tener en cuenta que si los componentes hijos son componentes _clase_, vamos a tener que darle un tratamiento especial al metodo en su creacion, ya que sino vamos a tener problemas con la referenciacion the **this**.
Para esto, podriamos resolverlo bindeando this en cada componente clase que vaya a usar el metodo por props. Pero es mas practico bindearlo en la creacion original del metodo en el componente padre.
Entonces en el constructor de la clase padre, lo hacemos de la siguiente manera:

```javascript
class clasePadre extends Component {
  constructor(){
    super();
    this.metodoBindeado = this.metodoBindeado.bind(this)
  }

  metodoBindeado() {
    {...}
  }
}
```
