
const Froms = () => {

    const onsubmit = e => {
        e.preventDefault()
        console.log("submitted", e.target.name.value, e.target.password.value)
    }
    const namechenge = e => {

        console.log("chenged", e.target.value)
    }
    return (
        <div>
            <form onSubmit={onsubmit}>
                <input
                    onChange={namechenge}
                    type="text" name="name" ></input><br />
                <input type="password" name="password" ></input><br />
                <input type="submit" />
            </form>
        </div>
    );
};

export default Froms;