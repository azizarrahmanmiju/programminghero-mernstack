import PropTypes from "prop-types";



const ReUsableForm = ({ SubmitHandler, btntext = 'Submit', children }) => {

    const onSubmit = e => {
        e.preventDefault();
        const data = {
            name: e.target.name.value,
            password: e.target.password.value,
        }
        SubmitHandler(data)

    }
    return (
        <div>
            <h3>{children}</h3>
            <form onSubmit={onSubmit}>
                <input
                    type="text" name="name" ></input><br />
                <input
                    type="password" name="password" ></input><br />
                <input type="submit" value={btntext} />
            </form>
        </div>
    );
};
ReUsableForm.propTypes = {
    SubmitHandler: PropTypes.func.isRequired,
    btntext: PropTypes.string,
    children: PropTypes.string.isRequired
}


export default ReUsableForm;