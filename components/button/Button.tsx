// Internal dependencies
import Styles from './Button.module.scss';
import { ButtonProps } from './Button.types';
import { Spinner } from '@/components/spinner/Spinner';

export const Button = (props: ButtonProps) => {
	const { customProps, ...nativeProps } = props;
	const isDisabled = props.disabled || customProps?.isLoading;

	return (
		<button
			type="button"
			disabled={isDisabled}
			aria-disabled={isDisabled}
			aria-busy={customProps?.isLoading}
			{...nativeProps}
			className={`${Styles.button} ${customProps?.size ? Styles[customProps?.size] : Styles.sm} ${customProps?.variant ? Styles[customProps?.variant] : Styles.primary} ${props.className}`}
		>
			{customProps?.isLoading && <Spinner />}

			{props.children}
		</button>
	);
};
