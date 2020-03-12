import Nav from "../component/Nav";
import styled from "styled-components";
import Title from "../component/Tiitle";
import {connect} from 'react-redux'

const Container = styled.div`
  display: flex;
  flex-direction: column-reverse;
`;

const Page = (props) => {
    console.log(props);
    return (
        <Container>
            <Nav/>
            <main>
            <div>{props.foo}事项页面</div>
            </main>
            <Title/>
        </Container>
    );
}
Page.getInitialProps = ({store, isServer, pathname, query}) => {
    store.dispatch({type: 'FOO', payload: '代办'}); // The component can read from the store's state when rendered
    return {custom: 'custom'}; // You can pass some custom props to the component from here
}

export default connect(state => state)(Page)