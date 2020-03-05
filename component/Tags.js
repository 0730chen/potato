import '../style/tags.scss'

/**
 * @return {boolean}
 */

export default function Tags(props) {
    return (
        <div className="tags">
            <div>
                <span>{props.name}</span>
                <span>{props.tag}</span>
                </div>
            <div>开始</div>

        </div>
    )
}