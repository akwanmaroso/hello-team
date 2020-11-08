import React, { useEffect, useState } from "react";

const CounterFC = () => {
    const [count, setCount] = useState(0);
    const [list, setList] = useState([
        {
            "note": "saya makan"
        },
        {
            "note": "saya tidak makan"
        },
    ])
    const [valueF, setValueF] = useState("ValueF");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handeAddCount = () => {
        setCount(count + 1)
    }

    useEffect(() => {
        console.log("Component DidMount");
    }, [])
    
    useEffect(() => {
        console.log("Component update");
    }, [count])

    const handleOnChangeEmail = (e) => {
        setUsername(e.target.value);
    }
    const handleOnChangePassword = (e) => {
        setPassword(e.target.value);
    }
    const handleSubmitFormLogin = (e) => {
        e.preventDefault();
        let usernameBackend = "username";
        let passBackend = "password";
        if (usernameBackend === username && passBackend === password) {
            alert("Login Berhasil")
        } else {
            alert("Login Gagal")
        }
    }

    return (
        <div>
            <h1 onClick={() => alert('trigger helo')}>Helo FC Counter</h1>
            {/* <p>{list.map((listt, index) => <li key={index}>{listt.note}</li> )}</p> */}
            {/* <button onKeyPress={handeAddCount}>+1</button> */}
            <form onSubmit={handleSubmitFormLogin}>
                <input type="text" onChange={handleOnChangeEmail}/>
                <br/>
                <input type="password" onChange={handleOnChangePassword}/>
                <button>Login</button>
            </form>
        </div>
    )
}

export default CounterFC;