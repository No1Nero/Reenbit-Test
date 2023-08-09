import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import { store, persistor } from './store/store';
import { MockTripsContext } from './context/MockTripsContext';
import { IMock } from './models/MockModel';
import { PersistGate } from 'redux-persist/integration/react';
import { GoogleOAuthProvider } from '@react-oauth/google';

const mockTrips: IMock[] = [
  {
      image: 'https://www.berlin.de/binaries/asset/image_assets/8215661/ratio_4_3/1686824224/800x600/',
      label: 'Berlin',
      value: 'Berlin',
  },
  {
      image: 'https://static.euronews.com/articles/stories/06/64/47/60/1440x810_cmsv2_abc5a634-6aae-548b-a0db-92e3bc0ab205-6644760.jpg',
      label: 'Vienna',
      value: 'Vienna',
  },
  {
      image: 'https://images.adsttc.com/media/images/5d44/14fa/284d/d1fd/3a00/003d/large_jpg/eiffel-tower-in-paris-151-medium.jpg?1564742900',
      label: 'Paris',
      value: 'Paris',
  },
  {
      image: 'https://youimg1.tripcdn.com/target/100o0u000000j7xs93C78_D_1180_558.jpg?proc=source%2Ftrip',
      label: 'Amsterdam',
      value: 'Amsterdam',
  },
  {
      image: 'https://earth.esa.int/web/earth-watching/content/documents/257246/1608677/Barcelona.jpg',
      label: 'Barcelona',
      value: 'Barcelona',
  },
  {
      image: 'https://planetofhotels.com/guide/sites/default/files/styles/node__blog_post__bp_banner/public/2021-02/Rialto-Bridge.jpg',
      label: 'Venecia',
      value: 'Venecia',
  },
  {
      image: 'https://worldstrides.com/wp-content/uploads/2015/07/api268.jpg',
      label: 'Rome',
      value: 'Rome',
  },
  {
      image: 'https://cdn.britannica.com/23/177923-050-1ECAE329/Tyn-Church-Staromestske-Square-Prague.jpg',
      label: 'Prague',
      value: 'Prague',
  },{
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Poland-00808_-_Castle_Square_%2831215382745%29.jpg/1200px-Poland-00808_-_Castle_Square_%2831215382745%29.jpg',
      label: 'Warsaw',
      value: 'Warsaw',
  },{
      image: 'https://media.istockphoto.com/id/1395936639/photo/aerial-view-of-unirii-square-bucharest-romania-on-a-sunny-day.jpg?s=612x612&w=0&k=20&c=PL6ZDjiOXIwNRTwB9rLCvyyfRVENOHbKbxcr6v6xBsM=',
      label: 'Bucharest',
      value: 'Bucharest',
  },

];

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <GoogleOAuthProvider clientId='470255441768-dk5oiic23vffbbu8ge8v49r9kn6omk7p.apps.googleusercontent.com'>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <MockTripsContext.Provider value={mockTrips}>
          <App />
        </MockTripsContext.Provider>
      </PersistGate>
    </Provider>
  </GoogleOAuthProvider>
);
