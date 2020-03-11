import Nav from "../component/Nav";
import Button from "../style/aboutCss";
import styled from "styled-components";
import Dialog from "../component/Dialog";
import {useState} from "react";
import Title from "../component/Tiitle";

const Container = styled.div`
  display: flex;
  flex-direction: column-reverse;
`;
export default function Index() {
    const [DialogView, setDialogView] = useState(false);
    const changeVisble = () => {
        console.log('弹窗')
        setDialogView(true)
    };
    return (
        <Container>
            <Nav/>
            <main>
                <div>一个添加事件的按钮</div>
                <Button onClick={changeVisble}>添加事件</Button>
                <Dialog visible={DialogView} onCancel={() => {
                    setDialogView(false)
                }} onConfirm={() => {
                    console.log('点击了确定按钮')
                    setDialogView(false)
                }}>
                    <div className="modal-body">
                        <div className="row">
                            <div className="left"><span className="label">预约数量：</span><span className="value">2</span>
                            </div>
                            <div className="right"><span className="label">总金额为：</span><span
                                className="value">￥200</span></div>
                        </div>
                        <div className="row">
                            <div className="left"><span className="label">余额抵扣：</span><span className="value">￥0</span>
                            </div>
                            <div className="right"><span className="label">应付余额：</span><span
                                className="value">￥200</span></div>
                        </div>
                    </div>
                </Dialog>
            </main>
            <Title/>
        </Container>
    );
}