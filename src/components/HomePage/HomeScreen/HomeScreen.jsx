import Header from '../Header/Header';
import Hero from '../Hero/Hero';
import AboutUs from '../AboutUs/AboutUs';
import Products from '../Products/Products';
import Services from '../ServiceFolder/Services';
import ContactUs from '../ContactUs/ContactUs';
import Footer from '../Footer/Footer';

function Home (){
    return (
        <>
            <Header/>
            <Hero/>
            <AboutUs/>
            <Products/>
            <Services/>
            <ContactUs/>
            <Footer/>
        </>
    )
}

export default Home;