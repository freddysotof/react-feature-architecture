
import { Form, Input, Button, Checkbox, Space, Radio, message, Spin, Alert } from 'antd';
import { InfoCircleOutlined, InteractionOutlined, LockOutlined, UserOutlined } from "@ant-design/icons";
import { InfoButton, PrimaryButton } from '../../ui';
import { useEffect, useMemo, useState } from 'react';
import { AuthLayout } from '../';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import { regexNumberValidation } from '../../helpers';
import { useAuthStore } from '../../hooks';


const loginTypeByUser = { placeHolder: 'Usuario', name: 'usuario', type: 'text' };
const initialForm = {
  user: '',
  password: '',
  authenticationType: null,
  remember: true
}
export const LoginPage = () => {

  const {
    employeeCode,
    status,
    errorMessage,
    authenticationType,
    startLogin,

  } = useAuthStore();
  const dispatch = useDispatch();

  const [formSubmitted, setFormSubmitted] = useState(false)
  const [loginType, setLoginType] = useState(loginTypeByUser);

  const [form] = Form.useForm();

  const isAuthenticating = useMemo(() => status === 'checking', [status]);


  const onFormValuesChange = (_, allFields) => {
    const { name, value } = _[0];
  }



  const onSubmit = ({ user, password, authenticationType }) => {
    setFormSubmitted(true);
    startLogin({ user, password });
  }

  const tailLayout = {
    wrapperCol: { offset: 6, span: 18 },
  };


  return (
    <AuthLayout title="LOGIN" classname="login">


      <Form
        form={form}
        initialValues={initialForm}
        onFinish={onSubmit}
        autoComplete="off"
        className="login-form "
      >
        <Form.Item
          name="user"
          preserve={true}
          rules={[
            {
              pattern: loginType.type === 'number' ? regexNumberValidation : null,
              message: loginType.typeMessage,
            },
            {
              required: true,
              message: `Digite su ${loginType.name}!`,
            },
          ]}
        >
          <Input
            prefix={
              <UserOutlined
                className="site-form-item-icon"
                style={{ color: 'rgba(0,0,0,.25)' }} />
            }
            placeholder={loginType.placeHolder}
            allowClear
          />
        </Form.Item>
        <Form.Item

          name="password"

          rules={[
            { message: 'La contrasena debe tener al menos 6 caracteres', min: 6 },
            { required: true, message: 'Digite su contrasena!' },
          ]}
        >
          <Input.Password
            prefix={
              <LockOutlined
                className="site-form-item-icon"
                style={{ color: 'rgba(0,0,0,.25)' }} />
            }
            allowClear
            placeholder="Contrasena"
          />
        </Form.Item>
       
       
        <Form.Item
          style={{
            display: !!errorMessage ? '' : 'none'
          }
          }
        >
          <Space
            direction="vertical"
            style={{
              width: '100%',
            }}
          >
            <Alert message={errorMessage} type="error" showIcon />
          </Space>
        </Form.Item>
        <Form.Item >
          <PrimaryButton
            className="login-form-button"
            disabled={isAuthenticating}
            title={"Iniciar Sesion"} />
        </Form.Item>
        <Form.Item>
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>Recordarme</Checkbox>
          </Form.Item>
          <Link className="login-form-forgot" to="/forgotpassword">
            Olvide mi contrasena
          </Link>
        </Form.Item>
      </Form>
    </AuthLayout >
  )

}
