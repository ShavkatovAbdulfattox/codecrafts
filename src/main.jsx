import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ConfigProvider } from "antd";
// import { QueryClient, QueryClientProvider } from "react-query";

const customStyles = {
  colorPrimary: "#fff",
  boxShadowSecondary: "#fff",
  colorPrimaryHover: "#333A44",
  colorPrimaryActive: "#ddd",
};

const theme = {
  components: {
    // Checkbox: {
    //   colorPrimary: '#7F56D9',
    //   colorBgContainer: '#fff',
    //   colorPrimaryHover: '#7F56D9',
    // },
    // DatePicker: customStyles,
    // Input: customStyles,
    Button: customStyles,
    Select: {
      ...customStyles,
      controlItemBgActive: "#fff",
    },
    Spin: {
      colorPrimary: "#fff",
    },
  },
};
// const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <QueryClientProvider client={queryClient}> */}
      <ConfigProvider theme={theme}>
        <App />
      </ConfigProvider>
      <ToastContainer />
    {/* </QueryClientProvider> */}
  </React.StrictMode>
);
