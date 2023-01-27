import { LockOutlined, UserOutlined } from "@ant-design/icons"
import { Button, Checkbox, Form, Input, Layout } from "antd"
import { Content, Footer } from "antd/es/layout/layout"
import { Link } from "react-router-dom"
import { AppFooter } from "../../ui"

export const AuthLayout = ({ classname, children }) => {
  return (
    <>
      <Layout
        className="page-layout"
        style={{ height: '100vh' }}

      >
        <Content
          className="layout-children">
          <div className="container">
            <div className="login-form-wrap">
              <div className="login-form-title">
                <img
                  style={{
                    marginRight: 'auto',
                    width: '150px',
                    marginBottom:'1em'
                  }}
                  height={70}  alt='Logo' src='' />
    
              </div>
              <h1 className="login-form-title">
                LOGIN
              </h1>
              {children}


            </div>
          </div>
        </Content>

      </Layout>

    </>
  )
}
