import PricingCardFeatures from "./PricingCardFeatures";


const PricingCard = ({data}) => {
    //console.log(data);

    return (
        <div className={`card w-96 ${data.tag === "Most Popular" ? "bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white" : "bg-base-200"} shadow-sm`}>
            <div className="card-body">
                {data.tag && <span className="badge badge-xl rounded-2xl bg-[#FEF3C6] text-xl text-[#BB4D00] absolute -top-4 left-32 justify-center">Most Popular</span>}
                
                <h2 className="text-3xl font-bold">{data.name}</h2>
                <h3>{data.description}</h3>
                <div>
                    <span className="text-xl">${data.price}/{data.billing}</span>
                </div>
                <ul className="my-5 flex flex-col gap-2 text-xs">
                    {
                        data.features.map((feature, index) => <PricingCardFeatures feature={feature} key={index}></PricingCardFeatures>)
                    }
                </ul>
                <div className="mt-auto">
                <button className={`btn rounded-3xl btn-block ${data.tag === "Most Popular" ? "bg-white" : "text-white bg-linear-to-r from-[#4F39F6] to-[#9514FA]"}`}>{data.buttonText}</button>
                </div>
            </div>
        </div>
    );
};

export default PricingCard;