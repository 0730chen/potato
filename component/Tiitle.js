import styled from "styled-components";
import Icon from "./Icon";

const Span = styled.div`
    background:rgb(88,171,233);
    padding:0px 10px;
    color:white;
    display:flex;
    flex-direction:row-reverse;
`
export default function Title(props) {
    return (
        <Span>
            <div style={{padding: '0px 20px'}}>{props.children}</div>
            <div style={{padding: '0px 20px'}}><Icon iconClass="Add"/></div>
            <div style={{padding: '0px 20px',color:'white'}}><Icon iconClass="pick"/></div>
        </Span>
    )
}