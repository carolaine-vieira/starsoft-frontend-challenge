import nextJest from 'next/jest.js';

const createJestConfig = nextJest({
	dir: './',
});

const customJestConfig = {
	collectCoverage: true,
	collectCoverageFrom: [
		'components/**/*.{ts,tsx}',
		'layouts/**/*.{ts,tsx}',
		'store/**/*.{ts,tsx}',
		'!**/*.d.ts', // Ignore declaration files
		'!**/*.types.ts', // Ignore declaration files
		'!**/index.ts', // Ignore barrel files
		'!**/*.{test,spec}.{ts,tsx}', // Ignore test files themselves
	],
	testEnvironment: 'jest-environment-jsdom',
	setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
	rootDir: './',
	moduleNameMapper: {
		'^@/types/(.*)$': '<rootDir>/shared/types/$1',
		'^@/utils/(.*)$': '<rootDir>/shared/utils/$1',
		'^@/hooks/(.*)$': '<rootDir>/shared/hooks/$1',
		'^@/store/(.*)$': '<rootDir>/store/$1',
		'^@/components/(.*)$': '<rootDir>/components/$1',
		'^@/layouts/(.*)$': '<rootDir>/layouts/$1',
		'^@/services/(.*)$': '<rootDir>/services/$1',
		'^@/(.*)$': '<rootDir>/$1',
	},
};

export default createJestConfig(customJestConfig);
