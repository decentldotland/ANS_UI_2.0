// @flow 
import Link from 'next/link';
import * as React from 'react';
import styles from '../../../styles/templates'
import { Button } from '../../buttons';
import { resolveDomain } from '../../../src/utils';
export const SectionOne = () => {

    return (
        <div className="font-inter flex flex-col md:flex-row md:flex-nowrap flex-wrap mx-auto mt-8 max-w-4xl gap-x-8">
            <div className="flex flex-col w-full md:w-2/3 mb-16">
                <h3 className={[styles.Header, styles.Section.h3, "w-full"].join(' ')}>
                    What is ANS?
                </h3>
                <h6 className={[styles.Section.h6, "w-full mb-12"].join(' ')}>
                    Arweave Name Service (ANS) is an identity and social metadata protocol built on Arweave. It is the username layer of <a style={{color:'green', textDecoration: 'underline'}} href="https://ark.decent.land" target="_blank" rel="noopener noreferrer">decent.land</a> as well as a human-readable proxy for wallet addresses.    
                </h6>
                <h3 className={[styles.Header, styles.Section.h3, "w-full font-bold"].join(' ')}>
                    What is ar.page?
                </h3>
                <h6 className={[styles.Section.h6, "w-full"].join(' ')}>
                    <p><span className='font-bold '>ar.page </span>
                        is a web app that renders your ANS metadata in a page displaying your profile&apos;s data, and aggregates a feed of your activities over the Arweave network as well as assets from other chains, powered by <a style={{color:'green', textDecoration: 'underline'}} href="https://ark.decent.land" target="_blank" rel="noopener noreferrer">Ark Protocol</a>.
                    </p>  
                </h6>
            </div>
            <div className="flex flex-row flex-wrap mx-auto md:w-1/3 justify-center h-48 -mt-12 md:mt-4">
                <div className="relative w-full md:block flex font-bold">
                    {
                        [["xy", 32, 28], ["dameon1", 150, 168],
                        ["pearsonlucas", 120, 58], ["arkengineer", 45, 88],
                        ["pwo", 125, 118], ["msfew", 24, 148]].map((data: (string | number)[], i: number) =>
                            <div className="absolute" style={{ left: `${data[1] as string}px`, top: `${data[2] as string}px` }} key={i}>
                                <Link href={resolveDomain(!!data ? (data[0] as string) : "")} scroll={true}>
                                    <a><Button text={data[0] as string} selected={true} /></a>
                                </Link>
                            </div>)
                    }

                </div>
            </div>
        </div>
    );
};