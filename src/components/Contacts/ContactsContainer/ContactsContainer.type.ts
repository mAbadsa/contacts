type ContactsContainerType = {
	contacts: Array<Record<string, any>>;
	selectedContacts: Array<Record<string, any>>;
	setSelectContact: (id: string, action: 'select' | 'unselect') => void;
	searchResult: Array<Record<string, any>>;
};

export default ContactsContainerType;
