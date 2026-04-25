import { use } from "react";
import PricingCard from "./PricingCard";


const PricingOptions = ({pricingPromise}) => {
    //console.log(pricingPromise);
    const pricingData = use(pricingPromise);
    //console.log(pricingData)
    return (
        <div className="container mx-auto flex-col my-16">
            <div className="text-center">
                 <h2 className="text-5xl font-bold">Get Started In 3 steps</h2>
                <p className="text-lg text-[#627382] my-6">Start using premium digital tools in minutes, not hours.</p>
            </div>
            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10 justify-items-center space-y-5">
                {
                    pricingData.map(data => <PricingCard key={data.id} data={data}></PricingCard>)
                }
            </div>
        </div>
    );
};

export default PricingOptions;