import { useState } from 'react';


const LoginForm = () => {

    const [showPass, setShowPass] = useState(false)

    const handleShowPass = () => {
        setShowPass(!showPass)
    }

    return (
        <form action="./sendData">
            <input type="email" id="email" placeholder={"Enter email..."}/>
            <input type={showPass ? 'text' : 'password'} id="password" placeholder={"Enter password"}/>
            <input
                type="checkbox" id="showPass"
                onChange={handleShowPass}
            />

            <i className="fa-regular fa-eye" onMouseDown={handleShowPass}></i>

            <button type="submit">Submit</button>
        </form>
    );
};

export default LoginForm;