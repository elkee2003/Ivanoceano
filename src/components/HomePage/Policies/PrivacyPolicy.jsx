import React from 'react'
import './Policies.css'

function PrivacyPolicy() {
  return (
    <div className='policies-wrapper'>
        <div className='paddings innerWidth flexColStart policies-container'>
            <h1 className='header'>Privacy Policy</h1>
            <p>
                Ivanoceano is a technology company that builds and maintains digital products — including platforms like Opusama and Atua, as well as other current and future proprietary products, and custom projects developed for clients.

                This Privacy Policy outlines how we collect, use, and protect your personal information.
            </p>

            <h2 className='sub-header'>1. Information We May Collect</h2>
            <p>We may collect information directly from you when you:</p>
            <p>• Use any Ivanoceano product (e.g., Opusama, Atua)</p>
            <p>• Hire us for custom software or development work</p>
            <p>• Interact with our website or support teams</p>

            <p>Data we may collect includes:</p>
            <p>• Name, email, phone number</p>
            <p>• Billing and payment information</p>
            <p>• Business or project details</p>
            <p>• App usage data and analytics (if relevant)</p>

            <p className='note'>Note: As of now, we do not collect data directly through the Ivanoceano website, but may do so in the future.</p>

            {/* How We Use Your Information */}
            <h2 className='sub-header'>2. How We Use Your Information</h2>
            <p>We use your data to:</p>
            <p>• Provide access to our products and services</p>
            <p>• Process payments securely via trusted third-party payment platforms</p>
            <p>• Deliver project updates, invoices, and support</p>
            <p>• Improve our platforms and services</p>
            <p>• Comply with legal obligations</p>

            {/* Data Sharing */}
            <h2 className='sub-header'>3. Data Sharing</h2>
            <p>We do not sell your data.</p>
            <p>We may share information with:</p>
            <p>• Trusted third-party services (such as secure payment processors and analytics providers)</p>
            <p>• Internal teams working on your project</p>
            <p>• Legal authorities if required by law</p>

            {/* Cookies & Analytics */}
            <h2 className='sub-header'>4. Cookies & Analytics</h2>
            <p>Our platforms may use cookies or tracking technologies to understand how users interact with the service, to improve performance.</p>

            <div>
                <p>
                    You may contact us to request access to, update, or delete any personal data we may have collected at: <span className='goToLink'>ivanoceanoltd@gmail.com</span>
                </p>
            </div>
        </div>
    </div>
  )
}

export default PrivacyPolicy
