import React from "react";
import {Layout, Menu} from 'antd';
import {Link} from "react-router-dom";
import {CalculatorOutlined} from '@ant-design/icons';
import styles from "./index.module.css";
import Logo from "../../assets/logo.png"
import * as ROUTES from '../../constants/routes';

const {Header} = Layout;

export default () => {
    return (<Header style={{background: "white", height: 108}}>
            <img alt={"logo"} className={styles.Logo} src={Logo}/>
            <Menu mode="horizontal" className={styles.CenterStyle} defaultSelectedKeys={['home']}>
                <Menu.Item key="blog" icon={<CalculatorOutlined/>}>
                    <Link to={ROUTES.MAIN}>Hesaplama Aracı</Link>
                </Menu.Item>
            </Menu>
        </Header>
    )
}
