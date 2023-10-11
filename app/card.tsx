"use client"

export default function Card({ title, videoSrc }: { title: String, videoSrc: string }) {
    return (
        <div className=' w-[90vw] sm:w-72 p-2 my-2 flex flex-col items-stretch mx-auto rounded-2xl border-white border-2 shadow-md'
            onClick={() => console.log("test")}
            onMouseEnter={event => { var element = (event.target as HTMLDivElement).getElementsByTagName("video")[0] as HTMLVideoElement; if (element) element.play() }}
            onMouseLeave={event => { var element = (event.target as HTMLDivElement).getElementsByTagName("video")[0] as HTMLVideoElement; if (element) element.pause() }}
        >
            <p className='w-full text-center text-2xl'>{title}</p>
            <div className='bg-white m-4 flex-1'>
                <video
                    className='videoCard m-auto'
                    muted
                >
                    <source src={videoSrc} type="video/mp4" />
                </video>
            </div>
        </div>
    )
}