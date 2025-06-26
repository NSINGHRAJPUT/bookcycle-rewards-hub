
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Users, Award, TrendingUp, ArrowRight, Recycle } from "lucide-react";
import { StudentDashboard } from "@/components/dashboards/StudentDashboard";
import { BookManagerDashboard } from "@/components/dashboards/BookManagerDashboard";
import { AdminDashboard } from "@/components/dashboards/AdminDashboard";

const Index = () => {
  const [userRole, setUserRole] = useState<'student' | 'manager' | 'admin' | null>(null);

  if (userRole === 'student') {
    return <StudentDashboard onBack={() => setUserRole(null)} />;
  }

  if (userRole === 'manager') {
    return <BookManagerDashboard onBack={() => setUserRole(null)} />;
  }

  if (userRole === 'admin') {
    return <AdminDashboard onBack={() => setUserRole(null)} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-emerald-50">
      {/* Header */}
      <header className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="p-2 bg-green-600 rounded-lg">
              <Recycle className="h-6 w-6 text-white" />
            </div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
              BookCycle
            </h1>
          </div>
          <Badge variant="secondary" className="bg-green-100 text-green-800 border-green-200">
            Smart Book Reuse Platform
          </Badge>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-12 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-green-600 via-blue-600 to-emerald-600 bg-clip-text text-transparent">
            Give Your Books a Second Life
          </h2>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Donate used books, earn reward points, and help create a sustainable learning ecosystem. 
            Every book donated helps a fellow student while contributing to a circular economy.
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <Card className="border-0 shadow-lg bg-white/70 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <BookOpen className="h-8 w-8 text-green-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-green-600">1,234</div>
                <div className="text-sm text-gray-600">Books Recycled</div>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg bg-white/70 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <Users className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-blue-600">567</div>
                <div className="text-sm text-gray-600">Active Students</div>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg bg-white/70 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <Award className="h-8 w-8 text-emerald-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-emerald-600">89,230</div>
                <div className="text-sm text-gray-600">Points Earned</div>
              </CardContent>
            </Card>
          </div>

          {/* Role Selection */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Card 
              className="cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-xl border-2 border-transparent hover:border-green-200 bg-white/80 backdrop-blur-sm"
              onClick={() => setUserRole('student')}
            >
              <CardHeader className="text-center pb-4">
                <div className="p-3 bg-green-100 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <BookOpen className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle className="text-xl text-green-700">Student Portal</CardTitle>
                <CardDescription className="text-gray-600">
                  Donate books, earn points, and shop for verified textbooks
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <Button className="w-full bg-green-600 hover:bg-green-700">
                  Enter Dashboard <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            <Card 
              className="cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-xl border-2 border-transparent hover:border-blue-200 bg-white/80 backdrop-blur-sm"
              onClick={() => setUserRole('manager')}
            >
              <CardHeader className="text-center pb-4">
                <div className="p-3 bg-blue-100 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Users className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="text-xl text-blue-700">Book Manager</CardTitle>
                <CardDescription className="text-gray-600">
                  Verify donations, manage listings, and approve rewards
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  Enter Dashboard <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            <Card 
              className="cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-xl border-2 border-transparent hover:border-purple-200 bg-white/80 backdrop-blur-sm"
              onClick={() => setUserRole('admin')}
            >
              <CardHeader className="text-center pb-4">
                <div className="p-3 bg-purple-100 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <TrendingUp className="h-8 w-8 text-purple-600" />
                </div>
                <CardTitle className="text-xl text-purple-700">Admin Panel</CardTitle>
                <CardDescription className="text-gray-600">
                  Oversee platform operations, users, and analytics
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <Button className="w-full bg-purple-600 hover:bg-purple-700">
                  Enter Dashboard <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="container mx-auto px-4 py-16">
        <h3 className="text-3xl font-bold text-center mb-12 text-gray-800">How BookCycle Works</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="p-4 bg-green-600 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <span className="text-white font-bold text-xl">1</span>
            </div>
            <h4 className="text-lg font-semibold mb-2 text-gray-800">Donate Books</h4>
            <p className="text-gray-600">Upload details and images of your used textbooks for verification</p>
          </div>
          <div className="text-center">
            <div className="p-4 bg-blue-600 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <span className="text-white font-bold text-xl">2</span>
            </div>
            <h4 className="text-lg font-semibold mb-2 text-gray-800">Get Verified</h4>
            <p className="text-gray-600">Book managers review and verify your donations</p>
          </div>
          <div className="text-center">
            <div className="p-4 bg-emerald-600 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <span className="text-white font-bold text-xl">3</span>
            </div>
            <h4 className="text-lg font-semibold mb-2 text-gray-800">Earn & Shop</h4>
            <p className="text-gray-600">Earn 40% MRP in points, shop with 60% MRP in points</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
