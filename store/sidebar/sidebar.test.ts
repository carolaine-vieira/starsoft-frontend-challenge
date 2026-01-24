// Internal dependencies
import cartReducer, { openSidebar, closeSidebar, toggleSidebar } from './slice';

describe('@redux: SidebarSlice', () => {
	it('returns initial state', () => {
		expect(cartReducer(undefined, { type: 'unknown' })).toEqual({
			isOpen: false,
		});
	});

	it('opens sidebar', () => {
		const newState = cartReducer(
			{
				isOpen: false,
			},
			openSidebar(),
		).isOpen;

		expect(newState).toBe(true);
	});

	it('closes sidebar', () => {
		const newState = cartReducer(
			{
				isOpen: true,
			},
			closeSidebar(),
		).isOpen;

		expect(newState).toBe(false);
	});

	it('toggles sidebar', () => {
		const newState = cartReducer(
			{
				isOpen: false,
			},
			toggleSidebar(),
		).isOpen;

		expect(newState).toBe(true);
	});
});
