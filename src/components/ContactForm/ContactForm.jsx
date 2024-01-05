import { useState } from "react"
import css from './contform.module.css'

export default function ContactForm({onSubmit}) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

const recordName = (e) => {
    setName(e.currentTarget.value);
  }

  const recordNumber = (e) => {
    setNumber(e.currentTarget.value);
  }

 const addContact = e => {
    e.preventDefault();
    onSubmit(name, number)
   setName('')
   setNumber('')
  };

   
    return (<div><h2>Phonebook</h2><form onSubmit={addContact} >
      <label className={css.title}> Contact Name
      <input type="text" name="name" onChange={recordName} value={name} required /> </label>
      <label className={css.title}> Contact Phone  <input type="tel" name="number" onChange={recordNumber} value={number} required />
      </label> <button className={css.sbmbtn} type="submit" >Add Contact</button>
    </form></div>
    );
  
};