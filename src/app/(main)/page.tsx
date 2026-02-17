import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Clock, Heart, MapPin, Search, Star, Utensils } from 'lucide-react';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 px-4 text-center" style={{background: 'linear-gradient(287.54deg, #5432c8 13.98%, #FF3AB3 91.21%)'}}>
        <div className="container mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
            Discover Amazing Dining Experiences
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Connect with the best restaurants, read authentic reviews, and share your culinary adventures with fellow food lovers.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="text-lg px-8 bg-white text-primary hover:bg-gray-100">
              Start Exploring
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 border-white text-white hover:bg-white hover:text-primary">
              Join Community
            </Button>
          </div>
          
          <div className="relative max-w-2xl mx-auto">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
            <input
              type="text"
              placeholder="Search restaurants, cuisines, or locations..."
              className="w-full pl-12 pr-4 py-4 text-lg rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose DineWithLove?</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center p-6 border-0 shadow-lg">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Discover Restaurants</h3>
                <p className="text-muted-foreground">
                  Find hidden gems and popular spots in your area with our comprehensive restaurant database.
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-6 border-0 shadow-lg">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Authentic Reviews</h3>
                <p className="text-muted-foreground">
                  Read genuine reviews from real food lovers and share your own dining experiences.
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-6 border-0 shadow-lg">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Build Community</h3>
                <p className="text-muted-foreground">
                  Connect with fellow food enthusiasts, share recommendations, and discover new cuisines together.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Popular Restaurants */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Popular Restaurants</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <Card key={i} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                  <Utensils className="h-12 w-12 text-primary" />
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold mb-2">Restaurant {i}</h3>
                  <div className="flex items-center text-sm text-muted-foreground mb-2">
                    <MapPin className="h-4 w-4 mr-1" />
                    Downtown Area
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-500 fill-current" />
                      <span className="ml-1 text-sm">4.{8 - i}</span>
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Clock className="h-4 w-4 mr-1" />
                      30 min
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 text-center">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Culinary Journey?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of food lovers who are already discovering amazing dining experiences.
          </p>
          <Button size="lg" className="text-lg px-8">
            Get Started Now
          </Button>
        </div>
      </section>
    </>
  );
}
