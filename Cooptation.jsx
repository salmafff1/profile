import React, { useState } from 'react';
import './styles.css'; 

const Form = () => {
    const [formData, setFormData] = useState({
        money: '',
        startDate: '',
        endDate: '',
        jobId: '',
        details: '',
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const validateForm = () => {
        const newErrors = {};
        if (!formData.money) newErrors.money = 'Money is required';
        if (!formData.startDate) newErrors.startDate = 'Start Date is required';
        if (!formData.endDate) newErrors.endDate = 'End Date is required';
        if (!formData.jobId) newErrors.jobId = 'Job ID is required';
        if (!formData.details) newErrors.details = 'Details are required';
        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const validationErrors = validateForm();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        console.log('Form submitted:', formData);
        setFormData({
            money: '',
            startDate: '',
            endDate: '',
            jobId: '',
            details: '',
        });
        setErrors({});
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
               
                <label htmlFor="money">Money:</label>
                <input
                    type="number"
                    id="money"
                    name="money"
                    value={formData.money}
                    onChange={handleChange}
                    placeholder="Enter amount in currency (e.g., $1000)"
                />
                {errors.money && <p className="error">{errors.money}</p>} <br /> <br />

                <div className="date">
                    <label htmlFor="startDate">Start Date:</label>
                    <input
                        type="date"
                        id="startDate"
                        name="startDate"
                        value={formData.startDate}
                        onChange={handleChange}
                    />
                    {errors.startDate && <p className="error">{errors.startDate}</p>}

                    <label htmlFor="endDate">End Date:</label>
                    <input
                        type="date"
                        id="endDate"
                        name="endDate"
                        value={formData.endDate}
                        onChange={handleChange}
                    />
                    {errors.endDate && <p className="error">{errors.endDate}</p>}
                </div>

                <label htmlFor="jobId">ID Job:</label>
                <input
                    type="text"
                    id="jobId"
                    name="jobId"
                    value={formData.jobId}
                    onChange={handleChange}
                    placeholder="Enter job ID"
                />
                {errors.jobId && <p className="error">{errors.jobId}</p>}

                <label htmlFor="details">Details:</label>
                <textarea
                    id="details"
                    name="details"
                    rows="4"
                    value={formData.details}
                    onChange={handleChange}
                    placeholder="Enter job details"
                ></textarea>
                {errors.details && <p className="error">{errors.details}</p>}

                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default Form;
