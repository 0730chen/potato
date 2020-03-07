import {useState} from "react";
import Dialog from "./Dialog";

export default function Test() {
    const [DialogView, setDialogView] = useState(false)
    const onShow = () => {
        setDialogView(true)
    }
    return (
        <Dialog visible={DialogView} onCancel={() => {
            console.log('dialog close')
            setDialogView(false)
        }} onConfirm={() => {
            console.log('点击了确定按钮')
        }}>
            <div className="modal-body">
                <div className="row">
                    <div className="left"><span className="label">预约数量：</span><span className="value">2</span></div>
                    <div className="right"><span className="label">总金额为：</span><span className="value">￥200</span></div>
                </div>
                <div className="row">
                    <div className="left"><span className="label">余额抵扣：</span><span className="value">￥0</span></div>
                    <div className="right"><span className="label">应付余额：</span><span className="value">￥200</span></div>
                </div>
            </div>
        </Dialog>
    )
}