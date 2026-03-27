import { MapPin, Phone, Navigation, CheckCircle } from 'lucide-react';
import { recyclingCenters } from '../data/mockData';

const CentersTab = () => {
  return (
    <div className="space-y-6">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Recycling Centers</h2>
        <p className="text-gray-600">Find nearby centers in Jalandhar</p>
      </div>

      <div className="space-y-4">
        {recyclingCenters.map((center) => (
          <div
            key={center.id}
            className="bg-white rounded-2xl p-5 shadow-lg border-2 border-rose-200 hover:border-rose-400 transition-all hover:shadow-xl"
          >
            <div className="flex items-start justify-between mb-3">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="text-lg font-bold text-gray-800">{center.name}</h3>
                  {center.verified && (
                    <CheckCircle className="text-sage-600" size={18} />
                  )}
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600 mb-1">
                  <MapPin size={16} className="text-rose-500" />
                  <span className="font-semibold">{center.area}</span>
                </div>
                <p className="text-sm text-gray-500 ml-6">{center.address}</p>
              </div>
              <div
                className={`px-3 py-1 rounded-full text-xs font-semibold ${
                  center.isOpen
                    ? 'bg-sage-100 text-sage-700'
                    : 'bg-gray-200 text-gray-600'
                }`}
              >
                {center.isOpen ? 'Open' : 'Closed'}
              </div>
            </div>

            <div className="flex items-center gap-4 mb-4 text-sm">
              <div className="flex items-center gap-1 text-gray-600">
                <Navigation size={16} className="text-rose-500" />
                <span>{center.distance} km away</span>
              </div>
              <div className="bg-rose-100 text-rose-700 px-3 py-1 rounded-full text-xs font-medium">
                {center.type}
              </div>
            </div>

            <div className="flex gap-3">
              <button className="flex-1 bg-gradient-to-r from-rose-500 to-rose-600 text-white px-4 py-3 rounded-xl font-semibold shadow-md hover:shadow-lg transition-all transform hover:scale-105 flex items-center justify-center gap-2">
                <Navigation size={18} />
                Navigate
              </button>
              <button className="flex-1 bg-sage-500 text-white px-4 py-3 rounded-xl font-semibold shadow-md hover:shadow-lg transition-all transform hover:scale-105 flex items-center justify-center gap-2">
                <Phone size={18} />
                Call
              </button>
            </div>

            <div className="mt-3 pt-3 border-t border-gray-200">
              <p className="text-xs text-gray-500">{center.phone}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-2xl p-5 border border-amber-300">
        <div className="flex items-start gap-3">
          <MapPin className="text-amber-600 flex-shrink-0 mt-1" size={24} />
          <div>
            <h4 className="font-semibold text-gray-800 mb-1">Find More Centers</h4>
            <p className="text-sm text-gray-600">
              More recycling centers are being added regularly. Check back soon for updates in your area.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CentersTab;
