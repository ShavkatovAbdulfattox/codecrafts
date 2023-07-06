/** @format */

import { Button, Form, Input, message } from "antd";
import { useMemo } from "react";
import CustomInput from "../../components/CustomInput";
import "./loginPage.scss";

const LoginPage = () => {

    const onFinish = () => {
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
                    label="Login"
                    name="username"
                    message="Iltimos login ni kiriting!"
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
                    Submit
                </Button>
            </Form>
        </section>
    );
};

export default LoginPage;
