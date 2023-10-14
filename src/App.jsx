import { Provider } from "react-redux";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from "react-router-dom";

import Greeting from "./Greeting";
import store from "./store";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" exact element={<Greeting />} />
    </Route>
  )
);

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
