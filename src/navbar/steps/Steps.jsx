

const Steps = () => {
    return (
        <div className="bg-gray-100 py-10">
            <div className="container mx-auto space-y-5">
               <div className="text-center">
                 <h2 className="text-5xl font-bold">Get Started In 3 steps</h2>
                <p className="text-lg text-[#627382] my-6">Start using premium digital tools in minutes, not hours.</p>
               </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    <div className="flex flex-col p-7 pb-16 bg-white rounded-2xl space-y-6">
                        <div className="flex justify-end">
                            <span className=" text-white font-semibold bg-linear-to-r from-[#4F39F6] to-[#9514FA] p-3 px-4 rounded-full">01</span>
                        </div>
                       
                        <div className="flex justify-center">
                            <span className="bg-purple-200 p-4 rounded-full"><img src="https://i.ibb.co.com/MDjZ2nhr/user.png" alt="" /></span>
                        </div>
                        <h2 className="text-2xl font-bold text-center">Create Account</h2>
                        <p className="text-lg text-center text-[#627382]">Sign up for free in seconds. No credit card <br /> required to get started.</p>
                       
                    </div>

                    <div className="flex flex-col p-7 pb-16 bg-white rounded-2xl space-y-6">
                        <div className="flex justify-end">
                            <span className=" text-white font-semibold bg-linear-to-r from-[#4F39F6] to-[#9514FA] p-3 px-4 rounded-full">02</span>
                        </div>
                       
                        <div className="flex justify-center">
                            <span className="bg-purple-200 p-4 rounded-full"><img src="https://i.ibb.co.com/Rkj9FQkN/package.png" alt="" /></span>
                        </div>
                        <h2 className="text-2xl font-bold text-center">Choose Products</h2>
                        <p className="text-lg text-center text-[#627382]">Browse our catalog and select the tools <br /> that fit your needs.</p>
                       
                    </div>

                    <div className="flex flex-col p-7 pb-16 bg-white rounded-2xl space-y-6">
                        <div className="flex justify-end">
                            <span className=" text-white font-semibold bg-linear-to-r from-[#4F39F6] to-[#9514FA] p-3 px-4 rounded-full">03</span>
                        </div>
                       
                        <div className="flex justify-center">
                            <span className="bg-purple-200 p-4 rounded-full"><img src="https://i.ibb.co.com/0RTXL5LY/rocket.png" alt="" /></span>
                        </div>
                        <h2 className="text-2xl font-bold text-center">Start Creating</h2>
                        <p className="text-lg text-center text-[#627382]">Download and start using your premium <br /> tools immediately.</p>
                       
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Steps;