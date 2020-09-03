import React from "react";
import {Button, Col, Form, Input, InputNumber, Layout, Row, Tooltip} from 'antd';
import checkTcNum from "../../helper"
import {QuestionCircleOutlined} from '@ant-design/icons';
import Result from "./Result";
import {MaskedInput} from "antd-mask-input";
import styles from "./Main.module.css";
import {useDispatch} from 'react-redux'
import {calculateCreditAction, setResultAction} from "../../state/credit/actions";

const {Content} = Layout;


export default () => {

    const dispatch = useDispatch();


    const formItemLayout = {
        labelCol: {
            xs: {
                span: 24,
            },
            sm: {
                span: 6,
            },
        },
        wrapperCol: {
            xs: {
                span: 24,
            },
            sm: {
                span: 15,
            },
        },
    };
    const tailLayout = {
        wrapperCol: {offset: 6, span: 18},
    };
    const onReset = () => {
        form.resetFields();
        dispatch(setResultAction(null));
    };
    const onFinish = values => {
        console.log(values);
        dispatch(calculateCreditAction(values));
        console.log('Received values of form: ', values);
    };
    const [form] = Form.useForm();


    return (<Content className={styles.Content}>
            <Row>
                <Col flex={3}>
                    <Form
                        {...formItemLayout}
                        form={form}
                        onFinish={onFinish}
                    >
                        <Form.Item
                            name="identificationNumber"
                            label={<span>Kimlik Numarası&nbsp;
                                <Tooltip title="TC Kimlik Numarası Standartında olmalıdır.">
                             <QuestionCircleOutlined/>
                        </Tooltip>
                            </span>
                            }
                            rules={[{
                                required: true,
                                message: 'Lütfen kimlik numaranızı giriniz!',
                            }, {
                                message: 'Lütfen geçerli bir TC Kimlik numarası giriniz!',
                                validator: (rule, value) => {
                                    if (checkTcNum(value)) {
                                        return Promise.resolve();
                                    }
                                    return Promise.reject(rule.message);
                                }
                            }
                            ]}
                        >
                            <Input allowClear placeholder="123456789" maxLength="11"/>
                        </Form.Item>
                        <Form.Item
                            label="Ad - Soyad"
                            style={{
                                marginBottom: 0,
                            }}
                        >
                            <Form.Item
                                name="firstName"
                                style={{
                                    display: 'inline-block',
                                    width: 'calc(50% - 12px)',
                                }}
                                rules={
                                    [{
                                        required: true,
                                        message: 'Lütfen isim bilgisi giriniz!'
                                    }]
                                }
                            >
                                <Input placeholder="Ad"/>
                            </Form.Item>
                            <span
                                style={{
                                    display: 'inline-block',
                                    width: '24px',
                                    lineHeight: '32px',
                                    textAlign: 'center',
                                }}
                            >
                          -
                         </span>
                            <Form.Item
                                name="lastName"
                                style={{
                                    display: 'inline-block',
                                    width: 'calc(50% - 12px)',
                                }}
                                rules={
                                    [{
                                        required: true,
                                        message: 'Lütfen soyad bilgisi giriniz!'
                                    }]
                                }
                            >
                                <Input placeholder="Soyad"/>
                            </Form.Item>
                        </Form.Item>
                        <Form.Item label="Maaş">
                            <Form.Item name="monthlyIncome" noStyle
                                       rules={
                                           [{
                                               required: true,
                                               message: 'Lütfen gelir bilgisi giriniz!'
                                           }]
                                       }>
                                <InputNumber min={1000} max={1000000}/>
                            </Form.Item>
                            <span> TL</span>
                        </Form.Item>
                        <Form.Item
                            label="Telefon"
                            name="phoneNumber"
                            hasFeedback
                            rules={
                                [{
                                    required: true,
                                    message: 'Lütfen telefon numarası giriniz!'
                                }]
                            }
                        >
                            <MaskedInput mask="0111 111 11 11" name="phone" size="20" placeholder="0555 555 55 55"/>
                        </Form.Item>
                        <Form.Item {...tailLayout}>
                            <Button type="primary" htmlType="submit" className={styles.Button}>
                                Başvur
                            </Button>
                            <Button htmlType="button" onClick={onReset} className={styles.Button}>
                                Sıfırla
                            </Button>
                        </Form.Item>
                    </Form>
                </Col>
                <Col flex={2}><Result/></Col>
            </Row>

        </Content>
    )
}
