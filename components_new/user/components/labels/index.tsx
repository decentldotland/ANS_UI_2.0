import { useState } from 'react';
import { Links, OwnedLabel, GenericLabelInterface } from '../../../../src/types';
import Link from 'next/link';
import { Snackbar } from '@mui/material';
import { BsGithub, BsTwitter, BsInstagram, BsGlobe2 } from 'react-icons/bs';
import { removeHttp } from '../../../../src/utils';
import { useRecoilState } from 'recoil';
import { isDarkMode } from '../../../../atoms';
import Image from 'next/image';

const colorProps = `bg-primary/10 text-primary `;
const avaxColor = "bg-[#E84040]/80 text-white";
const ethColor = `bg-[#8a92b2]/20 text-[#454a75]`;
const arColor = "bg-black text-white";
const iconProps = {width: 100, height: 100, color: "#1273ea"};
const lenProps = "bg-[#abfe2c] text-[#05501F] bg-[#aafe2ccb]";
const evmosColor = "bg-purple-400/60 text-white";

export const arLabels = (arweave_address: string, ownedLabels: OwnedLabel[]) => ownedLabels.map((owned: OwnedLabel) => {
  return {
    username: owned.label + '.ar',
    classes: arColor,
    canCopy: false,
    link_to: 'https://v2.viewblock.io/arweave/address/' + arweave_address,
    icon: <Image
      width={19}
      height={19}
      className="bg-white rounded-full"
      src={"/icons/ARWEAVE.svg"}
      alt=""
      quality={100} />,
    hovertext: `Scarcity: ${owned.scarcity}`
  }
}) || [];


export const avaxLabel = (AVVY:string|undefined) => {
  if (!AVVY) return null
  return {
    username: AVVY,
    classes: avaxColor,
    link_to: "https://app.avvy.domains/domains/" + AVVY,
    canCopy: false,
    icon: <Image
      width={19}
      height={19}
      src="/icons/AVALANCHE.svg"
      alt=""
      quality={50}
    />
  }
}

export const evmosLabel = (EVMOS:string|undefined) => {
  if (!EVMOS) return null
  return {
    username: EVMOS,
    classes: evmosColor,
    link_to: "https://app.evmos.domains/#/name/" + EVMOS,
    canCopy: false,
    icon: <Image
      width={20}
      height={20}
      src="https://evmos.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Ff28a6a7a-f801-409d-b6ad-2b8d8d09ccdc%2FEvmos_Token_White_RGB.svg?id=bd602f8e-e408-4ae2-837b-6ca4b19d239a&table=block&spaceId=b0b945be-0f04-4c85-8626-e80b7a5ffde2&userId=&cache=v2"
      alt="Evmos Logo"
      quality={50}
    />
  }
}

export const ethLabel = (ENS:string|undefined) => {
  const [isDark, setIsDark] = useRecoilState(isDarkMode);

  let dark_mode = `${isDark ? ('bg-[#8a92b2]/60 text-white') : (ethColor)} `;

  if (!ENS) return null;
  return {
    username: ENS,
    classes: dark_mode,
    link_to: "https://etherscan.io/enslookup-search?search=" + ENS,
    canCopy: false,
    icon: <Image
      height={19}
      width={19}
      src="/icons/ETHEREUM.svg"
      alt=""
      quality={100}
    />
  }
}
export const lensLabel = (lens:string[] |undefined) => {
  const [isDark, setIsDark] = useRecoilState(isDarkMode);

  let dark_mode = `${isDark ? ('bg-[#8a92b2]/60 text-white') : (ethColor)} `;

  if (!lens || lens?.length == 0) return null;

  const lensLabel = lens[0]?.replace("@", "")
  return {
    username: lensLabel,
    classes: lenProps,
    link_to: `https://lenster.xyz/u/${lensLabel}` ,
    canCopy: false,
    icon: <Image
      height={20}
      width={20}
      src="/icons/LENS.svg"
      alt=""
      quality={50}
    />
  }
}

export const getDefaultLabels = ({ arweave_address, ar, links, ENS, AVVY, LENS, EVMOS }: {
  arweave_address: string, 
  ar: OwnedLabel[], 
  links: Links, 
  ENS: string|undefined, 
  AVVY: string|undefined,
  LENS: string[] |undefined,
  EVMOS: string | undefined
}) => [
  ...arLabels(arweave_address, ar),
  avaxLabel(AVVY),
  ethLabel(ENS),
  lensLabel(LENS),
  evmosLabel(EVMOS),
  links?.twitter && {username: links.twitter, classes: colorProps,
    link_to: "https://twitter.com/" + links.twitter,
    canCopy: true,
    icon: <BsTwitter {...iconProps} />},
  links?.github && {username: links.github, classes: colorProps,
    link_to: "https://github.com/" + links.github,
    canCopy: true,
    icon: <BsGithub {...iconProps} />},
  links?.instagram && {username: links.instagram, classes: colorProps,
    link_to: "https://instagram.com/" + links.instagram,
    canCopy: true,
    icon: <BsInstagram {...iconProps}/>},
  links?.customUrl && {username: removeHttp(links.customUrl), classes: colorProps, 
    link_to: links.customUrl,
    canCopy: true,
    icon: <BsGlobe2 {...iconProps}/>},
].filter((l) => l !== null);

export const Labels = ({items}: {items: any}) => {
  return (
    <div className="flex flex-row flex-wrap carousel max-w-[100vw] space-x-2 justify-center md:justify-start">
      {items.map((item:any, index:number) => (
        <div key={index} className="carousel-item mt-1">
          {item}
        </div>
      ))}
    </div>
  );
};


export function GenericLabel ({username, classes, icon, link_to, canCopy}: GenericLabelInterface) {

  const [open, setOpen] = useState(false);
  const copy_text = (link: string) => {
    setOpen(true);
    navigator.clipboard.writeText(link);
  }
  const [isDark, setIsDark] = useRecoilState(isDarkMode);

  const attrs = {
    onClick: canCopy ? () => copy_text(username || '') : undefined
  }

  const classnames = `${classes} px-2.5 py-1 text-center font-bold text-xs rounded-xl relative transition-opacity duration-300 hover:opacity-60 `;

  if (!username) return <></>
  return (
    <>
      <>
        {link_to ? (
          <Link href={link_to} passHref>
            <a target="_blank" rel="noopener noreferrer" {...attrs} className={classnames}>
              <div className='flex flex-row items-center space-x-1'>
                {icon}
                <h3 className="font-inter">
                  {username}
                </h3>
              </div>
            </a>
          </Link>
        ) : (
          <button {...attrs} className={classnames + " cursor-pointer"}>
            <div className='flex flex-row items-center space-x-1'>
              {icon}
              <h3 className="font-inter">
                {username}
              </h3>
            </div>
          </button>
        )}
      </>
      {canCopy && (
        <Snackbar
          message="Copied to clipboard"
          anchorOrigin={{ vertical: "top", horizontal: "center" }}
          autoHideDuration={2000}
          onClose={() => setOpen(false)}
          open={open}
        />
      )}
    </>
  )
}
