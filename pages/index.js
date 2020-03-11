import Nav from "../component/Nav";
import Tags from "../component/Tags";
import '../style/reset.scss'
import {useState} from "react";
import Dialog from "../component/Dialog";
import styled from "styled-components";
import Title from "../component/Tiitle";

function AddTab() {
    console.log('添加一个内容')
}

const Container = styled.div`
  display: flex;
  flex-direction: column-reverse;
`;

export default function Index() {
    const [DialogView, setDialogView] = useState(false);
    const changeVisble = (data) => {
        setDialogView(data)
    };
    const onRef = (ref) => {
        ref()
    }
    const On = () => {
        Tags.show
    }
    return (
        <Container>
            <Nav/>
            <main>
                <Tags name="添加代办事项" tag="25分钟" visible={true} data={changeVisble} onRef={onRef}/>
                <Dialog visible={DialogView} onCancel={() => {
                    setDialogView(false)
                }} onConfirm={() => {
                    console.log('点击了确定按钮')
                    setDialogView(false)
                }}>
                    <div className="modal-body">
                        <div className="row">
                            <div className="left"><span className="label"><input type="text"
                                                                                 placeholder="请输入代办事项"/></span><span
                                className="value"></span>
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
            <Title></Title>
        </Container>
    );
}