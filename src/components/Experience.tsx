import {Code} from "lucide-react";
import React from "react";

const experiences = [
    {
        title: 'Senior Software Engineer', company: 'DISQO', years: '2021 - Present',
        responsibilities: 'Building back end services using AWS in Java/Kotlin/Typescript, ' +
            'monitoring of services using Cloud Watch/New Relic/Grafana,' +
            ' provisioning infrastructure using Terraform and designing CI/CD pipelines.',
        textColor: 'text-cyan-400'
    },
    {
        title: 'Data Engineer', company: 'Verto Analytics', years: '2020 - 2021',
        responsibilities: 'Analysing behavioural data passively collected from Verto meters,' +
            'building end-to-end data pipelines and orchestration via Airflow and Spark,' +
            'building tools for data quality and monitoring' +
            'and setting up monitoring dashboards in Grafana.',
        textColor: 'text-pink-400'
    },
] as const

const ExperienceCard = ({experience}: { experience: typeof experiences[number] }) => {
    return (
        <div
            className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-cyan-400/50 transition-all duration-300">
            <div className="flex items-center mb-4">
                <div
                    className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center mr-4">
                    <Code size={24}/>
                </div>
                <div>
                    <h3 className="text-2xl font-bold">{experience.title}</h3>
                    <p className={`text-lg ${experience.textColor}`}>{experience.company}</p>
                </div>
            </div>
            <p className="text-gray-400 mb-4">{experience.years}</p>
            <p className="text-gray-300">{experience.responsibilities}</p>
        </div>)
}

export const Experience = () => {
    return (
        <div className="max-h-[calc(100vh-400px)] overflow-y-auto space-y-8 pr-2 pt-6">
            {experiences.map((experience, index) => (
                <ExperienceCard key={`${experience.title}-${index}`} experience={experience}/>
            ))}
        </div>
    )
}