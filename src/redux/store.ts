 import {configureStore} from '@reduxjs/toolkit';
import authReducer from './features/authSlice';
import { TypedUseSelectorHook, useSelector } from 'react-redux';
import widgetReducer from './features/ui/widgetSlice';



 export const store = configureStore({
    reducer: {
        authReducer,
        widgetReducer,
        
    }
 });

 export type RootState = ReturnType<typeof store.getState>;
 export type AppDispatch = typeof store.dispatch;

 export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector