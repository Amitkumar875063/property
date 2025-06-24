import React from 'react';
import { MapPin, Bed, Bath, Square, Phone, Mail } from 'lucide-react';
import { Property } from '../types/Property';
import { formatPrice, formatRent } from '../utils/priceFormatter';

interface PropertyCardProps {
  property: Property;
  onViewDetails: (property: Property) => void;
  onContact: (property: Property) => void;
}

export default function PropertyCard({ property, onViewDetails, onContact }: PropertyCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      <div className="relative">
        <img
          src={property.image}
          alt={property.title}
          className="w-full h-64 object-cover"
        />
        <div className="absolute top-4 left-4 flex gap-2">
          {property.listingType === 'sale' && (
            <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
              For Sale
            </span>
          )}
          {property.listingType === 'rent' && (
            <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium">
              For Rent
            </span>
          )}
          {property.listingType === 'both' && (
            <>
              <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                Sale
              </span>
              <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                Rent
              </span>
            </>
          )}
        </div>
        <div className="absolute top-4 right-4">
          <span className="bg-white/90 backdrop-blur-sm text-gray-800 px-3 py-1 rounded-full text-sm font-medium capitalize">
            {property.type}
          </span>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">
          {property.title}
        </h3>
        
        <div className="flex items-center text-gray-600 mb-3">
          <MapPin className="w-4 h-4 mr-1" />
          <span className="text-sm">{property.location}</span>
        </div>

        <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-600">
          <div className="flex items-center">
            <Bed className="w-4 h-4 mr-1" />
            <span>{property.bedrooms} Beds</span>
          </div>
          <div className="flex items-center">
            <Bath className="w-4 h-4 mr-1" />
            <span>{property.bathrooms} Baths</span>
          </div>
          <div className="flex items-center">
            <Square className="w-4 h-4 mr-1" />
            <span>{property.area} sq ft</span>
          </div>
        </div>

        <div className="mb-4">
          {property.listingType === 'sale' && (
            <div className="text-2xl font-bold text-blue-600">
              {formatPrice(property.price)}
            </div>
          )}
          {property.listingType === 'rent' && (
            <div className="text-2xl font-bold text-green-600">
              {formatRent(property.rentPrice!)}
            </div>
          )}
          {property.listingType === 'both' && (
            <div className="space-y-1">
              <div className="text-xl font-bold text-blue-600">
                {formatPrice(property.price)}
              </div>
              <div className="text-lg font-semibold text-green-600">
                {formatRent(property.rentPrice!)}
              </div>
            </div>
          )}
        </div>

        {/* Agent Info */}
        <div className="flex items-center justify-between mb-4 p-3 bg-gray-50 rounded-lg">
          <div className="flex items-center space-x-3">
            <img
              src={property.agent.image}
              alt={property.agent.name}
              className="w-10 h-10 rounded-full object-cover"
            />
            <div>
              <p className="font-medium text-gray-900 text-sm">{property.agent.name}</p>
              <p className="text-xs text-gray-600">{property.agent.company}</p>
            </div>
          </div>
          <div className="flex space-x-2">
            <a
              href={`tel:${property.agent.phone}`}
              className="p-2 text-blue-600 hover:bg-blue-100 rounded-full transition-colors"
              title="Call Agent"
            >
              <Phone className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${property.agent.email}`}
              className="p-2 text-green-600 hover:bg-green-100 rounded-full transition-colors"
              title="Email Agent"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div className="flex gap-2">
          <button
            onClick={() => onViewDetails(property)}
            className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors font-medium"
          >
            View Details
          </button>
          <button
            onClick={() => onContact(property)}
            className="flex-1 bg-gray-100 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-200 transition-colors font-medium"
          >
            Contact Agent
          </button>
        </div>
      </div>
    </div>
  );
}