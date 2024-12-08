import Image from 'next/image'

export default function HomePage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white p-4">
      <div className="w-full max-w-sm flex flex-col items-center">
        {/* Logo */}
        <div className="mb-8">
          {/* Replace with your own Nike logo image if desired */}
          <Image 
            src="/nikelogo.png" 
            alt="Nike Logo" 
            width={40} 
            height={40} 
            className="mx-auto"
          />
        </div>

        {/* Title */}
        <h1 className="text-center font-semibold text-base mb-6 tracking-tight">
          YOUR ACCOUNT <br /> FOR EVERYTHING <br /> NIKE
        </h1>

        {/* Form Fields */}
        <div className="w-full space-y-4 mb-4">
          <input
            type="email"
            placeholder="Email address"
            className="w-full border border-gray-300 rounded-sm py-2 px-3 text-sm focus:outline-none focus:ring-1 focus:ring-black"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full border border-gray-300 rounded-sm py-2 px-3 text-sm focus:outline-none focus:ring-1 focus:ring-black"
          />
        </div>

        {/* Keep me signed in / Forgot password */}
        <div className="flex items-center justify-between w-full text-sm mb-4">
          <label className="flex items-center text-gray-700 space-x-2">
            <input type="checkbox" className="form-checkbox h-4 w-4 border-gray-300 rounded-sm focus:ring-black" />
            <span>Keep me signed in</span>
          </label>
          <a href="#" className="text-sm text-gray-700 underline">
            Forgotten your password?
          </a>
        </div>

        {/* Terms */}
        <p className="text-center text-xs text-gray-700 mb-6">
          By logging in, you agree to Nike’s <a href="#" className="underline">Privacy Policy</a> <br />
          and <a href="#" className="underline">Terms of Use</a>.
        </p>

        {/* Sign In Button */}
        <button 
          type="button" 
          className="w-full bg-black text-white py-3 text-sm font-medium rounded-sm tracking-wide hover:bg-gray-900 focus:outline-none"
        >
          SIGN IN
        </button>

        {/* Sign Up Link */}
        <p className="text-sm text-gray-900 mt-6">
          Not a Member? <a href="#" className="underline">Join Us.</a>
        </p>
      </div>
    </div>
  )
}
