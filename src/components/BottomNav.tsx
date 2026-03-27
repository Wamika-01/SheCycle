import { Scan, MapPin, Shield, LayoutDashboard, Leaf } from 'lucide-react';

interface BottomNavProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const BottomNav = ({ activeTab, onTabChange }: BottomNavProps) => {
  const tabs = [
    { id: 'scan', label: 'Scan', icon: Scan },
    { id: 'centers', label: 'Centers', icon: MapPin },
    { id: 'safezone', label: 'Safe Zone', icon: Shield },
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'impact', label: 'Impact', icon: Leaf },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-rose-200 shadow-lg z-50">
      <div className="flex justify-around items-center px-2 py-3 max-w-md mx-auto">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={`flex flex-col items-center justify-center flex-1 py-1 px-2 rounded-lg transition-all ${
                isActive
                  ? 'text-rose-600'
                  : 'text-gray-500 hover:text-rose-400'
              }`}
            >
              <Icon
                size={22}
                className={`mb-1 transition-transform ${
                  isActive ? 'scale-110' : ''
                }`}
              />
              <span className={`text-xs font-medium ${isActive ? 'font-semibold' : ''}`}>
                {tab.label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default BottomNav;
