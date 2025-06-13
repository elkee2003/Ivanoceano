import './AboutUs.css';

const AboutUs = () => {
  return (
    <section
        id='aboutMe'
        className="aboutMe-wrapper"
    >
        <div className="paddings innerWidth flexColStart aboutMe-container">
            <h1 className="primaryText">Who We Are</h1>
            <p className="secondaryText">
                Ivanoceano is a forward-thinking technology company focused on building purposeful digital experiences. We specialize in web development, mobile applications, and scalable software solutions that solve real-world problems for modern businesses.
            </p>
            
            <h3 className='sub-head'>
                Our Mission
            </h3>

            <div className='reasons'>
              <p>
                To empower individuals and organizations by transforming ideas into reliable, user-centric digital products that drive growth and innovation.
              </p>
            </div>

            <h3 className='sub-head'>
                Our Vision
            </h3>

            <div className='reasons'>
              <p>
                To become a leading force in Africa's digital evolution, where technology is a catalyst for everyday progress — in logistics, communication, finance, and beyond.
              </p>
            </div>
        </div>
    </section>
  );
};

export default AboutUs;