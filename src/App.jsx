import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import { ErrorBoundary } from "./components/ErrorBoundary";
import MainLayout from "./layouts/mainLayout/MainLayout";
import NotFoundPage from "./pages/notFoundPage/NotFoundPage";
import PrivateRoute from "./router/PrivateRoute";
import SignUpPage from "./pages/signUpPage/SignUpPage";
import { Provider } from "react-redux";
import { store } from "./app/store";
import ProblemPage from "./pages/problemPage/ProblemPage";
import MainPage from "./pages/mainPage/MainPage";
import ProblemsListPage from "./pages/problemListPage/ProblemsListPage";
import SignIn from "./components/SignIn/SignIn";
import { ConfigProvider, theme } from "antd";
import "antd/dist/reset.css";
import ProfileSettings from "./pages/ProfileSettings/ProfileSettings";
import Profile from "./pages/Profile/Profile";

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
          index: true,
          errorElement: <ErrorBoundary />,
          element: (
            // <PrivateRoute>
            <MainPage />
            // </PrivateRoute>
          ),
        },
        {
          path: "/problemslist",
          errorElement: <ErrorBoundary />,
          element: (
            // <PrivateRoute>
            <ProblemsListPage />
            // </PrivateRoute>
          ),
        },
        {
          path: "/problem/:id",
          errorElement: <ErrorBoundary />,
          element: (
            // <PrivateRoute>
            <ProblemPage />
            // </PrivateRoute>
          ),
    
        },
        {
          path: "/profile",
          element: <Profile />,
        },
        {
          path: "/profileSettings",
          element: <ProfileSettings />,
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
      element: <SignIn />,
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
      <ConfigProvider
        theme={{
          token: {
            // any theme overirdes
            colorPrimary: "#7f00ff",
          },
          // this line sets it to dark mode
          algorithm: theme.darkAlgorithm,
        }}
      >
        <RouterProvider router={router} />
      </ConfigProvider>
    </Provider>
  );
};

export default App;
