import React from 'react'
import { BiMessageRoundedEdit } from "react-icons/bi";
import {RiAccountPinCircleFill} from "react-icons/ri";
import { FaSearchLocation } from "react-icons/fa";
import { BiCalendar } from "react-icons/bi";
import {MdSettingsSuggest} from "react-icons/md"
const NavIcon = ({ props }) => {
    let open = props;
  return (
    <div>
      
          <BiMessageRoundedEdit
            className={` origin-left font-medium text-5xl p-1 align-middle fill-white duration-200 ${
              !open && "rotate-[360deg]"
            }`}
          />
        
          <RiAccountPinCircleFill
            className={` origin-left font-medium text-5xl pb-4 fill-white duration-200 ${
              !open && "rotate-[360deg]"
            }`}
          />
       
          <FaSearchLocation
            className={` origin-left font-medium text-5xl pb-4 fill-white duration-200 ${
              !open && "rotate-[360deg]"
            }`}
          />
       
          <BiCalendar
            className={` origin-left font-medium text-5xl pb-4 fill-white duration-200 hover: ${
          !open && "rotate-[360deg]"
          
            }`}
          />
       
          <MdSettingsSuggest
            className={` origin-left font-medium text-5xl pb-4 fill-white duration-200 ${
              !open && "rotate-[360deg]"
            }`}
          />
        
    </div>
  );
}

export default NavIcon