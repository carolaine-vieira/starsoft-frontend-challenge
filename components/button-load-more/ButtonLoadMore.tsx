// Internal dependencies
import Styles from './ButtonLoadMore.module.scss';
import { Button } from '@/components/button/Button';
import { ButtonLoadMoreProps } from './ButtonLoadMore.types';

export const ButtonLoadMore = (props: ButtonLoadMoreProps) => {
	return (
		<div>
			<div className={Styles.progress}>
				<div
					className={Styles.progress_bar}
					style={{ width: props.customProps.loadingProgress }}
				/>
			</div>

			<Button {...props} className={Styles.button}>
				{props.customProps.isLoading
					? props.customProps.labelLoading
					: props.disabled
						? props.customProps.labelDisabled
						: props.customProps.label}
			</Button>
		</div>
	);
};
