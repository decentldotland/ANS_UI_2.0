// @flow 
import * as React from 'react';
import styles from '../../../styles/templates'
import { Button } from '../../buttons';
import Names from './names.svg'
type Props = {

};
export const SectionTwo = (props: Props) => {
    return (
        <div className="flex flex-col md:flex-row sm:flex-nowrap flex-wrap mx-auto mt-8 font-inter max-w-4xl gap-x-8">
            <div className="md:flex mt-8 hidden flex-row flex-wrap md:w-1/3 w-full full">
                <div className="mx-auto my-auto scale-110 h-72">
                    <Names />
                </div>
            </div>
            <div className="flex flex-col md:w-2/3 w-full ml-0 md:ml-12">
                <h3 className={[styles.Header, styles.Section.h3, "w-full"].join(' ')}>
                    How can I access my profile?
                </h3>
                <h6 className={[styles.Section.h6, "w-full mb-12"].join(' ')}>
                    Simply head to <Button onClick={() => {}}  text="your_domain.ar.page" selected={true} />, find your username in the top search bar, or connect your wallet above.
                </h6>
                <h3 className={[styles.Header, styles.Section.h3, "w-full"].join(' ')}>
                    Block explorer support
                </h3>
                <h6 className={[styles.Section.h6, "w-full", ].join(' ')}>
                    <p>ANS names are supported on ViewBlock, the main block explorer for the Arweave ecosystem.</p>
                </h6>
            </div>
            <div className="flex flex-row flex-wrap md:w-1/3 md:hidden w-full mt-8">
                <div className="mx-auto my-auto scale-110 h-72">
                    <Names />
                </div>
            </div>
        </div>
    );
};