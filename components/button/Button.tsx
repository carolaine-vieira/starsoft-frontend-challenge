// External dependencies
import React from 'react';

// Internal dependencies
import { ButtonProps } from './Button.types';

const GeneralButton = (props: ButtonProps) => {
	const isDisabled = props.disabled || props.isLoading;

	return (
		<button
			type="button"
			disabled={isDisabled}
			aria-disabled={isDisabled}
			aria-busy={props.isLoading}
			className={''}
			{...props}
		>
			{props.isLoading && (
				<span role="status" aria-live="polite" className="sr-only">
					Loading
				</span>
			)}

			{props.children}
		</button>
	);
};

export const Button = React.memo(GeneralButton);
