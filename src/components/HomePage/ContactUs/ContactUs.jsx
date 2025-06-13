import './ContactUs.css';
import { MdEmail } from "react-icons/md";

const ContactUs = () => {
  return (
    <section
        id='contactUs'
        className="contact-wrapper"
    >
        <div className="paddings innerWidth flexColStart contact-container">
            <h1 className="primaryText">Contact Us</h1>

            {/* Contact details */}
          <div className="contact-details">

            {/* Email*/}
            <div className='contact-row'>
                <div className='contact-item'>
                    <MdEmail className="contact-icon" />
                    <span className="contact-item">
                      ivanoceanoltd@gmail.com
                    </span>
                </div>
            </div>
          </div>

        </div>
    </section>
  );
};

export default ContactUs;