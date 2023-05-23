import { GoCheck } from "react-icons/go";
import { GoX } from "react-icons/go";
import './css/TodoItem.css';

function TodoItem(task){
    return (
        <>
        <li className="task">
            <span>
            <GoCheck 
                style={{fontSize: "24px"}}
                className={`Icon Icon-check ${task.completed && "Icon-check--active"}`}
                onClick={ task.onComplete }
            />
            </span>
            
            <p className={`TodoItem-p ${task.completed && "TodoItem-p--complete"}`}>{ task.text }</p>
            <span>
            <GoX 
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