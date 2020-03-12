import '../style/reset.scss'
import Nav from "../component/Nav";
import styled from "styled-components";
import Title from "../component/Tiitle";
import {connect} from 'react-redux'

const Container = styled.div`
  display: flex;
  flex-direction: column-reverse;
`;
import React from 'react'

const Page = (props) => {
    return (
        <Container>
            <Nav/>
            <div>Prop from Redux {props.foo}</div>
            <div>Prop from getInitialProps {props.custom}</div>
            <main>我的页面的内容</main>
            <Title/>
        </Container>
    );
}
Page.getInitialProps = ({store, isServer, pathname, query}) => {
    store.dispatch({type: 'FOO', payload: 'foo'}); // The component can read from the store's state when rendered
    return {custom: 'custom'}; // You can pass some custom props to the component from here
}
export default  connect(state => state)(Page)