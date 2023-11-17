import "./RegistrationForm.css"
const RegistrationForm =()=>{
return(
    <body>
    <h1>Registration Form</h1>
    <p>Please fill out this form with the required information</p>
    <form method="post" action='https://register-demo.freecodecamp.org'>
        <fieldset>
            <label htmlFor="first-name">Enter Your First Name: <input id="first-name" type="text" /></label>
            <label htmlFor="last-name">Enter Your Last Name: <input id="last-name" type="text" /></label>
            <label htmlFor="email">Enter Your Email: <input id="email" type="email" /></label>
            <label htmlFor="new-password">Create a New Password: <input id="new-password" type="password" pattern="[a-z0-5]{8,}" required /></label>
        </fieldset>
        <fieldset>
            <legend>Account type (required)</legend>
            <label><input type="radio" name="account-type" className="inline"/> Personal</label>
            <label><input type="radio" name="account-type" className="inline"/> Business</label>
        </fieldset>
        <fieldset>
            <label> <input type="file"/>Upload a profile picture:</label>
            <label>Input your age (years): <input type="number" min="13" max="120" /></label>
            <label>How did you hear about us?
                <select>
                    <option value="">(select one)</option>
                    <option value="1">freeCodeCamp News</option>
                    <option value="2">freeCodeCamp YouTube Channel</option>
                    <option value="3">freeCodeCamp Forum</option>
                    <option value="4">Other</option>
                </select>
                <label>Provide a bio:
                    <textarea rows="3" cols="30" placeholder="I like coding on the beach..."></textarea>
                </label>
            </label>
        </fieldset>
        <input type="submit" value="Submit" />
    </form>

    </body>
)
}
export default RegistrationForm