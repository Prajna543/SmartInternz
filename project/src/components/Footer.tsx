import React from 'react';
import { BarChart3, Github, Twitter, Linkedin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-blue-600 p-2 rounded-lg">
                <BarChart3 className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Economic Freedom Index</h3>
                <p className="text-gray-400 text-sm">Data Analytics Platform</p>
              </div>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Comprehensive analysis of global economic freedom, measuring the fundamental right 
              of individuals to control their own labor and property across 180 countries worldwide.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-gray-800 hover:bg-gray-700 p-2 rounded-lg transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="bg-gray-800 hover:bg-gray-700 p-2 rounded-lg transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="bg-gray-800 hover:bg-gray-700 p-2 rounded-lg transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="bg-gray-800 hover:bg-gray-700 p-2 rounded-lg transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Analytics</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Country Rankings</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Regional Analysis</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Historical Trends</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Comparative Studies</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Data Downloads</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Methodology</a></li>
              <li><a href="#" className="hover:text-white transition-colors">API Documentation</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Research Papers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Case Studies</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Technical Support</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 Economic Freedom Index. Powered by advanced data analytics and Tableau integration.
            </div>
            <div className="flex space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Data Usage</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;