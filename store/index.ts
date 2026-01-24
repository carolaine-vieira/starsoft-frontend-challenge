// External dependencies
import { combineReducers, configureStore } from '@reduxjs/toolkit';

// Import reducers
import cartReducer from '@/store/cart/slice';
import sidebarReducer from '@/store/sidebar/slice';

export const rootReducer = combineReducers({
	cart: cartReducer,
	sidebar: sidebarReducer,
});

export const store = configureStore({
	reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default rootReducer;
