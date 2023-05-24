import { IoCheckbox } from "react-icons/io5";
import { IoCloseCircleOutline } from "react-icons/io5";
import './css/TodoItem.css';

function TodoItem(task){
    return (
        <>
        <li className="task">
            <span>
            <IoCheckbox 
                style={{fontSize: "24px"}}
                className={`Icon Icon-check ${task.completed && "Icon-check--active"}`}
                onClick={ task.onComplete }
            />
            </span>
            
            <p className={`TodoItem-p ${task.completed && "TodoItem-p--complete"}`}>{ task.text }</p>
            <span>
            <IoCloseCircleOutline 
                style={{fontSize: "24px"}}
                className={`Icon Icon-delete equis`}
                onClick={ task.onDelete }
            />
            </span>
        </li>
        </>
    )
}

export { TodoItem }