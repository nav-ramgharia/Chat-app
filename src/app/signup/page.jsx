import React from 'react';
import Link from 'next/link';

const SignupPage = () => {
    return (
        <div className="bg-black w-full mx-auto flex items-center justify-center min-h-screen px-4">
            <div className="row flex flex-col md:flex-row w-full md:w-5/8 max-w-6xl">
                {/* Left Image Section */}
                <div
                    className="w-full md:w-1/2 min-h-[400px] bg-cover bg-center bg-no-repeat rounded-xl border flex items-center justify-center"
                    style={{ backgroundImage: "url('/images/bouncing.jpg')" }}
                >
                    <div className="w-6/8 rounded-md bg-black/50 backdrop-blur-xl text-white p-6">
                        <div className="network border-none w-2/6 border px-4 text-white py-1 bg-white/30 backdrop-blur-md text-sm text-black h-10 flex items-center justify-center" style={{ wordSpacing: '3px' }}>
                            THEGOOD NETWORK
                        </div>
                        <span className="text-white text-xs inline-block mt-8">welcome</span>
                        <h3 className="text-2xl tracking-wide" style={{ wordSpacing: '1px' }}>
                            Create your account
                        </h3>
                        <p className="text-[10px] mt-2">Join the world’s best network and communities.</p>
                        <p className="text-[10px]">We are excited to have you here.</p>
                        <p className="mt-6">Already have an account?</p>
                        <h3 className="font-bold">
                            <Link href="/login" className="text-teal-400 hover:underline">
                                Log in
                            </Link>
                        </h3>
                    </div>
                </div>

                {/* Signup Form Section */}
                <div className="page w-full md:w-1/2 bg-white rounded-xl flex items-center">
                    <div className="signup w-6/8 mx-auto h-100 mt-13 bg-white">
                        <p className="text-3xl font-bold mb-6">Sign Up</p>

                        <form className="w-full max-w-md mx-auto p-4 rounded-lg shadow-md bg-white text-xs">
                            <label htmlFor="email" className="block text-gray-800 font-semibold mb-1">
                                Email address
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Enter your email"
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition mb-4 text-xs"
                            />

                            <label htmlFor="password" className="block text-gray-800 font-semibold mb-1">
                                Password
                            </label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                placeholder="Enter your password"
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition mb-4 text-xs"
                            />

                            <label htmlFor="confirmPassword" className="block text-gray-800 font-semibold mb-1">
                                Confirm Password
                            </label>
                            <input
                                type="password"
                                id="confirmPassword"
                                name="confirmPassword"
                                placeholder="Confirm your password"
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition mb-4 text-xs"
                            />

                            <label className="flex items-center mb-4 text-xs text-gray-700">
                                <input type="checkbox" className="mr-2" />
                                Show password
                            </label>

                            <button
                                type="submit"
                                className="w-full bg-teal-600 hover:bg-teal-700 text-white font-semibold py-2 rounded-md mb-4 transition"
                            >
                                Sign Up
                            </button>

                        

                           
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignupPage;
