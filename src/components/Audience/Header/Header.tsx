import type {FC} from 'react';
import {Col, Row} from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBarsStaggered} from '@fortawesome/free-solid-svg-icons';
import type {IconProp} from '@fortawesome/fontawesome-svg-core';

import type HeaderType from './Header.type';
import './styles.css';

const Header: FC<HeaderType> = ({contactsNumber}) => (
	<Row>
		<Col sm='6' md='6' lg='6'>
			<Row>
				<Col sm='3' md='3' lg='3'>
					<FontAwesomeIcon icon={faBarsStaggered as IconProp} />
				</Col>
				<Col className='d-flex justify-content-start p-md-0' sm='9' md='9' lg='9'>
          Audience
				</Col>
			</Row>
		</Col>
		<Col className='d-flex justify-content-end' sm='6' md='6' lg='6' justify-content='flex-end'>
			<p className='meta text-secondary'>
				{contactsNumber} {contactsNumber !== 1 && 'Contacts'}{contactsNumber === 1 && 'Contact'}
			</p>
		</Col>
	</Row>
);

export default Header;
