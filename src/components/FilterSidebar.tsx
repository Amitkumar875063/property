import React from 'react';
import { Filter, X, Home, Building, MapPin, IndianRupee } from 'lucide-react';

interface FilterSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  filters: {
    type: string;
    listingType: string;
    location: string;
    minPrice: number;
    maxPrice: number;
    bedrooms: string;
  };
  onFilterChange: (key: string, value: string | number) => void;
}

const propertyTypes = [
  { value: '', label: 'All Types' },
  { value: 'apartment', label: 'Apartment' },
  { value: 'house', label: 'House/Villa' },
  { value: 'commercial', label: 'Commercial' },
];

const listingTypes = [
  { value: '', label: 'Buy & Rent' },
  { value: 'sale', label: 'For Sale' },
  { value: 'rent', label: 'For Rent' },
];

const locations = [
  { value: '', label: 'All Locations' },
  { value: 'Mumbai', label: 'Mumbai' },
  { value: 'Bangalore', label: 'Bangalore' },
  { value: 'Delhi', label: 'Delhi NCR' },
  { value: 'Pune', label: 'Pune' },
  { value: 'Chennai', label: 'Chennai' },
  { value: 'Hyderabad', label: 'Hyderabad' },
];

const bedroomOptions = [
  { value: '', label: 'Any' },
  { value: '1', label: '1 BHK' },
  { value: '2', label: '2 BHK' },
  { value: '3', label: '3 BHK' },
  { value: '4', label: '4+ BHK' },
];

// Price ranges adjusted for Indian market
const priceRanges = {
  sale: [
    { min: 0, max: 5000000, label: 'Under ₹50L' },
    { min: 5000000, max: 10000000, label: '₹50L - ₹1Cr' },
    { min: 10000000, max: 25000000, label: '₹1Cr - ₹2.5Cr' },
    { min: 25000000, max: 50000000, label: '₹2.5Cr - ₹5Cr' },
    { min: 50000000, max: 999999999, label: 'Above ₹5Cr' },
  ],
  rent: [
    { min: 0, max: 25000, label: 'Under ₹25K' },
    { min: 25000, max: 50000, label: '₹25K - ₹50K' },
    { min: 50000, max: 100000, label: '₹50K - ₹1L' },
    { min: 100000, max: 200000, label: '₹1L - ₹2L' },
    { min: 200000, max: 999999999, label: 'Above ₹2L' },
  ],
};

export default function FilterSidebar({ isOpen, onClose, filters, onFilterChange }: FilterSidebarProps) {
  const currentPriceRanges = filters.listingType === 'rent' ? priceRanges.rent : priceRanges.sale;

  const handlePriceRangeChange = (min: number, max: number) => {
    onFilterChange('minPrice', min);
    onFilterChange('maxPrice', max);
  };

  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed lg:static inset-y-0 left-0 z-50 w-80 bg-white shadow-xl transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        }`}
      >
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Filter className="w-5 h-5 text-blue-600" />
              <h2 className="text-xl font-bold text-gray-900">Filters</h2>
            </div>
            <button
              onClick={onClose}
              className="lg:hidden p-2 text-gray-400 hover:text-gray-600"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="p-6 space-y-8 overflow-y-auto max-h-[calc(100vh-100px)]">
          {/* Listing Type */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
              <Building className="w-5 h-5 mr-2 text-blue-600" />
              Looking For
            </h3>
            <div className="space-y-2">
              {listingTypes.map((type) => (
                <label key={type.value} className="flex items-center cursor-pointer">
                  <input
                    type="radio"
                    name="listingType"
                    value={type.value}
                    checked={filters.listingType === type.value}
                    onChange={(e) => onFilterChange('listingType', e.target.value)}
                    className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                  />
                  <span className="ml-2 text-gray-700">{type.label}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Property Type */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
              <Home className="w-5 h-5 mr-2 text-blue-600" />
              Property Type
            </h3>
            <div className="space-y-2">
              {propertyTypes.map((type) => (
                <label key={type.value} className="flex items-center cursor-pointer">
                  <input
                    type="radio"
                    name="propertyType"
                    value={type.value}
                    checked={filters.type === type.value}
                    onChange={(e) => onFilterChange('type', e.target.value)}
                    className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                  />
                  <span className="ml-2 text-gray-700">{type.label}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Location */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
              <MapPin className="w-5 h-5 mr-2 text-blue-600" />
              Location
            </h3>
            <select
              value={filters.location}
              onChange={(e) => onFilterChange('location', e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              {locations.map((location) => (
                <option key={location.value} value={location.value}>
                  {location.label}
                </option>
              ))}
            </select>
          </div>

          {/* Price Range */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
              <IndianRupee className="w-5 h-5 mr-2 text-blue-600" />
              Price Range {filters.listingType === 'rent' && '(Monthly)'}
            </h3>
            <div className="space-y-2">
              {currentPriceRanges.map((range, index) => (
                <label key={index} className="flex items-center cursor-pointer">
                  <input
                    type="radio"
                    name="priceRange"
                    checked={filters.minPrice === range.min && filters.maxPrice === range.max}
                    onChange={() => handlePriceRangeChange(range.min, range.max)}
                    className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                  />
                  <span className="ml-2 text-gray-700">{range.label}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Bedrooms */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Bedrooms</h3>
            <div className="grid grid-cols-2 gap-2">
              {bedroomOptions.map((option) => (
                <label key={option.value} className="flex items-center cursor-pointer">
                  <input
                    type="radio"
                    name="bedrooms"
                    value={option.value}
                    checked={filters.bedrooms === option.value}
                    onChange={(e) => onFilterChange('bedrooms', e.target.value)}
                    className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                  />
                  <span className="ml-2 text-gray-700 text-sm">{option.label}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Clear All Button */}
          <button
            onClick={() => {
              onFilterChange('type', '');
              onFilterChange('listingType', '');
              onFilterChange('location', '');
              onFilterChange('minPrice', 0);
              onFilterChange('maxPrice', 999999999);
              onFilterChange('bedrooms', '');
            }}
            className="w-full py-3 px-4 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors font-medium"
          >
            Clear All Filters
          </button>
        </div>
      </div>
    </>
  );
}