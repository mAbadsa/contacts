import { FC, ReactElement, memo } from "react";

import ContactUnit from "../ContactUnit";
import ContactsGroupType from "./ContactsGroup.type";
import "./styles.css";

const ContactsGroup: FC<ContactsGroupType> = ({
  contacts,
  selectedContacts,
  setSelectContact,
}) => {
  const contactsUnitEl: ReactElement[] = contacts?.map((contacts) => {
    return (
      <ContactUnit
        key={contacts.id}
        phoneNumber={contacts.phoneNumber}
        name={contacts.name}
        img={contacts.img}
        id={contacts.id}
        selectedContacts={selectedContacts}
        setSelectContact={setSelectContact}
      />
    );
  });
  return <>{contactsUnitEl}</>;
};

export default ContactsGroup;
