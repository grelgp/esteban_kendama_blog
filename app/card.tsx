"use client"

// @ts-ignore
import HoverVideoPlayer from 'react-hover-video-player';

export default function Card({ title, videoSrc }: { title: String, videoSrc: string }) {

    let pauseAllVideos = () => {
        console.log("Hover new video");
        let length = document.getElementsByTagName("video").length;

        for (let i = 0; i < length; i++) {
            const video = document.getElementsByTagName("video").item(i);
            if (!video) continue;
            if (video.paused) continue;

            video.pause();
        }
    }

    return (
        <div className=' w-[90vw] sm:w-72 mt-2 flex flex-col items-stretch mx-auto rounded-2xl bg-white border-[1px] shadow-md'
            onMouseEnter={event => { var element = (event.target as HTMLDivElement).getElementsByTagName("video")[0] as HTMLVideoElement; if (element) { pauseAllVideos(); element.play() } }}
            onMouseLeave={event => { var element = (event.target as HTMLDivElement).getElementsByTagName("video")[0] as HTMLVideoElement; if (element) element.pause() }}
        >
            <p className='w-full text-center text-xl my-2'>{title}</p>
            <div className='rounded-b-2xl overflow-hidden'>
                <HoverVideoPlayer
                    videoSrc={videoSrc}
                />

                {/* <video
                    className='videoCard m-auto rounded-b-2xl'
                    muted
                    loop
                >
                    <source src={videoSrc} type="video/mp4" />
                </video> */}
            </div>
        </div>
    )
}