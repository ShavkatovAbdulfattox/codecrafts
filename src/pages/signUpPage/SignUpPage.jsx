/** @format */

import { Button, Form, Input, message } from "antd";
import { useMemo } from "react";
import CustomInput from "../../components/CustomInput";

import "./signUpPage.scss";
import { useDispatch } from "react-redux";
import { logIn } from "../../app/features/user/userSlice";
import { useNavigate } from 'react-router-dom';

const SignUpPage = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const onFinish = () => {
        dispatch(logIn({
            "id": 5,
            "name": "A",
            "email": "a@gmail.com",
            "joinTime": [
                2023,
                7,
                6
            ],
            "picture": null,
            "roleEntities": [
                {
                    "id": 1,
                    "role": "USER"
                }
            ],
            "token": "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhQGdtYWlsLmNvbSIsImlhdCI6MTY4ODYyODI0NiwiZXhwIjoxNjg4NzE0NjQ2fQ.pcnGB4QjexzrjqHA4MVnOYbBtb_KVUbIvp-jdtdjNRk"
        }))
        navigate("/m")
    };

    const onFinishFailed = (errorInfo) => {
        message.error(errorInfo);
    };

    const formConfiguration = useMemo(
        () => ({
            name: "basic",
            autoComplete: "off",
            labelCol: {
                span: 5,
            },
            wrapperCol: {
                span: 19,
            },
            style: {
                maxWidth: 700,
                padding: "50px 38px",
                borderRadius: 4,
                boxShadow: "0 0 3px 2px rgba(212,212,212,.4)",
            },
            initialValues: {
                remember: true,
            },
            onFinish,
            onFinishFailed,
        }),
        []
    );

    return (
        <section className="login-page">
            <Form {...formConfiguration}>
                <CustomInput
                    label="Ism"
                    name="name"
                    message="Iltimos ism ni kiriting!"
                /><CustomInput
                    label="Email"
                    name="email"
                    message="Iltimos email ni kiriting!"
                />
                <CustomInput
                    label="Parol"
                    name="password"
                    message="Iltimos parol ni k iriting!"
                    item={<Input.Password />}
                />
                <Button
                    // loading={isLoading}
                    type="primary"
                    htmlType="submit"
                    className="login-form-button"
                >
                    Ro'yxatdan o'tish
                </Button>
            </Form>
        </section>
    );
};

export default SignUpPage;
