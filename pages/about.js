import Nav from "../component/Nav";
import styled from 'styled-components';


const Button = styled.button`
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;
console.log(Button);
export default function Index() {
    return (
        <div className="container">
            <Nav/>
            <main>
                <div>一个添加事件的按钮</div>
                <Button>添加事件</Button>
            </main>
        </div>
    );
}