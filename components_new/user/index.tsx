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
import { Nav } from '../../components_new/nav';

import { Koii, ArweaveTransaction } from '../../src/types';
import { Toaster } from 'react-hot-toast';
import CoverPage from './components/Coverpage/CoverPage';
import { useRecoilState } from 'recoil';
import { isDarkMode } from '../../atoms';

function PageContent(props: userInfo) {
  const bio = typeof props.userInfo.bio === 'string' ? 
  props.userInfo.bio : "";
  const info = props.userInfo;

  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState<boolean>(true);
  const [arkProfile, setArkProfile] = useState<Res | undefined>();

  // fetches user info by arweave wallet address
  const fetchData = async (address: string) => {

    setLoading(true);
    const result = await axios(`https://ark-api.decent.land/v1/profile/arweave/${address}/true`);
    const parsed = JSON.parse(result.data);
    if (parsed.res) {
      const resObj: Res = parsed?.res;
      setArkProfile(resObj);
    }
    setLoading(false);
  };

  useEffect(() => {
    if (props.userInfo.user) {
      fetchData(props.userInfo.user);
    };
  }, []);

  const [isDark, setIsDark] = useRecoilState(isDarkMode);
  useEffect(() => {
      // On page load or when changing themes, best to add inline in `head` to avoid FOUC
      if (localStorage.theme === 'ardark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        localStorage.setItem('theme', 'ardark');
        setIsDark(true)
      } else {
        localStorage.setItem('theme', 'arlight');
        setIsDark(false)
      }
  }, [isDark]);

  return (
    <div className=" w-full font-inter h-screen" data-theme={isDark ? "ardark" : "arlight"}>
    <Nav />
    <Toaster position='top-center'/>

      <CoverPage userInfo={props.userInfo} />
      <div className="flex xl:justify-center" data-theme={isDark ? "ardark" : "arlight"}>
        <div className="flex flex-col px-6 md:px-16 sm:px-10  max-w-[100vw] xl:max-w-[1145px] w-full">
          <UserInfo user={{userInfo: info}} profile={arkProfile} />
          <EditModal userColor={info.address_color} wallet={info.user} userInfo={props} /> 
          {/* @ts-ignore  sorry about this */}
          <Widgets 
            arkProfile={arkProfile} 
            loading={loading} 
          />
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
      <div className="w-full h-body ">
        <PageContent userInfo={props.userInfo} />
      </div>
    </div>
  )
}
