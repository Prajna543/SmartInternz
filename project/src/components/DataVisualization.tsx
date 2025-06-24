import React from 'react';
import { TrendingUp, TrendingDown, BarChart, Map, PieChart, Activity } from 'lucide-react';

const DataVisualization: React.FC = () => {
  const topCountries = [
    { name: "Singapore", score: 83.9, change: "+0.4", rank: 1 },
    { name: "Switzerland", score: 83.8, change: "+1.2", rank: 2 },
    { name: "Ireland", score: 82.0, change: "-0.3", rank: 3 },
    { name: "Taiwan", score: 80.7, change: "+2.1", rank: 4 },
    { name: "New Zealand", score: 78.9, change: "+0.8", rank: 5 }
  ];

  const regions = [
    { name: "North America", score: 76.2, countries: 3 },
    { name: "Europe", score: 70.1, countries: 45 },
    { name: "Asia-Pacific", score: 60.8, countries: 40 },
    { name: "Middle East", score: 61.5, countries: 14 },
    { name: "Sub-Saharan Africa", score: 55.7, countries: 48 },
    { name: "South America", score: 58.9, countries: 12 }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Global Economic Freedom <span className="text-blue-600">Analytics</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Interactive data visualizations and comprehensive analysis of economic freedom trends, 
            rankings, and regional comparisons across the globe.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* Top Performers Chart */}
          <div className="lg:col-span-2 bg-white rounded-2xl p-8 shadow-lg">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-gray-900">Top Performing Countries</h3>
              <div className="flex items-center space-x-2">
                <BarChart className="h-5 w-5 text-blue-600" />
                <span className="text-sm text-gray-500">2024 Rankings</span>
              </div>
            </div>
            
            <div className="space-y-4">
              {topCountries.map((country, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                  <div className="flex items-center space-x-4">
                    <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                      {country.rank}
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">{country.name}</div>
                      <div className="text-sm text-gray-500">Economic Freedom Score</div>
                    </div>
                  </div>
                  <div className="text-right flex items-center space-x-3">
                    <div>
                      <div className="text-2xl font-bold text-gray-900">{country.score}</div>
                      <div className={`text-sm flex items-center ${country.change.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
                        {country.change.startsWith('+') ? <TrendingUp className="h-3 w-3 mr-1" /> : <TrendingDown className="h-3 w-3 mr-1" />}
                        {country.change}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Global Summary */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-gray-900">Global Summary</h3>
              <Activity className="h-5 w-5 text-green-600" />
            </div>
            
            <div className="space-y-6">
              <div className="text-center p-6 bg-gradient-to-r from-blue-50 to-green-50 rounded-xl">
                <div className="text-3xl font-bold text-blue-600 mb-2">67.2</div>
                <div className="text-sm text-gray-600">Global Average Score</div>
                <div className="text-xs text-green-600 mt-1">+1.4 from 2023</div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <div className="text-xl font-bold text-green-600">28</div>
                  <div className="text-xs text-gray-600">Free Countries</div>
                </div>
                <div className="text-center p-4 bg-orange-50 rounded-lg">
                  <div className="text-xl font-bold text-orange-600">59</div>
                  <div className="text-xs text-gray-600">Mostly Free</div>
                </div>
                <div className="text-center p-4 bg-yellow-50 rounded-lg">
                  <div className="text-xl font-bold text-yellow-600">58</div>
                  <div className="text-xs text-gray-600">Moderately Free</div>
                </div>
                <div className="text-center p-4 bg-red-50 rounded-lg">
                  <div className="text-xl font-bold text-red-600">35</div>
                  <div className="text-xs text-gray-600">Repressed</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Regional Analysis */}
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-bold text-gray-900">Regional Analysis</h3>
            <div className="flex items-center space-x-2">
              <Map className="h-5 w-5 text-purple-600" />
              <span className="text-sm text-gray-500">By Geographic Region</span>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regions.map((region, index) => (
              <div key={index} className="p-6 bg-gradient-to-br from-gray-50 to-white rounded-xl border border-gray-100 hover:shadow-md transition-all">
                <div className="flex justify-between items-start mb-4">
                  <h4 className="font-semibold text-gray-900">{region.name}</h4>
                  <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full">
                    {region.countries} countries
                  </span>
                </div>
                <div className="text-2xl font-bold text-blue-600 mb-2">{region.score}</div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-blue-500 to-green-500 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${(region.score / 100) * 100}%` }}
                  ></div>
                </div>
                <div className="text-xs text-gray-500 mt-2">Average Freedom Score</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DataVisualization;