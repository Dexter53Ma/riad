export interface Room {
  slug: string;
  name: string;
  tagline: string;
  price: number;
  priceLabel: string;
  bed: string;
  capacity: string;
  size: string;
  view: string;
  recommendation: string;
  description: string;
  highlights: string[];
  amenities: { icon: string; label: string }[];
  images: { src: string; alt: string }[];
  airbnbUrl: string;
  bookingUrl: string;
}

export const rooms: Room[] = [
  {
    slug: "bahia",
    name: "Bahia Room",
    tagline: "A peaceful retreat with traditional riad charm",
    price: 120,
    priceLabel: "From $120 / night",
    bed: "King bed",
    capacity: "2 adults",
    size: "30m²",
    view: "Riad view",
    recommendation: "Great for discovering medina",
    description:
      "The Bahia Room is a serene hideaway overlooking the inner courtyard. With warm Moroccan textiles, hand-carved details, and soft natural light, it captures the intimate spirit of riad living — perfect for couples and solo travellers who want to be at the heart of the medina.",
    highlights: [
      "Overlooks the central courtyard",
      "Traditional Moroccan decor",
      "Hand-carved plaster details",
      "Natural daylight throughout",
    ],
    amenities: [
      { icon: "bed", label: "King bed" },
      { icon: "wifi", label: "Free Wi-Fi" },
      { icon: "ac", label: "Air conditioning" },
      { icon: "coffee", label: "Nespresso machine" },
      { icon: "shower", label: "Rain shower" },
      { icon: "tv", label: "Smart TV" },
      { icon: "safe", label: "In-room safe" },
      { icon: "hairdryer", label: "Hair dryer" },
    ],
    images: [
      { src: "/images/DSC08762-HDR-scaled.jpg", alt: "Bahia Room – main view" },
      { src: "/images/DSC08811-scaled.jpg", alt: "Bahia Room – detail" },
      { src: "/images/DSC08849-scaled.jpg", alt: "Bahia Room – courtyard view" },
      { src: "/images/DSC08594-HDR-scaled.jpg", alt: "Bahia Room – bathroom" },
    ],
    airbnbUrl: "https://www.airbnb.com",
    bookingUrl: "https://www.booking.com",
  },
  {
    slug: "balthazar",
    name: "Balthazar Room",
    tagline: "Spacious comfort with courtyard serenity",
    price: 120,
    priceLabel: "From $120 / night",
    bed: "King bed",
    capacity: "2 adults",
    size: "33m²",
    view: "Riad view",
    recommendation: "Great for discovering medina",
    description:
      "Slightly more generous in scale than its sister room, the Balthazar offers the same courtyard outlook with a little extra breathing room. Soft earthy tones and artisan touches make it a warm base for exploring the winding streets of the medina.",
    highlights: [
      "Largest courtyard-view room",
      "Artisan Moroccan furnishings",
      "Spacious layout",
      "Quiet and secluded",
    ],
    amenities: [
      { icon: "bed", label: "King bed" },
      { icon: "wifi", label: "Free Wi-Fi" },
      { icon: "ac", label: "Air conditioning" },
      { icon: "coffee", label: "Nespresso machine" },
      { icon: "shower", label: "Rain shower" },
      { icon: "tv", label: "Smart TV" },
      { icon: "safe", label: "In-room safe" },
      { icon: "hairdryer", label: "Hair dryer" },
    ],
    images: [
      { src: "/images/DSC08811-scaled.jpg", alt: "Balthazar Room – main view" },
      { src: "/images/DSC08849-scaled.jpg", alt: "Balthazar Room – detail" },
      { src: "/images/DSC08762-HDR-scaled.jpg", alt: "Balthazar Room – courtyard view" },
      { src: "/images/DSC08625-scaled.jpg", alt: "Balthazar Room – bathroom" },
    ],
    airbnbUrl: "https://www.airbnb.com",
    bookingUrl: "https://www.booking.com",
  },
  {
    slug: "signature",
    name: "Signature Room",
    tagline: "Rooftop views and modern Moroccan elegance",
    price: 130,
    priceLabel: "From $130 / night",
    bed: "King bed",
    capacity: "2 adults",
    size: "30m²",
    view: "City view",
    recommendation: "Great for families",
    description:
      "The Signature Room pairs contemporary design with traditional Moroccan craftsmanship. Its elevated position gives you sweeping views over the medina rooftops — a favourite with couples and small families who want a central, stylish base.",
    highlights: [
      "Panoramic medina rooftop views",
      "Modern Moroccan design",
      "Ideal for couples or small families",
      "Central location",
    ],
    amenities: [
      { icon: "bed", label: "King bed" },
      { icon: "wifi", label: "Free Wi-Fi" },
      { icon: "ac", label: "Air conditioning" },
      { icon: "coffee", label: "Nespresso machine" },
      { icon: "shower", label: "Rain shower" },
      { icon: "tv", label: "Smart TV" },
      { icon: "safe", label: "In-room safe" },
      { icon: "hairdryer", label: "Hair dryer" },
    ],
    images: [
      { src: "/images/DSC08849-scaled.jpg", alt: "Signature Room – main view" },
      { src: "/images/DSC08917-HDR-scaled.jpg", alt: "Signature Room – city view" },
      { src: "/images/DSC08811-scaled.jpg", alt: "Signature Room – detail" },
      { src: "/images/DSC08638-scaled.jpg", alt: "Signature Room – bathroom" },
    ],
    airbnbUrl: "https://www.airbnb.com",
    bookingUrl: "https://www.booking.com",
  },
  {
    slug: "melchior",
    name: "Melchior Suite",
    tagline: "A grand family suite with sweeping city views",
    price: 399,
    priceLabel: "From $399 / night",
    bed: "King bed",
    capacity: "4 adults + 2 children",
    size: "120m²",
    view: "City view",
    recommendation: "Great for families",
    description:
      "Named after one of the Three Magi, the Melchior Suite is one of our most expansive retreats. Spread across a generous floor plan with separate living areas, it offers breathtaking city views and the space families need to relax, play, and reconnect.",
    highlights: [
      "120m² of living space",
      "Separate living and sleeping areas",
      "Panoramic city views",
      "Accommodates families of up to 6",
    ],
    amenities: [
      { icon: "bed", label: "King bed" },
      { icon: "bed2", label: "Extra beds available" },
      { icon: "wifi", label: "Free Wi-Fi" },
      { icon: "ac", label: "Air conditioning" },
      { icon: "coffee", label: "Nespresso machine" },
      { icon: "shower", label: "Rain shower" },
      { icon: "bathtub", label: "Bathtub" },
      { icon: "tv", label: "Smart TV" },
      { icon: "safe", label: "In-room safe" },
      { icon: "hairdryer", label: "Hair dryer" },
    ],
    images: [
      { src: "/images/DSC08917-HDR-scaled.jpg", alt: "Melchior Suite – main view" },
      { src: "/images/DSC08939-scaled.jpg", alt: "Melchior Suite – living area" },
      { src: "/images/DSC08983-HDR-scaled.jpg", alt: "Melchior Suite – city view" },
      { src: "/images/DSC08720-scaled.jpg", alt: "Melchior Suite – bathroom" },
    ],
    airbnbUrl: "https://www.airbnb.com",
    bookingUrl: "https://www.booking.com",
  },
  {
    slug: "gaspard",
    name: "Gaspard Suite",
    tagline: "Memorable family stays above the medina",
    price: 399,
    priceLabel: "From $399 / night",
    bed: "King bed",
    capacity: "4 adults + 2 children",
    size: "120m²",
    view: "City view",
    recommendation: "Great for families",
    description:
      "Gaspard brings the same generous proportions and city panorama as its sibling Melchior, with its own distinct character. Elegant Moroccan detailing, a spacious lounge, and views that stretch to the Atlas Mountains make it a suite families return to year after year.",
    highlights: [
      "120m² of living space",
      "Atlas Mountain views",
      "Distinct Moroccan styling",
      "Perfect for families of up to 6",
    ],
    amenities: [
      { icon: "bed", label: "King bed" },
      { icon: "bed2", label: "Extra beds available" },
      { icon: "wifi", label: "Free Wi-Fi" },
      { icon: "ac", label: "Air conditioning" },
      { icon: "coffee", label: "Nespresso machine" },
      { icon: "shower", label: "Rain shower" },
      { icon: "bathtub", label: "Bathtub" },
      { icon: "tv", label: "Smart TV" },
      { icon: "safe", label: "In-room safe" },
      { icon: "hairdryer", label: "Hair dryer" },
    ],
    images: [
      { src: "/images/DSC08939-scaled.jpg", alt: "Gaspard Suite – main view" },
      { src: "/images/DSC08983-HDR-scaled.jpg", alt: "Gaspard Suite – city view" },
      { src: "/images/DSC08917-HDR-scaled.jpg", alt: "Gaspard Suite – lounge" },
      { src: "/images/DSC08726-scaled.jpg", alt: "Gaspard Suite – bathroom" },
    ],
    airbnbUrl: "https://www.airbnb.com",
    bookingUrl: "https://www.booking.com",
  },
  {
    slug: "arabesque",
    name: "Arabesque Suite",
    tagline: "Intricate design meets grand family living",
    price: 399,
    priceLabel: "From $399 / night",
    bed: "King bed",
    capacity: "4 adults + 2 children",
    size: "120m²",
    view: "City view",
    recommendation: "Great for families",
    description:
      "Adorned with hand-painted zellige tilework and carved cedar, the Arabesque Suite is a showcase of Moroccan artisanship. Its vast layout, private terrace, and sweeping city views make it the ultimate setting for family gatherings and celebrations.",
    highlights: [
      "120m² of living space",
      "Private terrace",
      "Hand-painted zellige tilework",
      "Ideal for celebrations and gatherings",
    ],
    amenities: [
      { icon: "bed", label: "King bed" },
      { icon: "bed2", label: "Extra beds available" },
      { icon: "wifi", label: "Free Wi-Fi" },
      { icon: "ac", label: "Air conditioning" },
      { icon: "coffee", label: "Nespresso machine" },
      { icon: "shower", label: "Rain shower" },
      { icon: "bathtub", label: "Bathtub" },
      { icon: "terrace", label: "Private terrace" },
      { icon: "tv", label: "Smart TV" },
      { icon: "safe", label: "In-room safe" },
      { icon: "hairdryer", label: "Hair dryer" },
    ],
    images: [
      { src: "/images/DSC08983-HDR-scaled.jpg", alt: "Arabesque Suite – main view" },
      { src: "/images/DSC09061-scaled.jpg", alt: "Arabesque Suite – terrace" },
      { src: "/images/DSC08939-scaled.jpg", alt: "Arabesque Suite – detail" },
      { src: "/images/DSC08741-scaled.jpg", alt: "Arabesque Suite – bathroom" },
    ],
    airbnbUrl: "https://www.airbnb.com",
    bookingUrl: "https://www.booking.com",
  },
];

export function getRoomBySlug(slug: string): Room | undefined {
  return rooms.find((r) => r.slug === slug);
}
