import React, { useState } from 'react';
import { Search, Menu, X, Home, MapPin, Phone, User, Heart, Building2 } from 'lucide-react';

interface HeaderProps {
  searchTerm: string;
  onSearchChange: (term: string) => void;
}

const navigationItems = [
  {
    name: 'Buy',
    icon: Home,
    pages: ['Apartments', 'Villas', 'Plots', 'Commercial', 'New Projects']
  },
  {
    name: 'Rent',
    icon: Building2,
    pages: ['Residential Rent', 'Commercial Rent', 'Co-living', 'PG/Hostels']
  },
  {
    name: 'Locations',
    icon: MapPin,
    pages: ['Mumbai', 'Delhi', 'Bangalore', 'Pune', 'Chennai', 'Hyderabad']
  },
  {
    name: 'Services',
    icon: Phone,
    pages: ['Home Loans', 'Legal Services', 'Property Valuation', 'Interior Design']
  },
  {
    name: 'My Account',
    icon: User,
    pages: ['Dashboard', 'Saved Properties', 'Recent Searches', 'Profile Settings']
  }
];

export default function Header({ searchTerm, onSearchChange }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  return (
    <header className="bg-white shadow-lg relative z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Home className="w-8 h-8 text-blue-600" />
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              Property Finder
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => setHoveredItem(item.name)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <button className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors py-2">
                  <item.icon className="w-4 h-4" />
                  <span className="font-medium">{item.name}</span>
                </button>

                {/* Dropdown Menu */}
                {hoveredItem === item.name && (
                  <div className="absolute top-full left-0 mt-1 w-64 bg-white rounded-lg shadow-xl border border-gray-100 py-3 animate-in fade-in-0 zoom-in-95 duration-200">
                    <div className="px-4 pb-2 border-b border-gray-100">
                      <h3 className="font-semibold text-gray-900 flex items-center">
                        <item.icon className="w-4 h-4 mr-2 text-blue-600" />
                        {item.name}
                      </h3>
                    </div>
                    <div className="mt-2">
                      {item.pages.map((page, index) => (
                        <button
                          key={index}
                          className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                        >
                          {page}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Search Bar */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="relative">
              <Search className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search properties, locations..."
                value={searchTerm}
                onChange={(e) => onSearchChange(e.target.value)}
                className="pl-10 pr-4 py-2 w-80 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <button className="p-2 text-gray-600 hover:text-red-500 transition-colors">
              <Heart className="w-6 h-6" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-gray-600 hover:text-gray-900"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Search */}
        <div className="md:hidden pb-4">
          <div className="relative">
            <Search className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search properties..."
              value={searchTerm}
              onChange={(e) => onSearchChange(e.target.value)}
              className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-t border-gray-200 shadow-lg">
          <nav className="container mx-auto px-4 py-4">
            {navigationItems.map((item) => (
              <div key={item.name} className="mb-4">
                <div className="flex items-center space-x-2 text-gray-900 font-medium mb-2">
                  <item.icon className="w-4 h-4 text-blue-600" />
                  <span>{item.name}</span>
                </div>
                <div className="ml-6 space-y-1">
                  {item.pages.map((page, index) => (
                    <button
                      key={index}
                      className="block w-full text-left py-1 text-sm text-gray-600 hover:text-blue-600 transition-colors"
                    >
                      {page}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}