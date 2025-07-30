export const Card = ({cardTitle, description, icon}) => {

    return (
        <div className="flex p-[16px] w-[372px] h-[160px] bg-[#f3f3f3] rounded-[8px]">
            <div className="flex flex-col justify-between">
                <div className="flex flex-col">
                <h4 className="text-[16px] font-medium mb-[6px]">{cardTitle}</h4>
                <p className="mt-[2px] mb-[4px] text-[12px]">{description}</p>
                </div>
                <button className="text-[14px] bg-white py-[10px] px-[12px] w-[80px] rounded-[20px] font-medium">Details</button>
            </div>
            <div className="flex items-center">
                <img className="w-[200px] h-[200px] object-contain" src={icon} alt="" />
            </div>
        </div>
    )
}