type UserCardType = {
  id: string;
  name: string;
  phoneNumber: string;
  img: { url: string; fetchedAt: string } | null;
  selectedContacts: { [key: string]: any }[];
  setSelectContact: (id: string, action: "select" | "unselect") => void;
};

export default UserCardType;
