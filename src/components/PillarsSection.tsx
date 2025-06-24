import React from 'react';
import { Scale, Building2, Cog, Globe2 } from 'lucide-react';

const PillarsSection: React.FC = () => {
  const pillars = [
    {
      title: "Rule of Law",
      description: "Foundation of economic freedom through legal protections and institutional integrity",
      icon: Scale,
      color: "blue",
      factors: ["Property Rights", "Government Integrity", "Judicial Effectiveness"],
      score: 68.4,
      trend: "+2.3"
    },
    {
      title: "Government Size", 
      description: "Optimal balance between necessary governance and economic freedom",
      icon: Building2,
      color: "green",
      factors: ["Government Spending", "Tax Burden", "Fiscal Health"],
      score: 62.1,
      trend: "-1.2"
    },
    {
      title: "Regulatory Efficiency",
      description: "Streamlined regulations that promote business while protecting consumers",
      icon: Cog,
      color: "orange",
      factors: ["Business Freedom", "Labor Freedom", "Monetary Freedom"],
      score: 71.8,
      trend: "+3.1"
    },
    {
      title: "Open Markets",
      description: "Free flow of goods, services, and capital across borders",
      icon: Globe2,
      color: "purple",
      factors: ["Trade Freedom", "Investment Freedom", "Financial Freedom"],
      score: 65.7,
      trend: "+1.8"
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: "bg-blue-50 border-blue-200 text-blue-600",
      green: "bg-green-50 border-green-200 text-green-600", 
      orange: "bg-orange-50 border-orange-200 text-orange-600",
      purple: "bg-purple-50 border-purple-200 text-purple-600"
    };
    return colorMap[color as keyof typeof colorMap];
  };

  const getScoreColor = (score: number) => {
    if (score >= 70) return "text-green-600";
    if (score >= 60) return "text-orange-600";
    return "text-red-600";
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Four Pillars of Economic Freedom
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our comprehensive methodology evaluates economic freedom through four fundamental pillars, 
            each containing multiple factors that contribute to overall economic liberty.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {pillars.map((pillar, index) => {
            const IconComponent = pillar.icon;
            return (
              <div key={index} className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="flex items-start justify-between mb-6">
                  <div className={`p-4 rounded-xl ${getColorClasses(pillar.color)}`}>
                    <IconComponent className="h-8 w-8" />
                  </div>
                  <div className="text-right">
                    <div className={`text-3xl font-bold ${getScoreColor(pillar.score)}`}>
                      {pillar.score}
                    </div>
                    <div className="text-sm text-gray-500">Global Average</div>
                    <div className={`text-sm font-semibold ${pillar.trend.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
                      {pillar.trend} vs 2023
                    </div>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-3">{pillar.title}</h3>
                <p className="text-gray-600 mb-6">{pillar.description}</p>

                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-900 text-sm uppercase tracking-wide">Key Factors</h4>
                  {pillar.factors.map((factor, factorIndex) => (
                    <div key={factorIndex} className="flex items-center justify-between p-3 bg-white rounded-lg border border-gray-100">
                      <span className="text-gray-700">{factor}</span>
                      <div className="w-24 bg-gray-200 rounded-full h-2">
                        <div 
                          className={`h-2 rounded-full ${pillar.color === 'blue' ? 'bg-blue-500' : pillar.color === 'green' ? 'bg-green-500' : pillar.color === 'orange' ? 'bg-orange-500' : 'bg-purple-500'}`}
                          style={{ width: `${Math.random() * 40 + 60}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PillarsSection;