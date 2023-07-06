import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import { ErrorBoundary } from './components/ErrorBoundary';
import MainLayout from './layouts/mainLayout/MainLayout';
import LoginPage from './pages/loginPage/LoginPage';
import NotFoundPage from './pages/notFoundPage/NotFoundPage';
import PrivateRoute from './router/PrivateRoute';
import SignUpPage from './pages/signUpPage/SignUpPage';
import { Provider } from 'react-redux';
import { store } from './app/store';
import ProblemPage from './pages/problems/ProblemPage';

const App = () => {
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
  );
}

export default App;
