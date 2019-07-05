import { useState } from "react";

const useForm = ({ initialValues, onSubmit, validate }) => {
    const [formData, setFormData] = useState(initialValues || {});// <- aka  initialState
    const [errors, setErrors] = useState({});

    const handleChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value.substr(0, 50).trim();
        const name = target.name;
        setFormData({
            ...formData,
            [name]: value,
        });
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        const e = validate(formData); // not wokring
        setErrors({
            ...errors,
            ...e
        });
        onSubmit({ formData, e });
    };
    return { formData, setFormData, errors, handleChange, handleSubmit }
};

export default useForm;