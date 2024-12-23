import Image from "next/image";

export default function Login() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <header className="bg-gray-100 py-6">
        <div className="container mx-auto px-4">
          <h1 className="text-xl sm:text-2xl font-bold text-blue-900">My Account</h1>
          <p className="text-xs sm:text-sm text-gray-500">
            Home / Pages / <span className="text-pink-500">My Account</span>
          </p>
        </div>
      </header>

      {/* Main Section */}
      <main className="container mx-auto px-4 flex flex-col items-center">
        <div className="bg-white shadow-md rounded-lg p-6 sm:p-8 mt-6 sm:mt-12 max-w-full sm:max-w-md w-full">
          <h2 className="text-lg sm:text-xl font-semibold text-center text-gray-800">Login</h2>
          <p className="text-center text-gray-600 text-sm mb-6">
            Please login using account details below.
          </p>

          {/* Form */}
          <form className="space-y-4">
            <div>
              <input
                type="email"
                placeholder="Email Address"
                className="w-full border border-gray-300 rounded-lg p-2 sm:p-3 focus:outline-none focus:ring-2 focus:ring-pink-400"
              />
            </div>
            <div>
              <input
                type="password"
                placeholder="Password"
                className="w-full border border-gray-300 rounded-lg p-2 sm:p-3 focus:outline-none focus:ring-2 focus:ring-pink-400"
              />
            </div>
            <div className="text-right">
              <a href="#" className="text-xs sm:text-sm text-gray-500 hover:text-pink-500">
                Forgot your password?
              </a>
            </div>
            <button
              type="submit"
              className="bg-pink-500 text-white w-full py-2 sm:py-3 rounded-lg font-semibold hover:bg-pink-600"
            >
              Sign In
            </button>
          </form>

          <p className="text-center text-gray-600 text-xs sm:text-sm mt-6">
            Don&apos;t have an account?{""}
            <a href="#" className="text-pink-500 hover:underline">
              Create account
            </a>
          </p>
        </div>
         <div className="flex justify-center items-center ">
    <Image className="py-20" src="post-3/16.svg" alt="post-16" width="904" height="93" />
</div>
      </main>
    </div>
  );
}
