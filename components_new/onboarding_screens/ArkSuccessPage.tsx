import React from 'react'
import { SetterOrUpdater } from 'recoil';
import MainNextButton from '../buttons/MainNextButton'

interface ArkSuccessPageInterface {
  handleOnboarding: SetterOrUpdater<number>;
}

function ArkSuccessPage(props: ArkSuccessPageInterface) {
  return (
    <div className='flex px-5 flex-col h-screen relative justify-center md:-bottom-16
       w-full sm:w-[440px] bottom-16  space-y-5 '>
        <p className="sm:text-5xl  text-4xl font-bold text-left">Your Near Wallet <br /> 
        has been added 
        your ArPage! 🥳
        </p>
        <span onClick={() => props.handleOnboarding(4)}>
          <MainNextButton btnName='Register Name' />
        </span>
    </div>
  )
}

export default ArkSuccessPage