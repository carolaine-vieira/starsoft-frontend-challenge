// External dependencies
import React from 'react';
import Image from 'next/image';

// Internal dependencies
import { ButtonCartProps } from './ButtonCart.types';
import Styles from './ButtonCart.module.scss';

export const ButtonCart = ({ className = '' }: ButtonCartProps) => {
	return (
		<button className={`${Styles.button} ${className}`}>
			<Image src={'./bag.svg'} alt="Bag icon" width={33} height={33} />
			<span className={Styles.span}>0</span>
		</button>
	);
};
