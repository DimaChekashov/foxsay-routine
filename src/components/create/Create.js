import "./Create.css";
import RoutineBlock from "../routineBlock/RoutineBlock";

const createBlock = {
    name: "Названия распорядка",
    timeFrom: 0,
    timeTo: 8,
    imgUrl: "some.png",
    altImg: "книги",
};

function Create() {
    return <div className="create-block">
        <RoutineBlock name="Чтение книг" timeFrom="0" timeTo="8" imgUrl="book.png" imgAlt="книги"/>
    </div>;
}

export default Create;
