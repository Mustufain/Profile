export const sections = [
    {id: 'profile', title: 'Profile', icon: '👤'},
    {id: 'education', title: 'Education', icon: '🎓'},
    {id: 'experience', title: 'Experience', icon: '💼'},
    {id: 'skills', title: 'Skills', icon: '⚡'}
] as const;

export type SectionId = typeof sections[number]['id']

const NavButton = (
    {section, activeSection, setActiveSection}: {
        section: typeof sections[number],
        activeSection: SectionId,
        setActiveSection: (id:  SectionId) => void;
    }) => {
    return (
        <button
            key={section.id}
            onClick={() => setActiveSection(section.id)}
            className={`px-6 py-3 rounded-full transition-all duration-300 flex items-center space-x-2 ${
                activeSection === section.id
                    ? 'bg-gradient-to-r from-blue-600 to-slate-600 text-white shadow-lg'
                    : 'text-slate-300 hover:text-white hover:bg-white/10'
            }`}
        >
            <span className="text-lg">{section.icon}</span>
            <span className="font-medium">{section.title}</span>
        </button>
    )
}


export const Navigation = ({activeSection, setActiveSection}: {
    activeSection: SectionId,
    setActiveSection: (id:  SectionId) => void;
}) => {
    return (<div className="flex justify-center mb-12">
        <div className="bg-white/10 backdrop-blur-lg rounded-full p-2 flex space-x-2">
            {sections.map((section) => (
                <NavButton key={section.id} section={section} activeSection={activeSection}
                         setActiveSection={setActiveSection}/>
            ))}
        </div>
    </div>)
}