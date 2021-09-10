import MemoExample from 'pages/public/examples/memo';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/examples/memo' exact component={MemoExample} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
