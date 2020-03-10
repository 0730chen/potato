import '../style/dialog.scss'
export default function Dialog(props) {
    return props.visible ? (
        <div className="modal-mask">
            <div className="modal-wrap">
                <div className="header">
                    <div className="title">待办事项</div>
                </div>
                <div className="body">
                    {props.children}
                </div>
                <div className="footer">
                    <div className="cancel" onClick={props.onCancel}>取消</div>
                    <div className="confirm" onClick={props.onConfirm}>确定</div>
                </div>
            </div>
        </div>
    ) : (<span/>)

};