import React from 'react'
import './Policies.css'

function RefundPolicy() {
  return (
    <div className='policies-wrapper'>
        <div className='paddings innerWidth flexColStart policies-container'>
            <h1 className='header'>Refund Policy</h1>
            <p>
                At Ivanoceano, we are committed to ensuring transparent and fair practices across all transactions made through our owned platforms (such as Opusama, Atua) and custom client services. This Refund Policy applies to any current or future platforms and services we operate or provide.
            </p>

            <h2 className='sub-header'>1. Platform Transactions (Opusama, Atua, and others)</h2>
            <p>
                Transactions made through our platforms are typically final, unless otherwise stated on the specific platform.
            </p>
            <p>
                However, refunds may be considered in the following situations:
            </p>
            <p>• Duplicate payments.</p>
            <p>• Service failures or errors.</p>

            <h2 className='sub-sub-header'>How to Request a Refund</h2>
            <p>You may request a refund within 7 days of the transaction by:</p>
            <p>
                • Submitting a request through the support or help section of the platform (e.g., Opusama or Atua), or
            </p>
            <p>• Emailing ivanoceanoltd@gmail.com if no in-platform option is available</p>
            <p>Refunds will be assessed and processed within 5–15 business days, where eligible.</p>

            {/* Custom Projects (Client Work) */}
            <h2 className='sub-header'>2. Custom Projects (Client Work)</h2>
            <p>
                If you engage Ivanoceano for custom development (e.g., websites, software, mobile apps):
            </p>
            <p>• Deposits are non-refundable once development has commenced</p>
            <p>
                • Milestone payments may be partially refundable if the associated work has not started
            </p>
            <p>
                • Completed work is non-refundable unless otherwise stated in your contract
            </p>
            <p>Refund requests for project work must be submitted in writing to: ivanoceanoltd@gmail.com</p>

            {/* Payment Platforms & Gateways */}
            <h2 className='sub-header'>3. Payment Platforms & Gateways</h2>
            <p>
                Payments on our platforms may be processed via secure third-party payment providers (e.g., financial gateways, APIs).
            </p>
            <p>
                Refunds for such transactions are governed by this Refund Policy and may also be subject to the terms of the specific provider. If needed, disputes can be initiated via those providers directly, in accordance with their policies.
            </p>

            <p>
                For example, we may use providers like Flutterwave, Paystack, or others, depending on the platform or product.
            </p>

            {/* Non-Refundable Cases */}
            <h2 className='sub-header'>4. Non-Refundable Cases</h2>
            <p>We reserve the right to decline refund requests in cases such as:</p>
            <p>• Change of mind after purchase</p>
            <p>• Delays or issues caused by user error (e.g., incorrect details during payment)</p>
            <p>• Full delivery or access to a digital service or product</p>
        </div>
    </div>
  )
}

export default RefundPolicy
