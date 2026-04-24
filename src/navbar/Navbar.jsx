import { ShoppingCart } from 'lucide-react';


const Navbar = () => {
    return (
        <div className="container navbar bg-base-100 shadow-sm mx-auto">
            <div className="navbar-start">
                <a className="text-3xl font-bold bg-linear-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">DigiTools</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-lg">
                <li><a>Products</a></li>
                <li><a>Features</a></li>
                <li><a>Pricing</a></li>
                <li><a>Testimonials</a></li>
                <li><a>FAQ</a></li>
                </ul>
            </div>
            <div className="navbar-end flex items-center gap-3">
                <div className='flex items-center gap-1.5'>
                    <div>
                        <ShoppingCart></ShoppingCart>
                    </div>
                    <h3 className='text-lg'>Login</h3>
                </div>
                <a className="btn bg-linear-to-r from-blue-600 to-purple-500 rounded-3xl p-5 text-white text-xl font-semibold">Get Started</a>
            </div>
        </div>
    );
};

export default Navbar;