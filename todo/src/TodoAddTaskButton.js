import './css/TodoAddTaskButton.css'

function TodoAddTaskButton () {
    return (
        <footer>
            <div>
                <span>
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
                        +
                </button>
            </div>
        </footer>
    );
}

export { TodoAddTaskButton };