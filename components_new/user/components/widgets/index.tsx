import React, { useEffect, useState } from 'react';
import Poaps from './poaps';
import TabContent from './tabcontent';
import { TOP_WIDGETS } from '../../hackathon';
import { Res, POAP } from '../../../../src/types';
import { Divider } from '../reusables';
import { CircularProgress } from '@mui/material';
export interface WidgetType {
  children: any; // pass default component here
  canRender: boolean; // pass conditionals here
  loading?: boolean;
  loadingChildren?: any; // pass loading animation component here
  divider?: boolean;
}

export function Widget(props: WidgetType) {
  return (
    <>
      {props.canRender ? (
        <>
          {props.children}
          {props.divider && <Divider />}
        </>
      ): (
        <>
          {/* for loading animations */}
          {props.loadingChildren}
        </>
      )}
    </>
  )
}

export const DEFAULT_COMPONENT_LIST: WidgetType[] = [
]

export default function Widgets({arkProfile, loading, nfts, nftLoading, arweaveAddr }: {arkProfile: Res | undefined, loading: boolean, nfts: any, nftLoading: boolean, arweaveAddr: string | null}) {
  
  const [poaps, setPoaps] = useState<POAP[] | undefined>([]);
  useEffect(() => {
    if(arkProfile !== undefined) {
      setPoaps(getPoapProperties(arkProfile));
    }
    getPoapProperties(arkProfile)
  },[arkProfile]);

  if (!nfts) return (
    <>
      {loading ?
      (
        <div className='flex flex-col items-center justify-center space-y-2 mt-5
        text-content-100/80'>
          <CircularProgress color="inherit" size={40}/>
          <p className='text-xl text-gray-400'>Retrieving user's assets</p>
        </div>
      )
      :
      (
        <div className='flex items-center justify-center mt-5  flex-col space-y-2
          text-lg text-content-100/80'>
            <p className='text-xl font-bold'>No User Information</p>
            <p className='text-sm text-gray-400'>This user has no collection, activity, poaps...</p>
        </div>
      )}
    </>
  )

  const getPoapProperties = (obj: Res | undefined) => {
    const evm = obj ? obj.EVM : undefined;
    if (!evm || typeof evm !== 'object') {
      return undefined;
    }
    const poapsProperties: POAP[] = [];
    for (const [address, value] of Object.entries(evm)) {
      if (Array.isArray(value.POAPS)) {
        value.POAPS.forEach(poap => {
          poapsProperties.push(poap);
        });
      }
    }
    return poapsProperties;
  };

  console.log("POAP PROPERTIES w State: ", poaps);

  const defaultWidgets = [
    // POAP
    <Widget
      canRender={poaps ? poaps.length > 0 : false}
      loading={loading} 
      divider={true}
      key={0}
    >
      <Poaps poapsArr={poaps}/>
    </Widget>,
    ...TOP_WIDGETS(arkProfile),
    // NFTS
    <Widget 
      canRender={true} 
      divider={false} 
      key={0}
    >
      <TabContent 
        arkProfile={arkProfile} 
        loading={loading} 
        nfts={nfts}
        nftLoading={nftLoading}
        arweaveAddr={arweaveAddr}
      />
    </Widget>,
  ]
  return (
    <div className="overflow-x-hidden">
      {defaultWidgets.map((w, i) => <React.Fragment key={i}>{w}</React.Fragment>)}
    </div>
  )
}
