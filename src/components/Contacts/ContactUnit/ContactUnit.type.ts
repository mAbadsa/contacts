type ContactUnitType = {
  id: string;
  name: string;
  phoneNumber: string;
  img: { url: string; fetchedAt: string } | null;
  selectedContacts: { [key: string]: any }[];
  setSelectContact: (id: string, action: "select" | "unselect") => void;
};

export default ContactUnitType;
