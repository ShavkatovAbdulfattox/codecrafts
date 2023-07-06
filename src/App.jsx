import { Provider } from 'react-redux';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import { store } from './app/store';
import { ErrorBoundary } from './components/ErrorBoundary';
import MainLayout from './layouts/mainLayout/MainLayout';
import DashboardPage from './pages/dashboard/DashboardPage';
import LoginPage from './pages/loginPage/LoginPage';
import NotFoundPage from './pages/notFoundPage/NotFoundPage';
import SignUpPage from './pages/signUpPage/SignUpPage';
import PrivateRoute from './router/PrivateRoute';

import { loader } from "@monaco-editor/react";
import * as monaco from 'monaco-editor';
import editorWorker from 'monaco-editor/esm/vs/editor/editor.worker?worker';
import jsonWorker from 'monaco-editor/esm/vs/language/json/json.worker?worker';
import ProblemPage from './pages/problems/ProblemPage';

function App() {

  self.MonacoEnvironment = {
    getWorker(_, label) {
      if (label === 'json') {
        return new jsonWorker();
      }
      return new editorWorker();
    },
  };
  loader.config({ 'vs/nls': { availableLanguages: { '*': "zh-cn" } }, monaco });

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        // <PrivateRoute>
        <MainLayout />
        // </PrivateRoute>
      ),
      children: [
        {
          path: "/",
          errorElement: <ErrorBoundary />,
          element: (
            // <PrivateRoute>
            <h1>Main Page</h1>
            // </PrivateRoute>
          ),
        },
        {
          path: "/problem",
          errorElement: <ErrorBoundary />,
          element: (
            // <PrivateRoute>
            <ProblemPage />
            // </PrivateRoute>
          ),
        },
      ],
    },
    {
      path: "/m",
      errorElement: <ErrorBoundary />,
      element: (
        <PrivateRoute>
          <h1>MMMM</h1>
        </PrivateRoute>
      ),
    },
    {
      path: "/login",
      element: <LoginPage />,
    },
    {
      path: "/signup",
      element: <SignUpPage />,
    },
    {
      path: "*",
      element: <NotFoundPage />,
    },
  ]);

  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  )
}

export default App
