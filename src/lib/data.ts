import potteryImg from "@/assets/workshop-pottery.jpg";
import codingImg from "@/assets/workshop-coding.jpg";
import cookingImg from "@/assets/workshop-cooking.jpg";
import artImg from "@/assets/workshop-art.jpg";
import photoImg from "@/assets/workshop-photo.jpg";

export type Workshop = {
  id: string;
  title: string;
  category: string;
  instructor: string;
  instructorRole: string;
  rating: number;
  reviewCount: number;
  price: number;
  duration: string;
  date: string;
  time: string;
  location: string;
  distance: string;
  spotsLeft: number;
  totalSpots: number;
  image: string;
  description: string;
  level: string;
  tags: string[];
};

export const categories = [
  { name: "All", icon: "✨" },
  { name: "Pottery", icon: "🏺" },
  { name: "Coding", icon: "💻" },
  { name: "Cooking", icon: "🍳" },
  { name: "Art", icon: "🎨" },
  { name: "Photography", icon: "📷" },
];

export const workshops: Workshop[] = [
  {
    id: "1",
    title: "Wheel Throwing for Beginners",
    category: "Pottery",
    instructor: "Maria Chen",
    instructorRole: "Ceramic Artist · 12 yrs exp",
    rating: 4.9,
    reviewCount: 128,
    price: 65,
    duration: "3 hours",
    date: "Sat, Apr 5",
    time: "10:00 AM",
    location: "Clay & Craft Studio",
    distance: "1.2 km",
    spotsLeft: 3,
    totalSpots: 8,
    image: potteryImg,
    description: "Learn the fundamentals of wheel throwing in this hands-on workshop. You'll create your own bowl or cup from start to finish, learning centering, pulling, and shaping techniques. All materials included — take home your fired piece!",
    level: "Beginner",
    tags: ["Hands-on", "Materials included", "Take home"],
  },
  {
    id: "2",
    title: "Build Your First React App",
    category: "Coding",
    instructor: "Alex Rivera",
    instructorRole: "Senior Developer · Google",
    rating: 4.8,
    reviewCount: 95,
    price: 45,
    duration: "4 hours",
    date: "Sun, Apr 6",
    time: "2:00 PM",
    location: "TechHub Coworking",
    distance: "2.5 km",
    spotsLeft: 6,
    totalSpots: 12,
    image: codingImg,
    description: "Go from zero to a working React application in one afternoon. We'll cover components, state, and hooks with real-world examples. Bring your laptop — you'll deploy your app by the end of the session.",
    level: "Beginner",
    tags: ["Bring laptop", "Project-based", "Certificate"],
  },
  {
    id: "3",
    title: "Thai Street Food Masterclass",
    category: "Cooking",
    instructor: "Nadia Prasert",
    instructorRole: "Chef · Former Nahm Bangkok",
    rating: 4.9,
    reviewCount: 203,
    price: 85,
    duration: "3.5 hours",
    date: "Sat, Apr 5",
    time: "6:00 PM",
    location: "The Kitchen Collective",
    distance: "0.8 km",
    spotsLeft: 2,
    totalSpots: 10,
    image: cookingImg,
    description: "Master three iconic Thai street food dishes: Pad Thai, Som Tum, and Mango Sticky Rice. Learn to balance sweet, sour, salty, and spicy flavors like a pro. Includes a sit-down dinner with wine pairing.",
    level: "All Levels",
    tags: ["Dinner included", "Wine pairing", "Recipe cards"],
  },
  {
    id: "4",
    title: "Watercolor Landscapes",
    category: "Art",
    instructor: "James Okafor",
    instructorRole: "Fine Artist · Gallery Exhibited",
    rating: 4.7,
    reviewCount: 67,
    price: 55,
    duration: "2.5 hours",
    date: "Sun, Apr 6",
    time: "10:00 AM",
    location: "Artisan Loft",
    distance: "3.1 km",
    spotsLeft: 5,
    totalSpots: 8,
    image: artImg,
    description: "Explore watercolor techniques for painting stunning landscapes. From wet-on-wet washes to fine detail work, you'll complete a full painting to take home. All supplies provided.",
    level: "Intermediate",
    tags: ["Supplies included", "Small group", "Take home"],
  },
  {
    id: "5",
    title: "Golden Hour Photography Walk",
    category: "Photography",
    instructor: "Sofia Bergström",
    instructorRole: "Photographer · National Geographic",
    rating: 4.8,
    reviewCount: 89,
    price: 40,
    duration: "2 hours",
    date: "Fri, Apr 4",
    time: "5:30 PM",
    location: "Riverside Park",
    distance: "1.8 km",
    spotsLeft: 8,
    totalSpots: 15,
    image: photoImg,
    description: "Capture the magic of golden hour with expert guidance on composition, lighting, and camera settings. Walk through scenic locations and get personalized feedback on your shots.",
    level: "All Levels",
    tags: ["Outdoor", "Bring camera", "Portfolio review"],
  },
  {
    id: "6",
    title: "Hand-Built Ceramic Planters",
    category: "Pottery",
    instructor: "Maria Chen",
    instructorRole: "Ceramic Artist · 12 yrs exp",
    rating: 4.8,
    reviewCount: 74,
    price: 70,
    duration: "3 hours",
    date: "Sun, Apr 13",
    time: "1:00 PM",
    location: "Clay & Craft Studio",
    distance: "1.2 km",
    spotsLeft: 4,
    totalSpots: 8,
    image: potteryImg,
    description: "Create a beautiful hand-built planter using slab and coil techniques. No wheel required! Perfect for plant lovers who want a unique, handmade pot for their collection.",
    level: "Beginner",
    tags: ["Hands-on", "Materials included", "Take home"],
  },
];
