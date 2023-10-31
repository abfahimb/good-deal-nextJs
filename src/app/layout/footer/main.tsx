import React from 'react';

const FooterMain:React.FC = () => {
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
        </footer>
    );
};

export default FooterMain;