const cotactsGroup = (contacts: { [key: string]: any }[]): Object[] => {
  const groupContacts: { letter: string; contacts: Object }[] = [];
  const hash: {
    [key: string]: {
      letter: string;
      contacts: any[];
    };
  } = {};

  contacts?.forEach((contact: { [key: string]: any }) => {
    // console.log(contact);
    // console.log({ name: contact?.name });
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
  console.log(groupContacts);
  return groupContacts;
};

// const result: Object[] = cotactsGroup([
//   {
//     name: "muhhammad",
//     phone: "51554",
//   },
//   {
//     name: "ahmed",
//     phone: "871515",
//   },
//   {
//     name: "muhhammad",
//     phone: "51554",
//   },
//   {
//     name: "hasan",
//     phone: "51554",
//   },
//   {
//     name: "ahmed",
//     phone: "51554",
//   },
// ]);

// console.log(result);

export default cotactsGroup;
