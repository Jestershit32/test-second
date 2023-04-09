import ReactDOM from 'react-dom/client';
import { Provider } from "react-redux"
import './styles/index.css';
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements
} from "react-router-dom";

import { AuthPage, EditPage, ProfilePage, RegistrPage } from './pages';
import { store } from './redux';

const GlobalRouts = createRoutesFromElements(
  <>
    <Route path="/login" element={<AuthPage />} />
    <Route path="/" element={<ProfilePage />} />
    <Route path="/registration" element={<RegistrPage />} />
    <Route path="/profile" element={<ProfilePage />} />
    <Route path="/profile/edit" element={<EditPage />} />
    <Route path="/404" element={<EditPage />} />
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

