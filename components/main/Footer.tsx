import React from "react";
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
} from "react-icons/rx";

import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px] ">
        <div className="w-full flex flex-col items-center justify-center m-auto">
            <div className="w-full h-full flex flex-row items-center justify-around flex-wrap">
                

                <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                    <div className="font-bold text-[16px]">Community</div>
                    <p className="flex flex-row items-center my-[15px] cursor-pointer">
                    
                        <FaYoutube />
                        <a href="https://www.youtube.com/channel/UCUBdB1aKEriNU88DicUS-8A" target="blank"><span className="text-[15px] ml-[6px]">Youtube</span></a>   
                    </p>
                    <p className="flex flex-row items-center my-[15px] cursor-pointer">
                        <RxGithubLogo />
                        <a href="https://github.com/AlleAkhil/tecstasy24"><span className="text-[15px] ml-[6px]">Github</span></a>    
                    </p>
                </div>
                <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                    <div className="font-bold text-[16px]">Social Media</div>
                    <p className="flex flex-row items-center my-[15px] cursor-pointer">
                        <RxInstagramLogo/>
                        <a href="https://www.instagram.com/tecstasy2k24?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="blank"><span className="text-[15px] ml-[6px]">Instagram</span></a>    
                    </p>
                    <p className="flex flex-row items-center my-[15px] cursor-pointer">
                        <RxGithubLogo />
                        <span className="text-[15px] ml-[6px]">Twitter</span>    
                    </p>
                </div>
                <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                    <div className="font-bold text-[16px]">About</div>
                   <p className="flex flex-row items-center my-[15px] cursor-pointer">
                     
                        <span className="text-[15px] ml-[6px]">Become Sponsor</span>    
                    </p>
                    {/* <p className="flex flex-row items-center my-[15px] cursor-pointer">
                      
                        <span className="text-[15px] ml-[6px]">Learning about me</span>    
                    </p> */}
                    <p className="flex flex-row items-center my-[15px] cursor-pointer">
                  
                        <a href="mailto:tecstasy24@cbit.ac.in"><span className="text-[15px] ml-[6px]">tecstasy24@cbit.ac.in</span></a>    
                    </p>
                </div>
            </div>

            <div className="mb-[20px] text-[15px] text-center">
                &copy; IT - Tecstasy24. All rights reserved
            </div>
        </div>
    </div>
  )
}

export default Footer