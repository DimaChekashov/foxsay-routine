import "./RoutineBlock.css";

function RoutineBlock(props) {
    return (
        <div className="routine-block">
            <h4 className="routine-block__name">{props.name}</h4>
            <div>
                <span className="routine-block__time time-from">
                    {props.timeFrom}
                </span>
                <span className="routine-block__time time-to">
                    {props.timeTo}
                </span>
            </div>
            <img
                src={props.imgUrl}
                alt={props.imgAlt}
                className="routine-block__img"
            />
        </div>
    );
}

export default RoutineBlock;
