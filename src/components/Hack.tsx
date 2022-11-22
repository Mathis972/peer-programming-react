// @ts-nocheck
import { useState } from 'react';

const Hack = () => {
  const [contacts, setContacts] = useState([]);
  const onHack = async () => {
    const supportedProperties = await navigator.contacts.getProperties();

    const contactsToSelect = await navigator.contacts.select(
      supportedProperties,
      {
        multiple: true,
      }
    );

    setContacts(contactsToSelect);
  };
  return (
    <div className="w-full max-w-xs">
      <p>HACK</p>
      <button onClick={onHack}>GORS BOUTTON </button>
      {contacts.map((contact) => (
        <div>
          <strong>{contact.name}</strong>
          <p>{contact.email.join(', ')}</p>
          <p>{contact.tel.join(', ')}</p>
        </div>
      ))}
    </div>
  );
};

export default Hack;
