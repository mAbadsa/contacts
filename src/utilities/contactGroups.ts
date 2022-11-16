/* eslint-disable */

const cotactsGroup = (contacts: Array<Record<string, any>>): Array<Record<string, unknown>> => {
  const groupContacts: Array<{ letter: string; contacts: Record<string, any> }> = [];
  const hash: Record<
    string,
    {
      letter: string;
      contacts: Record<string, any>;
    }
  > = {};

  contacts?.forEach((contact: Record<string, any>) => {
    const letter: string = contact?.name.toLowerCase().substring(0, 1);
    if (hash[letter]) {
      hash[letter].contacts.push(contact);
    } else {
      groupContacts.push(
        (hash[letter] = {
          letter,
          contacts: [contact],
        }),
      );
    }
  });
  return groupContacts;
};

export default cotactsGroup;
