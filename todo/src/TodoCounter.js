import './css/TodoCounter.css'

function TodoCounter ({total, completed}){
    if(total === 0){
        return <h1>Iniciemos, click a + para agregar una nueva tarea</h1>
      }
      else if (total === completed){
        return <h1>Felicidades! Haz completado todas tus { completed } de { total } tareas</h1>
      }else{
        return <h1>Haz completado { completed } de { total } tareas</h1>
      }
}

export { TodoCounter };
