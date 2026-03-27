import { useState } from 'react';
import { Camera, CheckCircle2, Sparkles, TrendingUp } from 'lucide-react';
import { wasteTypes, WasteType } from '../data/mockData';

interface ScanTabProps {
  onSubmit: (wasteType: string, weight: number, earnings: number, category: string) => void;
}

const ScanTab = ({ onSubmit }: ScanTabProps) => {
  const [isScanning, setIsScanning] = useState(false);
  const [scannedWaste, setScannedWaste] = useState<WasteType | null>(null);
  const [confidence, setConfidence] = useState(0);
  const [weight, setWeight] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);

  const simulateScan = () => {
    setIsScanning(true);
    setScannedWaste(null);
    setWeight('');

    setTimeout(() => {
      const randomWaste = wasteTypes[Math.floor(Math.random() * wasteTypes.length)];
      const randomConfidence = Math.floor(Math.random() * 10) + 85;
      setScannedWaste(randomWaste);
      setConfidence(randomConfidence);
      setIsScanning(false);
    }, 2500);
  };

  const handleSubmit = () => {
    if (scannedWaste && weight) {
      const weightNum = parseFloat(weight);
      const earnings = weightNum * scannedWaste.averageRate;
      onSubmit(scannedWaste.name, weightNum, earnings, scannedWaste.category);

      setShowSuccess(true);
      setTimeout(() => {
        setShowSuccess(false);
        setScannedWaste(null);
        setWeight('');
      }, 2000);
    }
  };

  const totalEarnings = scannedWaste && weight
    ? (parseFloat(weight) * scannedWaste.averageRate).toFixed(2)
    : '0.00';

  return (
    <div className="space-y-6">
      {!isScanning && !scannedWaste && (
        <div className="text-center space-y-4">
          <div className="bg-gradient-to-br from-rose-500 to-rose-600 w-32 h-32 rounded-full mx-auto flex items-center justify-center shadow-lg">
            <Camera size={64} className="text-white" />
          </div>
          <h2 className="text-2xl font-bold text-gray-800">Smart Waste Scanner</h2>
          <p className="text-gray-600 px-4">
            Point your camera at waste to automatically detect type and value
          </p>
          <button
            onClick={simulateScan}
            className="bg-gradient-to-r from-rose-500 to-rose-600 text-white px-8 py-4 rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all transform hover:scale-105 flex items-center gap-2 mx-auto"
          >
            <Camera size={24} />
            Start Scanning
          </button>
        </div>
      )}

      {isScanning && (
        <div className="bg-white rounded-3xl p-8 shadow-lg border-2 border-rose-300">
          <div className="relative">
            <div className="w-full h-64 bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl overflow-hidden relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <Camera size={80} className="text-gray-400" />
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-full h-1 bg-rose-500 animate-scan-line"></div>
              </div>
            </div>
            <div className="mt-6 text-center space-y-2">
              <div className="flex items-center justify-center gap-2">
                <Sparkles className="text-rose-500 animate-pulse" size={24} />
                <p className="text-lg font-semibold text-gray-800">Analyzing waste...</p>
              </div>
              <p className="text-sm text-gray-500">AI detection in progress</p>
            </div>
          </div>
        </div>
      )}

      {scannedWaste && !showSuccess && (
        <div className="space-y-6 animate-fade-in">
          <div className="bg-gradient-to-br from-sage-50 to-white rounded-3xl p-6 shadow-lg border-2 border-sage-300">
            <div className="flex items-start justify-between mb-4">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="bg-rose-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {scannedWaste.category}
                  </span>
                  <span className="bg-amber-500 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                    <Sparkles size={14} />
                    {confidence}% confident
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-gray-800">{scannedWaste.name}</h3>
              </div>
              <CheckCircle2 className="text-sage-600" size={32} />
            </div>
            <p className="text-gray-600 text-sm mb-4">{scannedWaste.description}</p>
            <div className="bg-white rounded-xl p-4 border border-sage-200">
              <p className="text-sm text-gray-600 mb-1">Market Rate</p>
              <p className="text-2xl font-bold text-sage-700">
                ₹{scannedWaste.averageRate} / kg
              </p>
              <p className="text-xs text-gray-500 mt-1">
                Range: ₹{scannedWaste.minRate} - ₹{scannedWaste.maxRate} per kg
              </p>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-6 shadow-lg border-2 border-rose-200">
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Enter Weight (kg)
            </label>
            <input
              type="number"
              step="0.1"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              placeholder="0.0"
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-rose-500 focus:border-transparent text-lg"
            />

            {weight && (
              <div className="mt-4 bg-gradient-to-r from-amber-50 to-amber-100 rounded-xl p-4 border border-amber-300">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">Estimated Earnings</p>
                    <p className="text-3xl font-bold text-amber-700">₹{totalEarnings}</p>
                  </div>
                  <TrendingUp className="text-amber-600" size={40} />
                </div>
              </div>
            )}

            <button
              onClick={handleSubmit}
              disabled={!weight}
              className="w-full mt-6 bg-gradient-to-r from-rose-500 to-rose-600 text-white px-6 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
            >
              Confirm Submission
            </button>
          </div>

          <p className="text-xs text-center text-gray-500 px-4">
            Prices are approximate and may vary by quality and market demand
          </p>
        </div>
      )}

      {showSuccess && (
        <div className="bg-gradient-to-br from-sage-100 to-sage-50 rounded-3xl p-8 shadow-lg border-2 border-sage-400 text-center animate-fade-in">
          <CheckCircle2 className="text-sage-600 mx-auto mb-4" size={64} />
          <h3 className="text-2xl font-bold text-gray-800 mb-2">Submission Successful!</h3>
          <p className="text-gray-600">Your earnings have been added to your account</p>
        </div>
      )}

      <style>{`
        @keyframes scan-line {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100%); }
        }
        .animate-scan-line {
          animation: scan-line 1.5s ease-in-out infinite;
        }
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.5s ease-out;
        }
      `}</style>
    </div>
  );
};

export default ScanTab;
