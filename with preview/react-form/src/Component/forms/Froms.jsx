import { useState } from "react";

const Froms = () => {

    const [name, setName] = useState(null);
    const [password, setPassword] = useState(null);

    const onsubmit = e => {
        e.preventDefault()
        console.log(name, password)
    }
    const namechenge = e => {
        console.log(e.target.value);
        setName(e.target.value)
    }
    const passwordChege = e => {
        console.log(e.target.value);
        setPassword(e.target.value)
    }

    return (
        <div>
            <form onSubmit={onsubmit}>
                <input
                    onChange={namechenge}
                    type="text" name="name" ></input><br />
                <input
                    onChange={passwordChege} type="password" name="password" ></input><br />
                <input type="submit" />
            </form>
        </div>
    );
};

export default Froms;