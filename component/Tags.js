import '../style/tags.scss'
import tag from "../style/tagCss";

export default function Tags(props) {
    return (
        <div className="tags">
            <div className="tags-wrapper">
                <p className="tags-name">{props.name}</p>
                <p className="tags-time">{props.tag}</p>
            </div>
            <div>开始</div>

        </div>
    )
}