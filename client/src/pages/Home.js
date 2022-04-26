import React from 'react'
import { Contacts } from '../components/contacts/Contacts';
import { ContactForm } from '../components/contacts/ContactForm';
import { ContactFilter } from '../components/contacts/ContactFilter';

export const Home = () => {
  return (
    <div className='grid-2'>
      <div>
        <ContactForm />
      </div>
      <div>
        <ContactFilter />
        <Contacts />
      </div>
    </div>
  )
}
