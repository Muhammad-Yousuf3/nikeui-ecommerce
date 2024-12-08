import Image from 'next/image';

export default function CheckoutPage() {
  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        
        {/* Left Section: Delivery Options & Form */}
        <div>
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-lg font-semibold mb-4">How would you like to get your order?</h2>
            <p className="text-sm mb-4 text-gray-700">
              Customs regulation for India require a copy of the recipient’s KYC. 
              The address on the KYC needs to match the shipping address. Our carrier 
              will contact you via SMS/email to obtain a copy of your KYC. The KYC 
              will be stored securely and used solely for the purpose of clearing customs 
              (including sharing it with customs officials) for all orders and returns. 
              If your KYC does not match your shipping address, please 
              <a href="#" className="text-blue-600 underline ml-1">click here</a> for more information.
            </p>
            <div className="mb-6">
              <label className="inline-flex items-center space-x-2">
                <input type="radio" name="deliveryMethod" className="form-radio text-blue-600" defaultChecked />
                <span className="text-sm text-gray-700">Deliver It</span>
              </label>
            </div>

            {/* Static form structure, no functionality */}
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                <input 
                  type="text" 
                  placeholder="Enter your first name"
                  className="block w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                <input 
                  type="text" 
                  placeholder="Enter your last name"
                  className="block w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Address Line 1</label>
                <input 
                  type="text"
                  placeholder="Street Address, Company name, etc."
                  className="block w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Address Line 2 (optional)</label>
                <input 
                  type="text"
                  placeholder="Apartment, suite, unit, building, floor, etc."
                  className="block w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none"
                />
              </div>

              {/* Additional Fields */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Delivery Option</label>
                <select
                  className="block w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none"
                >
                  <option>Select an option...</option>
                  <option>Standard Delivery</option>
                  <option>Express Delivery</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Postal Code</label>
                <input 
                  type="text"
                  placeholder="e.g. 110001"
                  className="block w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Card Number</label>
                <input 
                  type="text"
                  placeholder="XXXX XXXX XXXX XXXX"
                  className="block w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Expiry Date (MM/YY)</label>
                  <input 
                    type="text"
                    placeholder="MM/YY"
                    className="block w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">CVC</label>
                  <input 
                    type="text"
                    placeholder="XXX"
                    className="block w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none"
                  />
                </div>
              </div>

              <button 
                type="button"
                className="w-full mt-6 py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 focus:outline-none"
              >
                Proceed to Pay
              </button>
            </div>
          </div>
        </div>

        {/* Right Section: Order Summary */}
        <div>
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-lg font-semibold mb-4">Order Summary</h2>
            <div className="flex justify-between text-sm text-gray-700 mb-2">
              <span>Subtotal</span>
              <span>₹ 20,890.00</span>
            </div>
            <div className="flex justify-between text-sm text-gray-700 mb-2">
              <span>Delivery/Shipping</span>
              <span>Free</span>
            </div>
            <hr className="my-4"/>
            <div className="flex justify-between font-semibold text-gray-900 text-sm mb-4">
              <span>Total</span>
              <span>₹ 20,890.00</span>
            </div>
            <p className="text-xs text-gray-500 mb-4">
              (The total reflects the price of your order, including duties and taxes)
            </p>
            <h3 className="text-sm font-medium mb-4 text-gray-700">Arrives Mon, 27 Mar – Wed, 12 Apr</h3>

            {/* Example product items */}
            <div className="flex items-center space-x-4 mb-4">
              <div className="w-16 h-16 relative">
                {/* Replace with your own images */}
                <Image
                  src="/nikeshirt.jpeg"
                  alt="Nike Dri-FIT ADV TechKnit Ultra Men's Short-Sleeve Running Top"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-md"
                />
              </div>
              <div className="text-sm text-gray-700">
                <p className="font-semibold">Nike Dri-FIT ADV TechKnit Ultra Men&apos;s Running Top</p>
                <p>Size: L</p>
                <p>₹ 3,895.00</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 relative">
                <Image
                  src="/nikeairmax90.jpeg"
                  alt="Nike Air Max 97 SE Men's Shoes"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-md"
                />
              </div>
              <div className="text-sm text-gray-700">
                <p className="font-semibold">Nike Air Max 97 SE Men&apos;s Shoes</p>
                <p>Size: UK 9</p>
                <p>₹ 16,995.00</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
