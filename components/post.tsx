"use client";

import Link from "next/link";

export function Post(props: any) {
  const { post } = props;

  return (
    <div
      className="flex w-[300px] h-[400px] flex-col m-5 border-2 border-white rounded-xl shadow-md ring-4 ring-transparent p-4
                  transition-all duration-300 hover:ring-pink-500 
                  cursor-pointer hover:scale-105 
                  before:bg-gradient-to-r before:from-transparent  "
    >
      <h4 className="text-white w-full border-1 borderwhite  h-[220px] font-normal text-[16px]">
        <div className="img border-1 rounded-xl h-full border-white w-full ">
          
        </div>
        <Link href={`/blog/${post.id}`}>受試者ID:{post.DataID}</Link>
        <p className="text-[12px]">日期:{post.Date}</p>
        <p className="text-[12px]">時間:{post.Time}</p>
        <div className="Info-section p-3 rounded-xl bg-white mt-3 border border-white">
          <p className="text-[12px] text-gray-600">Current_A:{post.Current_A}</p>
          <p className="text-[12px] text-gray-600">Temperature_C:{post.Temperature_C}</p>
          <p className="text-[12px] text-gray-600">machine_id:{post.machine_id}</p>
          
        </div>
      </h4>
    </div>
  );
}
