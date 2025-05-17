import { useRef } from "react";
import type { VideoHTMLAttributes } from "react";

interface SyncedVideoProps extends VideoHTMLAttributes<HTMLVideoElement> {
    src: string;
}

const SyncedVideo: React.FC<SyncedVideoProps> = ({ src, ...props }) => {
    const videoRef = useRef<HTMLVideoElement | null>(null);

    // Optionally expose a mute/unmute button for each video
    const handleUnmute = () => {
        if (videoRef.current) {
            videoRef.current.muted = false;
            videoRef.current.play();
        }
    };

    const handleMute = () => {
        if (videoRef.current) {
            videoRef.current.muted = true;
        }
    };

    return (
        <div className="relative">
            <video
                ref={videoRef}
                {...props}
                src={src}
                autoPlay
                muted // Required for autoplay to work
                controls
                className="w-full rounded-lg"
            />
            <div className="absolute bottom-4 left-4 flex gap-2">
                <button
                    onClick={handleUnmute}
                    className="px-3 py-1 bg-orange-500 rounded text-white shadow hover:bg-orange-600"
                >
                    Unmute
                </button>
                <button
                    onClick={handleMute}
                    className="px-3 py-1 bg-gray-700 rounded text-white shadow hover:bg-gray-600"
                >
                    Mute
                </button>
            </div>
        </div>
    );
};

export default SyncedVideo;
