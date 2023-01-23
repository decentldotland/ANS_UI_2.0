import { ArrowLongRightIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import React from 'react'
import BackButton from '../BackButton'
import LineBarTracker from '../LineBarTracker'
import NextButton from '../NextButton'
import OverviewSteps from '../OverviewSteps'

interface Props { 
    step: number,
    setstep: any
}

function CheckList_1({step, setstep}: Props) {
const ARCONNECT_DOWNLOAD_LINK = "https://www.arconnect.io/"

  return (
    <>
            <section className='relative h-screen  '>
                  <div className='flex flex-row justify-between sm:space-x-60  mb-4 items-center mt-28 sm:mt-32'>
                    <BackButton setstep={setstep} step={step - 1}/>
                    <NextButton setstep={setstep} step={step + 1}/>
                  </div>

                  <div className='items-center '>
                    <div className='mt-6 mb-5 '>
                      <LineBarTracker step={0}  total_step={3}/>
                    </div>
                    <h1 className='text-3xl font-bold mb-2'>Let's get you started <br/> with Arweave and ANS.</h1>
                    <p className='text-left text-[#8e8e8f] text-sm'>
                      Claiming your first AR Page/ANS can be quite <br /> 
                      overwhelming. But don't worry! We're here to <br />to guide you along the process.
                    </p>
                    <OverviewSteps />
                    <section className='mt-4'>
                      <div className='space-y-3 mb-5 '>
                        <h1 className='text-xl text-left text-[#3a3a3a] font-medium'>Complete the checklist to get started:</h1>
                        <div  className=' flex flex-row space-x-3.5 rounded-xl px-5 py-3 w-full bg-[#edecec] items-center'>
                          <div className='w-6 h-6 border-2 border-[#b3b2b3] bg-[#f6f6f6] rounded-md'></div>
                          <h1 className='font-bold text-[#6a6b6a] text-center text-sm'>Download and setup Arconnect</h1>
                        </div>
                        <div  className=' flex flex-row space-x-3.5 rounded-xl px-5 py-3 w-full bg-[#edecec] items-center'>
                          <div className='w-6 h-6 border-2 border-[#b3b2b3] bg-[#f6f6f6] rounded-md'></div>
                          <h1 className='font-bold text-[#6a6b6a] text-center text-sm'>Link my EVM wallet to my ArConnect</h1>
                        </div>
                        <div  className=' flex flex-row space-x-3.5 rounded-xl px-5 py-3 w-full bg-[#edecec] items-center '>
                          <div className='w-6 h-6 border-2 border-[#b3b2b3] bg-[#f6f6f6] rounded-md'></div>
                          <h1 className='font-bold text-[#6a6b6a] text-center text-sm'>Claim my ArPage</h1>
                        </div>
                      </div>
                    </section>
                    
                    </div>
                    
                    <div className='flex justify-center flex-col items-center w-full'>
                      <Link href={ARCONNECT_DOWNLOAD_LINK} >
                          <a target="_blank" rel="noopener noreferrer" onClick={() => setstep(3)}
                            className="cursor-pointer bg-[#1273ea] w-full h-14 justify-center items-center flex relative flex-row rounded-lg text-white font-bold text-lg" >
                              <div className='flex justify-center items-center'>
                                <p className='text-center'>Download and Setup ArConnect</p>
                                <ArrowLongRightIcon height={20} width={20} className="absolute right-2" color='white'/>
                              </div>
                          </a>
                      </Link>

                      <p onClick={() => setstep(0)} className='cursor-pointer mt-4 text-center text-sm text-[#6a6b6a] font-medium'>
                          I will set it up later
                      </p>
                    </div>
                </section>
              </>
  )
}

export default CheckList_1