export const QrComponent = ({qrImage, appDownloadText}) => {
    return (
        <div className="flex w-[558px] h-[198px] py-[24px] pl-[24px] pr-[48px] bg-white gap-4">
        <img src={qrImage} alt="" />
        <div className="flex flex-col justify-center">
            <h4 className="text-[24px] font-bold">{appDownloadText}</h4>
            <p>Zum Herunterladen scannen</p>
        </div>
        </div>
    )
}