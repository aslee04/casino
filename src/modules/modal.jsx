import {Affiliates} from "../temp/Affiliates"
import {FreeCoins} from "../temp/FreeCoins"
import {Profile} from "../temp/Profile"

export const reducerModal = (state, action) => {
    switch(action?.type) {
        case "FREE_COINS": {
            return {...state, content: <FreeCoins />}
        }
        case "AFFILIATES": {
            return {...state, content: <Affiliates />}
        }
        case "PROFILE": {
            return {...state, content: <Profile />}
        }
        default: {
            return state
        }
    }
}