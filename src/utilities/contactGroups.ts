const cotactsGroup = (contacts: { [key: string]: any }[]): Object[] => {
  const groupContacts: { letter: string; contacts: Object }[] = [];
  const hash: {
    [key: string]: {
      letter: string;
      contacts: any[];
    };
  } = {};

  contacts?.forEach((contact: { [key: string]: any }) => {
    let letter: string = contact?.name.toLowerCase().substring(0, 1);
    if (hash[letter]) {
      hash[letter].contacts.push(contact);
    } else {
      groupContacts.push(
        (hash[letter] = {
          letter,
          contacts: [contact],
        })
      );
    }
  });
  return groupContacts;
};

export default cotactsGroup;
