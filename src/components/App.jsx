import { useState, useEffect } from "react";
import ContactForm from "components/ContactForm/ContactForm";
import { ContactList } from "components/ContactList/ContactList";
import { Filter } from "components/Filter/Filter";
import shortid from 'shortid';

export default function App() {
  const [contacts, setContacts] = useState(() => JSON.parse(window.localStorage.getItem('contacts')) || []);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = (name, number) => {
    const contact = {
      id: shortid.generate(),
      name,
      number,
    };

    if (!contacts.some(contact1 => contact1.name === contact.name)) {
      setContacts([contact, ...contacts]);
    } else {
      alert(contact.name + " is already exist");
    }
  };

  const searchName = (e) => {
    setFilter(e.currentTarget.value);
  };

  const filterContacts = () => {
    const mini = filter.toLowerCase();
    return contacts.filter(contact => contact.name.toLowerCase().includes(mini));
  };

  const deleteContact = (id) => {
    
    const deleted = contacts.filter(contact => contact.id !== id)
    console.log(contacts)
    setContacts(deleted);
  
  };
  

  return (
    <>
      <ContactForm onSubmit={addContact} />
      <Filter value={filter} onChange={searchName} />
      <ContactList contactsList={filterContacts()} deleteContact={deleteContact} />
    </>
  );
}
