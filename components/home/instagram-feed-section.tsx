"use client"

import { Instagram, Play, Volume2, VolumeX } from "lucide-react"
import { useState, useRef, useEffect } from "react"

interface ReelPost {
    id: number
    type: string
    url: string
    thumbnail: string
}

function ReelCard({
    post,
    isActive,
    muted,
    onActivate,
    setMuted
}: {
    post: ReelPost,
    isActive: boolean,
    muted: boolean,
    onActivate: () => void,
    setMuted: (m: boolean) => void
}) {
    const videoRef = useRef<HTMLVideoElement>(null)

    useEffect(() => {
        if (videoRef.current) {
            if (isActive) {
                const playPromise = videoRef.current.play()
                if (playPromise !== undefined) {
                    playPromise.catch(error => {
                        console.log('Playback prevented:', error)
                    })
                }
            } else {
                videoRef.current.pause()
                // Optional: Reset time to 0 if we want it to restart every time
                // videoRef.current.currentTime = 0 
            }
        }
    }, [isActive])

    return (
        <div
            className={`group relative aspect-[9/16] w-full overflow-hidden rounded-2xl bg-gray-100 shadow-md cursor-pointer transition-all duration-300 ${isActive ? 'ring-2 ring-black/5 scale-[1.02]' : 'hover:scale-[1.01]'}`}
            onMouseEnter={onActivate}
        >
            <video
                ref={videoRef}
                src={post.url}
                className="absolute inset-0 w-full h-full object-cover"
                muted={muted}
                loop
                playsInline
                preload="metadata"
            />

            {/* Overlay: Show darker overlay when NOT active (paused) */}
            <div className={`absolute inset-0 bg-black/20 transition-opacity duration-300 ${isActive ? 'opacity-0' : 'opacity-100'}`} />

            {/* Play Icon - Only show when NOT active */}
            <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ${isActive ? 'scale-0 opacity-0' : 'scale-100 opacity-100'}`}>
                <div className="bg-black/30 backdrop-blur-sm p-4 rounded-full border border-white/20">
                    <Play className="w-8 h-8 fill-white text-white" />
                </div>
            </div>

            {/* Mute Control - Visible when active or hovered */}
            <button
                onClick={(e) => {
                    e.stopPropagation()
                    setMuted(!muted)
                }}
                className={`absolute bottom-3 right-3 p-2 bg-black/40 backdrop-blur-sm rounded-full text-white transition-opacity cursor-pointer z-10 ${isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}
            >
                {muted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                <span className="sr-only">Toggle Mute</span>
            </button>
        </div>
    )
}

export function InstagramFeedSection() {
    const [muted, setMuted] = useState(true)
    const [activeId, setActiveId] = useState<number>(1) // Default to first video

    const posts = [
        {
            id: 1,
            type: 'video',
            url: "/reels/reel1.mp4",
            thumbnail: "https://images.unsplash.com/photo-1544367563-12123d896889?w=400&h=600&fit=crop"
        },
        {
            id: 2,
            type: 'video',
            url: "/reels/reel2.mp4",
            thumbnail: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=600&fit=crop"
        },
        {
            id: 3,
            type: 'video',
            url: "/reels/reel3.mp4",
            thumbnail: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=400&h=600&fit=crop"
        },
        {
            id: 4,
            type: 'video',
            url: "/reels/reel4.mp4",
            thumbnail: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400&h=600&fit=crop"
        },
    ]

    return (
        <section className="py-16 bg-white border-t border-gray-100">
            <div className="mx-auto max-w-7xl px-4 sm:px-6">

                {/* Profile Header */}
                <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-16">

                    {/* Profile Picture */}
                    <div className="relative group cursor-pointer">
                        <div className="w-24 h-24 md:w-32 md:h-32 rounded-full p-[3px] bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500 hover:scale-105 transition-transform duration-300">
                            <div className="w-full h-full rounded-full border-4 border-white overflow-hidden bg-gray-100 relative">
                                <img
                                    src="/images/neha-profile.jpg"
                                    alt="Neha Sharma"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Profile Details */}
                    <div className="text-center md:text-left space-y-4">
                        <div className="flex flex-col md:flex-row items-center gap-4">
                            <h3 className="text-2xl font-light text-gray-900">@cuppingwithneha</h3>
                            <div className="flex gap-3">
                                <a
                                    href="https://www.instagram.com/cuppingwithneha/reels/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-[#0095f6] hover:bg-[#1877f2] text-white px-6 py-1.5 rounded-lg text-sm font-semibold transition-colors"
                                >
                                    Follow
                                </a>
                            </div>
                        </div>

                        <div className="flex items-center justify-center md:justify-start gap-8 text-base">
                            <div><span className="font-semibold text-gray-900">37</span> posts</div>
                            <div><span className="font-semibold text-gray-900">335</span> followers</div>
                            <div><span className="font-semibold text-gray-900">348</span> following</div>
                        </div>

                        <div className="text-sm max-w-md">
                            <h4 className="font-bold text-gray-900 block mb-1">Neha Sharma</h4>
                            <p className="text-gray-600">Physical Therapist ◆ Mind and Body Coach</p>
                            <p className="text-gray-500 text-xs mt-1">Helping you heal naturally through movement and mindfulness.</p>
                        </div>
                    </div>
                </div>

                {/* Reels Grid */}
                <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-4 -mx-4 px-4 md:mx-0 md:px-0 md:grid md:grid-cols-4 md:gap-8 md:overflow-visible md:pb-0 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                    {posts.map((post) => (
                        <div key={post.id} className="min-w-[280px] w-[75vw] sm:w-[45vw] md:w-auto md:min-w-0 snap-center">
                            <ReelCard
                                post={post}
                                isActive={activeId === post.id}
                                onActivate={() => setActiveId(post.id)}
                                muted={muted}
                                setMuted={setMuted}
                            />
                        </div>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <a
                        href="https://www.instagram.com/cuppingwithneha/reels/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-gray-500 font-medium hover:text-[#E1306C] transition-colors"
                    >
                        <Instagram className="w-5 h-5" />
                        View more on Instagram
                    </a>
                </div>
            </div>
        </section>
    )
}
