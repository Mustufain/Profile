import {Github, Linkedin, MapPin, Phone} from "lucide-react";

const contacts = [
    {icon: <Phone size={20}/>, text: '+358469541223'},
    {icon: <MapPin size={20}/>, text: 'Helsinki, Finland'},
    {icon: <Linkedin size={20}/>, text: 'www.linkedin.com/in/mustufain-abbas', link: 'https://www.linkedin.com/in/mustufain-abbas'},
    {icon: <Github size={20}/>, text: 'https://github.com/Mustufain', link: 'https://github.com/Mustufain'}
]

type Contact = typeof contacts[number];


const ContactItem = ({contact}: { contact: Contact }) => {
    return (
        <div className="flex items-center space-x-2 hover:text-blue-400 transition-colors">
            {contact.icon}
            <span>
                {
                    contact?.link ?
                        <a href={contact.link}>{contact.text}</a> :
                        (contact.text)
                }
            </span>
        </div>
    )
}

export const Contact = () => {
    return contacts.map(
        (contact, index) =>
            <ContactItem key={`${contact.text}-${index}`} contact={contact}/>
    )
}