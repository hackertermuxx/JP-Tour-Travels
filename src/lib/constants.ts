export const SITE_NAME = "JP Tour Travels";
export const SITE_DESCRIPTION = "Explore the world with premium travel packages, destinations, and experiences.";
export const WHATSAPP_NUMBER = "+919XXXXXXXXX";
export const WHATSAPP_MESSAGE = "Hi! I'm interested in booking a tour package.";
export const EMAIL = "info@jptourtravels.com";
export const PHONE = "+91 XXXXXXXXXX";
export const ADDRESS = "Your City, State, India";

export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Packages", href: "/packages" },
  { label: "Destinations", href: "/destinations" },
  { label: "Vehicles", href: "/vehicles" },
  { label: "Gallery", href: "/gallery" },
  { label: "Blog", href: "/blog" },
  { label: "Reviews", href: "/reviews" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
] as const;

export const SOCIAL_LINKS = {
  facebook: "https://facebook.com/jptourtravels",
  instagram: "https://instagram.com/jptourtravels",
  youtube: "https://youtube.com/@jptourtravels",
} as const;

export const PACKAGE_SORT_OPTIONS = [
  { label: "Price: Low to High", value: "price_asc" },
  { label: "Price: High to Low", value: "price_desc" },
  { label: "Newest First", value: "newest" },
  { label: "Popular", value: "popular" },
] as const;

export const VEHICLE_TYPES = [
  { label: "Sedan", value: "sedan" },
  { label: "SUV", value: "suv" },
  { label: "Hatchback", value: "hatchback" },
  { label: "Luxury", value: "luxury" },
  { label: "Tempo Traveller", value: "tempo" },
  { label: "Bus", value: "bus" },
] as const;

export const STATS = [
  { label: "Happy Travelers", value: "500+" },
  { label: "Destinations", value: "50+" },
  { label: "Years Experience", value: "10+" },
  { label: "5-Star Reviews", value: "200+" },
] as const;

export const REVIEWS = [
  {
    name: "Rahul Sharma",
    rating: 5,
    text: "Amazing experience! JP Tour Travels made our family trip unforgettable. Everything was perfectly organized.",
    location: "Delhi",
  },
  {
    name: "Priya Patel",
    rating: 5,
    text: "The best travel agency I've ever worked with. Attention to detail was remarkable.",
    location: "Mumbai",
  },
  {
    name: "Amit Singh",
    rating: 5,
    text: "Professional, reliable, and incredibly helpful. Our Kashmir trip was a dream come true.",
    location: "Bangalore",
  },
  {
    name: "Sneha Verma",
    rating: 4,
    text: "Great service and wonderful packages. Would definitely recommend to friends and family.",
    location: "Pune",
  },
] as const;

export const FAQS = [
  {
    question: "How do I book a package?",
    answer: "You can book directly through our WhatsApp button or contact us via phone/email. Our team will help you choose the perfect package.",
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept UPI, bank transfers, and cash payments. Advance payment is required to confirm your booking.",
  },
  {
    question: "Can I customize a package?",
    answer: "Yes! We offer fully customizable packages. Contact us with your requirements and we'll create a personalized itinerary.",
  },
  {
    question: "What is your cancellation policy?",
    answer: "Cancellations made 7 days before the trip get a full refund. 3-7 days: 50% refund. Less than 3 days: no refund.",
  },
  {
    question: "Do you provide vehicles for local travel?",
    answer: "Yes, we offer a range of vehicles including sedans, SUVs, and tempo travellers for both local and outstation trips.",
  },
] as const;
