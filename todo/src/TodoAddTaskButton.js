import './css/TodoAddTaskButton.css';
import { IoAddCircle } from "react-icons/io5";
import { IoChevronForwardOutline } from "react-icons/io5";

function TodoAddTaskButton ({todos}) {
    return (
        <footer>
            <div>
                <span>
                    <IoChevronForwardOutline
                        className="moving-element"
                        style={{ color: "#ffde59", fontSize: "34px" }}
                    />
                </span>
                <button 
                    onClick={
                        (event) => {
                            console.log('Le diste click');
                            console.log(event);
                            console.log(event.target)
                        }
                    } 
                    name="button">
                        <IoAddCircle 
                            className='Button-add' 
                            style={{fontSize: "48px"}} 
                        />
                </button>
            </div>
        </footer>
    );
}

export { TodoAddTaskButton };