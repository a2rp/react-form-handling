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
        if (!formValues.name.trim()) nextErrors.name = "Enter your name.";
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
                <p>A small, readable example of controlled inputs, client-side validation and clear success feedback.</p>
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
                    <input id="name" name="name" type="text" autoComplete="name" required aria-invalid={!!errors.name} aria-describedby={errors.name ? "name-error" : undefined} placeholder="Your name" value={formValues.name} onChange={handleChange} />
                    {errors.name && <span id="name-error" className="error" role="alert">{errors.name}</span>}
                    <label htmlFor="email">Email</label>
                    <input id="email" name="email" type="email" autoComplete="email" required aria-invalid={!!errors.email} aria-describedby={errors.email ? "email-error" : undefined} placeholder="you@example.com" value={formValues.email} onChange={handleChange} />
                    {errors.email && <span id="email-error" className="error" role="alert">{errors.email}</span>}
                    <label htmlFor="password">Password</label>
                    <input id="password" name="password" type="password" autoComplete="new-password" required aria-invalid={!!errors.password} aria-describedby={errors.password ? "password-error" : undefined} placeholder="At least 8 characters" value={formValues.password} onChange={handleChange} />
                    {errors.password && <span id="password-error" className="error" role="alert">{errors.password}</span>}
                    {submitted && <div className="success" role="status"><MdCheckCircle aria-hidden="true" />Form is valid and ready.</div>}
                    <div className="formActions"><button type="button" className="quiet" onClick={handleReset}>Reset</button><button type="submit"><MdSend aria-hidden="true" />Submit form</button></div>
                </form>
            </div>
        </section>
    );
};

export default Form;
