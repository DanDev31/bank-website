import React from 'react'
import { quotes } from '../assets';

interface FeedBackCardProps{
  name:string;
  content:string;
  title:string;
  img:string;
}

export const FeedBackCard = ({ name, content, title, img }:FeedBackCardProps) => {
  return (
    <div className="flex justify-between flex-col px-10 py-12 rounded-[20px]
    max-w-[470px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card" style={{margin:"0 auto"}}>
      <img src={ quotes } alt="double_quotes" className="w-[42px] h-[27px] object-contain"/>
      <p className="font-poppins font-normal text-[18px] leading-[32px] text-white my-10">{ content }</p>

      <div className="flex flex-row">
        <img src={ img } alt={ name } className="w-[48px] h-[48px] rounded-full"/>
        <div className="flex flex-col ml-4">
          <h4 className="font-poppins font-semibold text-[20px] leading-[32px] text-white">{ name }</h4>
          <p className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite my-10">{ title }</p>
        </div>
      </div>
    </div>
  )
}
