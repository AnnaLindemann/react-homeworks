import { Form, Input, Button} from "antd";

export default function InfoForm({onSubmit}){
const [form] = Form.useForm();

const handleSubmit = (values) =>{ 
  onSubmit(values);
 form.resetFields();
}

  return(
  <Form form={form} layout="vertical" name="dataForm" onFinish={handleSubmit} >
  <Form.Item name="username" label="Username" rules={[{required: true,message: "Please input your username!"}]}>
    <Input placeholder="Name" size="large" />
  </Form.Item>
    <Form.Item name="description" label="Description" rules={[{required:true, message:"Please describe something!"}]}>
    <Input placeholder="Description" size="large" />
  </Form.Item>
  <Form.Item >
    <Button type="primary" htmlType="submit">Send</Button>
  </Form.Item>
  </Form>)
  
}
