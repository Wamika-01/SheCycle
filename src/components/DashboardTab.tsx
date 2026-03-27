import { TrendingUp, Weight, Leaf, Trophy, Calendar, Package } from 'lucide-react';
import { BarChart, Bar, PieChart, Pie, Cell, ResponsiveContainer, XAxis, YAxis, Tooltip, Legend } from 'recharts';
import { Transaction } from '../data/mockData';

interface DashboardTabProps {
  transactions: Transaction[];
  totalEarnings: number;
  totalWaste: number;
  rewardPoints: number;
}

const DashboardTab = ({ transactions, totalEarnings, totalWaste, rewardPoints }: DashboardTabProps) => {
  const co2Saved = (totalWaste * 2.1).toFixed(1);

  const categoryData = transactions.reduce((acc, t) => {
    const existing = acc.find(item => item.name === t.category);
    if (existing) {
      existing.value += t.weight;
    } else {
      acc.push({ name: t.category, value: t.weight });
    }
    return acc;
  }, [] as { name: string; value: number }[]);

  const dailyData = transactions.slice(0, 7).reverse().map(t => ({
    date: new Date(t.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'short' }),
    earnings: t.earnings,
    weight: t.weight,
  }));

  const COLORS = ['#f43f5e', '#5f7a5f', '#f59e0b', '#6b7280'];

  return (
    <div className="space-y-6">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Your Dashboard</h2>
        <p className="text-gray-600">Track your earnings and impact</p>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="bg-gradient-to-br from-rose-500 to-rose-600 rounded-2xl p-5 shadow-lg text-white">
          <div className="flex items-center justify-between mb-2">
            <TrendingUp size={28} />
            <div className="bg-white bg-opacity-20 px-3 py-1 rounded-full text-xs font-semibold">
              Total
            </div>
          </div>
          <p className="text-sm text-rose-100 mb-1">Total Earned</p>
          <p className="text-3xl font-bold">₹{totalEarnings.toFixed(2)}</p>
        </div>

        <div className="bg-gradient-to-br from-sage-500 to-sage-600 rounded-2xl p-5 shadow-lg text-white">
          <div className="flex items-center justify-between mb-2">
            <Weight size={28} />
            <div className="bg-white bg-opacity-20 px-3 py-1 rounded-full text-xs font-semibold">
              Collected
            </div>
          </div>
          <p className="text-sm text-sage-100 mb-1">Total Waste</p>
          <p className="text-3xl font-bold">{totalWaste.toFixed(1)} kg</p>
        </div>

        <div className="bg-gradient-to-br from-amber-500 to-amber-600 rounded-2xl p-5 shadow-lg text-white">
          <div className="flex items-center justify-between mb-2">
            <Leaf size={28} />
            <div className="bg-white bg-opacity-20 px-3 py-1 rounded-full text-xs font-semibold">
              Impact
            </div>
          </div>
          <p className="text-sm text-amber-100 mb-1">CO₂ Saved</p>
          <p className="text-3xl font-bold">{co2Saved} kg</p>
        </div>

        <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl p-5 shadow-lg text-white">
          <div className="flex items-center justify-between mb-2">
            <Trophy size={28} />
            <div className="bg-white bg-opacity-20 px-3 py-1 rounded-full text-xs font-semibold">
              Rewards
            </div>
          </div>
          <p className="text-sm text-purple-100 mb-1">Points</p>
          <p className="text-3xl font-bold">{rewardPoints}</p>
        </div>
      </div>

      <div className="bg-white rounded-2xl p-5 shadow-lg border-2 border-rose-200">
        <h3 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
          <Calendar className="text-rose-500" size={20} />
          Weekly Earnings
        </h3>
        <ResponsiveContainer width="100%" height={200}>
          <BarChart data={dailyData}>
            <XAxis dataKey="date" stroke="#6b7280" fontSize={12} />
            <YAxis stroke="#6b7280" fontSize={12} />
            <Tooltip
              contentStyle={{
                backgroundColor: '#fff',
                border: '2px solid #fecdd3',
                borderRadius: '12px',
              }}
            />
            <Bar dataKey="earnings" fill="#f43f5e" radius={[8, 8, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="bg-white rounded-2xl p-5 shadow-lg border-2 border-sage-200">
        <h3 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
          <Package className="text-sage-600" size={20} />
          Waste Distribution
        </h3>
        <ResponsiveContainer width="100%" height={200}>
          <PieChart>
            <Pie
              data={categoryData}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
            >
              {categoryData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>

      <div className="bg-white rounded-2xl p-5 shadow-lg border-2 border-rose-200">
        <h3 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
          <TrendingUp className="text-rose-500" size={20} />
          Recent Activity
        </h3>
        <div className="space-y-3">
          {transactions.slice(0, 5).map((transaction) => (
            <div
              key={transaction.id}
              className="flex items-center justify-between p-3 bg-cream rounded-xl border border-rose-200"
            >
              <div className="flex items-center gap-3">
                <div className="bg-rose-100 p-2 rounded-lg">
                  <Package className="text-rose-600" size={20} />
                </div>
                <div>
                  <p className="font-semibold text-gray-800">{transaction.wasteType}</p>
                  <p className="text-xs text-gray-500">
                    {transaction.weight} kg • {new Date(transaction.date).toLocaleDateString('en-IN')}
                  </p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-bold text-sage-700">+₹{transaction.earnings.toFixed(2)}</p>
                <p className="text-xs text-gray-500">{transaction.category}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-gradient-to-r from-rose-500 to-rose-600 rounded-2xl p-6 text-white text-center shadow-lg">
        <Trophy className="mx-auto mb-3" size={40} />
        <h3 className="font-bold text-xl mb-2">Keep Going!</h3>
        <p className="text-sm text-rose-100">
          You're making a real difference in Jalandhar's environment
        </p>
      </div>
    </div>
  );
};

export default DashboardTab;
