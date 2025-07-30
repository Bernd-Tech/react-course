export const InputContainer = ({id, placeholder, path, path2}) => {
    return (
        <div tabIndex="0" className="flex py-[10px] px-[12px] bg-[#f3f3f3] rounded-[8px] w-full h-[48px] items-center focus:bg-white focus:outline-2 focus:outline-black">
            <div>
                <svg width="20" height="20" viewBox="0 0 24 24">
                    <path d={path} fill="black"></path>
                </svg>
            </div>
            <input className="w-full outline-none mx-[6px]" type="text" name="" id={id} placeholder={placeholder} />
            <div className="">
                <svg width="24" height="24">
                    <path d={path2} fill="black"></path>
                </svg>
            </div>
        </div>
    );
};