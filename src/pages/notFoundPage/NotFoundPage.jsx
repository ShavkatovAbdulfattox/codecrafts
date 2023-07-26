/** @format */

import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./notFoundPage.scss";

const NotFoundPage = () => {
    const navigate = useNavigate();

    // useEffect(() => {
    //     setTimeout(() => {
    //         navigate("/");
    //     }, 2000);
    // }, []);

    return (
        <div className="not-found-page">
            <div>
                <h1>Sahifa topilmadi</h1>
                <h2>
                    <Link to="/">Bosh sahifaga qaytish</Link>
                    {/* <Loader
                        show={true}
                        style={{ fontSize: "40px", marginLeft: "20px" }}
                    /> */}
                </h2>
            </div>
        </div>
    );
};

export default NotFoundPage;
