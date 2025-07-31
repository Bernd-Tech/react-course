import { SubDomainComponent } from "./SubDomains"

export const FooterSection = () => {
const subDomains = [
    {
        domainArea: "Unternehmen",
        domainTitles: [
            "Über uns",
            "Unsere Angebote",
            "Newsroom",
            "Investoren",
            "Blog",
            "Karriere"
        ]
    },
    {
        domainArea: "Produkte",
        domainTitles: [
            "Fahrt",
            "Fahrten anbieten",
            "Lieferungen anbieten",
            "Essen",
            "Uber for Business",
            "Uber Freight",
            "Geschenkkarten",
            "Uber Health"
        ]
    },
    {
        domainArea: "Globales Engagement",
        domainTitles: [
            "Sicherheit",
            "Nachhaltigkeit",
        ]
    },
    {
        domainArea: "Reisen",
        domainTitles: [
            "Reservieren",
            "Flughäfen",
            "Städte"
        ]
    }
];

const linkIcons = [
    {
        title: "facebook",
        svgPath: "M21.79 1H2.21C1.54 1 1 1.54 1 2.21v19.57c0 .68.54 1.22 1.21 1.22h10.54v-8.51H9.9v-3.33h2.86V8.71c0-2.84 1.74-4.39 4.27-4.39.85 0 1.71.04 2.56.13v2.97h-1.75c-1.38 0-1.65.65-1.65 1.62v2.12h3.3l-.43 3.33h-2.89V23h5.61c.67 0 1.21-.54 1.21-1.21V2.21C23 1.54 22.46 1 21.79 1Z",
        website: "https://www.facebook.com/uber"
    },
    {
        title: "twitter",
        svgPath: "M14.094 10.317 22.28 1H20.34l-7.11 8.088L7.557 1H1.01l8.583 12.231L1.01 23H2.95l7.503-8.543L16.446 23h6.546M3.649 2.432h2.978L20.34 21.639h-2.98",
        website: "https://www.twitter.com/uber"
    },
    {
        title: "youtube",
        svgPath: "M23 12s0-3.85-.46-5.58c-.25-.95-1-1.7-1.94-1.96C18.88 4 12 4 12 4s-6.88 0-8.6.46c-.95.25-1.69 1.01-1.94 1.96C1 8.15 1 12 1 12s.04 3.85.5 5.58c.25.95 1 1.7 1.95 1.96 1.71.46 8.59.46 8.59.46s6.88 0 8.6-.46c.95-.25 1.69-1.01 1.94-1.96.46-1.73.42-5.58.42-5.58Zm-13 3.27V8.73L15.5 12 10 15.27Z",
        website: "https://www.youtube.com/channel/UCgnxoUwDmmyzeigmmcf0hZA"
    },
    {
        title: "linkedin",
        svgPath: "M21.37 1H2.62C1.73 1 1 1.71 1 2.58v18.83c0 .88.73 1.59 1.62 1.59h18.75c.9 0 1.63-.71 1.63-1.59V2.58C23 1.71 22.27 1 21.37 1ZM7.53 19.75H4.26V9.25h3.27v10.5ZM5.89 7.81C4.85 7.81 4 6.96 4 5.92s.84-1.89 1.89-1.89c1.04 0 1.89.85 1.89 1.89.01 1.04-.84 1.89-1.89 1.89Zm13.86 11.94h-3.26v-5.1c0-1.22-.02-2.78-1.7-2.78-1.7 0-1.96 1.33-1.96 2.7v5.19H9.57V9.26h3.13v1.43h.04c.44-.83 1.5-1.7 3.09-1.7 3.3 0 3.91 2.17 3.91 5v5.76h.01Z",
        website: "https://www.linkedin.com/company/1815218"
    },
    {
        title: "instagram",
        svgPath: "M21.15 2.85C19.05.74 16.23 1 12 1 8.04 1 5 .69 2.85 2.85.74 4.95 1 7.77 1 12c0 3.95-.31 7 1.85 9.15C4.95 23.26 7.77 23 12 23c3.96 0 7 .31 9.15-1.85C23.25 19.05 23 16.23 23 12c0-4.31.24-7.07-1.85-9.15Zm-1.4 16.9c-1.37 1.37-3.18 1.27-7.75 1.27-4.29 0-6.34.15-7.75-1.27-1.44-1.44-1.27-3.51-1.27-7.75 0-4.23-.15-6.33 1.27-7.75C5.66 2.84 7.6 2.98 12 2.98c4.23 0 6.33-.15 7.75 1.27 1.38 1.38 1.27 3.22 1.27 7.75 0 4.24.15 6.34-1.27 7.75Z",
        svgPath2: "M12 6.35a5.65 5.65 0 1 0 .001 11.301A5.65 5.65 0 0 0 12 6.35Zm0 9.32c-2.02 0-3.67-1.64-3.67-3.67 0-2.03 1.64-3.67 3.67-3.67 2.03 0 3.67 1.64 3.67 3.67 0 2.02-1.65 3.67-3.67 3.67ZM17.87 4.81c-.73 0-1.32.59-1.32 1.32 0 .73.59 1.32 1.32 1.32.73 0 1.32-.59 1.32-1.32 0-.73-.59-1.32-1.32-1.32Z",
        website: "https://instagram.com/uber/"
    },
]

    return (
        <>
        <footer className="p-16 w-full bg-black">
            <div className="flex flex-col w-full px-16">
                <div className="flex justify-between w-full mb-14">
                    <div className="flex flex-col h-auto items-start text-white gap-8 justify-center">
                        <h4 className="text-2xl">Uber</h4>
                        <p>Hilfecenter öffnen</p>
                    </div>
                    <div className="flex flex-col text-right w-[380px] text-white gap-5 text-sm">
                        <p className="hover:cursor-pointer hover:opacity-70">Impressum Fahrtenvermittlung</p>
                        <p className="hover:cursor-pointer hover:opacity-70">Impressum Eats</p>
                        <p className="hover:cursor-pointer hover:opacity-70">So funktionieren die Apps und Websites von Uber und Uber Eats</p>
                        <p className="hover:cursor-pointer hover:opacity-70">Uber One kündigen</p>
                    </div>
                </div>
                <div className="flex w-full mb-16">
                <SubDomainComponent {...subDomains[0]}></SubDomainComponent>
                <SubDomainComponent {...subDomains[1]}></SubDomainComponent>
                <SubDomainComponent {...subDomains[2]}></SubDomainComponent>
                <SubDomainComponent {...subDomains[3]}></SubDomainComponent>
                </div>
                <div className="flex justify-between items-center w-full mb-16">
                    <div className="flex w-[578px] h-auto gap-26">
                    {[...linkIcons].map(({title, svgPath, website, svgPath2}, index) => {
                        return (
                            <div key={index}>
                                <a href={website} taget="_blank">
                                    <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none">
                                        <title>{title}</title>
                                        <path d={svgPath} fill="white"></path>
                                        <path d={svgPath2} fill="white"></path>
                                    </svg>
                                </a>
                            </div>
                        )
                    })}
                    </div>
                    <div className="flex items-center">
                        <button className="inline-flex items-center py-[10px] px-[12px] text-white hover:bg-[#282828] duration-200 ease-in-out rounded-[10px] text-sm">
                            <div className="mr-2">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                                    <title>Globe</title>
                                    <path d="M12 1C5.9 1 1 5.9 1 12s4.9 11 11 11 11-4.9 11-11S18.1 1 12 1Zm8 11c0 .7-.1 1.4-.3 2-.6-1.5-1.6-3.1-3-4.7l1.8-1.8c1 1.3 1.5 2.8 1.5 4.5ZM6.5 6.5c1.3 0 3.6.8 6 2.9l-3.2 3.2C7.1 9.8 6.5 7.5 6.5 6.5Zm8.1 5c2.3 2.7 2.9 5 2.9 6-1.3 0-3.6-.8-6-2.9l3.1-3.1Zm1.9-6.1-1.9 1.9c-1.6-1.4-3.2-2.4-4.7-3 .7-.2 1.3-.3 2-.3 1.8 0 3.3.5 4.6 1.4ZM4 12c0-.7.1-1.4.3-2 .6 1.5 1.6 3.1 3 4.7l-1.8 1.8C4.5 15.2 4 13.7 4 12Zm3.5 6.6 1.9-1.9c1.6 1.4 3.2 2.4 4.7 3-.7.2-1.3.3-2 .3-1.8 0-3.3-.5-4.6-1.4Z" fill="white"></path>
                                </svg>
                            </div>
                            Deutsch
                        </button>
                        <button className="inline-flex items-center py-[10px] px-[12px] text-white hover:bg-[#282828] duration-200 ease-in-out rounded-[10px] text-sm">
                            <div className="mr-2">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                                    <title>Location marker</title>
                                    <path d="M18.7 3.8C15 .1 9 .1 5.3 3.8c-3.7 3.7-3.7 9.8 0 13.5L12 24l6.7-6.8c3.7-3.6 3.7-9.7 0-13.4ZM12 12.5c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2Z" fill="white"></path>
                                </svg>
                            </div>
                            Düsseldorf
                        </button>
                    </div>
                </div>
                <div className="flex gap-2 w-full items-center mb-16">
                    <a className="min-w-[128px]" data-baseweb="link" aria-label="Visit Google Play" href="https://rides.sng.link/Bw5zn/vz1k?_dl=uber%3A%2F%2F&amp;pcn=uber-com-footer&amp;mvid=[marketing-visitor-id]" target="_self">
                        <img alt="Die UberApp für Android herunterladen" aria-hidden="true" loading="lazy" src="https://d1a3f4spazzrp4.cloudfront.net/uber-com/1.3.8/d1a3f4spazzrp4.cloudfront.net/illustrations/app-store-google-4d63c31a3e.svg" />
                    </a>
                    <a className="min-w-[128px]" data-baseweb="link" aria-label="Visit the App Store" href="https://rides.sng.link/Cw5zn/564k?_dl=uber%3A%2F%2F&amp;_smtype=3&amp;pcn=uber-com-footer&amp;mvid=[marketing-visitor-id]" target="_self">
                        <img alt="Die Uber&nbsp;App für IOS herunterladen" aria-hidden="true" loading="lazy" role="presentation" src="https://d1a3f4spazzrp4.cloudfront.net/uber-com/1.3.8/d1a3f4spazzrp4.cloudfront.net/illustrations/app-store-apple-f1f919205b.svg"/>
                    </a>
                </div>
                <div className="flex justify-between text-white/30">
                    <p>© 2025 Uber Technologies Inc.</p>
                    <div className="flex gap-4 text-white/30">
                        <p>Datenschutz</p>
                        <p>Barrierefreiheit</p>
                        <p>Nutzungsbedingungen</p>
                    </div>
                </div>
            </div>
        </footer>
        </>
    )
}