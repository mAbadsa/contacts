type ContactUnitType = {
	contacts: Array<Record<string, any>>;
	selectedContacts: Array<Record<string, any>>;
	setSelectContact: (id: string, action: 'select' | 'unselect') => void;
};

export default ContactUnitType;
