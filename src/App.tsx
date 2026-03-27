import { useState } from 'react';
import { Trophy, TrendingUp, Weight, Leaf } from 'lucide-react';
import BottomNav from './components/BottomNav';
import ScanTab from './components/ScanTab';
import CentersTab from './components/CentersTab';
import SafeZoneTab from './components/SafeZoneTab';
import DashboardTab from './components/DashboardTab';
import ImpactTab from './components/ImpactTab';
import { recentTransactions, Transaction } from './data/mockData';

function App() {
  const [activeTab, setActiveTab] = useState('scan');
  const [transactions, setTransactions] = useState<Transaction[]>(recentTransactions);
  const [rewardPoints, setRewardPoints] = useState(922);

  const totalEarnings = transactions.reduce((sum, t) => sum + t.earnings, 0);
  const totalWaste = transactions.reduce((sum, t) => sum + t.weight, 0);
  const co2Saved = (totalWaste * 2.1).toFixed(1);

  const handleSubmitWaste = (wasteType: string, weight: number, earnings: number, category: string) => {
    const newTransaction: Transaction = {
      id: Date.now().toString(),
      wasteType,
      weight,
      earnings,
      date: new Date().toISOString().split('T')[0],
      category,
    };
    setTransactions([newTransaction, ...transactions]);
    setRewardPoints(prev => prev + Math.floor(weight * 10));
  };

  const renderTab = () => {
    switch (activeTab) {
      case 'scan':
        return <ScanTab onSubmit={handleSubmitWaste} />;
      case 'centers':
        return <CentersTab />;
      case 'safezone':
        return <SafeZoneTab />;
      case 'dashboard':
        return (
          <DashboardTab
            transactions={transactions}
            totalEarnings={totalEarnings}
            totalWaste={totalWaste}
            rewardPoints={rewardPoints}
          />
        );
      case 'impact':
        return <ImpactTab transactions={transactions} totalWaste={totalWaste} />;
      default:
        return <ScanTab onSubmit={handleSubmitWaste} />;
    }
  };

  return (
    <div className="min-h-screen bg-cream pb-24">
      <div className="bg-gradient-to-r from-rose-500 to-rose-600 text-white px-6 py-6 shadow-lg">
        <div className="max-w-md mx-auto">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-3xl font-bold">SheCycle</h1>
              <p className="text-rose-100 text-sm">Jalandhar • Punjab</p>
            </div>
            <div className="bg-white bg-opacity-20 px-4 py-2 rounded-full flex items-center gap-2">
              <Trophy className="text-amber-300" size={20} />
              <div>
                <p className="text-xs text-rose-100">Points</p>
                <p className="font-bold">{rewardPoints}</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-3">
            <div className="bg-white bg-opacity-20 rounded-xl p-3 backdrop-blur-sm">
              <div className="flex items-center gap-2 mb-1">
                <TrendingUp size={16} />
                <p className="text-xs text-rose-100">Earned</p>
              </div>
              <p className="font-bold text-lg">₹{totalEarnings.toFixed(0)}</p>
            </div>

            <div className="bg-white bg-opacity-20 rounded-xl p-3 backdrop-blur-sm">
              <div className="flex items-center gap-2 mb-1">
                <Weight size={16} />
                <p className="text-xs text-rose-100">Waste</p>
              </div>
              <p className="font-bold text-lg">{totalWaste.toFixed(1)} kg</p>
            </div>

            <div className="bg-white bg-opacity-20 rounded-xl p-3 backdrop-blur-sm">
              <div className="flex items-center gap-2 mb-1">
                <Leaf size={16} />
                <p className="text-xs text-rose-100">CO₂</p>
              </div>
              <p className="font-bold text-lg">{co2Saved} kg</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-md mx-auto px-6 py-6">
        {renderTab()}
      </div>

      <BottomNav activeTab={activeTab} onTabChange={setActiveTab} />
    </div>
  );
}

export default App;
