import React, { useState, useMemo } from 'react';
import { Filter } from 'lucide-react';
import Header from './components/Header';
import FilterSidebar from './components/FilterSidebar';
import PropertyCard from './components/PropertyCard';
import PropertyModal from './components/PropertyModal';
import ContactModal from './components/ContactModal';
import { mockProperties } from './data/mockProperties';
import { Property } from './types/Property';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);
  const [isPropertyModalOpen, setIsPropertyModalOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [contactProperty, setContactProperty] = useState<Property | null>(null);
  const [filters, setFilters] = useState({
    type: '',
    listingType: '',
    location: '',
    minPrice: 0,
    maxPrice: 999999999,
    bedrooms: '',
  });

  const handleFilterChange = (key: string, value: string | number) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  };

  const handleViewDetails = (property: Property) => {
    setSelectedProperty(property);
    setIsPropertyModalOpen(true);
  };

  const handleContact = (property: Property) => {
    setContactProperty(property);
    setIsContactModalOpen(true);
  };

  const filteredProperties = useMemo(() => {
    return mockProperties.filter(property => {
      const matchesSearch = 
        property.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        property.location.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesType = !filters.type || property.type === filters.type;
      
      const matchesListingType = !filters.listingType || 
        property.listingType === filters.listingType || 
        property.listingType === 'both';
      
      const matchesLocation = !filters.location || 
        property.location.toLowerCase().includes(filters.location.toLowerCase());
      
      const matchesBedrooms = !filters.bedrooms || 
        (filters.bedrooms === '4' ? property.bedrooms >= 4 : property.bedrooms.toString() === filters.bedrooms);

      // Price filtering based on listing type
      let matchesPrice = true;
      if (filters.minPrice > 0 || filters.maxPrice < 999999999) {
        if (filters.listingType === 'rent') {
          matchesPrice = property.rentPrice && 
            property.rentPrice >= filters.minPrice && 
            property.rentPrice <= filters.maxPrice;
        } else if (filters.listingType === 'sale') {
          matchesPrice = property.price >= filters.minPrice && 
            property.price <= filters.maxPrice;
        } else {
          // For 'both' or no specific listing type, check both prices
          const saleMatch = property.price >= filters.minPrice && property.price <= filters.maxPrice;
          const rentMatch = property.rentPrice && 
            property.rentPrice >= filters.minPrice && 
            property.rentPrice <= filters.maxPrice;
          matchesPrice = saleMatch || rentMatch;
        }
      }

      return matchesSearch && matchesType && matchesListingType && 
             matchesLocation && matchesBedrooms && matchesPrice;
    });
  }, [searchTerm, filters]);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header searchTerm={searchTerm} onSearchChange={setSearchTerm} />
      
      <div className="container mx-auto px-4 py-8">
        <div className="flex gap-8">
          {/* Sidebar */}
          <FilterSidebar
            isOpen={isFilterOpen}
            onClose={() => setIsFilterOpen(false)}
            filters={filters}
            onFilterChange={handleFilterChange}
          />

          {/* Main Content */}
          <div className="flex-1">
            {/* Header */}
            <div className="flex justify-between items-center mb-8">
              <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">
                  Properties in India
                </h1>
                <p className="text-gray-600">
                  {filteredProperties.length} properties found
                  {searchTerm && ` for "${searchTerm}"`}
                </p>
              </div>
              
              <button
                onClick={() => setIsFilterOpen(true)}
                className="lg:hidden flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                <Filter className="w-5 h-5" />
                <span>Filters</span>
              </button>
            </div>

            {/* Property Grid */}
            {filteredProperties.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                {filteredProperties.map((property) => (
                  <PropertyCard
                    key={property.id}
                    property={property}
                    onViewDetails={handleViewDetails}
                    onContact={handleContact}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <div className="w-24 h-24 mx-auto mb-6 bg-gray-200 rounded-full flex items-center justify-center">
                  <Filter className="w-12 h-12 text-gray-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">No properties found</h3>
                <p className="text-gray-600 mb-4">
                  Try adjusting your search criteria or filters to find more properties.
                </p>
                <button
                  onClick={() => {
                    setSearchTerm('');
                    setFilters({
                      type: '',
                      listingType: '',
                      location: '',
                      minPrice: 0,
                      maxPrice: 999999999,
                      bedrooms: '',
                    });
                  }}
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Reset Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Modals */}
      <PropertyModal
        property={selectedProperty}
        isOpen={isPropertyModalOpen}
        onClose={() => {
          setIsPropertyModalOpen(false);
          setSelectedProperty(null);
        }}
        onContact={handleContact}
      />

      <ContactModal
        property={contactProperty}
        isOpen={isContactModalOpen}
        onClose={() => {
          setIsContactModalOpen(false);
          setContactProperty(null);
        }}
      />
    </div>
  );
}

export default App;