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
      <p>Open console...</p>
      <TitleComponent>Title here</TitleComponent>
      <TitleComponentMemorized memo>{title}</TitleComponentMemorized>
      <ContentComponent>count: {count}</ContentComponent>
      <ContentComponentMemorized memo>count memorized: {count}</ContentComponentMemorized>
      <button onClick={handleClickUpdateCount}>update count</button>&nbsp;
      <button onClick={handleClickUpdateTitle}>update title</button>
    </>
  );
}

function TitleComponent({ children, memo }: IChild) {
  console.log(`${memo ? '<TitleComponentMemorized />' : '<TitleComponent />'} rendered`);
  return <h1>{children}</h1>;
}

const TitleComponentMemorized = memo(TitleComponent);

function ContentComponent({ children, memo }: IChild) {
  console.log(`${memo ? '<ContentComponentMemorized />' : '<ContentComponent />'} rendered`);
  return <h2>{children}</h2>;
}

const ContentComponentMemorized = memo(ContentComponent);

export default Component;
