'use client';
import Link from 'next/link';

const Login = () => {
  return (
    <div className="bg-black w-full flex items-center justify-center min-h-screen px-4">
      <div className="flex flex-col md:flex-row w-full md:w-5/6 max-w-6xl rounded-xl overflow-hidden">
        {/* Left side image + info */}
        <div
          className="w-full md:w-1/2 min-h-[400px] bg-cover bg-center bg-no-repeat flex items-center justify-center"
          style={{ backgroundImage: "url('/images/bouncing.jpg')" }}
        >
          <div className="w-4/5 bg-black/50 backdrop-blur-xl text-white p-6 rounded-md">
            <div className="border border-white/30 px-4 py-2 text-sm bg-white/20 backdrop-blur-md text-black text-center mb-4">
              THEGOOD NETWORK
            </div>
            <span className="text-xs">we are</span>
            <h3 className="text-2xl font-semibold mt-2" style={{ wordSpacing: '1px' }}>
              Invite only right now.
            </h3>
            <p className="text-[10px] mt-2">10 Million+ people have joined our network.</p>
            <p className="text-[10px]">we invite you to join the tribe.</p>
            <p className="mt-10 text-sm">New here?</p>
          </div>
        </div>

        {/* Right side login form */}
        <div className="w-full md:w-1/2 bg-white p-8 flex items-center">
          <div className="w-full max-w-md mx-auto">
            <h2 className="text-3xl font-bold mb-8">Login</h2>

            <form className="text-sm space-y-5">
              <div>
                <label htmlFor="email" className="block text-gray-700 font-semibold mb-1">
                  Email address
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
              </div>

              <div>
                <label htmlFor="password" className="block text-gray-700 font-semibold mb-1">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  placeholder="Enter your password"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
              </div>

              <label className="flex items-center text-gray-700 text-xs">
                <input type="checkbox" className="mr-2" />
                Show password
              </label>

              <button
                type="submit"
                className="w-full bg-teal-600 hover:bg-teal-700 text-white font-semibold py-3 rounded-md transition"
              >
                Login
              </button>

              <p className="text-center text-sm text-gray-500">or</p>

              <button
                type="button"
                className="w-full border border-gray-300 hover:border-gray-400 text-gray-700 font-semibold py-3 rounded-md flex items-center justify-center gap-2 transition"
              >
                <img
                  src="/images/google.webp"
                  alt="Google logo"
                  className="w-6 h-6"
                />
                Continue with Google
              </button>

              <p className="text-center text-gray-600 mt-6">
                Don&apos;t have an account?{' '}
                <Link href="/signup" className="text-teal-600 hover:underline font-semibold">
                  Sign up
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
