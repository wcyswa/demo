import React, {Component} from 'react'
import {Form, Input, Button} from 'antd';
import "./LoginForm.css";

const layout = {
    labelCol: {span: 8},
    wrapperCol: {span: 16},
};
const tailLayout = {
    wrapperCol: {offset: 8, span: 16},
};

class LoginForm extends Component{
    onFinish = (values: any) => {
        console.log('Success:', values);
    };

    onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return (
            <div className={'loginBox'}>
                <Form
                    {...layout}
                    name="basic"
                    initialValues={{remember: true}}
                    onFinish={this.onFinish}
                    onFinishFailed={this.onFinishFailed}
                >
                    <Form.Item
                        label="密码"
                        name="password"
                        rules={[{required: true, message: '请输入密码'}]}
                    >
                        <Input.Password />
                    </Form.Item>

                    <Form.Item {...tailLayout}>
                        <Button type="primary" htmlType="submit">
                            登录
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        );
    }
}

export default LoginForm;
