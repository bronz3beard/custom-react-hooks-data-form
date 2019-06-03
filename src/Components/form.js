import React from 'react';

import useFetch from "../Hooks/useFetch";
import useForm from "../Hooks/useForm";

const Form = () => {
    const [error, data, loading] = useFetch("https://randomuser.me/api/"); //change API call here
    const { //data and functions from Hooks
        errors,
        formData,
        handleChange,
        handleSubmit,
    } = useForm({
        initialValues: { // aka initialState
            firstName: "",
            lastName: "",
            email: "",
            password: "",
        },
        onSubmit(formData, errors) {
            const completeName = "firstName " + "lastName";
            const email = "email";
            const password = "password";
            alert(JSON.stringify({ formData, completeName, email, password, errors }, null, 2));
        },
        validate(formData) { //TODO handle validation error
            console.log(formData.firstName)
            const errors = {};
            if (!formData.firstName) {
                error.name = "Please enter a name";
            }
            return errors;
        },
    });

    if (error) return <div>{error}</div>;
    if (loading) return <div>Loading...</div>;
    return (
        <div>
            <ul>
                <li>
                    {data && data.name.first}
                    <a target="_blank" href={data && data.picture.thumbnail}>
                        <img src={data && data.picture.thumbnail} alt="Avatar" />
                    </a>
                </li>
            </ul>

            <form onSubmit={handleSubmit}>
                <input
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder={data && data.name.first}
                    type="text"
                    name="firstName"
                    id="firstName"

                />
                <input
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder={data && data.name.last}
                    type="text"
                    name="lastName"
                    id="lastName"
                />
                <input
                    value={formData.email}
                    onChange={handleChange}
                    placeholder={data && data.email}
                    type="email"
                    name="email"
                    id="email"

                />
                <input
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Password"
                    type="password"
                    name="password"
                    id="password"
                    required
                />
                <button type="submit">Submit</button>

            </form>
        </div>
    );
};

export default Form;