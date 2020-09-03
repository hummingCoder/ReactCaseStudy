import React from "react";
import {Layout} from 'antd';

const {Footer} = Layout;

export default () => {
    return (<Footer style={{backgroundColor: "white" , fontStyle:"italic"}}>
            Made with 💗 by Zeynep Yurt {(new Date().getFullYear())}
        </Footer>
    )
}
