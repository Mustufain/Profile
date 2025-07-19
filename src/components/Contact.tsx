import {Github, Linkedin, MapPin, Phone} from "lucide-react";

const contacts = [
    {icon: <Phone size={16}/>, text: '+358469541223'},
    {icon: <MapPin size={16}/>, text: 'Helsinki, Finland'},
    {
        icon: <Linkedin size={16}/>,
        text: 'www.linkedin.com/in/mustufain-abbas',
        link: 'https://www.linkedin.com/in/mustufain-abbas'
    },
    {icon: <Github size={16}/>, text: 'https://github.com/Mustufain', link: 'https://github.com/Mustufain'}
]

type Contact = typeof contacts[number];

const ContactItem = ({contact}: { contact: Contact }) => {
    return (
        <div className="flex items-center space-x-1 sm:space-x-2 hover:text-blue-400 transition-colors min-w-0">
            <div className="flex-shrink-0">
                {contact.icon}
            </div>
            <span className="truncate text-xs sm:text-sm">
                {
                    contact?.link ?
                        <a href={contact.link} className="hover:underline truncate block">
                            {contact.text}
                        </a> :
                        (contact.text)
                }
            </span>
        </div>
    )
}

export const Contact = () => {
    return (
        <div className="w-full max-w-full overflow-hidden">
            {/* Mobile view - stacked vertically with smaller spacing */}
            <div className="flex flex-col space-y-2 sm:hidden">
                {contacts.map((contact, index) => (
                    <ContactItem key={`${contact.text}-${index}`} contact={contact}/>
                ))}
            </div>

            {/* Tablet and desktop view - horizontal with wrapping */}
            <div className="hidden sm:flex flex-wrap items-center justify-center gap-x-4 gap-y-2 max-w-full">
                {contacts.map((contact, index) => (
                    <ContactItem key={`${contact.text}-${index}`} contact={contact}/>
                ))}
            </div>
        </div>
    );
}