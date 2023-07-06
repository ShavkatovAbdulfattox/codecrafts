/** @format */

import { Fragment } from "react";
import { useRouteError } from "react-router-dom";

export const ErrorBoundary = () => {
    const err = useRouteError();
    const errorStyle = { color: "red" };

    return (
        <Fragment>
            <h2 style={errorStyle}>{err.message}</h2>
            <div style={errorStyle}>{err.stack}</div>
        </Fragment>
    );
};
