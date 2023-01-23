// @flow 
import { bottomNavigationActionClasses } from '@mui/material';
import * as React from 'react';
import { ChainOptions, SortChronProps, NetworkButtonProps, ChainProps } from '../../src/types';
import styles from '../../styles/templates';

type Props = {
    text: string | object;
    selected?: boolean;
    onClick?: any;
    className?: string;
};
export const Button = (pr: Props) => {
    let props = {
        className: '',
        onClick: () => {},
        slelected: false,
         ...pr}

    const click = props.onClick as any;
    return (
        <button onClick={click}
            className={
                (props.selected == undefined)
                    ? styles.button : styles.buttonSelected + props.className
            }>
            {props.text}
        </button>
    );
};

/**
 * ChainFilter
 * Category: Personalized Module
 * Purpose:
 *   a. Works w/ Stateful components to keep track of active blockchain filter
 *   b. User clicks blockchain logo which registers with state of parent component
 * 
 * To Work:
 *   a. In parent, create an onclick function that collects ChainButton activeChain result
 *   b. Record result in parent state to conduct intended result
 *   c. Adding a new chain involves changing ChainProps and adding a chain variable into supportedChains array
 * @params ChainProps - {
 *  activeChain: string;
 *  onClick: () => void;
 * }
 * @returns Row with network buttons
 */
export const ChainFilter = (props: ChainProps) => {

    //Chain Variables
    const ethereum: ChainOptions = "ethereum";
    const arweave: ChainOptions = "arweave";
    const evmos: ChainOptions = "evmos";
    const near: ChainOptions = "near";
    const fantom: ChainOptions = "fantom";
    const polygon: ChainOptions = "polygon";
    const avalanche: ChainOptions = "avalanche";
    const bsc: ChainOptions = "bsc";
    //List of Supported Chains
    const supportedChains = [
        {
            "name": arweave,
            "src": "/chains/arweave_outline.svg",
            "ratio": "1"
        },
        {
            "name": ethereum,
            "src": "/chains/ethereum_outline.svg",
            "ratio": "1"
        },
        {
            "name": evmos,
            "src": "/chains/evmos_outline.svg",
            "ratio": "1"
        },
        {
            "name": near,
            "src": "/chains/near_outline.svg",
            "ratio": ".85"
        },
        {
            "name": polygon,
            "src": "/chains/polygon_outline.svg",
            "ratio": "1"
        },
        {
            "name": avalanche,
            "src": "/chains/avalanche_outline.svg",
            "ratio": "1.3"
        },
        {
            "name": fantom,
            "src": "/chains/fantom_outline.svg",
            "ratio": "1.7"
        },
        {
            "name": bsc,
            "src": "/chains/binance_outline.svg",
            "ratio": "1"
        },
    ];

    return (
        <div 
            className="flex justify-around items-center flex-row h-12 border-2 border-slate-300 rounded-2xl space-x-1.5 px-1"
        >
        {/*Active Blockchain*/}
        {supportedChains.map((supportedChain) => (
            <NetworkButton 
                key={supportedChain.src}
                src={supportedChain.src}
                name={supportedChain.name}
                onClick={props.activeChain !== supportedChain.name ? props.onClick : () => null}
                className={props.activeChain === supportedChain.name ? "h-9 w-9 cursor-default shadow-xl bg-slate-800 border-1 border-slate-500": "h-7 w-7 cursor-pointer"}
                scale={supportedChain.ratio}
            />
        ))}
    </div>
    );
}

/**
 * Network Button
 * Category: Universal Module
 * Purpose:
 *   a. Standalone button to host network image
 * 
 * To Work:
 *   a. Place within Chainfilter & provide onClick capability
 * @params NetworkButtonProps - {
    name: string
    onClick?: () => void;
    src: string;
    className?: string;
 * }
 * @returns Button with network logo
 */
export const NetworkButton = (props: NetworkButtonProps) => {
    return (
        <button 
            className={"tooltip bg-black rounded-full "+props.className}
            onClick={props.onClick}
            value={props.name}
            data-tip={props.name.charAt(0).toUpperCase() + props.name.slice(1)}
        >
            <img 
                src={props.src} 
                alt="Selected Blockchain Logo" 
                className="h-4/6 w-4/6 m-auto"
                style={{ transform: `scale(${props.scale})` }}
            /> 
        </button>
    );
}

/**
 * Sort Chron Button
 * Category: Universal Module
 * Purpose:
 *   a. Standalone button to host sort logic
 * 
 * To Work:
 *   a. Place within parent which will contain state and asc/desc logic
 *   b. Plug in said logic into the onClick prop
 * @params SortChronProps - {
    onClick?: () => void;
    text: string;
 * }
 * @returns Button with empty onclick capability
 */
export const SortChronButton = (props: SortChronProps) => {
    const theme = localStorage.getItem('theme');
    const textColor = theme === 'arlight' ? 'text-black' : 'text-white';
    return (
        <button
            className={`bg-inherit border-2 border-slate-300 rounded-xl font-medium hover:bg-primary/30 
                       py-1.5 px-2.5 flex items-center h-12 hover:bg-indigo-300 hover:text-white hover:shadow-md 
                       active:shadow-none active:scale-[0.98] hover:transition duration-200 ease-in-out w-20 
                       flex items-center justify-center ${textColor} ${props.className} flex-shrink-0`}
            onClick={props.onClick}
        > 
            {props.text}
        </button>
    );
}

/**
 * View NFT Button
 * Category: Universal Module
 * Purpose:
 *   a. Standalone button to follow NFT Links
 * 
 * To Work:
 *   a. Place within parent
 *   b. Insert href link and button text
 * @params link - href link
 * @params text - text for button
 * @returns Button wrapped in anchor tags
 */
interface viewNftInterface {
    nftLink: string;
    text: string;
}
export const ViewNftButton = (props: viewNftInterface) => {
    const theme = localStorage.getItem('theme');
    const textColor = theme === 'arlight' ? 'text-black' : 'text-white';
    return (
        <a href={props.nftLink} target="_blank" rel="noreferrer">
            <button
                className={`bg-inherit border-2 border-slate-300 rounded-xl font-medium hover:bg-primary/30 
                        py-1.5 px-2.5 flex items-center h-12 hover:bg-indigo-300 hover:text-white hover:shadow-md 
                        active:shadow-none active:scale-[0.98] hover:transition duration-200 ease-in-out w-20 
                        flex items-center justify-center ${textColor}`}
            > 
                {props.text}
            </button>
        </a>
    );
}