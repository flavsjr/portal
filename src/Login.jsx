import React, { useState } from "react";

export const Login = () => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    return (
        <>
        <form onSubmit={handleSubmit}>
            <label for="email">email</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="email@gmail.com" id="email" name="email"></input>

            <label for="password">password</label>
            <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="**********" id="password" name="password"></input>

            <button type="submit">Log In</button>
        </form>

        <button>Não tem uma conta? Registre-se aqui.</button>
        </>
    )
}