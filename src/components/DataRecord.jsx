export default function DataRecord(props) {
    return (
        <li className="todo stack-small job-entry">
            <div className="title">
                <h3>{props.placeName}</h3>
                <p>{props.dates}</p>
            </div>
            <div className="description">
                {props.description}
            </div>
            <div className="btn-group">
                <button type="button" className="btn">
                Edit <span className="visually-hidden">{props.placeName}</span>
                </button>
                <button type="button" className="btn btn__danger">
                Delete <span className="visually-hidden">{props.placeName}</span>
                </button>
            </div>
        </li>
    )
}