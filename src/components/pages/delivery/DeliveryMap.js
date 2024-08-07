import React, { useEffect } from 'react';
import { MapContainer, TileLayer, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet.markercluster/dist/MarkerCluster.Default.css';
import 'leaflet.markercluster';

const customIcon = new L.Icon({
    iconUrl: 'https://png.klev.club/uploads/posts/2024-03/png-klev-club-p-metka-na-karte-png-5.png',
    iconSize: [40, 40],
    iconAnchor: [20, 40],
    popupAnchor: [0, -40]
});

const MapContent = () => {
    const map = useMap();

    useEffect(() => {
        const markers = L.markerClusterGroup();

        const locations = [
            { lat: 40.1874073, lng: 44.5146376, name: 'Opera' },
            { lat: 40.1861336, lng: 44.5182806, name: 'Eritasardakan' },
            { lat: 40.1803302, lng: 44.5142337, name: 'Hyusisayin Poxota' },
            { lat: 40.1767354, lng: 44.5165376, name: 'Hraparak' },
            { lat: 40.1803879, lng: 44.5087576, name: 'Amiryan' },
        ];

        locations.forEach(location => {
            const marker = L.marker([location.lat, location.lng], { icon: customIcon })
                .bindPopup(`<b>${location.name}</b>`);
            markers.addLayer(marker);
        });

        map.addLayer(markers);

        map.scrollWheelZoom.disable();

        return () => {
            map.removeLayer(markers);
        };
    }, [map]);

    return null;
};

const MapWithMarkers = () => {
    return (
        <div className="delivery_map_container" data-aos="zoom-in">
            <MapContainer
                center={[40.1861336, 44.5146376]}
                zoom={16}
                style={{ height: '600px', width: '100%' }}

            >
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                <MapContent />
            </MapContainer>
        </div>
    );
};

export default MapWithMarkers;
