import React, { useState } from 'react'

const Form = () => {

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        password: "",
        confirmPassword: "",
        age: "",
        gender: "",
        interest: [],
        dateOfBirth: "",
    });



    const handleSubmit = (e) => {

    }


    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData({
            ...formData,
            [name]: value,
        });
    }

    const handleCheckboxChange = (e) => {
        const {name, checked} = e.target;

        let updateValue = [...formData.interest];

        if(checked){
            updateValue.push(name);
        }
        else{
            updateValue = updateValue.filter((interest)=> interest!==name);
        }

        setFormData({
            ...formData,
            interest:updateValue,
        })
    };

    return (
        <form className='parent-container' onSubmit={handleSubmit}>
            <div className='form-container'>

                <div>
                    <label>First Name : </label>
                    <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        placeholder='Enter your first name'
                        onChange={handleChange}
                    />
                </div>

                <div>
                    <label>Last Name : </label>
                    <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        placeholder='Enter your last name'
                        onChange={handleChange}
                    />
                </div>

                <div>
                    <label>Email : </label>
                    <input
                        type="text"
                        name="email"
                        value={formData.email}
                        placeholder='Enter your Email'
                        onChange={handleChange}
                    />
                </div>

                <div>
                    <label>Phone Number : </label>
                    <input
                        type="text"
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        placeholder='Enter your Phone number'
                        onChange={handleChange}
                    />
                </div>

                <div>
                    <label>Password : </label>
                    <input
                        type="text"
                        name="password"
                        value={formData.password}
                        placeholder='Enter your Password'
                        onChange={handleChange}
                    />
                </div>

                <div>
                    <label>Confirm Password : </label>
                    <input
                        type="text"
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        placeholder='Confirm your Passowrd'
                        onChange={handleChange}
                    />
                </div>

                <div>
                    <label>Age : </label>
                    <input
                        type="number"
                        name="age"
                        value={formData.age}
                        placeholder='Enter you age'
                        onChange={handleChange}
                    />
                </div>

                <div>
                    <label>Gender : </label>
                    <select value={formData.gender} name='gender'
                        onChange={handleChange}
                    >
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Others</option>

                    </select>
                </div>

                <div>
                    <label>Interest : </label>
                    <label>
                        <input
                            type="checkbox"
                            name='coding'
                            checked={formData.interest.includes("coding")}
                            onChange={handleCheckboxChange}

                        />
                        coding
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            name='Employed'
                            checked={formData.interest.includes("Employed")}
                            onChange={handleCheckboxChange}
                        />
                        Employed
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            name='Unemployed'
                            checked={formData.interest.includes("Unemployed")}
                            onChange={handleCheckboxChange}
                        />
                        Unemployed
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            name='Dsa'
                            checked={formData.interest.includes("Dsa")}
                            onChange={handleCheckboxChange}
                        />
                        Dsa
                    </label>
                </div>

                <div>
                    <label>DOB : </label>
                    <input
                        type="date"
                        name="dateOfBirth"
                        value={formData.dateOfBirth}
                        onChange={handleChange}

                    />
                </div>

            </div>

            <button>Submit</button>
        </form>
    )
}

export default Form