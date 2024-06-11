import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="mb-0 text-center">
        <div className="d-flex align-items-center justify-content-center pb-5">
          <div className="col-md-6">
            <p className="mb-3 mb-md-0">
              Discover the unique charm and quality of our handmade products. Each item is crafted with care and precision, showcasing the artisan's skill and dedication. From intricate paintings to beautifully designed home decor, our collection brings a touch of originality and craftsmanship into your home. Embrace the beauty of handmade with our exclusive selection.
            </p>
            <div className="mt-3">
              <Link to="/privacy-policy" className="mx-2">Privacy Policy</Link>
              <Link to="/terms-and-conditions" className="mx-2">Terms and Conditions</Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
