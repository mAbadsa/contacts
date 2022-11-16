import type {FC} from 'react';
import {useState} from 'react';
import {Col, Row} from 'react-bootstrap';

import Button from '../../Button';
import CheckBox from '../../CheckBox';

import type ActionType from './Action.type';
import './styles.css';

const Action: FC<ActionType> = ({selectAll, selectedContacts, contacts = []}) => {
	const [checked, setChecked] = useState<boolean>(false);
	const handleChange = (): void => {
		setChecked(!checked);
		selectAll();
	};

	return (
		<Row>
			<Col sm='6' md='6' lg='6'>
				<CheckBox checked={selectedContacts.length === contacts.length} onChange={handleChange} />
			</Col>
			<Col className='d-flex justify-content-end' sm='6' md='6' lg='6' justify-content='flex-end'>
				<Button variant='success'>Export All</Button>
			</Col>
		</Row>
	);
};

export default Action;
