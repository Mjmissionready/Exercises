import { useState } from "react";

function validEmail(email) {
    const atText = email.indexOf('@');
    const dotText = email.lastIndexOf('.');
    return atText > 0 && dotText > atText;
}

function EmailForm() {
    const [email, setEmail] = useState('')
    const [isValidEmail, setIsValidEmail] = useState(false);

    const handleEmailChange = (e) => {
        const email = e.target.value;
        setEmail(email);
        setIsValidEmail(validEmail(email));
    }

    return (
        <>
            <div>
                {isValidEmail ? <h1>I am awesome</h1> : <h1 style={{ color: "red" }}>Invalid email</h1>}
                <label>Email</label>
                <input type="email" onChange={handleEmailChange} />
            </div>
        </>
    )
}

export default EmailForm