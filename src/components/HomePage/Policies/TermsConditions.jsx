import React from 'react'
import './Policies.css'
import { useNavigate } from 'react-router-dom';

function TermsConditions() {
    const navigate = useNavigate();
    
  return (
    <div className='policies-wrapper'>
        <div className='paddings innerWidth flexColStart policies-container'>
            <h1 className='header'>Terms & Conditions</h1>
            <p>
                These Terms and Conditions (“Terms”) govern your access to and use of all products, platforms, and services operated by Ivanoceano — including but not limited to Opusama, Atua, and any additional platforms or custom services we develop or maintain.
            </p>
            <p>
                By using our platforms or services, you agree to be bound by these Terms.
            </p>

            {/* Use of Our Platforms */}
            <h2 className='sub-header'>1. Use of Our Platforms</h2>
            <p>
                You may use Ivanoceano platforms and services only for lawful purposes. You agree not to misuse or attempt to disrupt the integrity or performance of our services.
            </p>
            <p>
                We reserve the right to suspend access for violations of these Terms.
            </p>
            
            {/* Account Registration */}
            <h2 className='sub-header'>2. Account Registration</h2>
            <p>
                Some services require account creation. You must provide accurate information and keep your credentials secure. You are responsible for all activity under your account.
            </p>

            {/* Payments */}
            <h2 className='sub-header'>3. Payments</h2>
            <p>
                Payments made on Ivanoceano platforms may be processed through third-party providers (e.g., financial payment gateways). By completing a transaction, you agree to:
            </p>
            <p>• Pay all applicable fees</p>
            <p>• Abide by the payment provider's terms</p>
            <p>• Ensure your payment details are accurate and authorized</p>

            <p>We do not store payment information directly. Please refer to our <span className='goToLink' onClick={() => navigate('/privacy_policy')}>Privacy Policy</span> for more details.</p>

            {/* Refunds */}
            <h2 className='sub-header'>4. Refunds</h2>
            <p>
                Our <span className='goToLink' onClick={() => navigate('/refund_policy')}>Refund Policy</span> governs eligibility and the refund request process. Refunds may be issued in specific cases such as duplicate charges or service errors, but are not guaranteed.
            </p>

            {/* 5. Custom Services */}
            <h2 className='sub-header'>5. Custom Services</h2>
            <p>For bespoke projects (e.g., app or website development):</p>
            <p>• Deliverables, timelines, and payment terms will be outlined in a separate contract</p>
            <p>• Deposits are non-refundable once development begins</p>
            <p>• Ownership and licensing of work will be clearly defined in the agreement</p>

            {/* Intellectual Property */}
            <h2 className='sub-header'>6. Intellectual Property</h2>
            <p>
                All content, branding, software, and designs on our platforms are owned by or licensed to Ivanoceano and may not be copied, resold, or exploited without permission.
            </p>

            {/* Data Use and Privacy */}
            <h2 className='sub-header'>7. Data Use and Privacy</h2>
            <p>While Ivanoceano may not currently collect user data directly, our platforms may collect data such as:</p>
            <p>• Platform usage statistics</p>
            <p>• Device and location info</p>
            <p>• Voluntary contact or support requests</p>

            <p>
                We reserve the right to update our data practices as our services evolve. Please review our <span className='goToLink' onClick={() => navigate('/privacy_policy')}>Privacy Policy</span> for details on how data may be collected and used.
            </p>

            {/* Disclaimers & Limitations */}
            <h2 className='sub-header'>8. Disclaimers & Limitations</h2>
            <p>We provide our services "as is" without warranties of any kind. Ivanoceano is not liable for:</p>
            <p>• Errors outside our control (e.g., internet disruptions, payment provider downtime)</p>
            <p>• Losses resulting from misuse of the service</p>
            <p>• Data loss or security breaches not caused by our negligence</p>

            {/* Modifications */}
            <h2 className='sub-header'>9. Modifications</h2>
            <p>
                We may update these Terms periodically. Continued use after updates indicates acceptance of the revised Terms.
            </p>

            {/* Contact Us */}
            <h2 className='sub-header'>10. Contact Us</h2>
            <p>If you have any questions about these Terms, please contact: ivanoceanoltd@gmail.com </p>
        </div>
    </div>
  )
}

export default TermsConditions
