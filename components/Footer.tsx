import React from 'react';

const NAVIGATION = [
    {name: "About", href: "#"},
    {name: "Jobs", href: "#"},
    {name: "Shop", href: "#"},
    {name: "Terms and Conditions", href: "#"},
]

const Footer = () => {
    return (
        <footer className={"bg-purple-50 dark:bg-purple-900"}>
            <div className={'max-w-7xl mx-auto py-12 px-4 overflow-hidden' +
            'sm:px-6 lg:px-8'}>
                <nav className={'flex flex-wrap justify-center'}>

                    {
                        NAVIGATION.map(link => (
                            <div key={link.name} className={"px-6 py-2"}>
                                <a
                                    className={"dark:hover:text-purple-200 hover:text-purple-500"}
                                    href={link.href}>{link.name}</a>
                            </div>
                        ))
                    }
                </nav>

                <p className={'mt-8 text-center'}>&copy; 2021 Epic store by Renzo, All right reserved.</p>

            </div>

        </footer>
    );
};

export default Footer;