import './css/TodoLogo.css'

function TodoLogo (){
    return(
        <header className="logoContainer">
            <img src={process.env.PUBLIC_URL + '/img/Todo-logo.svg'} alt="logo-img"/>
        </header>
    );
}

export { TodoLogo }