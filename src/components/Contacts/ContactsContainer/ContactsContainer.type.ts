type ContactsContainerType = {
  contacts: { [key: string]: any }[];
  selectedContacts: { [key: string]: any }[];
  setSelectContact: (id: string, action: "select" | "unselect") => void;
  searchResult: { [key: string]: any }[];
};

export default ContactsContainerType;
