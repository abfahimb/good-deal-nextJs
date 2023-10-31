import React from 'react';
import {AiFillGithub, AiFillLinkedin} from "react-icons/ai";
import {FaXTwitter} from "react-icons/fa6";

const FooterMain:React.FC = () => {
    const date = new Date();
    let thisYear = date.getFullYear();

    return (
        <footer className="footer-area footer-bg py-fix">
           <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 flex flex-row flex-wrap">
               <div className="basis-full sm:basis-1/2 md:basis-1/4">section 1</div>
               <div className="basis-full sm:basis-1/2 md:basis-1/4">
                   <h3 className="footer-title">Information</h3>
                   <ul>
                       <li><a href="about-us.html">About Us</a></li>
                       <li><a href="#">Delivery Information</a></li>
                       <li><a href="#">Privacy Policy</a></li>
                       <li><a href="#">Terms & Conditions</a></li>
                       <li><a href="#">Customer Service</a></li>
                   </ul></div>
               <div className="basis-full sm:basis-1/2 md:basis-1/4">
                   <h3 className="footer-title">My Accound</h3>
                   <ul>
                       <li><a href="my-account.html">My Account</a></li>
                       <li><a href="#">Order History</a></li>
                       <li><a href="wishlist.html">Wish List</a></li>
                       <li><a href="#">Newsletter</a></li>
                       <li><a href="#">Order History</a></li>
                   </ul>
               </div>
               <div className="basis-full sm:basis-1/2 md:basis-1/4"><
                   h3 className="footer-title">Get in touch</h3>
                   <ul>
                       <li><span>Address: </span>Your address goes here</li>
                       <li><span>Telephone Enquiry:</span> (012) 345 6789</li>
                       <li><span>Email: </span>demo@example.com</li>
                   </ul>
                   <div className="open-time">
                       <p>Open : <span>8:00 AM</span> - Close : <span>18:00 PM</span></p>
                       <p>Saturday - Sunday : Close</p>
                   </div></div>
           </div>
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 mt-8">
                <hr />
                <div className="flex flex-wrap pt-5 justify-between">
                    <p> Copyright © 2021 - {thisYear} Abdullah, All Rights Reserved.</p>
                    <div>
                        <a href="https://github.com/abfahimb/good-deal-nextJs" target="_blank"><AiFillGithub /></a>
                        <a href="https://www.linkedin.com/in/abfahimb/" target="_blank"><AiFillLinkedin /></a>
                        <a href="https://twitter.com/abfahimb" target="_blank"><FaXTwitter /></a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default FooterMain;