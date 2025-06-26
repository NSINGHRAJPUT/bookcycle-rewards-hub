
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft, BookOpen, Check, X, Clock, TrendingUp } from "lucide-react";
import { toast } from "@/hooks/use-toast";

interface BookManagerDashboardProps {
  onBack: () => void;
}

export const BookManagerDashboard = ({ onBack }: BookManagerDashboardProps) => {
  const [pendingBooks, setPendingBooks] = useState([
    {
      id: 1,
      title: "Introduction to Algorithms",
      author: "Thomas H. Cormen",
      studentName: "Alex Johnson",
      mrp: 450,
      condition: "Good",
      description: "3rd edition, minimal highlighting, all pages intact",
      submittedDate: "2024-01-15"
    },
    {
      id: 2,
      title: "Organic Chemistry",
      author: "Paula Yurkanis Bruice",
      studentName: "Sarah Wilson",
      mrp: 520,
      condition: "Fair",
      description: "Some wear on cover, notes in margins",
      submittedDate: "2024-01-14"
    }
  ]);

  const [verifiedBooks] = useState([
    {
      id: 3,
      title: "Calculus: Early Transcendentals",
      author: "James Stewart",
      studentName: "Mike Chen",
      mrp: 700,
      pointsAwarded: 280,
      verifiedDate: "2024-01-12",
      status: "listed"
    }
  ]);

  const stats = {
    pendingReviews: pendingBooks.length,
    verifiedThisMonth: 15,
    totalPointsAwarded: 12450,
    activeListings: 8
  };

  const handleApprove = (bookId: number) => {
    const book = pendingBooks.find(b => b.id === bookId);
    if (book) {
      setPendingBooks(pendingBooks.filter(b => b.id !== bookId));
      toast({
        title: "Book Approved!",
        description: `"${book.title}" has been verified and ${Math.round(book.mrp * 0.4)} points awarded to ${book.studentName}.`
      });
    }
  };

  const handleReject = (bookId: number) => {
    const book = pendingBooks.find(b => b.id === bookId);
    if (book) {
      setPendingBooks(pendingBooks.filter(b => b.id !== bookId));
      toast({
        title: "Book Rejected",
        description: `"${book.title}" has been rejected and ${book.studentName} has been notified.`,
        variant: "destructive"
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-blue-100 sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button variant="ghost" onClick={onBack} className="p-2">
                <ArrowLeft className="h-5 w-5" />
              </Button>
              <div>
                <h1 className="text-2xl font-bold text-gray-800">Book Manager Dashboard</h1>
                <p className="text-sm text-gray-600">University Library - Book Verification</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white border-0">
            <CardContent className="p-6 text-center">
              <Clock className="h-8 w-8 mx-auto mb-2 opacity-90" />
              <div className="text-2xl font-bold">{stats.pendingReviews}</div>
              <div className="text-sm opacity-90">Pending Reviews</div>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-r from-green-500 to-emerald-600 text-white border-0">
            <CardContent className="p-6 text-center">
              <Check className="h-8 w-8 mx-auto mb-2 opacity-90" />
              <div className="text-2xl font-bold">{stats.verifiedThisMonth}</div>
              <div className="text-sm opacity-90">Verified This Month</div>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-r from-blue-500 to-purple-600 text-white border-0">
            <CardContent className="p-6 text-center">
              <TrendingUp className="h-8 w-8 mx-auto mb-2 opacity-90" />
              <div className="text-2xl font-bold">{stats.totalPointsAwarded.toLocaleString()}</div>
              <div className="text-sm opacity-90">Points Awarded</div>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-r from-indigo-500 to-blue-600 text-white border-0">
            <CardContent className="p-6 text-center">
              <BookOpen className="h-8 w-8 mx-auto mb-2 opacity-90" />
              <div className="text-2xl font-bold">{stats.activeListings}</div>
              <div className="text-sm opacity-90">Active Listings</div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="pending" className="space-y-6">
          <TabsList className="grid w-full grid-cols-2 lg:w-[300px] mx-auto">
            <TabsTrigger value="pending" className="flex items-center space-x-2">
              <Clock className="h-4 w-4" />
              <span>Pending ({pendingBooks.length})</span>
            </TabsTrigger>
            <TabsTrigger value="verified" className="flex items-center space-x-2">
              <Check className="h-4 w-4" />
              <span>Verified</span>
            </TabsTrigger>
          </TabsList>

          {/* Pending Reviews */}
          <TabsContent value="pending">
            <div className="space-y-6">
              {pendingBooks.length === 0 ? (
                <Card>
                  <CardContent className="p-12 text-center">
                    <Clock className="h-12 w-12 mx-auto mb-4 text-gray-400" />
                    <h3 className="text-lg font-semibold text-gray-600 mb-2">No Pending Reviews</h3>
                    <p className="text-gray-500">All book submissions have been reviewed!</p>
                  </CardContent>
                </Card>
              ) : (
                pendingBooks.map((book) => (
                  <Card key={book.id} className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-4">
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold mb-2">{book.title}</h3>
                          <p className="text-gray-600 mb-1">by {book.author}</p>
                          <p className="text-sm text-gray-500">Submitted by {book.studentName} on {book.submittedDate}</p>
                        </div>
                        <Badge variant="outline" className="border-yellow-300 text-yellow-700 bg-yellow-50">
                          Pending Review
                        </Badge>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                        <div>
                          <span className="text-sm font-medium text-gray-700">MRP:</span>
                          <p className="text-lg font-semibold">₹{book.mrp}</p>
                        </div>
                        <div>
                          <span className="text-sm font-medium text-gray-700">Condition:</span>
                          <p className="text-lg">{book.condition}</p>
                        </div>
                        <div>
                          <span className="text-sm font-medium text-gray-700">Points to Award:</span>
                          <p className="text-lg font-semibold text-green-600">{Math.round(book.mrp * 0.4)} pts</p>
                        </div>
                      </div>
                      
                      <div className="mb-4">
                        <span className="text-sm font-medium text-gray-700">Description:</span>
                        <p className="text-gray-600 mt-1">{book.description}</p>
                      </div>
                      
                      <div className="flex space-x-3">
                        <Button 
                          onClick={() => handleApprove(book.id)}
                          className="flex-1 bg-green-600 hover:bg-green-700"
                        >
                          <Check className="h-4 w-4 mr-2" />
                          Approve & Award {Math.round(book.mrp * 0.4)} Points
                        </Button>
                        <Button 
                          onClick={() => handleReject(book.id)}
                          variant="destructive"
                          className="flex-1"
                        >
                          <X className="h-4 w-4 mr-2" />
                          Reject
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))
              )}
            </div>
          </TabsContent>

          {/* Verified Books */}
          <TabsContent value="verified">
            <div className="space-y-4">
              {verifiedBooks.map((book) => (
                <Card key={book.id}>
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold">{book.title}</h3>
                        <p className="text-gray-600">by {book.author}</p>
                        <p className="text-sm text-gray-500 mt-1">
                          Verified on {book.verifiedDate} • {book.pointsAwarded} points awarded to {book.studentName}
                        </p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Badge className="bg-green-100 text-green-800 border-green-200">
                          <Check className="h-3 w-3 mr-1" />
                          Verified
                        </Badge>
                        <Badge variant="outline">Listed</Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};
