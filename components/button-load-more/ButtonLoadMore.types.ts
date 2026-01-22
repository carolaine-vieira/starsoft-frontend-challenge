import { ButtonProps, CustomButtonProps } from '../button/Button.types';

export interface ButtonLoadMoreProps extends ButtonProps {
	customProps: CustomButtonProps & {
		label: string;
		labelLoading: string;
		labelDisabled: string;

		/**
		 * Pass a progress in porcentage to be used as width;
		 */
		loadingProgress: string;
	};
}
