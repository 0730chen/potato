import Nav from "../component/Nav";
import Tags from "../component/Tags";
import '../style/reset.scss'
import {useState} from "react";
import Dialog from "../component/Dialog";
import Button from "../style/aboutCss";

function AddTab() {
    console.log('添加一个内容')
}

export default function Index() {
    const [DialogView, setDialogView] = useState(false);
    const changeVisble = (data) => {
        console.log(data)
        setDialogView(data)
    };
    const onRef=(ref)=>{
        ref()
    }
    const On = ()=>{
       Tags.show
    }
    return (
        <div className="container">
            <Nav/>
            <main>
                <Tags name="代办是指需要专注的事" tag="25分钟" visible={true} data={changeVisble} onRef={onRef}/>
                <Tags name="点击添加按钮添加代办事项" tag="10分钟" visible={true} data={changeVisble}/>
                <Tags name="点击代办编辑或删除" tag="5分钟" visible={true} data={changeVisble}/>
                <Tags name="点击开始按钮，开始计时" tag="1分钟" visible={true} data={changeVisble}/>
                <Button onClick={On}/>
                <Dialog visible={DialogView} onCancel={() => {
                    setDialogView(false)
                }} onConfirm={() => {
                    console.log('点击了确定按钮')
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
        </div>
    );
}