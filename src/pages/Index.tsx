import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Star,
  Wifi,
  Car,
  Coffee,
  Utensils,
  Waves,
  Dumbbell,
  Users,
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Crown,
} from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-pearl-200">
        <div className="container mx-auto px-4">
          {/* Top contact bar */}
          <div className="flex justify-between items-center py-2 text-sm border-b border-pearl-100">
            <div className="flex items-center gap-6 text-pearl-600">
              <div className="flex items-center gap-2">
                <Phone size={14} />
                <span>
                  <p>+971 (56) 394-5243</p>
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={14} />
                <span>support@theneeom.com</span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Facebook
                size={16}
                className="text-pearl-600 hover:text-coral-300 cursor-pointer transition-colors"
              />
              <Twitter
                size={16}
                className="text-pearl-600 hover:text-coral-300 cursor-pointer transition-colors"
              />
              <Instagram
                size={16}
                className="text-pearl-600 hover:text-coral-300 cursor-pointer transition-colors"
              />
            </div>
          </div>

          {/* Main navigation */}
          <nav className="flex items-center justify-between py-4">
            <div className="flex items-center gap-3 text-2xl font-bold text-foreground">
              <Crown className="w-8 h-8 text-coral-300" />
              <span className="text-coral-300">TheNeeom</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-coral-300 font-semibold">
                Home
              </a>
              <a
                href="#about"
                className="text-pearl-600 hover:text-coral-300 transition-colors"
              >
                About
              </a>
              <a
                href="#rooms"
                className="text-pearl-600 hover:text-coral-300 transition-colors"
              >
                Rooms
              </a>
              <a
                href="#amenities"
                className="text-pearl-600 hover:text-coral-300 transition-colors"
              >
                Amenities
              </a>
              <a
                href="#gallery"
                className="text-pearl-600 hover:text-coral-300 transition-colors"
              >
                Gallery
              </a>
              <a
                href="#contact"
                className="text-pearl-600 hover:text-coral-300 transition-colors"
              >
                Contact
              </a>
            </div>
          </nav>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('https://images.pexels.com/photos/189295/pexels-photo-189295.jpeg')`,
            }}
          >
            <div className="absolute inset-0 bg-black/40"></div>
          </div>
          <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              LUXURY <span className="text-coral-300">REDEFINED</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl mx-auto">
              Experience unparalleled elegance and comfort in the heart of the
              city
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-coral-300 hover:bg-coral-400 text-white px-8 py-3 text-lg"
              >
                Explore Rooms
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-foreground px-8 py-3 text-lg"
              >
                Learn More
              </Button>
            </div>
          </div>
        </section>

        {/* Welcome Section */}
        <section className="py-20 bg-luxury-100">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                We're Ready to Welcome You
              </h2>
              <p className="text-lg text-pearl-600 mb-8 leading-relaxed">
                Step into a world where luxury meets comfort, and every detail
                is crafted to perfection. Our commitment to excellence ensures
                your stay will be nothing short of extraordinary.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
                <div className="text-center">
                  <div className="text-3xl font-bold text-coral-300 mb-2">
                    150+
                  </div>
                  <div className="text-pearl-600">Luxury Suites</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-coral-300 mb-2">
                    24/7
                  </div>
                  <div className="text-pearl-600">Concierge</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-coral-300 mb-2">
                    5★
                  </div>
                  <div className="text-pearl-600">Rating</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-coral-300 mb-2">
                    10+
                  </div>
                  <div className="text-pearl-600">Amenities</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Rooms Section */}
        <section id="rooms" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Rooms That Define <span className="text-coral-300">Luxury</span>
              </h2>
              <p className="text-lg text-pearl-600 max-w-2xl mx-auto">
                Each room is a sanctuary of comfort and elegance, designed to
                exceed your expectations
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="relative overflow-hidden">
                  <img
                    src="https://images.pexels.com/photos/271639/pexels-photo-271639.jpeg"
                    alt="Pearl Suite"
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-coral-300 text-white">
                      Most Popular
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    Pearl Suite
                  </h3>
                  <p className="text-pearl-600 mb-4">
                    Elegant comfort with modern amenities and stunning city
                    views
                  </p>
                  <div className="flex items-center gap-4 text-sm text-pearl-600 mb-4">
                    <span className="flex items-center gap-1">
                      <Wifi size={16} />
                      Free WiFi
                    </span>
                    <span className="flex items-center gap-1">
                      <Coffee size={16} />
                      Mini Bar
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="text-2xl font-bold text-coral-300">
                      <div>
                        <br />
                      </div>
                      <div>
                        <br />
                      </div>
                      <div>Coming Soon</div>
                      <span className="text-sm text-pearl-600">/night</span>
                    </div>
                    <Button className="bg-coral-300 hover:bg-coral-400">
                      View Details
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="relative overflow-hidden">
                  <img
                    src="https://images.pexels.com/photos/189295/pexels-photo-189295.jpeg"
                    alt="Diamond Suite"
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-amber-500 text-white">Premium</Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    Diamond Suite
                  </h3>
                  <p className="text-pearl-600 mb-4">
                    Luxurious space with premium furnishings and panoramic views
                  </p>
                  <div className="flex items-center gap-4 text-sm text-pearl-600 mb-4">
                    <span className="flex items-center gap-1">
                      <Wifi size={16} />
                      Free WiFi
                    </span>
                    <span className="flex items-center gap-1">
                      <Car size={16} />
                      Valet Parking
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="text-2xl font-bold text-coral-300">
                      <div>
                        <br />
                      </div>
                      <div>
                        <br />
                      </div>
                      <div>Coming Soon</div>
                      <span className="text-sm text-pearl-600">/night</span>
                    </div>
                    <Button className="bg-coral-300 hover:bg-coral-400">
                      View Details
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="relative overflow-hidden">
                  <img
                    src="https://images.pexels.com/photos/271639/pexels-photo-271639.jpeg"
                    alt="Royal Suite"
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-purple-600 text-white">
                      Executive
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    Royal Suite
                  </h3>
                  <p className="text-pearl-600 mb-4">
                    The ultimate in luxury with private amenities and
                    personalized service
                  </p>
                  <div className="flex items-center gap-4 text-sm text-pearl-600 mb-4">
                    <span className="flex items-center gap-1">
                      <Users size={16} />
                      Butler Service
                    </span>
                    <span className="flex items-center gap-1">
                      <Star size={16} />
                      VIP Access
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="text-2xl font-bold text-coral-300">
                      <div>
                        <br />
                      </div>
                      <div>
                        <br />
                      </div>
                      <div>Coming Soon</div>
                      <span className="text-sm text-pearl-600">/night</span>
                    </div>
                    <Button className="bg-coral-300 hover:bg-coral-400">
                      View Details
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Amenities Section */}
        <section id="amenities" className="py-20 bg-luxury-100">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Reasons to Choose{" "}
                <span className="text-coral-300">TheNeeom</span>
              </h2>
              <p className="text-lg text-pearl-600 max-w-2xl mx-auto">
                Discover the amenities that make your stay unforgettable
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="grid grid-cols-2 gap-4">
                <img
                  src="https://images.pexels.com/photos/751268/pexels-photo-751268.jpeg"
                  alt="Swimming Pool"
                  className="w-full h-48 object-cover rounded-lg shadow-lg"
                />
                <img
                  src="https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg"
                  alt="Fine Dining"
                  className="w-full h-48 object-cover rounded-lg shadow-lg"
                />
                <img
                  src="https://images.pexels.com/photos/3673978/pexels-photo-3673978.jpeg"
                  alt="Spa & Wellness"
                  className="w-full h-48 object-cover rounded-lg shadow-lg"
                />
                <img
                  src="https://images.pexels.com/photos/8761647/pexels-photo-8761647.jpeg"
                  alt="Conference Room"
                  className="w-full h-48 object-cover rounded-lg shadow-lg"
                />
              </div>

              <div className="space-y-6">
                <div className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer group">
                  <div className="w-12 h-12 bg-coral-100 rounded-lg flex items-center justify-center group-hover:bg-coral-300 transition-colors">
                    <Utensils
                      className="text-coral-300 group-hover:text-white"
                      size={24}
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">
                      Multi-cuisine Restaurant
                    </h3>
                    <p className="text-pearl-600">
                      World-class dining with expert chefs
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer group">
                  <div className="w-12 h-12 bg-coral-100 rounded-lg flex items-center justify-center group-hover:bg-coral-300 transition-colors">
                    <Waves
                      className="text-coral-300 group-hover:text-white"
                      size={24}
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">
                      Infinity Pool
                    </h3>
                    <p className="text-pearl-600">
                      Relax by our stunning infinity pool
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer group">
                  <div className="w-12 h-12 bg-coral-100 rounded-lg flex items-center justify-center group-hover:bg-coral-300 transition-colors">
                    <Dumbbell
                      className="text-coral-300 group-hover:text-white"
                      size={24}
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">
                      Spa & Wellness
                    </h3>
                    <p className="text-pearl-600">
                      Rejuvenate your mind and body
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer group">
                  <div className="w-12 h-12 bg-coral-100 rounded-lg flex items-center justify-center group-hover:bg-coral-300 transition-colors">
                    <Users
                      className="text-coral-300 group-hover:text-white"
                      size={24}
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">
                      Conference Facilities
                    </h3>
                    <p className="text-pearl-600">
                      State-of-the-art meeting rooms
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Guest Reviews Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Our Guests <span className="text-coral-300">Love Us</span>
              </h2>
              <p className="text-lg text-pearl-600 max-w-2xl mx-auto">
                Don't just take our word for it - hear from our satisfied guests
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-0 shadow-lg p-6">
                <CardContent className="p-0">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 fill-coral-300 text-coral-300"
                      />
                    ))}
                  </div>
                  <p className="text-pearl-600 mb-4 italic">
                    "Absolutely stunning hotel with impeccable service. The
                    attention to detail is remarkable."
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-coral-100 rounded-full flex items-center justify-center">
                      <span className="text-coral-300 font-semibold">
                        <p>MM</p>
                      </span>
                    </div>
                    <div>
                      <div className="font-semibold text-foreground">
                        <p>Mrinmoy M</p>
                      </div>
                      <div className="text-sm text-pearl-600">
                        Business Traveler
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg p-6">
                <CardContent className="p-0">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 fill-coral-300 text-coral-300"
                      />
                    ))}
                  </div>
                  <p className="text-pearl-600 mb-4 italic">
                    "Our honeymoon was perfect thanks to the exceptional service
                    and luxurious amenities."
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-coral-100 rounded-full flex items-center justify-center">
                      <span className="text-coral-300 font-semibold">SM</span>
                    </div>
                    <div>
                      <div className="font-semibold text-foreground">
                        <p>Sumit M</p>
                      </div>
                      <div className="text-sm text-pearl-600">
                        Honeymoon Guest
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg p-6">
                <CardContent className="p-0">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 fill-coral-300 text-coral-300"
                      />
                    ))}
                  </div>
                  <p className="text-pearl-600 mb-4 italic">
                    "The spa facilities are world-class and the dining
                    experience was unforgettable."
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-coral-100 rounded-full flex items-center justify-center">
                      <span className="text-coral-300 font-semibold">
                        <p>SM</p>
                      </span>
                    </div>
                    <div>
                      <div className="font-semibold text-foreground">
                        <p>Sayan M</p>
                      </div>
                      <div className="text-sm text-pearl-600">
                        Weekend Guest
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section id="gallery" className="py-20 bg-luxury-100">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                TheNeeom -{" "}
                <span className="text-coral-300">The Experience</span>
              </h2>
              <p className="text-lg text-pearl-600 max-w-2xl mx-auto">
                Take a visual journey through our stunning facilities and
                amenities
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-lg">
                  <img
                    src="https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg"
                    alt="Restaurant"
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-end p-4">
                    <span className="text-white font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                      Restaurant
                    </span>
                  </div>
                </div>
              </div>

              <div className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-lg">
                  <img
                    src="https://images.pexels.com/photos/751268/pexels-photo-751268.jpeg"
                    alt="Swimming Pool"
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-end p-4">
                    <span className="text-white font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                      Swimming Pool
                    </span>
                  </div>
                </div>
              </div>

              <div className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-lg">
                  <img
                    src="https://images.pexels.com/photos/3673978/pexels-photo-3673978.jpeg"
                    alt="Spa"
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-end p-4">
                    <span className="text-white font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                      Spa
                    </span>
                  </div>
                </div>
              </div>

              <div className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-lg">
                  <img
                    src="https://images.pexels.com/photos/271639/pexels-photo-271639.jpeg"
                    alt="Suites"
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-end p-4">
                    <span className="text-white font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                      Luxury Suites
                    </span>
                  </div>
                </div>
              </div>

              <div className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-lg">
                  <img
                    src="https://images.pexels.com/photos/189295/pexels-photo-189295.jpeg"
                    alt="Lobby"
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-end p-4">
                    <span className="text-white font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                      Grand Lobby
                    </span>
                  </div>
                </div>
              </div>

              <div className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-lg">
                  <img
                    src="https://images.pexels.com/photos/8761647/pexels-photo-8761647.jpeg"
                    alt="Events"
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-end p-4">
                    <span className="text-white font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                      Events
                    </span>
                  </div>
                </div>
              </div>

              <div className="group cursor-pointer col-span-2">
                <div className="relative overflow-hidden rounded-lg">
                  <img
                    src="https://images.pexels.com/photos/189295/pexels-photo-189295.jpeg"
                    alt="Hotel Exterior"
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-end p-4">
                    <span className="text-white font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                      Hotel Exterior
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer id="contact" className="bg-foreground text-white">
        <div className="container mx-auto px-4 py-16">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">
                <span className="text-coral-300">TheNeeom</span>
              </h3>
              <p className="text-gray-300 mb-4">
                Where luxury meets comfort in the heart of the city. Experience
                unparalleled service and elegance.
              </p>
              <div className="flex gap-4">
                <Facebook
                  size={20}
                  className="text-gray-300 hover:text-coral-300 cursor-pointer transition-colors"
                />
                <Twitter
                  size={20}
                  className="text-gray-300 hover:text-coral-300 cursor-pointer transition-colors"
                />
                <Instagram
                  size={20}
                  className="text-gray-300 hover:text-coral-300 cursor-pointer transition-colors"
                />
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4 text-coral-300">
                Quick Links
              </h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#rooms"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Rooms & Suites
                  </a>
                </li>
                <li>
                  <a
                    href="#amenities"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Amenities
                  </a>
                </li>
                <li>
                  <a
                    href="#gallery"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Gallery
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Events
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4 text-coral-300">
                Services
              </h4>
              <ul className="space-y-2">
                <li>
                  <span className="text-gray-300">24/7 Concierge</span>
                </li>
                <li>
                  <span className="text-gray-300">Room Service</span>
                </li>
                <li>
                  <span className="text-gray-300">Spa & Wellness</span>
                </li>
                <li>
                  <span className="text-gray-300">Fine Dining</span>
                </li>
                <li>
                  <span className="text-gray-300">Valet Parking</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4 text-coral-300">
                Contact Info
              </h4>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <MapPin size={16} className="text-coral-300 flex-shrink-0" />
                  <span className="text-gray-300">
                    <p>
                      Malda Bypass Rd, Gabgachchhi, Gabgachhi, West Bengal
                      732103
                    </p>
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone size={16} className="text-coral-300 flex-shrink-0" />
                  <span className="text-gray-300">
                    <p>+971 (56) 394-4567</p>
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail size={16} className="text-coral-300 flex-shrink-0" />
                  <span className="text-gray-300">support@theneeom.com</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300">
              <p>© 2025 TheNeeom. All rights reserved.</p>
            </p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a
                href="#"
                className="text-gray-300 hover:text-white transition-colors text-sm"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-white transition-colors text-sm"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-white transition-colors text-sm"
              >
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
