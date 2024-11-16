import { useState } from "react";

const Froms = () => {

    const [validation, setValidation] = useState(false);

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
        if (e.target.value.length < 6) {
            setValidation(false)
        } else {
            setValidation(true)
            console.log(e.target.value);
            setPassword(e.target.value)
        }

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
            <p>{(validation) ? "Validation True ✅" : "validation false ❌"}</p>
        </div>
    );
};

export default Froms;