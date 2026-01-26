import { assertValue } from '@/utils/helpers/error';

export class Site {
	static NAME = 'Starsoft';
	static API_URL = assertValue(
		process.env.NEXT_PUBLIC_API_URL,
		'Missing environment variable: NEXT_PUBLIC_API_URL',
	);
	static SITE_URL = assertValue(
		process.env.NEXT_PUBLIC_SITE_URL,
		'Missing environment variable: NEXT_PUBLIC_SITE_URL',
	);
}
