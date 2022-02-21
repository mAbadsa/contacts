type ContactUnitType = {
  contacts: { [key: string]: any }[];
  selectedContacts: { [key: string]: any }[];
  setSelectContact: (id: string, action: "select" | "unselect") => void;
};

export default ContactUnitType;
