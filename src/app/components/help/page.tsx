export default function Home() {
    return (
      <div className="w-full min-h-screen bg-white text-black font-sans">
        {/* Header Section */}
        <header className="border-b border-gray-200">
          <div className="max-w-screen-xl mx-auto px-4 md:px-8 py-4 flex items-center justify-between">
            <h1 className="text-xl font-semibold tracking-wide">GET HELP</h1>
            <div className="relative w-full max-w-sm ml-8">
              <input 
                type="text" 
                placeholder="What can we help you with?" 
                className="w-full border border-gray-300 rounded-full px-4 py-2 focus:outline-none"
              />
              <span className="absolute right-3 top-2 text-gray-400">
                {/* Search Icon (optional) */}
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" 
                     viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" 
                        d="M8 4a4 4 0 014 4m0 0a4 4 0 00-4 4m4-4h8m-8 0H4m8 4a4 4 0 104 4 4 4 0 00-4-4z"/>
                </svg>
              </span>
            </div>
          </div>
        </header>
  
        {/* Main Content Section */}
        <div className="max-w-screen-xl mx-auto px-4 md:px-8 py-8 flex flex-col lg:flex-row gap-8">
          {/* Left Column */}
          <div className="flex-1 min-w-0">
            <h2 className="text-2xl font-bold mb-4">
              WHAT PAYMENT OPTIONS CAN I USE ON NIKE ORDERS?
            </h2>
            <p className="text-base text-gray-700 mb-4">
              We want to make buying your favourite Nike shoes and gear online fast and easy, and we accept the following payment options:
            </p>
  
            <ul className="list-disc ml-6 text-gray-700 mb-4">
              <li>Visa</li>
              <li>Mastercard</li>
              <li>Diners Club</li>
              <li>Discover</li>
              <li>American Express</li>
              <li>Visa Electron</li>
              <li>Maestro</li>
            </ul>
  
            <p className="text-base text-gray-700 mb-4">
              If you enter your PAN information at checkout, you’ll be able to pay for your order with PayTM or a local credit or debit card.
            </p>
  
            <p className="text-base text-gray-700 mb-4">
              <strong>Apple Pay</strong><br />
              Nike Members can store multiple debit or credit cards in their profile for faster checkout. If you’re not already a Member, <a href="#" className="text-blue-600 underline">join us today</a>.
            </p>
  
            {/* FAQs */}
            <h3 className="text-xl font-semibold mb-4">FAQs</h3>
  
            <div className="mb-6">
              <h4 className="font-semibold text-lg mb-2">Does my card need international purchases enabled?</h4>
              <p className="text-gray-700 mb-2">
                Yes, we recommend asking your bank to enable international purchases on your card. You will be notified at checkout if international purchases need to be enabled.
              </p>
              <p className="text-gray-700 mb-2">
                Please note, some banks may charge a small <a href="#" className="text-blue-600 underline">transaction fee</a> for international orders.
              </p>
            </div>
  
            <div className="mb-6">
              <h4 className="font-semibold text-lg mb-2">Can I pay for my order with multiple methods?</h4>
              <p className="text-gray-700 mb-2">
                No, payment for Nike orders can’t be split between multiple payment methods.
              </p>
            </div>
  
            <div className="mb-6">
              <h4 className="font-semibold text-lg mb-2">What payment method is accepted for SNKRS orders?</h4>
              <p className="text-gray-700 mb-2">
                You can use any accepted credit card to pay for your SNKRS order.
              </p>
            </div>
  
            <div className="mb-6">
              <h4 className="font-semibold text-lg mb-2">Why don’t I see Apple Pay as an option?</h4>
              <p className="text-gray-700 mb-2">
                To see Apple Pay as an option in the Nike App or on Nike.com, you’ll need to use a compatible Apple device running the latest OS, be signed in to your iCloud account and have a supported card in your Wallet. Additionally, you’ll need to use Safari to use Apple Pay on Nike.com.
              </p>
            </div>
  
            {/* Was this helpful? */}
            <div className="flex items-center gap-4 mt-8">
              <span className="text-gray-700 font-semibold">Was this answer helpful?</span>
              <div className="flex items-center space-x-4">
                <button className="flex items-center text-gray-500 hover:text-gray-700 transition">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" 
                       strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-1">
                    <path strokeLinecap="round" strokeLinejoin="round" 
                          d="M14 9l-6 6m0 0l6 6m-6-6h18"/>
                  </svg>
                  Yes
                </button>
                <button className="flex items-center text-gray-500 hover:text-gray-700 transition">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" 
                       strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-1">
                    <path strokeLinecap="round" strokeLinejoin="round" 
                          d="M10 15l6-6m0 0l-6-6m6 6H0"/>
                  </svg>
                  No
                </button>
              </div>
            </div>
          </div>
  
          {/* Right Column - Contact Us */}
          <aside className="w-full lg:w-64 flex-shrink-0 border-t lg:border-t-0 lg:border-l border-gray-200 pt-8 lg:pt-0 lg:pl-8">
            <h3 className="text-xl font-semibold mb-4">CONTACT US</h3>
            <div className="mb-8">
              <div className="flex items-center mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-black mr-2" 
                     fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" 
                        d="M3 5h18M3 10h18M3 15h18M3 20h18"/>
                </svg>
                <div>
                  <p className="text-gray-800 font-semibold">000 800 919 0566</p>
                  <p className="text-gray-600 text-sm">Products & Orders: 24 hours a day, 7 days a week</p>
                  <p className="text-gray-600 text-sm">Company Info & Enquiries: 07:30 - 16:30, Monday - Friday</p>
                </div>
              </div>
            </div>
  
            <div className="mb-8">
              <div className="flex items-start mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-black mr-2" 
                     fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" 
                        d="M7.5 4.5h9m-9 3h9m-9 3h4.5"/>
                </svg>
                <div>
                  <p className="text-gray-800 font-semibold">24 hours a day</p>
                  <p className="text-gray-600 text-sm">7 days a week</p>
                </div>
              </div>
            </div>
  
            <div className="mb-8">
              <div className="flex items-start mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-black mr-2" 
                     fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" 
                        d="M3 8h18M3 16h18M12 8v8"/>
                </svg>
                <div>
                  <p className="text-gray-800 font-semibold">We’ll reply within five business days</p>
                </div>
              </div>
            </div>
  
            <div>
              <div className="flex items-start mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-black mr-2" 
                     fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" 
                        d="M8 21h8m-4-4v4m-6-6h12M12 9l-3-3m0 0l3-3m-3 3h12"/>
                </svg>
                <div>
                  <p className="text-gray-800 font-semibold">STORE LOCATOR</p>
                  <p className="text-gray-600 text-sm">Find Nike retail stores near you</p>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    )
  }
  