import {React, useContext} from 'react';
import ReactDOM from 'react-dom';
import { useDispatch, useSelector } from "react-redux";

import 'antd/dist/antd.css';
import './SignIn.css';
import {
    Checkbox,
    Button,
    Form,
    Input,
  
  } from "antd";
  import { UserOutlined, LockOutlined } from '@ant-design/icons';

import RegistrationForm from "../SignUp/SignUp"
// import AuthContext from '../../contexts/AuthContext';
import { useHistory } from "react-router-dom";
import { ROUTES } from '../../constants/routes';


const SignIn = () => {
  const history = useHistory();

  //get data
  const { product, loading, error, } = useSelector((state) => state.products);
  console.log(product);



  // const {login} = useContext(AuthContext)
    const [form] = Form.useForm();
    const onFinish = (values) => {
        console.log(values);
        console.log('ok');
        // login(values.username, values.password);
        history.push(ROUTES.HOME);
    }
 const register = ()=>{
   history.push(ROUTES.REGISTER);
 }
    return (
        <div>
         <Form
      name="normal_login"
      className="login-form"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
    >
      <Form.Item
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your Username!',
          },
        ]}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your Password!',
          },
        ]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>
      <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <a className="login-form-forgot" href="">
          Forgot password
        </a>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          Log in
        </Button>
        Or <a href="" onClick={register}>register now!</a>
      </Form.Item>
    </Form>
    {/* <RegistrationForm/> */}
        </div>
    );
};

export default SignIn;