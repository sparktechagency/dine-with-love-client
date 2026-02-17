import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Calendar,
  Heart,
  MapPin,
  Search,
  Star,
  TrendingUp,
  Users,
} from "lucide-react";

const DashboardPage = () => {
  const stats = [
    {
      title: "Reservations",
      value: "12",
      change: "+2 from last week",
      icon: Calendar,
    },
    { title: "Reviews", value: "8", change: "+1 from last week", icon: Star },
    {
      title: "Favorites",
      value: "24",
      change: "+3 from last week",
      icon: Heart,
    },
    {
      title: "Points",
      value: "1,250",
      change: "+150 from last week",
      icon: TrendingUp,
    },
  ];

  const recentReservations = [
    {
      id: 1,
      restaurant: "The Italian Place",
      date: "Today, 7:30 PM",
      guests: 2,
      status: "confirmed",
      image: "🍝",
    },
    {
      id: 2,
      restaurant: "Sushi Master",
      date: "Tomorrow, 8:00 PM",
      guests: 4,
      status: "pending",
      image: "🍱",
    },
    {
      id: 3,
      restaurant: "Burger House",
      date: "Dec 28, 1:00 PM",
      guests: 3,
      status: "confirmed",
      image: "🍔",
    },
  ];

  const recommendedRestaurants = [
    {
      id: 1,
      name: "Mediterranean Delight",
      cuisine: "Mediterranean",
      rating: 4.8,
      distance: "0.5 km",
      price: "$$",
      image: "🥗",
    },
    {
      id: 2,
      name: "Thai Paradise",
      cuisine: "Thai",
      rating: 4.6,
      distance: "1.2 km",
      price: "$$",
      image: "🍜",
    },
    {
      id: 3,
      name: "French Bistro",
      cuisine: "French",
      rating: 4.9,
      distance: "2.0 km",
      price: "$$$",
      image: "🥐",
    },
  ];

  return (
    <div className="space-y-8">
      {/* Welcome Section */}
      <div>
        <h1 className="text-3xl font-bold">Welcome back, John!</h1>
        <p className="text-muted-foreground mt-2">
          Here&apos;s what&apos;s happening with your dining experiences today.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.title}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                {stat.title}
              </CardTitle>
              <stat.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-muted-foreground">{stat.change}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Recent Reservations */}
      <div className="grid gap-8 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>Recent Reservations</CardTitle>
              <Button variant="outline" size="sm">
                View All
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentReservations.map((reservation) => (
                <div
                  key={reservation.id}
                  className="flex items-center space-x-4"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-muted rounded-lg flex items-center justify-center text-2xl">
                    {reservation.image}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-medium truncate">
                      {reservation.restaurant}
                    </p>
                    <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                      <Calendar className="h-3 w-3" />
                      <span>{reservation.date}</span>
                      <span>•</span>
                      <Users className="h-3 w-3" />
                      <span>{reservation.guests} guests</span>
                    </div>
                  </div>
                  <Badge
                    variant={
                      reservation.status === "confirmed"
                        ? "default"
                        : "secondary"
                    }
                  >
                    {reservation.status}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Recommended Restaurants */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>Recommended for You</CardTitle>
              <Button variant="outline" size="sm">
                Explore More
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recommendedRestaurants.map((restaurant) => (
                <div
                  key={restaurant.id}
                  className="flex items-center space-x-4"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-muted rounded-lg flex items-center justify-center text-2xl">
                    {restaurant.image}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-medium truncate">{restaurant.name}</p>
                    <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                      <span>{restaurant.cuisine}</span>
                      <span>•</span>
                      <div className="flex items-center">
                        <Star className="h-3 w-3 text-yellow-500 fill-current" />
                        <span className="ml-1">{restaurant.rating}</span>
                      </div>
                      <span>•</span>
                      <MapPin className="h-3 w-3" />
                      <span>{restaurant.distance}</span>
                      <span>•</span>
                      <span>{restaurant.price}</span>
                    </div>
                  </div>
                  <Button size="sm" variant="outline">
                    View
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Button className="h-auto p-4 flex flex-col items-center space-y-2">
              <Search className="h-6 w-6" />
              <span>Find Restaurants</span>
            </Button>
            <Button
              variant="outline"
              className="h-auto p-4 flex flex-col items-center space-y-2"
            >
              <Calendar className="h-6 w-6" />
              <span>Make Reservation</span>
            </Button>
            <Button
              variant="outline"
              className="h-auto p-4 flex flex-col items-center space-y-2"
            >
              <Star className="h-6 w-6" />
              <span>Write Review</span>
            </Button>
            <Button
              variant="outline"
              className="h-auto p-4 flex flex-col items-center space-y-2"
            >
              <Heart className="h-6 w-6" />
              <span>My Favorites</span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default DashboardPage;
