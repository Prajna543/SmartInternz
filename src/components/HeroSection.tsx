import React from 'react';
import { ArrowRight, Award, Users, DollarSign } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section className="bg-gradient-to-br from-gray-50 to-blue-50 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            The Foundation of <span className="text-blue-600">Global Prosperity</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Economic freedom is the fundamental right of every human to control their own labor and property. 
            Our comprehensive analysis measures freedom across 180 countries using 12 quantitative factors 
            grouped into four essential pillars of economic liberty.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
            <div className="bg-green-100 p-4 rounded-xl w-fit mb-4">
              <Award className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Global Rankings</h3>
            <p className="text-gray-600 mb-4">
              Comprehensive rankings of 180 countries based on economic freedom metrics and policy analysis.
            </p>
            <div className="text-3xl font-bold text-green-600">180</div>
            <div className="text-sm text-gray-500">Countries Analyzed</div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
            <div className="bg-blue-100 p-4 rounded-xl w-fit mb-4">
              <Users className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Freedom Factors</h3>
            <p className="text-gray-600 mb-4">
              Detailed analysis across 12 key indicators measuring various aspects of economic liberty.
            </p>
            <div className="text-3xl font-bold text-blue-600">12</div>
            <div className="text-sm text-gray-500">Key Indicators</div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
            <div className="bg-orange-100 p-4 rounded-xl w-fit mb-4">
              <DollarSign className="h-8 w-8 text-orange-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Economic Impact</h3>
            <p className="text-gray-600 mb-4">
              Analyzing the correlation between economic freedom and prosperity, growth, and quality of life.
            </p>
            <div className="text-3xl font-bold text-orange-600">$75T</div>
            <div className="text-sm text-gray-500">Global GDP Impact</div>
          </div>
        </div>

        <div className="text-center">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 inline-flex items-center space-x-2 shadow-lg hover:shadow-xl">
            <span>Explore the Dashboard</span>
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;