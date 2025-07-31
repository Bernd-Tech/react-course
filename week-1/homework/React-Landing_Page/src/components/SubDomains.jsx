export const SubDomainComponent = ({domainArea, domainTitles}) => {
    return (
        <div className="flex flex-col flex-1 gap-4 text-white">
            <h4 className="text-lg font-medium mb-[4px]">{domainArea}</h4>
            {domainTitles.map((domainTitle, index) => {
               return <p key={index} className="text-sm hover:cursor-pointer hover:opacity-70">{domainTitle}</p>
            })}
        </div>
    )
}