import Image from 'next/image';
import picture from '../assets/images/picture.png';

export const Profile = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
            <div className="relative mb-6">
                <div
                    className="w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 bg-gradient-to-br from-cyan-400 to-pink-400 rounded-full overflow-hidden shadow-2xl">
                    <Image
                        src={picture}
                        alt="Profile picture"
                        width={224}
                        height={224}
                        className="object-cover w-full h-full"
                    />
                </div>

                <div
                    className="absolute -bottom-3 -right-3 w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-green-400 to-blue-500 rounded-full flex items-center justify-center text-xl sm:text-2xl shadow-xl">
                    ✨
                </div>
            </div>

            <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl">
                Experienced Software Engineer with a demonstrated history of working in the market research industry and
                behavioural data. Proficient in working with AWS services, Infrastructure as Code and Serverless
                architecture.
            </p>
        </div>
    );
}