import {createSlice , PayloadAction} from '@reduxjs/toolkit';


type InitialState = {
    value : AuthState;

}

type AuthState = {
    isAuth: boolean ;
    userName : string;
    password: string;
}

const initialState = {
    value : {
        isAuth: false,
        userName : "",
        password : "",
    } as AuthState,
} as InitialState;


export const auth = createSlice({
    name: "auth",
    initialState,
    reducers : {
        logout (){
            return initialState;
        },
        login(state,action: PayloadAction<{ userName: string; password: string }>) {
            const { userName, password } = action.payload;
            console.log(userName,password);
            
            return {
                value: {
                    isAuth: true,
                    userName,
                    password
                }
            }


        }
    }

});

export const {login,logout} = auth.actions;
export default auth.reducer;