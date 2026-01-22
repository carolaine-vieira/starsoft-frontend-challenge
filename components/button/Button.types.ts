type ButtonVariant = 'primary' | 'gray';
type ButtonSize = 'sm' | 'lg';

export interface CustomButtonProps {
	variant?: ButtonVariant;
	size?: ButtonSize;
	isLoading?: boolean;
}

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	customProps: CustomButtonProps;
}
