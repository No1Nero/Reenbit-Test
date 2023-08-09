import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ITrip } from "../models/TripModel";

const initialState: ITrip[] = [
    {
        id: 1,
        image: 'https://www.berlin.de/binaries/asset/image_assets/8215661/ratio_4_3/1686824224/800x600/',
        forDate: '2023-08-15',
        toDate: '2023-08-20',
        city: 'Berlin',
    },
    {
        id: 2,
        image: 'https://static.euronews.com/articles/stories/06/64/47/60/1440x810_cmsv2_abc5a634-6aae-548b-a0db-92e3bc0ab205-6644760.jpg',
        forDate: '2023-08-13',
        toDate: '2023-08-18',
        city: 'Vienna',
    },
    {
        id: 3,
        image: 'https://images.adsttc.com/media/images/5d44/14fa/284d/d1fd/3a00/003d/large_jpg/eiffel-tower-in-paris-151-medium.jpg?1564742900',
        forDate: '2023-08-18',
        toDate: '2023-08-22',
        city: 'Paris',
    },
];

export const tripsSlice = createSlice({
    name: 'trips',
    initialState,
    reducers: {
        addTrip: (state, action: PayloadAction<ITrip>) => {
            state.push(action.payload);
        },
    },
});

export const tripsReducer = tripsSlice.reducer;
export const tripsActions = tripsSlice.actions;