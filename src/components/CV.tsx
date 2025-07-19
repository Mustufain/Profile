'use client';
import { useState } from "react";
import { Education } from "@/components/Education";
import {Navigation, SectionId} from "@/components/Navigation";
import { Experience } from "@/components/Experience";
import { Skills } from "@/components/Skills";
import { Profile } from "@/components/Profile";
import {Contact} from "@/components/Contact";

export const CV = () => {
    const [activeSection, setActiveSection] = useState<SectionId>('profile');

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
            {/* Animated background elements */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-20 left-20 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
                <div className="absolute top-40 right-20 w-72 h-72 bg-slate-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
                <div className="absolute bottom-20 left-40 w-72 h-72 bg-slate-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-2000"></div>
            </div>

            <div className="relative z-10 container mx-auto px-6 py-8">
                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-6xl font-bold bg-gradient-to-r from-blue-400 to-slate-300 bg-clip-text text-transparent mb-4">
                        Mustufain Rizvi
                    </h1>
                    <p className="text-2xl text-slate-300 mb-6">Senior Software Engineer</p>
                    <div className="flex justify-center space-x-6 text-slate-400">
                        <Contact />
                    </div>
                </div>

                {/* Navigation */}
                <Navigation
                    activeSection={activeSection}
                    setActiveSection={setActiveSection}
                />

                {/* Content */}
                <div className="max-w-4xl mx-auto min-h-[calc(100vh-350px)] flex flex-col justify-start -mt-10 overflow-hidden">
                    {activeSection === 'profile' && (<Profile />)}

                    {activeSection === 'education' && (<Education />)}

                    {activeSection === 'experience' && (<Experience />)}

                    {activeSection === 'skills' && (<Skills />)}
                </div>
            </div>
        </div>
    );
}