import { AppLocation } from '@appLocation/types';
export type AppLocationContext = {
    location: AppLocation;
    setLocation: (location: AppLocation) => void;
};
