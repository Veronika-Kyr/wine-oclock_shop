import React from 'react';
import logoFooter from '../assets/images/logoFooter.png'
import '../assets/styles/footer.scss'
//import "../assets/styles/Button.scss"



export default function Footer() {
    return (
        <div className='footer'>
            <div className='footerSections'>

                <div className='footerSectionColumn'>
                    <h4>
                        INFORMATION
                    </h4>
                    <ul>
                        <li>About us</li>
                        <li>Contacts</li>
                        <li>Terms of delivery and payments</li>
                        <li>Privacy policy</li>
                        <li>User agreement</li>

                    </ul>

                </div>
                <div className='footerSectionColumn'>
                    <div>
                        <h4>
                            DELIVERY
                        </h4>
                        <ul>
                            <li>Mon-Fri 11:00-21:00</li>
                            <li>Sat-Sun 11:00-20:00</li>
                        </ul>
                    </div>
                    <div>
                        <h4>
                            PAYMENT
                        </h4>
                        {/*  <img src={logo} alt='a logo of Mastercard' />
                        <img src={logo} alt='a logo of VISA' />
    <img src={logo} alt='a logo of ApplePay' />*/}


                    </div>
                </div>
                <div className='footerSectionColumn'>
                    <h4>
                        CALL CENTRE WORKING HOURS
                    </h4>
                    <ul>
                        <li>Mon-Fri 08:00-19:00</li>
                        <li>Sat-Sun 10:00-17:00</li>
                    </ul>

                </div>
                <div className='footerSectionColumn'>
                    <div>
                        <h4>
                            RECEIVE NEWS AND DISCOUNTS
                        </h4>

                        <p>email</p>
                    </div>
                    <div >
                        <h4>
                            SOCIAL NETWORKS
                        </h4>
                        <ul>
                            <li>Instagram</li>
                            <li>Telegram</li>
                            <li>Facebook</li>

                        </ul>

                    </div>

                </div>

            </div>


            <img src={logoFooter} alt='wine store logo, which can be interpreted as a sand clock made from the wineglasses' />


        </div>
    )
}