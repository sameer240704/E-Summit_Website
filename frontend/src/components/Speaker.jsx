"use client";
import React from "react";
import { PinContainer } from "../components/ui/3d-pin.tsx";

export default function Speaker({ name, profile, image, link }) {
  return (
    <div className="h-[25rem] w-[24%] flex items-center justify-center ">
      <PinContainer
        title="LinkedIn"
        href={link}
      >
        <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[17rem] h-[20rem] ">
            <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
                { name }
            </h3>
            <div className="text-base !m-0 !p-0 font-normal">
                <span className="text-slate-500 ">
                { profile }
                </span>
            </div>
            <div className="flex flex-1 h-14 w-full rounded-lg mt-4 overflow-hidden">
                <img src={image} className="w-full rounded-lg"/>
            </div>
        </div>
      </PinContainer>
    </div>
  );
}
