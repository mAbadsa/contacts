type ActionType = {
  selectAll: () => void;
  selectedContacts: { [key: string]: any }[];
  contacts: { [key: string]: any }[];
};

export default ActionType;
