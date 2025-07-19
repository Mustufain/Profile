import {Zap} from "lucide-react";

const skills = [
    {name: 'TypeScript', level: 80, color: 'from-blue-500 to-slate-600'},
    {name: 'Node.js', level: 80, color: 'from-blue-500 to-slate-600'},
    {name: 'Java', level: 70, color: 'from-slate-400 to-blue-500'},
    {name: 'Kotlin', level: 80, color: 'from-slate-400 to-blue-500'},
    {name: 'Scala', level: 60, color: 'from-slate-400 to-blue-500'},
    {name: 'Python', level: 80, color: 'from-blue-400 to-slate-500'}
] as const;


const SkillsCard = ({skill, index}: { skill: typeof skills[number]; index: number }) => {
    return <div key={skill.name}
                className="bg-white/10 backdrop-blur-lg rounded-3xl p-6 border border-white/20 hover:border-cyan-400/50 transition-all duration-300">
        <div className="flex items-center justify-between mb-4">
            <h3 className="text-l font-bold">{skill.name}</h3>
            <span className="text-gray-400">{skill.level}%</span>
        </div>
        <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden">
            <div
                className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out`}
                style={{
                    width: `${skill.level}%`,
                    animationDelay: `${index * 200}ms`
                }}
            ></div>
        </div>
    </div>
}


export const Skills = () => {
    return <div className="animate-in fade-in duration-500 pt-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
                <SkillsCard key={skill.name} skill={skill} index={index}/>
            ))}
        </div>

        <div className="mt-12 text-center">
            <div
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500 to-pink-500 rounded-full px-8 py-4 text-white font-bold text-lg shadow-lg">
                <Zap size={24}/>
                <span>Always learning, always creating!</span>
            </div>
        </div>
    </div>
}