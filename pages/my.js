
import '../style/reset.scss'
import Nav from "../component/Nav";
import styled from "styled-components";
import Title from "../component/Tiitle";
const Container = styled.div`
  display: flex;
  flex-direction: column-reverse;
`;
export default function Index() {
    return (
        <Container>
            <Nav/>
            <main>我的页面的内容</main>
            <Title/>
        </Container>
    );
}