import axios from 'axios';
import { useState, useEffect } from 'react';
import { userInfo, Res } from '../../src/types';
import { EditModal } from '../../components/editor/editmodal';
import { UserInfo } from './components/userInfo';
import { Bio } from './components/bio';
import Collectibles from './components/widgets/tabcontent/tabs.tsx/collectibles';
import ArweaveActivity from './components/widgets/tabcontent/tabs.tsx/activity';
import Widgets from './components/widgets';
import { Divider, LoadingOrNotFound } from './components/reusables';
import CoverPage from './components/CoverPage';
import { Koii, ArweaveTransaction } from '../../src/types';

function PageContent(props: userInfo) {
  const bio = typeof props.userInfo.bio === 'string' ? 
  props.userInfo.bio : "";
  const info = props.userInfo;

  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState<boolean>(true);

  const [arkProfile, setArkProfile] = useState<Res | undefined>();

  // fetches user info by arweave wallet address
  const fetchData = async (address: string) => {
    const result = await axios(`https://ark-api.decent.land/v1/profile/arweave/${address}`)
    const resobject: Res = result?.data?.res;
    if (resobject) {
      setLoading(true)

      setArkProfile(resobject);

      setLoading(false)
    }
  };

  useEffect(() => {
    if (props.userInfo.user) {
      fetchData(props.userInfo.user)
    };
  }, [])

  return (
    <div className="h-9 w-full font-inter ">
      <CoverPage userInfo={props.userInfo} />
        <div className="flex flex-row justify-center">
          <div className="flex flex-col w-[1300px] xl:px-16 ">  
            <UserInfo user={{userInfo: info}} profile={arkProfile} />
            <EditModal userColor={info.address_color} wallet={info.user} userInfo={props} /> 
            {/* @ts-ignore  sorry about this*/}
            <Widgets arkProfile={arkProfile}/>
        </div>
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
