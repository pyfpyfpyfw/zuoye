import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from 'react-router-dom';
export default () => {
  return <div>
    <Link to={'/210812000'} >210812000 举个例子</Link>
    <br />
    <Link to={'/210812002'} >210812002 杨旭欣</Link>
    <br />
    <Link to={'/210812005'} >210812005 胡高雪</Link>
  </div>;
};
