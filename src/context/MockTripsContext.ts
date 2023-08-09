import { createContext } from "react";
import { IMock } from "../models/MockModel";

export const MockTripsContext = createContext<IMock[]>([]);
