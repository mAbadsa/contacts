/* eslint-disable */

import type { FC, ReactElement } from 'react';

import { Row } from 'react-bootstrap';
import ContactsGroup from '../ContactsGroup';
import contactGroup from '../../../utilities/contactGroups';

import type ContactsContainerType from './ContactsContainer.type';

const ContactsContainer: FC<ContactsContainerType> = ({
  contacts,
  selectedContacts,
  setSelectContact,
  searchResult,
}) => {
  const groupedContacts = contactGroup(searchResult.length > 0 ? searchResult : contacts);

  const contactsGroupEl: ReactElement[] = groupedContacts?.map(
    (item: any, idx): ReactElement => (
      <Row key={idx}>
        <div>
          <span style={{ fontSize: '18px' }}>{item.letter.toUpperCase()}</span>
        </div>
        <ContactsGroup
          contacts={item.contacts}
          selectedContacts={selectedContacts}
          setSelectContact={setSelectContact}
        />
      </Row>
    ),
  );
  return <>{contactsGroupEl}</>;
};

export default ContactsContainer;
