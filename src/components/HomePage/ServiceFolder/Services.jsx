import './Services.css';
import { FaPhone, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";

const Services = () => {
  return (
    <section
        id='services'
        className="services-wrapper"
    >
        <div className="paddings innerWidth flexColStart services-container">
            <h1 className="primaryText">Services</h1>

            <p className="secondaryText">• Web & Mobile App Development</p>
            <p className="secondaryText">• UI/UX Design</p>
            <p className="secondaryText">• Software Engineering</p>
            <p className="secondaryText">• Cloud & DevOps</p>
            <p className="secondaryText">• API & System Integrations</p>
        </div>
    </section>
  );
};

export default Services;