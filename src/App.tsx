import { useState } from "react";
import Trips from "./components/Trips/Trips";
import { ITrip } from "./models/TripModel";
import ForecastCountdown from "./components/ForecastCountdown/ForecastCountdown";
import s from './App.module.css';
import AuthClient from "./components/AuthClient/AuthClient";

 export default function App() {
  const [selectedTrip, setSelectedTrip] = useState<ITrip | null>(null);
  
  return (
    <div className={s.app_container}>
      <AuthClient />
      <Trips selectedTrip={selectedTrip} onSetSelectedTrip={setSelectedTrip} />
      <ForecastCountdown selectedTrip={selectedTrip} />
    </div>
  );
}
