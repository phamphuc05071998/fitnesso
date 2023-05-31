import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
interface user {
    name: string,
    email: string,
    
}
interface payload {
    token: string,
    user: user
}
export interface authenticate {
    isAuthenticate :boolean,
    token: string,
    user: user
  }
  
  const initialState: authenticate = {
    isAuthenticate: false,
    token: '',
    user: {name: "", email: ""}
  }
export const authSlice = createSlice({
   name: 'login',
   initialState,
   reducers: {
        logIn:(stage, action:PayloadAction<payload>) => {
            stage.isAuthenticate = true
            stage.token = action.payload.token
            stage.user = action.payload.user
            localStorage.setItem('token',action.payload.token )
            localStorage.setItem('user', JSON.stringify(action.payload.user) )
        },
        logOut:(stage) => {
            stage.isAuthenticate = false
            stage.token = ""
            stage.user = {
                email: "",
                name: ""
            }
            localStorage.removeItem('token')
            localStorage.removeItem('user')
        },
        updateItem: (stage) => {

        }
   }

})
export const { logIn, logOut} = authSlice.actions

export default authSlice.reducer