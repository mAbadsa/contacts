import type {FC} from 'react';
import {Col} from 'react-bootstrap';
import Header from './Header';
import type AudienceType from './Audience.type';
import './styles.css';

const Audience: FC<AudienceType> = ({contactsNumber}) => (
	<Col className='audience p-3' sm='3' md='3' lg='3'>
		<Header contactsNumber={contactsNumber} />
	</Col>
);

export default Audience;
