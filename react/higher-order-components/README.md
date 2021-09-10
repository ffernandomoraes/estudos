# Higher-Order Components (HOC)

### O que é?

É uma função que recebe um componente e retorna um novo componente.

### Para que serve?

É interessante para isolar lógicas de componentes em uma função caso você queira reaproveitá-las em outros componentes ou simplesmente isolar em outro lugar para deixar o componente puro.

### Exemplos

`React.memo` do react, `withRouter` do react-router-dom, `connect` do redux, `createFragmentContainer` do Relay...

```js
import React from 'react';

/*
  Neste caso o React.memo() é um HOC.
*/
const Componente = React.memo(() => {
  return <>Lorem Ipsom dolor a met</>;
});

export default Componente;
```

### Referências

- [Documentação React](https://pt-br.reactjs.org/docs/higher-order-components.html)
- [Vídeo do canal Washington Developer](https://www.youtube.com/watch?v=uY8t-isw5nY&ab_channel=WashingtonDeveloper)
