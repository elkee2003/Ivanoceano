import './Products.css';
import { LuCalendarClock } from "react-icons/lu";

const Products = () => {
  return (
    <section
        id='products'
        className="product-wrapper"
    >
        <div className="paddings innerWidth flexColStart product-container">
            <h1 className="primaryText">Products</h1>

            <div className='productImage-container'>

                {/* Atua */}
                <a
                    href="https://atualog.com"
                    className="product-link"
                >
                    <div className='product-item'>
                        <img 
                            src={'./Atua logo.png' }
                            alt="Atua Logo" 
                            className='product-image'
                        />
                        <p>
                            Atua
                        </p>
                    </div>
                </a>

                {/* Opusama */}
                <a
                    href="https://opusama.com"
                    className="product-link"
                >
                    <div className='product-item'>
                        <img 
                            src={'./Opusama logo.png' }
                            alt="Opusama Logo" 
                            className='product-image'
                        />
                        <p>
                            Opusama
                        </p>
                    </div>
                </a>

                {/* Answerace */}
                <a
                    href="https://answerace.netlify.app/"
                    className="product-link"
                >
                    <div className='product-item'>
                        <img 
                            src={'./Answerace logo.png' }
                            alt="Answerace Logo" 
                            className='product-image' 
                        />
                        <p>
                            Answerace
                        </p>
                    </div>
                </a>
            </div>
        </div>
    </section>
  );
};

export default Products;