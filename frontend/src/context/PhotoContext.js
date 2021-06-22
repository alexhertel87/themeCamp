import { createContext, useContext, useState } from 'react';
import artCarURL from '../images/art-car-8.jpeg'

const photos = {
    artCar: artCarURL
}

export const PhotoContext = createContext();
export const usePhotoContext = () => useContext(PhotoContext);

export default function PhotoProvider(props) {
    const [photoType, setPhotoType] = useState("artCar");

    return (
      <PhotoContext.Provider
        value={{
          photoType,
          setPhotoType,
          photoUrl: photos[photoType]
        }}
      >
        {props.children}
      </PhotoContext.Provider>
    )
  }
