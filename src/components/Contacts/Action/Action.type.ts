type ActionType = {
	selectAll: () => void;
	selectedContacts: Array<Record<string, any>>;
	contacts: Array<Record<string, any>>;
};

export default ActionType;
