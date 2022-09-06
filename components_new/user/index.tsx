import axios from 'axios';
import { useState, useEffect } from 'react';
import { userInfo, Res } from '../../src/types';
import { EditModal } from '../../components/editor/editmodal';
import { Labels } from './components/labels';
import { UserInfo } from './components/userInfo';
import { Bio } from './components/bio';
import { Collectibles } from './components/collectibles';
import { Sidebar } from './sidebar';
import { ANSIdentitiesManager, Poaps } from './hackathon';
import CoverPage from './components/CoverPage';
import { result } from 'lodash';

function PageContent(props: userInfo) {
  const bio = typeof props.userInfo.bio === 'string' ? 
  props.userInfo.bio : "";
  const info = props;
  
  const [arkProfile, setArkProfile] = useState<Res | undefined>();

  const fetchData = async (address: string) => {
    const result = await axios(`https://ark-api.decent.land/v1/profile/arweave/${address}`)
    const resobject: Res = result?.data?.res;
    if (resobject) setArkProfile(resobject);
  };

  useEffect(() => {
    if (props.userInfo.user) {
      // fetches user info by arweave wallet address
      fetchData(props.userInfo.user)
    }
  }, [])

  return (
    <div className="h-9 w-full">
      <CoverPage userInfo={props.userInfo} />
      <div className="flex-wrap max-w-full rounded-lg px-16">
        <UserInfo user={info} profile={arkProfile} />
        {/* These are temporary changes, most likely will need to bring them back as they would be helpful for contributros */}
        {/* <Labels userInfo={info} /> */}
        {/* <EditModal userColor={info.address_color} wallet={info.user} userInfo={props} />  */}
        {/* <div className="flex flex-col rounded-md w-full h-full bg-base-100 overflow-x-hidden p-8 mb-10">
          <Bio text={bio} />
          <Collectibles userInfo={info} />
          </div> 
          */}
         {/* User Bio and Available Labels */}
         
            
          <div className=''>
            {arkProfile && arkProfile.POAPS && <Poaps props={arkProfile} />}
          </div>
          {/* {arkProfile && <ANSIdentitiesManager props={arkProfile} />} */}
      </div>
    </div>
  );
}

export default function UserPage (props: userInfo) {
  return (
    <div className="md:flex h-full w-full relative">
      {/* <div className="h-full max-h-full overflow-clip w-[250px] md:block hidden bg-base-100">
        <Sidebar />
      </div> */}
      <div className="w-full h-body overflow-y-scroll bg-base-200/25">
        <PageContent userInfo={props.userInfo} />
      </div>
    </div>
  )
}
