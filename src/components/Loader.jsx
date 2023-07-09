/* eslint-disable react/prop-types */
/** @format */

import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";

const Loader = ({ show, style }) => {
  if (!show) return "";
  return (
    <Spin
      indicator={
        <LoadingOutlined
          style={{
            fontSize: 24,
            marginTop: "3px",
            ...style,
          }}
          spin
        />
      }
    />
  );
};

export default Loader;
