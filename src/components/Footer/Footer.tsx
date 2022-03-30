import React from 'react';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faDribbble, faVimeo } from '@fortawesome/free-brands-svg-icons';
import { faMapMarker, faEnvelope, faPhone, faArrowRight } from '@fortawesome/free-solid-svg-icons';


import '../../assets/style/Footer.css';
const Footer = () => {
   return(
	<>
	<div className="footer">
	  <div className="container">
		<div className="w3_footer_grids">
		  <div className="row">
			<div className="col-lg-3 col-md-6 col-sm-6 w3_footer_grid">
			  <h3>Contact</h3>
			  <ul className="address">
				<li>
				  <FontAwesomeIcon icon={faMapMarker} className="address-icon" />
				  1234k Avenue, 4th block, <span><span>New York City.</span></span>
				</li>
				<li>
				  <FontAwesomeIcon icon={faEnvelope} className="address-icon" />

				  <Link to="mailto:info@example.com">info@example.com</Link>
				</li>
				<li>
				  <FontAwesomeIcon icon={faPhone} className="address-icon" />
				  +1234 567 567
				</li>
			  </ul>
			</div>
			<div className="col-lg-3 col-md-6 col-sm-6 w3_footer_grid">
			  <h3>Information</h3>
			  <ul className="info">
				<li>
				  <FontAwesomeIcon icon={faArrowRight} className="arrow-right" />

				  <Link to="/aboutus">About Us</Link>
				</li>
				<li>
				  <FontAwesomeIcon icon={faArrowRight} className="arrow-right" />

				  <Link to="/contact">Contact Us</Link>
				</li>
				<li>
				  <FontAwesomeIcon icon={faArrowRight} className="arrow-right" />

				  <Link to="/contact">Short Codes</Link>
				</li>
				<li>
				  <FontAwesomeIcon icon={faArrowRight} className="arrow-right" />

				  <Link to="/faqs">FAQ's</Link>
				</li>
				<li>
				  <FontAwesomeIcon icon={faArrowRight} className="arrow-right" />

				  <Link to="/products">All Products</Link>
				</li>
			  </ul>
			</div>
			<div className="col-lg-3 col-md-6 col-sm-6 w3_footer_grid">
			  <h3>Category</h3>
			  <ul className="info">
				<li>
				  <FontAwesomeIcon icon={faArrowRight} className="arrow-right" />

				  <Link to="/signatures">Signatures</Link>
				</li>
				<li>
				  <FontAwesomeIcon icon={faArrowRight} className="arrow-right" />

				  <Link to="/snacks">Snacks</Link>
				</li>
				<li>
				  <FontAwesomeIcon icon={faArrowRight} className="arrow-right" />

				  <Link to="/dallemomos">Dalle Momos</Link>
				</li>
				<li>
				  <FontAwesomeIcon icon={faArrowRight} className="arrow-right" />

				  <Link to="/riceandnoodles">Rice and Noodles</Link>
				</li>
				<li>
				  <FontAwesomeIcon icon={faArrowRight} className="arrow-right" />

				  <Link to="/frozenitems">Frozen Items</Link>
				</li>
				<li>
				  <FontAwesomeIcon icon={faArrowRight} className="arrow-right" />

				  <Link to="/momo">Momo</Link>
				</li>

				<li>
				  <FontAwesomeIcon icon={faArrowRight} className="arrow-right" />

				  <Link to="/signature">Signature</Link>
				</li>
				
			  </ul>
			</div>
			<div className="col-lg-3 col-md-6 col-sm-6 w3_footer_grid">
			  <h3>Profile</h3>
			  <ul className="info">
				<li>
				  <FontAwesomeIcon icon={faArrowRight} className="arrow-right" />

				  <Link to="/products">Store</Link>
				</li>
				<li>
				  <FontAwesomeIcon icon={faArrowRight} className="arrow-right" />

				  <Link to="/placeorder">Check Out</Link>
				</li>
				<li>
				  <FontAwesomeIcon icon={faArrowRight} className="arrow-right" />

				  <Link to="/login">Login</Link>
				</li>
				<li>
				  <FontAwesomeIcon icon={faArrowRight} className="arrow-right" />

				  <Link to="/register">Create Account</Link>
				</li>
			  </ul>
			</div>
			<div className="clearfix"> </div>
		  </div>
		</div>
	  </div>

	  <div className="footer-copy">
		<div className="container">
		  <p>
			© 2017 Super Market. All rights reserved | Design by{' '}
			<a href="http://w3layouts.com/" target="_blank" rel="noreferrer">
			  W3layouts
			</a>
		  </p>
		</div>
	  </div>
	</div>
	<div className="footer-botm">
	  <div className="container">
		<div className="w3layouts-foot">
		  <ul className="socialBrands">
			<li>
			  <a href="https://www.w3schools.com/" target="_blank" rel="noreferrer" className="w3_agile_facebook">
				<FontAwesomeIcon icon={faFacebook} className="" />
			  </a>
			</li>
			<li>
			  <a href="https://twitter.com/" target="_blank" rel="noreferrer" className="agile_twitter">
				<FontAwesomeIcon icon={faTwitter} className="" />
			  </a>
			</li>
			<li>
			  <a href="https://dribbble.com" target="_blank" rel="noreferrer" className="w3_agile_dribble">
				<FontAwesomeIcon icon={faDribbble} className="" />
			  </a>
			</li>
			<li>
			  <a href="https://vimeo.com/" target="_blank" rel="noreferrer" className="w3_agile_vimeo">
				<FontAwesomeIcon icon={faVimeo} className="" />
			  </a>
			</li>
		  </ul>
		</div>
		<div className="payment-w3ls">
		  <img src = {require('../../assets/images/card.png')} alt=" " className="img-responsive" />
		</div>
		<div className="clearfix"> </div>
	  </div>
	</div>
  </>
   );
    }
export default Footer;
