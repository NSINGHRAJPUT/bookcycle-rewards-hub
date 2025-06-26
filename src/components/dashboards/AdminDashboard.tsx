
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft, Users, BookOpen, Award, TrendingUp, Building, UserCheck } from "lucide-react";

interface AdminDashboardProps {
  onBack: () => void;
}

export const AdminDashboard = ({ onBack }: AdminDashboardProps) => {
  const [platformStats] = useState({
    totalStudents: 1247,
    totalManagers: 23,
    totalBooks: 3891,
    totalPoints: 156780,
    booksThisMonth: 89,
    studentsThisMonth: 45,
    activeTransactions: 12
  });

  const [topManagers] = useState([
    { id: 1, name: "University Library", verified: 156, rejected: 12, points: 15680 },
    { id: 2, name: "City College Library", verified: 89, rejected: 8, points: 9240 },
    { id: 3, name: "Technical Institute", verified: 67, rejected: 5, points: 7120 }
  ]);

  const [topStudents] = useState([
    { id: 1, name: "Alex Johnson", donated: 8, purchased: 5, points: 1250 },
    { id: 2, name: "Sarah Wilson", donated: 6, purchased: 3, points: 980 },
    { id: 3, name: "Mike Chen", donated: 5, purchased: 7, points: 670 }
  ]);

  const [recentActivity] = useState([
    { type: "verification", message: "University Library verified 'Calculus: Early Transcendentals'", time: "2 hours ago" },
    { type: "purchase", message: "Sarah Wilson purchased 'Linear Algebra' for 360 points", time: "4 hours ago" },
    { type: "donation", message: "Alex Johnson donated 'Physics for Engineers'", time: "6 hours ago" },
    { type: "registration", message: "New student 'John Doe' registered", time: "1 day ago" }
  ]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-indigo-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-purple-100 sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button variant="ghost" onClick={onBack} className="p-2">
                <ArrowLeft className="h-5 w-5" />
              </Button>
              <div>
                <h1 className="text-2xl font-bold text-gray-800">Admin Dashboard</h1>
                <p className="text-sm text-gray-600">BookCycle Platform Overview</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Main Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="bg-gradient-to-r from-blue-500 to-cyan-600 text-white border-0">
            <CardContent className="p-6 text-center">
              <Users className="h-8 w-8 mx-auto mb-2 opacity-90" />
              <div className="text-2xl font-bold">{platformStats.totalStudents.toLocaleString()}</div>
              <div className="text-sm opacity-90">Total Students</div>
              <div className="text-xs opacity-75 mt-1">+{platformStats.studentsThisMonth} this month</div>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-r from-green-500 to-emerald-600 text-white border-0">
            <CardContent className="p-6 text-center">
              <Building className="h-8 w-8 mx-auto mb-2 opacity-90" />
              <div className="text-2xl font-bold">{platformStats.totalManagers}</div>
              <div className="text-sm opacity-90">Book Managers</div>
              <div className="text-xs opacity-75 mt-1">Active Institutions</div>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-r from-purple-500 to-pink-600 text-white border-0">
            <CardContent className="p-6 text-center">
              <BookOpen className="h-8 w-8 mx-auto mb-2 opacity-90" />
              <div className="text-2xl font-bold">{platformStats.totalBooks.toLocaleString()}</div>
              <div className="text-sm opacity-90">Books Processed</div>
              <div className="text-xs opacity-75 mt-1">+{platformStats.booksThisMonth} this month</div>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-r from-orange-500 to-red-500 text-white border-0">
            <CardContent className="p-6 text-center">
              <Award className="h-8 w-8 mx-auto mb-2 opacity-90" />
              <div className="text-2xl font-bold">{platformStats.totalPoints.toLocaleString()}</div>
              <div className="text-sm opacity-90">Points Distributed</div>
              <div className="text-xs opacity-75 mt-1">{platformStats.activeTransactions} active txns</div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4 lg:w-[500px] mx-auto">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="managers">Managers</TabsTrigger>
            <TabsTrigger value="students">Students</TabsTrigger>
            <TabsTrigger value="activity">Activity</TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <TrendingUp className="h-5 w-5 text-green-600" />
                    <span>Platform Growth</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span>Books Donated</span>
                      <Badge className="bg-green-100 text-green-800 border-green-200">2,341</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Books Verified</span>
                      <Badge className="bg-blue-100 text-blue-800 border-blue-200">2,156</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Books Sold</span>
                      <Badge className="bg-purple-100 text-purple-800 border-purple-200">1,890</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Success Rate</span>
                      <Badge className="bg-green-100 text-green-800 border-green-200">92%</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Recent System Metrics</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Book Verification Rate</span>
                        <span>92%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-green-600 h-2 rounded-full" style={{ width: '92%' }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Active User Engagement</span>
                        <span>78%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-blue-600 h-2 rounded-full" style={{ width: '78%' }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Point Redemption Rate</span>
                        <span>85%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-purple-600 h-2 rounded-full" style={{ width: '85%' }}></div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Managers Tab */}
          <TabsContent value="managers">
            <div className="space-y-4">
              {topManagers.map((manager) => (
                <Card key={manager.id}>
                  <CardContent className="p-6">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center space-x-4">
                        <div className="p-3 bg-blue-100 rounded-full">
                          <Building className="h-6 w-6 text-blue-600" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg">{manager.name}</h3>
                          <p className="text-sm text-gray-600">
                            {manager.verified} verified • {manager.rejected} rejected
                          </p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-lg font-semibold text-green-600">
                          {manager.points.toLocaleString()} pts
                        </div>
                        <div className="text-sm text-gray-500">Points Awarded</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Students Tab */}
          <TabsContent value="students">
            <div className="space-y-4">
              {topStudents.map((student) => (
                <Card key={student.id}>
                  <CardContent className="p-6">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center space-x-4">
                        <div className="p-3 bg-green-100 rounded-full">
                          <UserCheck className="h-6 w-6 text-green-600" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg">{student.name}</h3>
                          <p className="text-sm text-gray-600">
                            {student.donated} donated • {student.purchased} purchased
                          </p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-lg font-semibold text-blue-600">
                          {student.points} pts
                        </div>
                        <div className="text-sm text-gray-500">Current Balance</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Activity Tab */}
          <TabsContent value="activity">
            <Card>
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
                <CardDescription>Latest platform activities and transactions</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentActivity.map((activity, index) => (
                    <div key={index} className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50">
                      <div className="p-2 bg-blue-100 rounded-full">
                        <BookOpen className="h-4 w-4 text-blue-600" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm">{activity.message}</p>
                        <p className="text-xs text-gray-500">{activity.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};
