import React, { useState } from 'react'
import { Player } from '../Components/videoPlayer/Player'
import {Recommended} from '../Components/videoData'
import VideoGrid from "../Components/VideoGrid";
import { Link } from 'react-router-dom';
import { Comment } from '../Components/videoPlayer/Comment';


const VideoPlayer = () => {
    let desc = "I replaced my MacBook’s fan after running Diagnostics and receiving a PPF003/PPF0MacBook’s fan after running Diagnostics and receiving a PPF003/PPF004 error...I replaced my MacBook’s fan after running Diagnostics and receiving a PPF003/PPF0MacBook’s fan after running Diagnostics and receiving a PPF003/PPF004 error...I replaced my MacBook’s fan after running Diagnostics and receiving a PPF003/PPF0MacBook’s fan after running Diagnostics and receiving a PPF003/PPF004 error...I replaced my MacBook’s fan after running Diagnostics and receiving a PPF003/PPF0MacBook’s fan after running Diagnostics and receiving a PPF003/PPF004 error...I replaced my MacBook’s fan after running Diagnostics and receiving a PPF003/PPF0MacBook’s fan after running Diagnostics and receiving a PPF003/PPF004 error...I replaced my MacBook’s fan after running Diagnostics and receiving a PPF003/PPF0MacBook’s fan after running Diagnostics and receiving a PPF003/PPF004 error";


    const [moreDesc, setMoreDesc] = useState(false);



  return (
        <div className="container m-auto">
            <div className='grid grid-cols-12 justify-center' >
                <div className="col-span-12 lg:col-span-8 justify-self-end py-12 px-4  xl:p-12  overflow-auto h-[100vh] playerLeft">
                    <Player />
                    <Comment/>
                </div>
                <div className="col-span-12 lg:col-span-4 bg-white pt-2">
                    <div className={`px-4 lg:px-8 py-10 flex flex-col gap-y-7 overflow-auto lg:h-[100vh] playerRight`}>
                        <div className="shadow-[0px_4px_10px_rgba(0,0,0,0.1);] px-8 py-4 rounded-[10px]">
                            <div className="flex justify-between items-align">
                                <h5 className='text-xl'>Description</h5>
                                {!moreDesc &&
                                    <img onClick={() => {setMoreDesc(!moreDesc)}} width="24px" src="/assets/videoPlayer/ChevronDown.svg" alt="" />
                                }
                            </div>
                            <div className="description pt-4 pr-4 relative">

                                <p className='text-base text-grey-200'>
                                    {moreDesc ? desc.slice(0, 500).concat('...') : desc.slice(0, 85).concat('...')} </p>

                                {moreDesc &&
                                    <img className='absolute bottom-0 right-0' onClick={() => {setMoreDesc(!moreDesc)}} width="24px" src="/assets/videoPlayer/ChevronUp.svg" alt="" />
                                }
                            </div>
                        </div>
                        <h3 className='text-lg lg:text-2xl 2xl:text-3xl'>Recommended videos</h3>
                        <div className="grid grid-cols-12 gap-5 lg:gap-y-5">
                            {Recommended.map((item,index) =>{
                                return(
                                    <div className="col-span-12 md:col-span-6  lg:col-span-12">
                                        <Link to={item.url} key={index}>
                                            <VideoGrid item={item} key={index} height={'220px'}/>
                                        </Link>
                                    </div>
                                )
                            })}

                        </div>
                    </div>
                </div>
            </div>

        </div>

  )
}

export default VideoPlayer