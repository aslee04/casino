import { TbReceiptYuan } from "react-icons/tb"
import { Affiliates } from "../temp/affiliates"

export const reducerModal = (state, action) =>{
    switch (action?.type) {
        case "AFFILIATES":{
            return {...state, content: <Affiliates/>}
        }
        case "FREE_COINS":{
            alert("FREE_COINS")
        }
        case "PROFILE":{
            alert("PROFILE")
        }
        default:{
             return state
        }
    }
}