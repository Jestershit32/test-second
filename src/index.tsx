import ReactDOM from 'react-dom/client';
import './styles/index.css';
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements
} from "react-router-dom";

import { AuthPage } from './pages';

const GlobalRouts = createRoutesFromElements(
  <>
    <Route path="/" element={<AuthPage />} />
  </>
)
const BrowserRouter = createBrowserRouter(GlobalRouts)


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);


root.render(
  <RouterProvider router={BrowserRouter} />
);

