import ReactDOM from 'react-dom/client';
import { Provider } from "react-redux"
import './styles/index.css';
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements
} from "react-router-dom";

import { AuthPage, ProfilePage, RegistrPage } from './pages';
import { store } from './redux';

const GlobalRouts = createRoutesFromElements(
  <>
    <Route path="/login" element={<AuthPage />} />
    <Route path="/registration" element={<RegistrPage />} />
    <Route path="/profile" element={<ProfilePage />} />
  </>
)
const BrowserRouter = createBrowserRouter(GlobalRouts)


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);


root.render(
  <Provider store={store}>
    <RouterProvider router={BrowserRouter} />
  </Provider>
);

