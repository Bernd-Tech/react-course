export const TopicComponent = ({title, description, buttonText, prompt }) => {
    return ( 
        <div className="flex flex-col justify-center h-full w-[460px] gap-4 ">
        <h3 className="text-[36px] font-bold">{title}</h3>
        <p>{description}</p>
        <div className="flex gap-6 items-center mt-[12px]">
            <button className="py-[14px] px-[25px] bg-black hover:bg-black/80 duration-300 ease-in-out rounded-[8px] text-white font-medium">{buttonText}</button>
            <span className="border-b border-black/20 pb-[6px]">{prompt}</span>
        </div>
    </div>
    )
}