import React from 'react';

class Footer extends React.Component {
    render() {
        return (
            <>
                <footer className="footer">
        <nav className="footer-links">
            <a href="home.html">Home</a> |
            <a href="products.html">Products</a> |
            <a href="contact.html">Contact</a> |
        </nav>
        <figure className="icons">
            <a href="helpusmakeachange2018@gmail.com" class="fa fa-google"></a>
            <a href="https://www.facebook.com/profile.php?id=100006826842072&sk=about&section=contact-info&lst=100006826842072%3A100006826842072%3A1585589858" class="fa fa-facebook"></a>
            <a href="https://www.youtube.com/channel/UCR__rpmy2U4YQuDC0Bin4aA/videos" className="fa fa-youtube"></a>
            <a href="https://www.instagram.com/foster_care_awareness18/" className="fa fa-instagram"></a>
            </figure>
            <p>
                <a href="http://jigsaw.w3.org/css-validator/check/referer">
                    <img className="cssValidate"
                        src="http://jigsaw.w3.org/css-validator/images/vcss"
                        alt="Valid CSS!"></img> 
                </a>
            </p>
            <p>
                <a href="http://jigsaw.w3.org/css-validator/check/referer">
                    <img className="cssValidate" 
                        src="http://jigsaw.w3.org/css-validator/images/vcss-blue"
                        alt="Valid CSS!"></img>
                    </a>
                </p>
    </footer>
            </>
        )
    }
}
export default Footer;