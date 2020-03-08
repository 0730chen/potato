import Nav from "../component/Nav";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column-reverse;
`;

export default function Index() {
    return (
        <Container>
            <Nav/>
            <main>代办事项页面</main>
        </Container>
    );
}