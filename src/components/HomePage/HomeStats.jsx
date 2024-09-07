const HomeStats = () => {
    const statsData = [
        {id: 1, stats: "12,000 +", title: "Service Providers" },
        {id: 2, stats: "1,00,000 +", title: "Order Served" },
        {id: 3, stats: "50000 +", title: "5 Star Received" },
    ];
    
    return (
        <div className="flex flex-col md:flex-row justify-between md:gap-6 gap-0 bg-[#F4F5F8]">
            {statsData.map((item,index) => {
                return(
            <div
                key={item.id}
                className={`p-6 w-full text-center ${index !== statsData.length - 1 ? "border-b-2 md:border-b-0 md:border-r-2" : ""}`}
            >
            <p className="text-[42px] font-normal text-gray-800">{item.stats}</p>
            <p className="text-[18px] font-medium text-gray-600">{item.title}</p>
            </div>
                )
            })}
        </div>
    );
    };
    
    export default HomeStats;
    