import React, { useEffect, useRef, useState } from 'react';

const mapContainerStyle = {
  width: '100%',
  height: '500px',
  border: '3px solid #91BF55',  // Ajout de la bordure verte
  borderRadius: '15px',         // Ajout d'un border-radius
};

const center = {
  lat: 50.4498293,
  lng: 1.794702,
};

// Coordonnées fournies pour le polygone
const updatedPolygonCoordinates = [
  { lat: 50.53963317561334, lng: 1.588083486105907 },
  { lat: 50.52894031959505, lng: 1.5801870631597548 },
  { lat: 50.519554796066664, lng: 1.5757238675814949 },
  { lat: 50.49815755775314, lng: 1.5770971585286517 },
  { lat: 50.45904981327783, lng: 1.5716039947400244 },
  { lat: 50.396497650586035, lng: 1.55581114884772 },
  { lat: 50.39430901681232, lng: 1.5616476353731368 },
  { lat: 50.394090147877584, lng: 1.6014730728406865 },
  { lat: 50.40196879296561, lng: 1.6766607521975259 },
  { lat: 50.41465941133721, lng: 1.684557175143678 },
  { lat: 50.46189113021225, lng: 1.7810308641814494 },
  { lat: 50.48308633780086, lng: 1.7875539961804445 },
  { lat: 50.49226069640183, lng: 1.72335264440086 },
  { lat: 50.5123506864197, lng: 1.6361486692563976 },
  { lat: 50.53919677995558, lng: 1.588770131579485 },
];

const DynamicMap = () => {
  const mapRef = useRef(null);
  const [mapLoaded, setMapLoaded] = useState(false);

  useEffect(() => {
    // Vérifier si Google Maps est prêt
    const intervalId = setInterval(() => {
      if (window.google && window.google.maps && !mapLoaded) {
        setMapLoaded(true);
        clearInterval(intervalId);
      }
    }, 100);

    return () => clearInterval(intervalId);
  }, [mapLoaded]);

  useEffect(() => {
    if (mapLoaded && mapRef.current) {
      const map = new window.google.maps.Map(mapRef.current, {
        center: center,
        zoom: 11,
      });

      // Ajouter le polygone sur la carte
      const polygon = new window.google.maps.Polygon({
        paths: updatedPolygonCoordinates,
        strokeColor: '#FF0000',
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: '#FF0000',
        fillOpacity: 0.35,
      });

      polygon.setMap(map);
    }
  }, [mapLoaded]);

  return (
    <div className="map-container">
      <h2>Zones de Livraison</h2>
      <div ref={mapRef} id="map" style={mapContainerStyle}></div>
      <div className='ville'><p><strong>Berck, Saint-Josse, Montreuil et alentours</strong></p></div>
    </div>

  );
};

export default DynamicMap;
