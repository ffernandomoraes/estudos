# React.memo

### O que é?

O `React.memo` é um [Higher-Order component](https://github.com/ffernandomoraes/estudos/tree/master/react/higher-order-components).

### Para que serve?

Para evitar renderizações desnecessárias. Ele "memoriza" um componente e só renderiza-o novamente caso o mesmo tenha alguma propriedade ou estado modificado. Com isso, o react consegue minimizar o número de operações custosas de DOM que são necessárias para alterar a UI.

Mas lembre-se, o `React.memo` verifica apenas as alterações de propriedades. Se o seu componente tiver um useState, useReducer ou useContext em sua implementação, ele ainda será renderizado quando o estado ou o contexto for modificado.

### Exemplo

```js
import { memo, useCallback, useState } from 'react';

interface IChild {
  children: React.ReactNode;
  memo?: boolean;
}

function Component() {
  const [count, setCount] = useState<number>(0);
  const [title, setTitle] = useState<string>('Title memorized here');

  const handleClickUpdateCount = useCallback(() => setCount(v => v + 1), []);

  const handleClickUpdateTitle = useCallback(() => setTitle(`Title memorized here ${Math.random()}`), []);

  return (
    <>
      <TitleComponent>Title here</TitleComponent>
      <TitleComponentMemorized memo>{title}</TitleComponentMemorized>
      <ContentComponent>count: {count}</ContentComponent>
      <ContentComponentMemorized memo>count memorized: {count}</ContentComponentMemorized>
      <button onClick={handleClickUpdateCount}>update count</button>&nbsp;
      <button onClick={handleClickUpdateTitle}>update title</button>
    </>
  );
}

/*
  Repare que o componente sem o React.memo, sempre que houver qualquer modificação
  no componente pai (<Component />), o componente filho <TitleComponent /> 
  é renderizado novamente sem necessidade.
*/
function TitleComponent({ children, memo }: IChild) {
  console.log(`${memo ? '<TitleComponentMemorized />' : '<TitleComponent />'} rendered`);
  return <h1>{children}</h1>;
}

/*
  Essa renderização desnecessária não ocorre com o
  componente <TitleComponentMemorized /> pelo uso do React.memo.
*/
const TitleComponentMemorized = memo(TitleComponent);

function ContentComponent({ children, memo }: IChild) {
  console.log(`${memo ? '<ContentComponentMemorized />' : '<ContentComponent />'} rendered`);
  return <h2>{children}</h2>;
}

const ContentComponentMemorized = memo(ContentComponent);

export default Component;
```

### Referência

- [Documentação React](https://pt-br.reactjs.org/docs/react-api.html#reactmemo)
