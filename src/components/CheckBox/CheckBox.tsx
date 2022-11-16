import type {CSSProperties, FC} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import type {IconProp} from '@fortawesome/fontawesome-svg-core';
import {faCheck} from '@fortawesome/free-solid-svg-icons';
import {Form} from 'react-bootstrap';
import type CheckBoxType from './CheckBox.type';
import './styles.css';

const CheckBox: FC<CheckBoxType> = ({checked, className, onChange, ...props}) => {
	const style: CSSProperties = {
		background: `${checked ? '#c7c7c0' : '#efefef'}`,
		visibility: `${checked ? 'visible' : 'hidden'}`,
	};

	return (
	// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
		<Form className={`d-flex align-items-center ${className!}`}>
			<Form.Check
				className='CheckBox'
				type='checkbox'
				id='Select All'
				label='Select All'
				checked={checked}
				onChange={onChange}
				{...props}
			/>
			<div className='styled-checkbox' style={style} onClick={onChange}>
				{checked ? <FontAwesomeIcon icon={faCheck as IconProp} /> : null}
			</div>
		</Form>
	);
};

export default CheckBox;
