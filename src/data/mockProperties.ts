import { Property } from '../types/Property';

export const mockProperties: Property[] = [
  {
    id: '1',
    title: 'Luxurious 3BHK Apartment in Bandra West',
    location: 'Bandra West, Mumbai, Maharashtra',
    price: 15000000,
    rentPrice: 85000,
    type: 'apartment',
    listingType: 'both',
    bedrooms: 3,
    bathrooms: 2,
    area: 1200,
    image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800',
    images: [
      'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1743227/pexels-photo-1743227.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/2029667/pexels-photo-2029667.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    description: 'Modern 3BHK apartment with sea view, premium amenities including swimming pool, gym, and 24x7 security. Located in the heart of Bandra West with easy access to shopping and entertainment.',
    amenities: ['Swimming Pool', 'Gym', '24x7 Security', 'Parking', 'Elevator', 'Power Backup'],
    agent: {
      name: 'Rajesh Kumar',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=200',
      phone: '+91 98765 43210',
      email: 'rajesh.kumar@propertyfinder.in',
      company: 'Mumbai Premium Properties'
    }
  },
  {
    id: '2',
    title: 'Spacious 4BHK Villa in Whitefield',
    location: 'Whitefield, Bangalore, Karnataka',
    price: 25000000,
    rentPrice: 120000,
    type: 'house',
    listingType: 'both',
    bedrooms: 4,
    bathrooms: 3,
    area: 2500,
    image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800',
    images: [
      'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1643384/pexels-photo-1643384.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/2082087/pexels-photo-2082087.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    description: 'Independent villa with garden, perfect for families. Located in IT hub Whitefield with excellent connectivity to tech parks and shopping centers.',
    amenities: ['Garden', 'Parking', 'Security', 'Power Backup', 'Water Supply', 'Club House'],
    agent: {
      name: 'Priya Reddy',
      image: 'https://images.pexels.com/photos/3992656/pexels-photo-3992656.jpeg?auto=compress&cs=tinysrgb&w=200',
      phone: '+91 98765 43211',
      email: 'priya.reddy@propertyfinder.in',
      company: 'Bangalore Villas & Homes'
    }
  },
  {
    id: '3',
    title: 'Modern 2BHK in Cyber City',
    location: 'Cyber City, Gurgaon, Haryana',
    price: 8500000,
    rentPrice: 45000,
    type: 'apartment',
    listingType: 'both',
    bedrooms: 2,
    bathrooms: 2,
    area: 950,
    image: 'https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg?auto=compress&cs=tinysrgb&w=800',
    images: [
      'https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/2062426/pexels-photo-2062426.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    description: 'Contemporary apartment in prime location with all modern amenities. Walking distance to metro station and major corporate offices.',
    amenities: ['Metro Connectivity', 'Gym', 'Swimming Pool', 'Parking', 'Security', 'Shopping Mall'],
    agent: {
      name: 'Amit Sharma',
      image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=200',
      phone: '+91 98765 43212',
      email: 'amit.sharma@propertyfinder.in',
      company: 'Delhi NCR Properties'
    }
  },
  {
    id: '4',
    title: 'Elegant 3BHK in Koramangala',
    location: 'Koramangala, Bangalore, Karnataka',
    price: 18000000,
    rentPrice: 75000,
    type: 'apartment',
    listingType: 'both',
    bedrooms: 3,
    bathrooms: 2,
    area: 1350,
    image: 'https://images.pexels.com/photos/1571464/pexels-photo-1571464.jpeg?auto=compress&cs=tinysrgb&w=800',
    images: [
      'https://images.pexels.com/photos/1571464/pexels-photo-1571464.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/2062431/pexels-photo-2062431.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1444424/pexels-photo-1444424.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    description: 'Premium apartment in trendy Koramangala with vibrant nightlife, restaurants, and shopping. Perfect for young professionals.',
    amenities: ['Rooftop Terrace', 'Gym', 'Parking', 'Security', 'Power Backup', 'Internet Ready'],
    agent: {
      name: 'Sneha Nair',
      image: 'https://images.pexels.com/photos/3992659/pexels-photo-3992659.jpeg?auto=compress&cs=tinysrgb&w=200',
      phone: '+91 98765 43213',
      email: 'sneha.nair@propertyfinder.in',
      company: 'Bangalore Premium Living'
    }
  },
  {
    id: '5',
    title: '5BHK Penthouse in Marine Drive',
    location: 'Marine Drive, Mumbai, Maharashtra',
    price: 45000000,
    rentPrice: 200000,
    type: 'apartment',
    listingType: 'both',
    bedrooms: 5,
    bathrooms: 4,
    area: 3200,
    image: 'https://images.pexels.com/photos/1571465/pexels-photo-1571465.jpeg?auto=compress&cs=tinysrgb&w=800',
    images: [
      'https://images.pexels.com/photos/1571465/pexels-photo-1571465.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/2062428/pexels-photo-2062428.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1571467/pexels-photo-1571467.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    description: 'Ultra-luxury penthouse with panoramic sea views, private terrace, and world-class amenities. The epitome of luxury living in Mumbai.',
    amenities: ['Sea View', 'Private Terrace', 'Concierge', 'Valet Parking', 'Swimming Pool', 'Spa'],
    agent: {
      name: 'Vikram Malhotra',
      image: 'https://images.pexels.com/photos/2379003/pexels-photo-2379003.jpeg?auto=compress&cs=tinysrgb&w=200',
      phone: '+91 98765 43214',
      email: 'vikram.malhotra@propertyfinder.in',
      company: 'Luxury Homes Mumbai'
    }
  },
  {
    id: '6',
    title: 'Cozy 1BHK Studio in Powai',
    location: 'Powai, Mumbai, Maharashtra',
    price: 6500000,
    rentPrice: 35000,
    type: 'apartment',
    listingType: 'both',
    bedrooms: 1,
    bathrooms: 1,
    area: 650,
    image: 'https://images.pexels.com/photos/1571466/pexels-photo-1571466.jpeg?auto=compress&cs=tinysrgb&w=800',
    images: [
      'https://images.pexels.com/photos/1571466/pexels-photo-1571466.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/2062430/pexels-photo-2062430.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1080696/pexels-photo-1080696.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    description: 'Compact and efficient studio apartment perfect for young professionals. Located near IT parks and shopping centers.',
    amenities: ['Gym', 'Swimming Pool', 'Security', 'Parking', 'Power Backup', 'WiFi Ready'],
    agent: {
      name: 'Ravi Patel',
      image: 'https://images.pexels.com/photos/2379006/pexels-photo-2379006.jpeg?auto=compress&cs=tinysrgb&w=200',
      phone: '+91 98765 43215',
      email: 'ravi.patel@propertyfinder.in',
      company: 'Smart Homes Mumbai'
    }
  },
  {
    id: '7',
    title: 'Luxury 4BHK Villa in DLF Phase 3',
    location: 'DLF Phase 3, Gurgaon, Haryana',
    price: 35000000,
    rentPrice: 150000,
    type: 'house',
    listingType: 'both',
    bedrooms: 4,
    bathrooms: 3,
    area: 2800,
    image: 'https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=800',
    images: [
      'https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/2082090/pexels-photo-2082090.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    description: 'Magnificent villa in prestigious DLF Phase 3 with private garden, swimming pool, and premium finishes throughout.',
    amenities: ['Private Pool', 'Garden', 'Servant Quarter', 'Generator', 'Security', 'Club Access'],
    agent: {
      name: 'Deepika Singh',
      image: 'https://images.pexels.com/photos/3992657/pexels-photo-3992657.jpeg?auto=compress&cs=tinysrgb&w=200',
      phone: '+91 98765 43216',
      email: 'deepika.singh@propertyfinder.in',
      company: 'DLF Luxury Homes'
    }
  },
  {
    id: '8',
    title: 'Modern 2BHK in Indiranagar',
    location: 'Indiranagar, Bangalore, Karnataka',
    price: 12000000,
    rentPrice: 55000,
    type: 'apartment',
    listingType: 'both',
    bedrooms: 2,
    bathrooms: 2,
    area: 1100,
    image: 'https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=800',
    images: [
      'https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/2062427/pexels-photo-2062427.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1444416/pexels-photo-1444416.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    description: 'Stylish apartment in the cultural heart of Bangalore, surrounded by cafes, pubs, and shopping streets.',
    amenities: ['Balcony', 'Parking', 'Security', 'Elevator', 'Power Backup', 'Internet Ready'],
    agent: {
      name: 'Arjun Krishna',
      image: 'https://images.pexels.com/photos/2379007/pexels-photo-2379007.jpeg?auto=compress&cs=tinysrgb&w=200',
      phone: '+91 98765 43217',
      email: 'arjun.krishna@propertyfinder.in',
      company: 'Bangalore City Homes'
    }
  }
];