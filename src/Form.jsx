import React from 'react'
import { useState } from 'react';

const Form = () => {
    const [formValues, setFormValues] = useState({ name: "", email: "", password: "" });
    const handleChange = (event) => {
        setFormValues(prev => ({ ...prev, [event.target.name]: event.target.value }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        console.log(formValues);
    };

    return (
        <div style={{ padding: "15px", textAlign: "left" }}>
            <h1>React Form</h1>
            <form action="" onSubmit={handleSubmit}>
                <div style={{ marginBottom: "15px" }}>
                    <label htmlFor="name" style={{ display: "block" }}>Name</label>
                    <input type="text" name="name" id="name" placeholder="Name" style={{ display: "block", paddingLeft: "15px", width: "300px", height: "30px" }} value={formValues.name} onChange={handleChange} />
                </div>
                <div style={{ marginBottom: "15px" }}>
                    <label htmlFor="email" style={{ display: "block" }}>Email</label>
                    <input type="email" name="email" id="email" placeholder="Email" style={{ display: "block", paddingLeft: "15px", width: "300px", height: "30px" }} value={formValues.email} onChange={handleChange} />
                </div>

                <div style={{ marginBottom: "15px" }}>
                    <label htmlFor="password" style={{ display: "block" }}>Password</label>
                    <input type="password" name="password" id="password" placeholder="password" style={{ display: "block", paddingLeft: "15px", width: "300px", height: "30px" }} value={formValues.password} onChange={handleChange} />
                </div>
                <div style={{ marginBottom: "15px" }}>
                    <button>SUBMIT</button>
                </div>
            </form>
        </div>
    )
}

export default Form