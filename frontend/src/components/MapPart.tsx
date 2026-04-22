import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { useEffect } from "react";
import { Building2, ExternalLink } from "lucide-react";

// Fix Leaflet default icon
// @ts-ignore
if (typeof window !== 'undefined') {
  delete (L.Icon.Default.prototype as any)._getIconUrl;
  L.Icon.Default.mergeOptions({
    iconRetinaUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
    iconUrl:       "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
    shadowUrl:     "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
  });
}

const companyIcon = typeof window !== 'undefined' ? L.icon({
  iconUrl:   "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-blue.png",
  shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
  iconSize: [25, 41], iconAnchor: [12, 41], popupAnchor: [1, -34], shadowSize: [41, 41],
}) : undefined;

const HQ = {
  name: "Jigisha Group — National Headquarters",
  address: "F 904, 10th Floor, Rachna Tower, Rachna Nagar, Bhopal, MP 462023",
  position: [23.2599, 77.4126] as [number, number],
  mapsLink: "https://www.google.com/maps?q=23.2599,77.4126",
};

function RecenterMap({ position }: { position: [number, number] }) {
  const map = useMap();
  useEffect(() => { map.setView(position, map.getZoom()); }, [position, map]);
  return null;
}

export default function MapPart() {
  return (
    <MapContainer center={HQ.position} zoom={15} scrollWheelZoom style={{ height: "100%", width: "100%" }}>
      <TileLayer 
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>' 
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" 
      />
      <Marker position={HQ.position} icon={companyIcon}>
        <Popup>
          <div style={{ fontFamily: "inherit" }}>
            <p style={{ fontWeight: 700, display: "flex", alignItems: "center", gap: 6, marginBottom: 4 }}>
              <Building2 size={13} /> {HQ.name}
            </p>
            <p style={{ color: "#64748b", fontSize: "0.85rem", marginBottom: 6 }}>{HQ.address}</p>
            <a 
              href={HQ.mapsLink} 
              target="_blank" 
              rel="noopener noreferrer" 
              style={{ color: "#2563eb", fontSize: "0.8rem", display: "flex", alignItems: "center", gap: 4 }}
            >
              <ExternalLink size={11} /> View on Google Maps
            </a>
          </div>
        </Popup>
      </Marker>
      <RecenterMap position={HQ.position} />
    </MapContainer>
  );
}
