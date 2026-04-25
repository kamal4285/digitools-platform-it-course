import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";


const Footer = () => {
    return (
        <div className=" bg-[#101727] text-white py-12">
            <div className="container mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
                <div className="col-span-2">
                    <h1 className="text-5xl font-bold mb-5">DigiTools</h1>
                    <p className="text-gray-300">Premium digital tools for creators, <br /> professionals, and businesses. Work smarter <br /> with our suite of powerful tools.</p>
                </div>
                <div className="space-y-2">
                    <h2 className="text-xl">Product</h2>
                    <ul className="space-y-2 text-gray-300">
                        <li>Features</li>
                        <li>Pricing</li>
                        <li>Template</li>
                        <li>Integrations</li>
                    </ul>
                </div>
                <div className="space-y-2">
                    <h2 className="text-xl">Product</h2>
                    <ul className="space-y-2 text-gray-300">
                        <li>Features</li>
                        <li>Pricing</li>
                        <li>Template</li>
                        <li>Integrations</li>
                    </ul>
                </div>
                <div className="space-y-2">
                    <h2 className="text-xl">Product</h2>
                    <ul className="space-y-2 text-gray-300">
                        <li>Features</li>
                        <li>Pricing</li>
                        <li>Template</li>
                        <li>Integrations</li>
                    </ul>
                </div>
                <div>
                <h1 className="text-xl mb-4">Social Links</h1>
                <div className="flex gap-4 text-2xl">
                    <div><span><FaInstagram></FaInstagram></span></div>
                    <div><span><FaFacebook></FaFacebook></span></div>
                    <div><span><FaTwitter></FaTwitter></span></div>
                </div>
                
            </div>
            
        </div>
        <hr className="container mx-auto my-6 text-[#627382]" />

        <div className="container mx-auto flex justify-between text-gray-400">
            <div>
                © 2026 Digitools. All rights reserved.
            </div>
            <div>
                <ul className="flex justify-end gap-4">
                    <li>Privacy Policy</li>
                    <li> Terms of Service</li>
                    <li>Cookies</li>
                </ul>
            </div>
        </div>

        </div>
    );
};

export default Footer;