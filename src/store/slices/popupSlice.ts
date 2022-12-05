import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface popupStateTypes {
    flag: number,
    phrase: {
        title: string,
        content: string
    }
}

const initialState: popupStateTypes = {
    flag: 0,
    phrase: {
        title: '',
        content: ''
    }
}

const popupSlice = createSlice({
    name: 'popup',
    initialState,

    reducers: {
        setFlag(state, action: PayloadAction<number>) {
            return {
                ...state,
                flag: action.payload
            }
        },
        setPhrase(state, action: PayloadAction<{title: string, content: string}>) {
            return {
                ...state,
                phrase: { title: action.payload.title, content: action.payload.content },
            }  
        }
    }
})

export default popupSlice
export const { setFlag, setPhrase } = popupSlice.actions