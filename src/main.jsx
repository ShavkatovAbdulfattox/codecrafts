import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ConfigProvider, theme } from "antd";

// Bu AntDesign ni configuratsiyasi, customization qilsa bo`ladi
// const { defaultAlgorithm, darkAlgorithm } = theme;

// const customTheme = {
//   // algorithm: darkAlgorithm,
//   components: {
//     Button: {
//       colorBgContainer: '#4433FF',
//       colorBorder: '#1A1A1A',
//       colorPrimaryHover: '#fff',
//       colorPrimary: '#7F56D9',
//     },
//   },
// }

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ConfigProvider
    // theme={customTheme}
    >
      <App />
    </ConfigProvider>
    <ToastContainer />
  </React.StrictMode>
);
