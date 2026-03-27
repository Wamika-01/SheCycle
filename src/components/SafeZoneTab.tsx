import { Shield, Phone, MapPin, Navigation, AlertCircle, CheckCircle, Camera, Clock } from 'lucide-react';
import { safeZones, emergencyContacts, safetyTips } from '../data/mockData';
const openMap = (lat: number, lng: number) => {
  window.open(`https://www.google.com/maps/search/?api=1&query=${lat},${lng}`);
};

const SafeZoneTab = () => {
  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-br from-amber-100 to-amber-50 rounded-2xl p-5 shadow-lg border-2 border-amber-400">
        <div className="flex items-center gap-3 mb-4">
          <div className="bg-amber-500 p-3 rounded-full">
            <AlertCircle className="text-white" size={24} />
          </div>
          <div>
            <h3 className="font-bold text-gray-800 text-lg">Emergency Helplines</h3>
            <p className="text-sm text-gray-600">Available 24/7</p>
          </div>
        </div>

        <div className="space-y-2">
          {emergencyContacts.map((contact, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-4 flex items-center justify-between shadow-md"
            >
              <div className="flex items-center gap-3">
                <div className="bg-amber-100 p-2 rounded-lg">
                  <Phone className="text-amber-700" size={20} />
                </div>
                <div>
                  <p className="font-semibold text-gray-800">{contact.name}</p>
                  <p className="text-sm text-gray-500">{contact.type}</p>
                </div>
              </div>
              <a
                href={`tel:${contact.number}`}
                className="bg-amber-500 text-white px-5 py-2 rounded-lg font-semibold hover:bg-amber-600 transition-colors"
              >
                {contact.number}
              </a>
            </div>
          ))}
        </div>
      </div>

      <div className="text-center">
        <div className="inline-flex items-center gap-2 bg-sage-100 px-4 py-2 rounded-full mb-3">
          <Shield className="text-sage-700" size={20} />
          <h2 className="text-lg font-bold text-sage-800">Verified Safe Zones</h2>
        </div>
        <p className="text-gray-600 text-sm">
          Protected pickup locations in Jalandhar
        </p>
      </div>

      <div className="space-y-4">
        {safeZones.map((zone) => (
          <div
            key={zone.id}
            className="bg-white rounded-2xl p-5 shadow-lg border-2 border-sage-200 hover:border-sage-400 transition-all hover:shadow-xl"
          >
            <div className="flex items-start justify-between mb-3">
              <div className="flex-1">
                <h3 className="text-lg font-bold text-gray-800 mb-2">{zone.name}</h3>
                <div className="flex items-center gap-2 text-sm text-gray-600 mb-1">
                  <MapPin size={16} className="text-sage-600" />
                  <span className="font-semibold">{zone.area}</span>
                </div>
                <p className="text-sm text-gray-500 ml-6">{zone.address}</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mb-4">
              {zone.badges.map((badge, index) => (
                <div
                  key={index}
                  className="flex items-center gap-1 bg-sage-100 text-sage-700 px-3 py-1 rounded-full text-xs font-semibold"
                >
                  {badge === 'CCTV' && <Camera size={12} />}
                  {badge === 'Verified' && <CheckCircle size={12} />}
                  {badge === 'Well Lit' && <Shield size={12} />}
                  <span>{badge}</span>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-4 mb-4 text-sm">
              <div className="flex items-center gap-1 text-gray-600">
                <Navigation size={16} className="text-sage-600" />
                <span>{zone.distance} km away</span>
              </div>
              <div className="flex items-center gap-1 text-gray-600">
                <Clock size={16} className="text-sage-600" />
                <span>{zone.timings}</span>
              </div>
            </div>

            <div className="bg-sage-100 rounded-lg p-3 mb-4">
              <p className="text-xs text-gray-600 mb-1">Location Type</p>
              <p className="font-semibold text-sage-800">{zone.type}</p>
            </div>

<button
  onClick={() => openMap(zone.lat, zone.lng)}
  className="w-full bg-gradient-to-r from-sage-500 to-sage-600 text-white px-4 py-3 rounded-xl font-semibold shadow-md hover:shadow-lg transition-all transform hover:scale-105 flex items-center justify-center gap-2"
>
  <Navigation size={18} />
  Navigate to SafeZone
</button>
          </div>
        ))}
      </div>

      <div className="bg-gradient-to-br from-rose-50 to-white rounded-2xl p-5 shadow-lg border-2 border-rose-200">
        <div className="flex items-center gap-3 mb-4">
          <div className="bg-rose-500 p-2 rounded-lg">
            <Shield className="text-white" size={24} />
          </div>
          <h3 className="font-bold text-gray-800 text-lg">Safety Tips</h3>
        </div>

        <ul className="space-y-3">
          {safetyTips.map((tip, index) => (
            <li key={index} className="flex items-start gap-3">
              <div className="bg-rose-100 p-1 rounded-full mt-1 flex-shrink-0">
                <CheckCircle className="text-rose-600" size={14} />
              </div>
              <p className="text-sm text-gray-700">{tip}</p>
            </li>
          ))}
        </ul>
      </div>

      <div className="bg-gradient-to-r from-sage-600 to-sage-700 rounded-2xl p-6 text-white text-center shadow-lg">
        <Shield className="mx-auto mb-3" size={40} />
        <h3 className="font-bold text-xl mb-2">Your Safety Matters</h3>
        <p className="text-sm text-sage-100">
          SheCycle is committed to creating safe, dignified work environments for all women collectors
        </p>
      </div>
    </div>
  );
};

export default SafeZoneTab;
