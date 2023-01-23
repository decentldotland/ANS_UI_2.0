import React from 'react';
import { BsHeart } from 'react-icons/bs';
import { Res } from '../../../../src/types';

export function HackathonLabels(arkProfile: Res | undefined) {
  // for using our labeling system, check out GenericLabelInterface, and examples in getDefaultLabels

  // const genericLabelArguments = {
  //   username: arkProfile?.ENS,
  //   classes: "bg-gradient-to-bl from-indigo-200 via-red-200 to-yellow-100",
  //   link_to: `https://app.ens.domains/search/${arkProfile?.ENS}` ,
  //   canCopy: true,
  //   icon: <img height={13} width={13} src="https://cryptologos.cc/logos/ethereum-eth-logo.svg?v=002" alt="" />
  // }
  
  // START HERE

  const labels: any[] = []; // [ <GenericLabel {...genericLabelArguments} />, <HackathonLabelExample arkProfile={arkProfile} /> ];

  return labels;
}


export function HackathonLabelExample({arkProfile}: {arkProfile: Res | undefined}) {
  return (
    <button className="bg-gradient-to-bl from-indigo-200 via-red-200 to-yellow-100 px-2.5 py-2 font-bold text-sm text-blue-500 rounded-2xl flex items-center cursor-pointer">
      <BsHeart className="mr-1" />
      {arkProfile?.EVM.ENS}
    </button>
  )
}
