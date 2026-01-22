// Internal dependencies
import Styles from './Spinner.module.scss';

export const Spinner = () => {
	return (
		<div className={Styles.spinner} role="status" aria-label="Loading">
			<span className="sr-only">Loading…</span>
		</div>
	);
};
