import nextJest from 'next/jest.js';

const createJestConfig = nextJest({
	dir: './',
});

const customJestConfig = {
	collectCoverage: true,
	collectCoverageFrom: [
		'components/**/*.{ts,tsx}', // All TS/TSX files
		'layouts/**/*.{ts,tsx}', // All TS/TSX files
		'providers/**/*.{ts,tsx}', // All TS/TSX files
		'!**/*.d.ts', // Ignore declaration files
		'!**/*.types.ts', // Ignore declaration files
		'!**/index.ts', // Ignore barrel files
		'!**/*.{test,spec}.{ts,tsx}', // Ignore test files themselves
	],
	testEnvironment: 'jest-environment-jsdom',
	setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
	moduleNameMapper: {
		'^@/(.*)$': '<rootDir>/$1',
	},
};

export default createJestConfig(customJestConfig);
