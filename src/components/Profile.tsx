import Image from 'next/image';
import picture from '../assets/images/picture.png';

export const Profile = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-[50vh] sm:min-h-[60vh] text-center px-4 w-full">
            <div className="relative mb-6 sm:mb-8">
                <div
                    className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 bg-gradient-to-br from-cyan-400 to-pink-400 rounded-full overflow-hidden shadow-2xl mx-auto">
                    <Image
                        src={picture}
                        alt="Profile picture"
                        width={224}
                        height={224}
                        className="object-cover w-full h-full"
                    />
                </div>

                <div
                    className="absolute -bottom-2 -right-2 sm:-bottom-3 sm:-right-3 w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 bg-gradient-to-br from-green-400 to-blue-500 rounded-full flex items-center justify-center text-sm sm:text-xl md:text-2xl shadow-xl">
                    ✨
                </div>
            </div>

            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 leading-relaxed max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl mx-auto">
                Experienced Software Engineer with a demonstrated history of working in the market research industry and
                behavioural data. Proficient in working with AWS services, Infrastructure as Code and Serverless
                architecture.
            </p>
        </div>
    );
}