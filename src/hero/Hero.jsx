

const Hero = () => {
    return (
        <div className='bg-linear-to-r from-[#4F39F6] to-[#9514FA]'>
            <div className='container mx-auto justify-center flex flex-col md:flex-row items-center py-10 space-y-7'>
                <div className='px-25'>
                    <h1 className='text-5xl text-white font-bold'>50K+</h1>
                    <p className='text-xl text-gray-300 font-semibold'>Active Users</p>
                </div>
                <div className='px-25'>
                    <h1 className='text-5xl text-white font-bold'>200+</h1>
                    <p className='text-xl text-gray-300 font-semibold'>Premioum Tools</p>
                </div>
                <div className='px-25'>
                    <h1 className='text-5xl text-white font-bold'>4.9</h1>
                    <p className='text-xl text-gray-300 font-semibold'>Rating</p>
                </div>
            </div>
        </div>
        
    );
};

export default Hero;