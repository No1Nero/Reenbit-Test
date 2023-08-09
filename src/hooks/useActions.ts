import { bindActionCreators } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { tripsActions } from "../store/tripsSlice";
const allActions = { ...tripsActions };

export const useActions = () => {
    const dispatch = useDispatch();

    return bindActionCreators(allActions, dispatch);
};