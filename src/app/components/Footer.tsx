
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-black text-gray-300 text-sm">
      {/* Upper Section */}
      <div className="max-w-7xl mx-auto px-4 py-10">
        <div className="flex flex-col md:flex-row md:justify-between space-y-10 md:space-y-0">
          {/* Left Columns */}
          <div className="flex-1 flex flex-wrap">
            {/* Column 1 */}
            <div className="min-w-[150px] mr-10 mb-6 md:mb-0">
              <h3 className="text-white font-semibold mb-4 text-xs">FIND A STORE</h3>
              <ul className="space-y-2 text-xs">
                <li>
                  <Link href="#" className="hover:underline">Become a Member</Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">Sign Up for Email</Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">Send Us Feedback</Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">Student Discounts</Link>
                </li>
              </ul>
            </div>

            {/* Column 2 */}
            <div className="min-w-[150px] mr-10 mb-6 md:mb-0">
              <h3 className="text-white font-semibold mb-4 text-xs">GET HELP</h3>
              <ul className="space-y-2 text-xs">
                <li>
                  <Link href="#" className="hover:underline">Order Status</Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">Delivery</Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">Returns</Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">Payment Options</Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">Contact Us On Nike.com Inquiries</Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">Contact Us On All Other Inquiries</Link>
                </li>
              </ul>
            </div>

            {/* Column 3 */}
            <div className="min-w-[150px] mr-10 mb-6 md:mb-0">
              <h3 className="text-white font-semibold mb-4 text-xs">ABOUT NIKE</h3>
              <ul className="space-y-2 text-xs">
                <li>
                  <Link href="#" className="hover:underline">News</Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">Careers</Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">Investors</Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">Sustainability</Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Social Icons Section */}
          <div className="flex space-x-4">
            <Link href="#" aria-label="Twitter" className="hover:text-white">
              <svg width="24" height="24" fill="currentColor">
                <path d="M8 19c7.732 0 12-6.16 12-11.5v-.5a8 8 0 0 0 2-2 8 8 0 0 1-2.357.64A3.935 3.935 0 0 0 20.5 4a4.037 4.037 0 0 0-4 4c0 .313.036.616.105.906A11.3 11.3 0 0 1 3 4.5a4.006 4.006 0 0 0 1.344 5.333A4 4 0 0 1 2 9.2v.05a4.03 4.03 0 0 0 3.235 3.946 4 4 0 0 1-1.775.07A4.04 4.04 0 0 0 6.7 16a8.089 8.089 0 0 1-5.067 1.7c-.33 0-.657-.02-.98-.06A11.3 11.3 0 0 0 8 19z"/>
              </svg>
            </Link>
            <Link href="#" aria-label="Facebook" className="hover:text-white">
              <svg width="24" height="24" fill="currentColor">
                <path d="M9 8H7v4h2v12h5V12h3.642l.358-4H14V6.667C14 6.298 14.298 6 14.667 6H15V2h-2.667C10.64 2 9 3.64 9 5.333V8z"/>
              </svg>
            </Link>
            <Link href="#" aria-label="Youtube" className="hover:text-white">
              <svg width="24" height="24" fill="currentColor">
                <path d="M21.8 7.2c-.2-.8-.8-1.4-1.6-1.6C18.4 5.2 12 5.2 12 5.2s-6.4 0-8.2.4c-.8.2-1.4.8-1.6 1.6C2 9 2 12 2 12s0 3 .2 4.8c.2.8.8 1.4 1.6 1.6C5.6 18.8 12 18.8 12 18.8s6.4 0 8.2-.4c.8-.2 1.4-.8 1.6-1.6.2-1.8.2-4.8.2-4.8s0-3-.2-4.8zM10 15V9l5 3-5 3z"/>
              </svg>
            </Link>
            <Link href="#" aria-label="Instagram" className="hover:text-white">
              <svg width="24" height="24" fill="currentColor">
                <path d="M16 1H8C4.7 1 2 3.7 2 7v8c0 3.3 2.7 6 6 6h8c3.3 0 6-2.7 6-6V7c0-3.3-2.7-6-6-6zm4 14c0 2.2-1.8 4-4 4H8c-2.2 0-4-1.8-4-4V7c0-2.2 1.8-4 4-4h8c2.2 0 4 1.8 4 4v8z"/>
                <path d="M12 7a5 5 0 1 0 .001 10.001A5 5 0 0 0 12 7zm0 8A3 3 0 1 1 12 9a3 3 0 0 1 0 6zm3.5-8.5a1 1 0 1 0 0-2.001 1 1 0 0 0 0 2.001z"/>
              </svg>
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col md:flex-row md:justify-between md:items-center space-y-4 md:space-y-0">
          {/* Left bottom info */}
          <div className="flex items-center space-x-3 text-xs text-gray-400">
            <span>Pakistan</span>
            <span>© 2023 Nike, Inc. All Rights Reserved</span>
          </div>

          {/* Bottom Links */}
          <div className="flex space-x-4 text-xs text-gray-400">
            <Link href="#" className="hover:text-white">Guides</Link>
            <Link href="#" className="hover:text-white">Terms of Sale</Link>
            <Link href="#" className="hover:text-white">Terms of Use</Link>
            <Link href="#" className="hover:text-white">Nike Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
