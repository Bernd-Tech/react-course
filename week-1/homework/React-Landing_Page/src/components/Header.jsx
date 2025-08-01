export const Header = ({logo, navItems = [], navItems2 = [] }) => {
 return (
    <header>
        <nav>
            <div>
                <ul>
                <li>
                    <a id="brand" href="">{logo}</a>
                </li>
                {navItems.map((navItem, index) => {
                    return (
                    <li key={index}>
                      <a id={'navItem2-'+{index}} href="#">{navItem}</a>
                    </li>
                    )
                })}
                </ul>
                </div>
            <div className="horizontal-flex">
                <ul>
                <li>
                    <button id="change-language-btn" aria-label="Change language">
                     <div>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                             <path d="M12 1C5.9 1 1 5.9 1 12s4.9 11 11 11 11-4.9 11-11S18.1 1 12 1Zm8 11c0 .7-.1 1.4-.3 2-.6-1.5-1.6-3.1-3-4.7l1.8-1.8c1 1.3 1.5 2.8 1.5 4.5ZM6.5 6.5c1.3 0 3.6.8 6 2.9l-3.2 3.2C7.1 9.8 6.5 7.5 6.5 6.5Zm8.1 5c2.3 2.7 2.9 5 2.9 6-1.3 0-3.6-.8-6-2.9l3.1-3.1Zm1.9-6.1-1.9 1.9c-1.6-1.4-3.2-2.4-4.7-3 .7-.2 1.3-.3 2-.3 1.8 0 3.3.5 4.6 1.4ZM4 12c0-.7.1-1.4.3-2 .6 1.5 1.6 3.1 3 4.7l-1.8 1.8C4.5 15.2 4 13.7 4 12Zm3.5 6.6 1.9-1.9c1.6 1.4 3.2 2.4 4.7 3-.7.2-1.3.3-2 .3-1.8 0-3.3-.5-4.6-1.4Z" fill="currentColor"></path>
                            </svg>
                        </div>
                    DE-DE
                    </button>
                </li>
                {navItems2.map((navItem2, index) => {
                    return (
                    <li key={index}>
                      <a id={'navItem2-'+{index}} href="#">{navItem2}</a>
                    </li>
                    )
                })}
                <li>
                    <button id="register-btn" className="text-sm px-4 py-2 rounded-3xl bg-white text-black font-medium">Registrieren</button>
                </li>
                </ul>
            </div>     
        </nav>
    </header>
 );
}