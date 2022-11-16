import type {FC} from 'react';
import {Button as BSButton} from 'react-bootstrap';
import type ButtonType from './Button.type';
import './styles.css';

const Button: FC<ButtonType> = ({shape, variant, size = 'sm', children, ...props}) => (
	<BSButton className={`${shape as string}`} variant={variant} size={size} {...props}>
		{children}
	</BSButton>
);

export default Button;
