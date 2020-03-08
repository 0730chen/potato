import Nav from "../component/Nav";
import Button from "../style/aboutCss";
import styled from "styled-components";
const Container = styled.div`
  display: flex;
  flex-direction: column-reverse;
`;
export default function Index() {
    return (
        <Container>
            <Nav/>
            <main>
                <div>一个添加事件的按钮</div>
                <Button>添加事件</Button>
            </main>
        </Container>
    );
}