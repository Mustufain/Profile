import Image from 'next/image';
import picture from '../assets/images/picture.png';
import {useState} from "react";


export const Profile = () => {
    const [isGlowing, setIsGlowing] = useState(false);
    return (
        <div className="flex flex-col items-center justify-center min-h-[50vh] sm:min-h-[60vh] text-center px-4 w-full">
            <div className="flex flex-col items-center justify-center min-h-[50vh] sm:min-h-[60vh] text-center px-4 w-full">
                <div className="relative mb-6 sm:mb-8">
                    <div
                        className={`
                        w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 
                        bg-gradient-to-br from-cyan-400 to-pink-400 
                        rounded-full overflow-hidden shadow-2xl mx-auto 
                        cursor-pointer transform transition-all duration-500 ease-out
                        hover:scale-105 active:scale-95
                        ${isGlowing
                            ? 'shadow-[0_0_30px_rgba(34,211,238,0.6),0_0_60px_rgba(236,72,153,0.4),0_0_90px_rgba(34,211,238,0.2)] ring-4 ring-cyan-400/30'
                            : 'hover:shadow-[0_0_25px_rgba(34,211,238,0.5),0_0_50px_rgba(236,72,153,0.3)]'
                        }
                    `}
                        onMouseEnter={() => setIsGlowing(true)}
                        onMouseLeave={() => setIsGlowing(false)}
                        onTouchStart={() => setIsGlowing(true)}
                        onTouchEnd={() => setIsGlowing(false)}
                    >
                        <Image
                            src={picture}
                            alt="Profile picture"
                            width={224}
                            height={224}
                            className="object-cover w-full h-full"
                        />
                    </div>

                    <div
                        className={`
                        absolute -bottom-2 -right-2 sm:-bottom-3 sm:-right-3 
                        w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 
                        bg-gradient-to-br from-green-400 to-blue-500 
                        rounded-full flex items-center justify-center 
                        text-sm sm:text-xl md:text-2xl shadow-xl
                        transform transition-all duration-500 ease-out
                        ${isGlowing
                            ? 'animate-pulse shadow-[0_0_20px_rgba(34,197,94,0.8)] scale-110'
                            : 'hover:animate-spin hover:shadow-[0_0_15px_rgba(34,197,94,0.6)]'
                        }
                    `}
                    >
                        ✨
                    </div>
                </div>
                <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 leading-relaxed max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl mx-auto">
                    Experienced Software Engineer with a demonstrated history of working in the market research industry and
                    behavioural data. Proficient in working with AWS services, Infrastructure as Code and Serverless
                    architecture.
                </p>
            </div>
        </div>
    );
}