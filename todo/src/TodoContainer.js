import './css/TodoContainer.css'

function TodoContainer ({children}){
    return (
        <section className="container">
            { children }
        </section>
    )
}

export { TodoContainer }