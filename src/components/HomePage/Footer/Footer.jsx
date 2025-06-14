import './Footer.css';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
    
    const navigate = useNavigate();

    const navigateToContact = () => {
        const signInElement = document.getElementById('contact');
        if (signInElement) {
            const elementTop = signInElement.getBoundingClientRect().top + window.scrollY - 80; // Adjust for any fixed headers
            window.scrollTo({ top: elementTop, behavior: 'smooth' });
        }
    };

    return (
        <footer className="footer-container">
            <div className="footer-content">
                <p className="footer-text">
                    &copy; {new Date().getFullYear()} Ivanoceano. All rights reserved.
                </p>
                <div className="footer-links">
                    <div 
                        className='footer-link-con'
                        onClick={() =>
                            navigate('/terms_and_conditions')
                        }
                    >
                        <p className="footer-link">Terms & Conditions</p>
                    </div>

                    <div 
                        className='footer-link-con'
                        onClick={() =>
                            navigate('/privacy_policy')
                        }
                    >
                        <p className="footer-link">Privacy Policy</p>
                    </div>
                    
                    <div 
                        className='footer-link-con'
                        onClick={() =>
                            navigate('/refund_policy')
                        }
                    >
                        <p className="footer-link">Refund Policy</p>
                    </div>

                    
                    <button className="footer-link"
                    onClick={navigateToContact}>
                        Contact Us
                    </button>
                </div>
            </div>
        </footer>
    );
};

export default Footer;