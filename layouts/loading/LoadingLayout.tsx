// External dependencies
import Image from 'next/image';

// Internal dependencies
import { Spinner } from '@/components/spinner/Spinner';
import Styles from './LoadingLayout.module.scss';

export default function LoadingLayout() {
	return (
		<main className={Styles.main}>
			<Image src={'./images/starsoft-logo.svg'} alt="Starsoft logo" width={200} height={76} />
			<Spinner />
		</main>
	);
}
