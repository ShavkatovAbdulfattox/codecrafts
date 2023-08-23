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
import PostSolution from "./pages/postSolution/PostSolution";
import { Footer } from "./components/footer/Footer";
import { Fragment } from "react";
import Leaderboard from "./pages/LeaderBoard/LeaderBoard";

const App = () => {
    const router = createBrowserRouter([
        {
            path: "/",
            element: (
                <PrivateRoute>
                    <MainLayout />
                </PrivateRoute>
            ),
            children: [
                {
                    path: "/",
                    errorElement: <ErrorBoundary />,
                    element: (
                        <Fragment>
                            <MainPage />
                            <Footer />
                        </Fragment>

                    ),
                },
                {
                    path: "/problemslist",
                    errorElement: <ErrorBoundary />,
                    element: (
                        <Fragment>
                            <ProblemsListPage />
                            {/* <Footer /> */}
                        </Fragment>
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
                    path: "/problem/:query/:id",
                    errorElement: <ErrorBoundary />,
                    element: (
                        // <PrivateRoute>
                        <ProblemPage />
                        // </PrivateRoute>
                    ),
                },
                {
                    path: "/leaderboard",
                    errorElement: <ErrorBoundary />,
                    element: (
                        // <PrivateRoute>
                        <Leaderboard />
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
                {
                    path: "*",
                    element: <MainPage />,
                },
            ],
        },
        {
            path: "/",
            element: (
                <PrivateRoute>
                    <MainLayout />
                </PrivateRoute>
            ),
            children: [
                {
                    path: "/",
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
                {
                    path: "*",
                    element: <MainPage />,
                },
            ],
        },
        {
            path: "/post-solution",
            element: <PostSolution />
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
