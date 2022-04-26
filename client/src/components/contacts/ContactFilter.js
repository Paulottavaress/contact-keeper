import React, { useContext, useRef, useEffect } from 'react';
import ContactContext from '../../context/contact/contactContext';

export const ContactFilter = () => {
  const contactContext = useContext(ContactContext);
  const text = useRef('');

  const { filterContact, clearFilter, filtered } = contactContext;

  useEffect(() => {
    if (!filtered) text.current.value = '';
  })

  const onChange = e => (text.current.value !== '')
    ? filterContact(e.target.value)
    : clearFilter();

  return (
    <form>
      <input
        ref={text}
        type="text"
        placeholder="Filter Contacts..."
        onChange={onChange}
      />
    </form>
  )
}
