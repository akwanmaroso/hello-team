const Form = (props) => {
    return (
        <div>
            <form onSubmit={props.getWeather} autoComplete="off">
                <input type="text" name="place"/>
                <button>Search</button>
            </form>
        </div>
    )
}

export default Form;