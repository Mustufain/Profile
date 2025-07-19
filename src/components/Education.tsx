import {Award} from "lucide-react";
import React from "react";

const educations = [
    {
        degree: 'Master’s Degree, Computational Big Data Analytics',
        university: 'Tampere University',
        years: '2016 - 2019',
        description: 'Specialized in Big Data Analytics. Thesis on &quot;Creating user journeys and attribution modelling on marketing data&quot;',
        textColor: 'text-cyan-400'
    },
    {
        degree: 'Bachelor’s Degree, Software Engineeringr',
        university: 'National University of Science and Technology (NUST)',
        years: '2012 - 2016',
        description: 'Thesis on sentiment analysis and natural language processing.',
        textColor: 'text-pink-400'
    },
] as const


const EducationCard = ({education}: { education: typeof educations[number] }) => {
    return (
        <div
            className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-cyan-400/50 transition-all duration-300">
            <div className="flex items-center mb-4">
                <Award className="text-yellow-400 mr-3" size={24}/>
                <h3 className="text-2xl font-bold">{education.degree}</h3>
            </div>
            <p className={`text-lg mb-2 ${education.textColor}`}>{education.university}</p>
            <p className="text-gray-400 mb-4">{education.years}</p>
            <p className="text-gray-300">{education.description}</p>
        </div>
    )
}

export const Education = () => {

    return (
        <div className="max-h-[calc(100vh-400px)] overflow-y-auto space-y-8 pr-2 pt-6">
            {educations.map((education, index) => (
                <EducationCard key={`${education.degree}-${index}`} education={education}/>
            ))}
        </div>
    )
}