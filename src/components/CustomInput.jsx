import { Form, Input } from "antd";

const CustomInput = ({
  name,
  label,
  message,
  item = <Input placeholder={label} />,
}) => {
  return (
    <Form.Item
      label={label}
      name={name}
      rules={[
        {
          required: true,
          message,
        },
      ]}
    >
      {item}
    </Form.Item>
  );
};

export default CustomInput;
