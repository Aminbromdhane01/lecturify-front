import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Define the ProfileState interface
interface ProfileState {
    picture: string | null;
    adress: string | null;
    gender: boolean | null;
    phonenumber: string | null;
}

// Define the initial state for the profile slice
const initialProfileState: ProfileState = {
    picture: null,
    adress: null,
    gender: null,
    phonenumber: null,
};

// Create the profile slice
const profileSlice = createSlice({
    name: 'profil',
    initialState: initialProfileState,
    reducers: {
        setProfile(state, action: PayloadAction<ProfileState>) {
            state.picture = action.payload.picture;
            state.adress = action.payload.adress;
            state.gender = action.payload.gender;
            state.phonenumber = action.payload.phonenumber;
        },
        clearProfile(state) {
            state.picture = null;
            state.adress = null;
            state.gender = null;
            state.phonenumber = null;
        },
    },
});

export const { setProfile, clearProfile } = profileSlice.actions;
export default profileSlice.reducer;