import { Leaf, Droplets, TreePine, Recycle, Trash2, Award, TrendingUp } from 'lucide-react';
import { Transaction } from '../data/mockData';

interface ImpactTabProps {
  transactions: Transaction[];
  totalWaste: number;
}

const ImpactTab = ({ transactions, totalWaste }: ImpactTabProps) => {
  const co2Saved = (totalWaste * 2.1).toFixed(1);
  const plasticRecycled = transactions
    .filter(t => t.category === 'Plastic')
    .reduce((sum, t) => sum + t.weight, 0)
    .toFixed(1);
  const metalRecovered = transactions
    .filter(t => t.category === 'Metal')
    .reduce((sum, t) => sum + t.weight, 0)
    .toFixed(1);
  const glassRecycled = transactions
    .filter(t => t.category === 'Glass')
    .reduce((sum, t) => sum + t.weight, 0)
    .toFixed(1);
  const treesEquivalent = (parseFloat(co2Saved) / 21).toFixed(1);
  const landfillDiverted = totalWaste.toFixed(1);

  const impacts = [
    {
      icon: Leaf,
      label: 'CO₂ Saved',
      value: co2Saved,
      unit: 'kg',
      color: 'from-sage-500 to-sage-600',
      bgColor: 'bg-sage-100',
      textColor: 'text-sage-700',
      description: 'Carbon emissions prevented',
    },
    {
      icon: Recycle,
      label: 'Plastic Recycled',
      value: plasticRecycled,
      unit: 'kg',
      color: 'from-rose-500 to-rose-600',
      bgColor: 'bg-rose-100',
      textColor: 'text-rose-700',
      description: 'Diverted from oceans and landfills',
    },
    {
      icon: Award,
      label: 'Metal Recovered',
      value: metalRecovered,
      unit: 'kg',
      color: 'from-amber-500 to-amber-600',
      bgColor: 'bg-amber-100',
      textColor: 'text-amber-700',
      description: 'Energy-intensive materials saved',
    },
    {
      icon: Droplets,
      label: 'Glass Recycled',
      value: glassRecycled,
      unit: 'kg',
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-100',
      textColor: 'text-blue-700',
      description: 'Infinitely recyclable material',
    },
    {
      icon: TreePine,
      label: 'Trees Saved',
      value: treesEquivalent,
      unit: 'equiv.',
      color: 'from-green-500 to-green-600',
      bgColor: 'bg-green-100',
      textColor: 'text-green-700',
      description: 'Annual CO₂ absorption equivalent',
    },
    {
      icon: Trash2,
      label: 'Landfill Diverted',
      value: landfillDiverted,
      unit: 'kg',
      color: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-100',
      textColor: 'text-purple-700',
      description: 'Waste kept out of landfills',
    },
  ];

  return (
    <div className="space-y-6">
      <div className="text-center mb-6">
        <div className="inline-flex items-center gap-2 bg-sage-100 px-4 py-2 rounded-full mb-3">
          <Leaf className="text-sage-700" size={24} />
          <h2 className="text-xl font-bold text-sage-800">Environmental Impact</h2>
        </div>
        <p className="text-gray-600 px-4">
          Your contribution to a cleaner Jalandhar
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {impacts.map((impact, index) => {
          const Icon = impact.icon;
          return (
            <div
              key={index}
              className="bg-white rounded-2xl p-5 shadow-lg border-2 border-gray-200 hover:border-sage-300 transition-all hover:shadow-xl"
            >
              <div className="flex items-center gap-4">
                <div className={`${impact.bgColor} p-4 rounded-xl`}>
                  <Icon className={impact.textColor} size={32} />
                </div>
                <div className="flex-1">
                  <p className="text-sm text-gray-600 mb-1">{impact.label}</p>
                  <p className="text-3xl font-bold text-gray-800">
                    {impact.value} <span className="text-lg text-gray-500">{impact.unit}</span>
                  </p>
                  <p className="text-xs text-gray-500 mt-1">{impact.description}</p>
                </div>
                <TrendingUp className="text-sage-500" size={24} />
              </div>
            </div>
          );
        })}
      </div>

      <div className="bg-gradient-to-br from-sage-100 to-sage-50 rounded-2xl p-6 shadow-lg border-2 border-sage-300">
        <div className="text-center mb-4">
          <div className="bg-sage-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
            <Recycle className="text-white" size={32} />
          </div>
          <h3 className="font-bold text-gray-800 text-xl mb-2">
            Making a Real Difference
          </h3>
          <p className="text-gray-600">
            Your recycling efforts are creating tangible environmental benefits
          </p>
        </div>

        <div className="bg-white rounded-xl p-4 space-y-3">
          <div className="flex items-start gap-3">
            <div className="bg-sage-100 p-2 rounded-lg flex-shrink-0">
              <Leaf className="text-sage-700" size={20} />
            </div>
            <div>
              <p className="font-semibold text-gray-800">Cleaner Air</p>
              <p className="text-sm text-gray-600">
                Reducing CO₂ emissions helps combat climate change
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="bg-rose-100 p-2 rounded-lg flex-shrink-0">
              <Droplets className="text-rose-700" size={20} />
            </div>
            <div>
              <p className="font-semibold text-gray-800">Protected Waterways</p>
              <p className="text-sm text-gray-600">
                Keeping plastic out of rivers and water sources
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="bg-amber-100 p-2 rounded-lg flex-shrink-0">
              <TreePine className="text-amber-700" size={20} />
            </div>
            <div>
              <p className="font-semibold text-gray-800">Resource Conservation</p>
              <p className="text-sm text-gray-600">
                Preserving natural resources for future generations
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-rose-500 to-rose-600 rounded-2xl p-6 text-white text-center shadow-lg">
        <Award className="mx-auto mb-3" size={48} />
        <h3 className="font-bold text-2xl mb-2">Champion of Change</h3>
        <p className="text-rose-100 mb-4">
          Small actions create big environmental impact
        </p>
        <div className="bg-white bg-opacity-20 rounded-xl p-4">
          <p className="text-sm mb-1">Total Waste Collected</p>
          <p className="text-3xl font-bold">{totalWaste.toFixed(1)} kg</p>
          <p className="text-xs text-rose-100 mt-2">
            Contributing to Jalandhar's sustainable future
          </p>
        </div>
      </div>

      <div className="bg-cream rounded-2xl p-5 border-2 border-sage-200">
        <p className="text-center text-gray-600 text-sm leading-relaxed">
          Every kilogram of waste you collect and recycle makes Jalandhar cleaner, greener, and more sustainable. Thank you for being an environmental champion!
        </p>
      </div>
    </div>
  );
};

export default ImpactTab;
