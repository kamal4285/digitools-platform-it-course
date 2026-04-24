
import banner from '../assets/banner.png'
import play from '../assets/Play.png'
import newIcon from '../assets/new.png'

const Banner = () => {
    return (
       <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img
                src={banner}
                className="rounded-lg shadow-2xl"
                />
                <div className='space-y-5'>
                    <button className='bg-[#E1E7FF] py-1.5 px-3 rounded-3xl bg-cover'>

                        <a href="" className='flex items-center gap-4 text-lg bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent'><img src={newIcon} alt="" /> New: AI-Powered Tools Available</a>
                    </button>
                    <h1 className="text-7xl font-bold">Supercharge Your <br />Digital Workflow</h1>
                    <p className="text-lg py-6">
                        Access premium AI tools, design assets, templates, and productivity <br />
                        software—all in one place. Start creating faster today. <br />
                        Explore Products
                    </p>
                    <div className='flex gap-3'>
                        <button className="btn rounded-3xl text-white bg-linear-to-r from-blue-600 to-purple-500">Explore Products</button>
                        <button className="btn btn-outline btn-primary border-2 rounded-3xl bg-linear-to-r from-blue-600 to-purple-500 bg-clip-text text-transparent"><img src={play} alt="" /> Watch Demo</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;