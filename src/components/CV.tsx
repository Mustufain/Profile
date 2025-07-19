'use client';
import {useState} from "react";
import {Education} from "@/components/Education";
import {Navigation, SectionId} from "@/components/Navigation";
import {Experience} from "@/components/Experience";
import {Skills} from "@/components/Skills";
import {Profile} from "@/components/Profile";
import {Contact} from "@/components/Contact";

export const CV = () => {
    const [activeSection, setActiveSection] = useState<SectionId>('profile');

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
            {/* Animated background elements */}
            <div className="absolute inset-0 opacity-5">
                <div
                    className="absolute top-20 left-20 w-32 h-32 sm:w-72 sm:h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
                <div
                    className="absolute top-40 right-20 w-32 h-32 sm:w-72 sm:h-72 bg-slate-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
                <div
                    className="absolute bottom-20 left-40 w-32 h-32 sm:w-72 sm:h-72 bg-slate-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-2000"></div>
            </div>

            <div className="relative z-10 w-full px-4 sm:px-6 py-6 sm:py-8">
                {/* Header */}
                <div className="text-center mb-8 sm:mb-12">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-blue-400 to-slate-300 bg-clip-text text-transparent mb-2 sm:mb-4 leading-tight">
                        Mustufain Rizvi
                    </h1>
                    <p className="text-lg sm:text-xl md:text-2xl text-slate-300 mb-4 sm:mb-6">Senior Software
                        Engineer</p>
                    <div className="flex justify-center text-slate-400">
                        <Contact/>
                    </div>
                </div>

                {/* Navigation */}
                <div className="mb-8 sm:mb-12">
                    <Navigation
                        activeSection={activeSection}
                        setActiveSection={setActiveSection}
                    />
                </div>

                {/* Content */}
                <div className="w-full max-w-4xl mx-auto">
                    {activeSection === 'profile' && (<Profile/>)}
                    {activeSection === 'education' && (<Education/>)}
                    {activeSection === 'experience' && (<Experience/>)}
                    {activeSection === 'skills' && (<Skills/>)}
                </div>
            </div>
        </div>
    );
}