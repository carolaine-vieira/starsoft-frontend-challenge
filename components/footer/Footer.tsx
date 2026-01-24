// Internal dependencies
import Styles from './Footer.module.scss';
import { FooterProps } from './Footer.types';

export const Footer = ({ className = '', text }: FooterProps) => {
	return <footer className={`${Styles.footer} ${className}`}>{text}</footer>;
};
