import React from "react";
import {Result, Typography} from 'antd';
import {resultSelector} from "../../../state/credit/selectors";
import {useSelector} from "react-redux";

const {Title}=Typography;
export default () => {
    const result = useSelector(resultSelector);


    if(!result){
        return null;
    }
    return (
        !result.success ?
            <Result
                status="error"
                title="Onay durumu : ONAYLANMADI"
            />
            :
        <Result
            status="success"
            title="Onay durumu : ONAYLANDI"
            extra={[
                <>
                    <Title level={5}>Limit :{result.creditAmount} </Title>

                </>
            ]}
        />
    )
}
