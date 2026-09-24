import { useState } from "react";
import { MdCheckCircle, MdLockOutline, MdSend } from "react-icons/md";

const initialValues = { name: "", email: "", password: "" };

const Form = () => {
    const [formValues, setFormValues] = useState(initialValues);
    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (event) => {
        setSubmitted(false);
        setFormValues((current) => ({ ...current, [event.target.name]: event.target.value }));
        setErrors((current) => ({ ...current, [event.target.name]: "" }));
    };

    const validate = () => {
        const nextErrors = {};
        if (formValues.name.trim().length < 2) nextErrors.name = "Enter at least 2 characters.";
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formValues.email)) nextErrors.email = "Enter a valid email address.";
        if (formValues.password.length < 8) nextErrors.password = "Use at least 8 characters.";
        return nextErrors;
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const nextErrors = validate();
        setErrors(nextErrors);
        if (Object.keys(nextErrors).length === 0) setSubmitted(true);
    };

    const handleReset = () => {
        setFormValues(initialValues);
        setErrors({});
        setSubmitted(false);
    };

    return (
        <section className="formPage">
            <div className="formIntro">
                <span className="eyebrow">CONTROLLED REACT FORM</span>
                <h1>Collect details with confidence.</h1>
                <p>A small, readable example of controlled inputs, client-side validation and clear submission feedback.</p>
            </div>
            <div className="formLayout">
                <aside className="formNote">
                    <MdLockOutline aria-hidden="true" />
                    <h2>Private by default</h2>
                    <p>This demo keeps the entered values in component state. Nothing is sent to a server.</p>
                    <ul><li>Controlled inputs</li><li>Inline validation</li><li>Reset and success state</li></ul>
                </aside>
                <form className="formCard" onSubmit={handleSubmit} noValidate>
                    <div className="cardHeading"><div><span className="eyebrow">YOUR DETAILS</span><h2>Simple form</h2></div><MdSend aria-hidden="true" /></div>
                    <label htmlFor="name">Name</label>
                    <input id="name" name="name" type="text" placeholder="Your name" value={formValues.name} onChange={handleChange} />
                    {errors.name && <span className="error">{errors.name}</span>}
                    <label htmlFor="email">Email</label>
                    <input id="email" name="email" type="email" placeholder="you@example.com" value={formValues.email} onChange={handleChange} />
                    {errors.email && <span className="error">{errors.email}</span>}
                    <label htmlFor="password">Password</label>
                    <input id="password" name="password" type="password" placeholder="At least 8 characters" value={formValues.password} onChange={handleChange} />
                    {errors.password && <span className="error">{errors.password}</span>}
                    {submitted && <div className="success" role="status"><MdCheckCircle />Form submitted successfully.</div>}
                    <div className="formActions"><button type="button" className="quiet" onClick={handleReset}>Reset</button><button type="submit"><MdSend />Submit form</button></div>
                </form>
            </div>
        </section>
    );
};

export default Form;
