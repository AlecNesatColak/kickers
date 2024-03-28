import { Form } from 'antd'
import React from 'react'

const Register = () => {
  return (
    <div>
        <div>
            <Form>
                <Form.Item>
                    <label>Username</label>
                    <input type="text" />
                </Form.Item>
                <Form.Item>
                    <label>Email</label>
                    <input type="email" />
                </Form.Item>
                <Form.Item>
                    <label>Password</label>
                    <input type="password" />
                </Form.Item>
                <Form.Item>
                    <label>Confirm Password</label>
                    <input type="password" />
                </Form.Item>
                <Form.Item>
                    <button type="submit">Register</button>
                </Form.Item>
            </Form>
        </div>
    </div>
  )
}

export default Register