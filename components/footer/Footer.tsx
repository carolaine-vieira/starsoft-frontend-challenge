// Internal dependencies
import Styles from './Footer.module.scss';
import { FooterProps } from './Footer.types';

export const Footer = ({ className = '' }: FooterProps) => {
	return (
		<footer className={`${Styles.footer} ${className}`}>
			STARSOFT © TODOS OS DIREITOS RESERVADOS
		</footer>
	);
};
