import React, { useState } from 'react';
import { X, MapPin, Bed, Bath, Square, Phone, Mail, Calendar, ChevronLeft, ChevronRight } from 'lucide-react';
import { Property } from '../types/Property';
import { formatPrice, formatRent } from '../utils/priceFormatter';

interface PropertyModalProps {
  property: Property | null;
  isOpen: boolean;
  onClose: () => void;
  onContact: (property: Property) => void;
}

export default function PropertyModal({ property, isOpen, onClose, onContact }: PropertyModalProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!isOpen || !property) return null;

  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === property.images.length - 1 ? 0 : prev + 1
    );
  };

  const previousImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? property.images.length - 1 : prev - 1
    );
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-6xl w-full max-h-[90vh] overflow-hidden">
        <div className="flex justify-between items-center p-6 border-b border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900">Property Details</h2>
          <button
            onClick={onClose}
            className="p-2 text-gray-400 hover:text-gray-600 rounded-full hover:bg-gray-100"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="flex flex-col lg:flex-row max-h-[calc(90vh-80px)]">
          {/* Left Side - Images and Details */}
          <div className="flex-1 overflow-y-auto">
            {/* Image Gallery */}
            <div className="relative">
              <img
                src={property.images[currentImageIndex]}
                alt={property.title}
                className="w-full h-96 object-cover"
              />
              
              {property.images.length > 1 && (
                <>
                  <button
                    onClick={previousImage}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                  
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                    {property.images.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`w-3 h-3 rounded-full ${
                          index === currentImageIndex ? 'bg-white' : 'bg-white/50'
                        }`}
                      />
                    ))}
                  </div>
                </>
              )}

              {/* Listing Type Badges */}
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
            </div>

            {/* Property Details */}
            <div className="p-6">
              <h1 className="text-3xl font-bold text-gray-900 mb-4">{property.title}</h1>
              
              <div className="flex items-center text-gray-600 mb-6">
                <MapPin className="w-5 h-5 mr-2" />
                <span className="text-lg">{property.location}</span>
              </div>

              {/* Price */}
              <div className="mb-6">
                {property.listingType === 'sale' && (
                  <div className="text-4xl font-bold text-blue-600">
                    {formatPrice(property.price)}
                  </div>
                )}
                {property.listingType === 'rent' && (
                  <div className="text-4xl font-bold text-green-600">
                    {formatRent(property.rentPrice!)}
                  </div>
                )}
                {property.listingType === 'both' && (
                  <div className="space-y-2">
                    <div className="text-3xl font-bold text-blue-600">
                      {formatPrice(property.price)}
                    </div>
                    <div className="text-2xl font-semibold text-green-600">
                      {formatRent(property.rentPrice!)}
                    </div>
                  </div>
                )}
              </div>

              {/* Property Features */}
              <div className="flex flex-wrap gap-6 mb-8">
                <div className="flex items-center space-x-2">
                  <Bed className="w-6 h-6 text-gray-400" />
                  <span className="text-lg font-medium">{property.bedrooms} Bedroom{property.bedrooms > 1 ? 's' : ''}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Bath className="w-6 h-6 text-gray-400" />
                  <span className="text-lg font-medium">{property.bathrooms} Bathroom{property.bathrooms > 1 ? 's' : ''}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Square className="w-6 h-6 text-gray-400" />
                  <span className="text-lg font-medium">{property.area} sq ft</span>
                </div>
              </div>

              {/* Description */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Description</h3>
                <p className="text-gray-700 leading-relaxed">{property.description}</p>
              </div>

              {/* Amenities */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Amenities</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {property.amenities.map((amenity, index) => (
                    <div key={index} className="flex items-center space-x-2 text-gray-700">
                      <div className="w-2 h-2 bg-green-500 rounded-full" />
                      <span>{amenity}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Agent Contact */}
          <div className="lg:w-80 bg-gray-50 p-6 border-l border-gray-200">
            <div className="sticky top-0">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Contact Agent</h3>
              
              {/* Agent Info */}
              <div className="bg-white rounded-xl p-6 mb-6 shadow-sm">
                <div className="flex items-center space-x-4 mb-4">
                  <img
                    src={property.agent.image}
                    alt={property.agent.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="text-lg font-bold text-gray-900">{property.agent.name}</h4>
                    <p className="text-gray-600">{property.agent.company}</p>
                  </div>
                </div>

                <div className="space-y-3">
                  <a
                    href={`tel:${property.agent.phone}`}
                    className="flex items-center justify-center space-x-2 w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    <Phone className="w-5 h-5" />
                    <span>Call Now</span>
                  </a>
                  
                  <a
                    href={`mailto:${property.agent.email}`}
                    className="flex items-center justify-center space-x-2 w-full bg-green-600 text-white py-3 px-4 rounded-lg hover:bg-green-700 transition-colors"
                  >
                    <Mail className="w-5 h-5" />
                    <span>Send Email</span>
                  </a>

                  <button
                    onClick={() => onContact(property)}
                    className="flex items-center justify-center space-x-2 w-full bg-gray-700 text-white py-3 px-4 rounded-lg hover:bg-gray-800 transition-colors"
                  >
                    <Calendar className="w-5 h-5" />
                    <span>Schedule Visit</span>
                  </button>
                </div>

                <div className="mt-4 pt-4 border-t border-gray-200">
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>Phone:</span>
                    <span>{property.agent.phone}</span>
                  </div>
                  <div className="flex justify-between text-sm text-gray-600 mt-1">
                    <span>Email:</span>
                    <span className="truncate ml-2">{property.agent.email}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}