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
        setActiveSection: (id: SectionId) => void;
    }) => {
    return (
        <button
            key={section.id}
            onClick={() => setActiveSection(section.id)}
            className={`px-2 py-2 sm:px-4 sm:py-3 md:px-6 md:py-3 rounded-full transition-all duration-300 flex items-center justify-center space-x-1 sm:space-x-2 text-xs sm:text-sm md:text-base ${
                activeSection === section.id
                    ? 'bg-gradient-to-r from-blue-600 to-slate-600 text-white shadow-lg'
                    : 'text-slate-300 hover:text-white hover:bg-white/10'
            }`}
        >
            <span className="text-sm sm:text-base md:text-lg">{section.icon}</span>
            <span className="font-medium hidden sm:inline">{section.title}</span>
        </button>
    )
}

export const Navigation = ({activeSection, setActiveSection}: {
    activeSection: SectionId,
    setActiveSection: (id: SectionId) => void;
}) => {
    return (
        <div className="flex justify-center">
            <div
                className="bg-white/10 backdrop-blur-lg rounded-full p-1 sm:p-2 flex space-x-1 sm:space-x-2 overflow-x-auto max-w-full">
                {sections.map((section) => (
                    <NavButton key={section.id} section={section} activeSection={activeSection}
                               setActiveSection={setActiveSection}/>
                ))}
            </div>
        </div>
    )
}