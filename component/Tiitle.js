import styled from "styled-components";
const Span = styled.div`
    background:rgb(88,171,233);
    padding:0px 10px;
    color:white;
    display:flex;
    flex-direction:row-reverse;
`
export default function Title(props) {
    return(
        <Span>{props.children}</Span>
    )
}