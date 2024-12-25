import signup from '../assets/signup.png';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { useRef } from 'react';
import axios from "axios"

const Signup = () => {
    const [showPassword, setShowPassword] = useState(false)
    const navigate = useNavigate();

    let nameref = useRef("")
    let contactref = useRef("")
    let emailref = useRef("")
    let pwdref = useRef("")
    let roleref = useRef("")

    function handleClick() {
        navigate('/user/login');
    }

    const togglePasswordVisibility = () => {
        setShowPassword((prev) => !prev)
    }


    const {
        register,
        handleSubmit,
        watch,
        formState: { errors }
    } = useForm();

    const addUser = () => {
        let data = {
            name: nameref.current.value,
            email: emailref.current.value,
            mobile: contactref.current.value,
            password: pwdref.current.value,
            role: roleref.current.value
        }
    }

    
    const onSubmit = (data) => {
        console.log(data);

    }

    return (
        <div className="bg-purple-700 min-h-screen flex items-center justify-center">
            <div className="bg-white rounded-lg shadow-lg max-w-4xl w-full flex flex-col md:flex-row">
                <div className="relative w-full md:w-1/2">
                    <img src={signup} alt="Laptop and person" className="w-full h-full object-cover rounded-t-lg md:rounded-l-lg md:rounded-t-none" />
                    <div className="absolute inset-0 bg-purple-600 opacity-70"></div>
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-6 text-center">
                        <h2 className="text-2xl font-bold mb-2">Complete miles of journey with one step</h2>
                        <p className="text-sm">Let's get started</p>
                    </div>
                </div>

                <div className="w-full md:w-1/2 p-8">
                    <h2 className="text-2xl font-bold mb-6">Signup</h2>
                    <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
                        <div className="flex items-center border-b-2 border-gray-300 py-2">
                            <span className="text-purple-600 mr-2">👤</span>
                            <input type="text" placeholder="Enter your name" ref={nameref}

                                {...register("name", {
                                    required: "This field is required",
                                    minLength: {
                                        value: 3,
                                        message: "Min length at least 2"
                                    },
                                    maxLength: {
                                        value: 25,
                                        message: "Max length at least 25"
                                    }
                                })}

                                className="w-full focus:outline-none " />
                        </div>
                        {errors.name && (
                            <p className='text-red-500 text-sm '>{errors.name.message}</p>
                        )}

                        <div className="flex items-center border-b-2 border-gray-300 py-2">
                            <span className="text-purple-600 mr-2">📱</span>
                            <input
                                type="tel"
                                placeholder="Enter your Phone Number" ref={contactref}


                                {...register('tel', {
                                    required: "Phone Number is required",
                                    pattern: {
                                        value: /^[0-9]{10}$/,
                                        message: "Invalid phone number",
                                    },
                                })}
                                className="w-full focus:outline-none"
                            />
                        </div>
                        {errors.tel && (
                            <p className="text-red-500 text-sm mt-1">{errors.tel.message}</p>
                        )}

                        <div className="flex items-center border-b-2 border-gray-300 py-2">
                            <span className="text-purple-600 mr-2">✉️</span>
                            <input
                                type="email"
                                placeholder="Enter your email" ref={emailref}


                                {...register('email', {
                                    required: "Email is required",
                                    pattern: {
                                        value: /^\S+@\S+\.\S+$/i,
                                        message: "Invalid email format",
                                    },
                                })}
                                className="w-full focus:outline-none"
                            />
                        </div>
                        {errors.email && (
                            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                        )}


                        <div className="flex items-center border-b-2 border-gray-300 py-2">
                            <span className="text-purple-600 mr-2">🔒</span>
                            <input type={showPassword ? "text" : "password"} placeholder="Enter your password" ref={pwdref}


                                {...register('password', {
                                    required: "Password is required",
                                    minLength: {
                                        value: 8,
                                        message: "Password must be at least 8 characters  long",
                                    },

                                    pattern: {
                                        value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                                        message: "Password must include uppercase,lowercase,number,and special character",
                                    }
                                })}

                                className="w-full focus:outline-none" />
                            <button type='button' onClick={togglePasswordVisibility} className='ml-2 text-gray-600 focus:outline-none'> {showPassword ? "🙈" : "👁️"}</button>
                        </div>

                        {errors.password && (
                            <p className='text-red-500 text-sm'>{errors.password.message}</p>
                        )}

                        <div className='flex items-center space-x-4'>
                            <label className='flex items-center' for="Please select a role" >
                                <input type="radio" value="User" ref={roleref}
                                    {...register("role", {
                                        required: "Please select a role",
                                        className: "mr-2"
                                    })}

                                />
                                User
                            </label>
                            <label className='flex items-center'>
                                <input type="radio" value="Driver" ref={roleref}
                                    {...register("role", {
                                        required: "Please select a role",
                                        className: "mr-2"
                                    })}
                                />
                                Driver
                            </label>
                        </div>
                        {errors.role && (
                            <p className='text-red-500 text-sm'>{errors.role.message}</p>
                        )}


                        <button type="submit" className="w-full bg-purple-600 text-white py-2 rounded hover:bg-purple-700 transition" >
                            Submit
                        </button>
                    </form>
                    <p className="text-sm mt-4 text-gray-600 text-center">
                        Already have an account? <a href="#" className="text-purple-600 hover:underline" onClick={handleClick}>Login now</a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Signup;
