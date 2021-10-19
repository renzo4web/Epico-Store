import React from 'react';
import Link from "next/link"

const Hero = () => {
    return (
        <div className={'my-48 mx-auto max-w-7xl px-4 sm:mt-24 md:mt-72 text-center'}>
            <h1 className={"font-extrabold"}>
                <p className={"text-xl sm:text-3xl md:text-4xl"}>
                    The rarest items in the world
                    </p>
                <p className={"text-transparent " +
                "bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-text-4xl sm:text-6xl md:text-7xl"}>Epico
                    eCommerce</p>
            </h1>

            <h2 className={'mt-3 max-w-md mx-auto sm:text-lg md:mt-5 md:text-xl md:max-3-3xl'}>
                Join the revolution.
            </h2>
            <div className={'mt-5 max-w-md mx-auto flex justify-center items-center md:mt-8'}>

                <Link href={'#'}>
                    <a className={'inline-flex items-center justify-center h-12 px-6 mr-6 font-medium py-3 border-transparent rounded-md text-white dark:bg-purple-900 dark:hover:bg-purple-800 bg-gray-900 hover:bg-gray-800'}>Join
                        Now</a>
                </Link>

                <Link href={"#"}>
                    <a className={'inline-flex items-center font-semibold'}
                    >Learn More</a>
                </Link>
            </div>
        </div>
    );
};

export default Hero;