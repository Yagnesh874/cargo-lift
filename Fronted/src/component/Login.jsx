
import { useNavigate } from 'react-router-dom';

import login from '../assets/loginimg.jpg'
const Login = () => {

    const navigate = useNavigate()
    function handlClick() {
        navigate('/user/register')
    }
    return (

        <div className="bg-purple-700 min-h-screen flex items-center justify-center">
            <div className="bg-white rounded-lg shadow-lg max-w-4xl w-full flex flex-col md:flex-row">


                <div className="relative w-full md:w-1/2">
                    <img src={login} alt="Laptop and person" className="w-full h-full object-cover rounded-t-lg md:rounded-l-lg md:rounded-t-none" />
                    <div className="absolute inset-0 bg-purple-600 opacity-70"></div>
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-6 text-center">
                        <h2 className="text-2xl font-bold mb-2">Every new friend is a
                            new adventure</h2>
                        <p className="text-sm">Let's get connected</p>
                    </div>
                </div>


                <div className="w-full md:w-1/2 p-8">
                    <h2 className="text-2xl font-bold mb-6">Login</h2>
                    <form className="space-y-6">
                        <div className="flex items-center border-b-2 border-gray-300 py-2">
                            <span className="text-purple-600 mr-2">👤</span>
                            <input type="text" placeholder="Enter your name" className="w-full focus:outline-none" />
                        </div>


                        <div className="flex items-center border-b-2 border-gray-300 py-2">
                            <span className="text-purple-600 mr-2">🔒</span>
                            <input type="password" placeholder="Enter your password" className="w-full focus:outline-none" />
                        </div>

                        <div>
                            <a href="#" className='text-red-600 '>Forgot Password?</a>
                        </div>

                        <button type="submit" className="w-full bg-purple-600 text-white py-2 rounded hover:bg-purple-700 transition">
                            Submit
                        </button>
                        <p className="text-sm mt-4 text-gray-600 text-center">
                            Already have an account? <a href="#" className="text-purple-600 hover:underline" onClick={handlClick}>Register now</a>
                        </p>
                    </form>

                </div>

            </div>

        </div>
    );
};

export default Login;
