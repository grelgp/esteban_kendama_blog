"use client"

// @ts-ignore
import HoverVideoPlayer from 'react-hover-video-player';

export default function Card({ title, videoSrc }: { title: String, videoSrc: string }) {
    return (
        <div className='w-[90vw] sm:w-72 mt-2 flex flex-col items-stretch mx-auto rounded-2xl bg-white border-[1px] border-gray-100 shadow-md hover:shadow-xl hover:animate-small-bounce pb-0 overflow-hidden'>
            <p className='w-full text-center text-xl border-b-[1px] py-2  border-gray-100'>{title}</p>
            <HoverVideoPlayer
                videoSrc={videoSrc}
            />
        </div>
    )
}