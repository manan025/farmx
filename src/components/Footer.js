import React from 'react'
import './Footer.css'
import Hol from '../static/whitess.png'
const Footer = () => {
    return (
        <>
            <div className="full">                
            <div className="footer">
                <div className="loging">
                    <div className="hol">
                        <img src={Hol} alt="" />
                    </div>
                    <div className="shit">
                        <p>hyperLocalization and More</p>
                    </div>
                </div>
                <div className="linkss">
                    <div className="soojao">
                        <h2>Product</h2>
                        <div className="fist">
                        <a href="https://hlo.vercel.app/">Features</a>
                        <a href="https://hlo.vercel.app/">Integrations</a>
                        <a href="https://hlo.vercel.app/">Documents</a>
                        <a href="https://hlo.vercel.app/">FAQ's</a>
                        <a href="https://hlo.vercel.app/">Pricing</a>
                    </div>
                    </div>
                     <div className="soojao">
                        <h2>About</h2>
                        <div className="fist">
                        <a href="https://hlo.vercel.app/">Our Story</a>
                        <a href="https://hlo.vercel.app/">Company</a>
                        <a href="https://hlo.vercel.app/">Privacy</a>
                        <a href="https://hlo.vercel.app/">Blog</a>
                        <a href="https://hlo.vercel.app/">More</a>
                    </div>
                    </div>
                    <div className="soojao">
                        <h2>Contact</h2>
                        <div className="fist">
                        <a href="https://hlo.vercel.app/">Advertising</a>
                        <a href="https://hlo.vercel.app/">Press</a>
                        <a href="https://hlo.vercel.app/">Email</a>
                        <a href="https://hlo.vercel.app/">Partners</a>
                        <a href="https://hlo.vercel.app/">Jobs</a>
                    </div>
                    </div>
                </div>
                <div className="social">
                    <i class="fab fa-instagram"></i>
                    <i class="fab fa-facebook"></i>
                    <i class="fab fa-youtube"></i>
                    <i class="fab fa-gitlab"></i>
                </div>
        </div>
        </div>
        </>
    )
}

export default Footer
