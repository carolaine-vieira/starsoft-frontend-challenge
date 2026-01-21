import { defineConfig, globalIgnores } from 'eslint/config';
import nextVitals from 'eslint-config-next/core-web-vitals';
import nextTs from 'eslint-config-next/typescript';

import prettier from 'eslint-config-prettier';
import prettierPlugin from 'eslint-plugin-prettier';

export default defineConfig([
	// Next.js core rules (performance + best practices)
	...nextVitals,

	// Next.js TypeScript rules
	...nextTs,

	// Disable rules that conflict with Prettier
	prettier,

	// Prettier plugin + your custom rules
	{
		plugins: {
			prettier: prettierPlugin,
		},
		rules: {
			'prettier/prettier': 'error',
			'@typescript-eslint/no-explicit-any': 'warn',
			'@typescript-eslint/no-var-requires': 'off',
			'@typescript-eslint/no-empty-interface': 'off',
			'react-hooks/exhaustive-deps': 'off',
		},
	},

	// Override default ignores (same as Next)
	globalIgnores(['.next/**', 'out/**', 'build/**', 'next-env.d.ts']),
]);
