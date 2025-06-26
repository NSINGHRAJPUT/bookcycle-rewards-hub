
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft, BookOpen, Award, Plus, Search, Clock, Check } from "lucide-react";
import { toast } from "@/hooks/use-toast";

interface StudentDashboardProps {
  onBack: () => void;
}

export const StudentDashboard = ({ onBack }: StudentDashboardProps) => {
  const [rewardPoints, setRewardPoints] = useState(1250);
  const [donations, setDonations] = useState([
    { id: 1, title: "Calculus: Early Transcendentals", status: "verified", points: 280, mrp: 700 },
    { id: 2, title: "Introduction to Algorithms", status: "pending", points: 0, mrp: 450 },
    { id: 3, title: "Organic Chemistry", status: "rejected", points: 0, mrp: 520 }
  ]);

  const [newDonation, setNewDonation] = useState({
    title: "",
    author: "",
    isbn: "",
    mrp: "",
    condition: "good",
    description: ""
  });

  const availableBooks = [
    { id: 1, title: "Linear Algebra and Its Applications", author: "David C. Lay", mrp: 600, points: 360, condition: "Good" },
    { id: 2, title: "Physics for Scientists and Engineers", author: "Raymond A. Serway", mrp: 800, points: 480, condition: "Excellent" },
    { id: 3, title: "Microeconomics", author: "Robert S. Pindyck", mrp: 550, points: 330, condition: "Good" }
  ];

  const handleDonateBook = () => {
    if (!newDonation.title || !newDonation.author || !newDonation.mrp) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields",
        variant: "destructive"
      });
      return;
    }

    const donation = {
      id: donations.length + 1,
      title: newDonation.title,
      status: "pending" as const,
      points: 0,
      mrp: parseInt(newDonation.mrp)
    };

    setDonations([...donations, donation]);
    setNewDonation({ title: "", author: "", isbn: "", mrp: "", condition: "good", description: "" });
    
    toast({
      title: "Book Submitted!",
      description: "Your book has been sent for verification. You'll earn points once approved!"
    });
  };

  const handlePurchaseBook = (book: any) => {
    if (rewardPoints >= book.points) {
      setRewardPoints(rewardPoints - book.points);
      toast({
        title: "Purchase Successful!",
        description: `You've purchased "${book.title}" for ${book.points} points.`
      });
    } else {
      toast({
        title: "Insufficient Points",
        description: "You don't have enough reward points for this purchase.",
        variant: "destructive"
      });
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'verified': return 'bg-green-100 text-green-800 border-green-200';
      case 'pending': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'rejected': return 'bg-red-100 text-red-800 border-red-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'verified': return <Check className="h-4 w-4" />;
      case 'pending': return <Clock className="h-4 w-4" />;
      default: return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-emerald-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-green-100 sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button variant="ghost" onClick={onBack} className="p-2">
                <ArrowLeft className="h-5 w-5" />
              </Button>
              <div>
                <h1 className="text-2xl font-bold text-gray-800">Student Dashboard</h1>
                <p className="text-sm text-gray-600">Welcome back, Alex!</p>
              </div>
            </div>
            <Card className="bg-gradient-to-r from-green-600 to-emerald-600 text-white border-0">
              <CardContent className="p-4 flex items-center space-x-3">
                <Award className="h-6 w-6" />
                <div>
                  <div className="text-sm opacity-90">Reward Points</div>
                  <div className="text-xl font-bold">{rewardPoints.toLocaleString()}</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <Tabs defaultValue="donate" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3 lg:w-[400px] mx-auto">
            <TabsTrigger value="donate" className="flex items-center space-x-2">
              <Plus className="h-4 w-4" />
              <span>Donate</span>
            </TabsTrigger>
            <TabsTrigger value="shop" className="flex items-center space-x-2">
              <Search className="h-4 w-4" />
              <span>Shop</span>
            </TabsTrigger>
            <TabsTrigger value="history" className="flex items-center space-x-2">
              <BookOpen className="h-4 w-4" />
              <span>My Books</span>
            </TabsTrigger>
          </TabsList>

          {/* Donate Tab */}
          <TabsContent value="donate">
            <Card className="max-w-2xl mx-auto">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Plus className="h-5 w-5 text-green-600" />
                  <span>Donate a Book</span>
                </CardTitle>
                <CardDescription>
                  Share your textbooks with fellow students and earn reward points
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="title">Book Title *</Label>
                    <Input
                      id="title"
                      value={newDonation.title}
                      onChange={(e) => setNewDonation({ ...newDonation, title: e.target.value })}
                      placeholder="Enter book title"
                    />
                  </div>
                  <div>
                    <Label htmlFor="author">Author *</Label>
                    <Input
                      id="author"
                      value={newDonation.author}
                      onChange={(e) => setNewDonation({ ...newDonation, author: e.target.value })}
                      placeholder="Enter author name"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="isbn">ISBN (Optional)</Label>
                    <Input
                      id="isbn"
                      value={newDonation.isbn}
                      onChange={(e) => setNewDonation({ ...newDonation, isbn: e.target.value })}
                      placeholder="Enter ISBN"
                    />
                  </div>
                  <div>
                    <Label htmlFor="mrp">MRP (₹) *</Label>
                    <Input
                      id="mrp"
                      type="number"
                      value={newDonation.mrp}
                      onChange={(e) => setNewDonation({ ...newDonation, mrp: e.target.value })}
                      placeholder="Enter MRP"
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="description">Description</Label>
                  <Textarea
                    id="description"
                    value={newDonation.description}
                    onChange={(e) => setNewDonation({ ...newDonation, description: e.target.value })}
                    placeholder="Describe the book condition, edition, etc."
                    rows={3}
                  />
                </div>
                {newDonation.mrp && (
                  <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                    <p className="text-sm text-green-700">
                      <Award className="inline h-4 w-4 mr-1" />
                      You'll earn <strong>{Math.round(parseInt(newDonation.mrp) * 0.4)} points</strong> if this book is verified
                      (40% of MRP: ₹{newDonation.mrp})
                    </p>
                  </div>
                )}
                <Button onClick={handleDonateBook} className="w-full bg-green-600 hover:bg-green-700">
                  Submit for Verification
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Shop Tab */}
          <TabsContent value="shop">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {availableBooks.map((book) => (
                <Card key={book.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg leading-tight">{book.title}</CardTitle>
                    <CardDescription>by {book.author}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">MRP:</span>
                        <span className="font-semibold">₹{book.mrp}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">Points needed:</span>
                        <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                          {book.points} pts
                        </Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">Condition:</span>
                        <Badge variant="outline">{book.condition}</Badge>
                      </div>
                      <Button 
                        onClick={() => handlePurchaseBook(book)}
                        className="w-full"
                        disabled={rewardPoints < book.points}
                      >
                        {rewardPoints >= book.points ? 'Purchase with Points' : 'Insufficient Points'}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* History Tab */}
          <TabsContent value="history">
            <div className="space-y-4">
              {donations.map((donation) => (
                <Card key={donation.id}>
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg">{donation.title}</h3>
                        <p className="text-sm text-gray-600 mt-1">MRP: ₹{donation.mrp}</p>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Badge className={getStatusColor(donation.status)}>
                          {getStatusIcon(donation.status)}
                          <span className="ml-1 capitalize">{donation.status}</span>
                        </Badge>
                        {donation.status === 'verified' && (
                          <Badge className="bg-green-100 text-green-800 border-green-200">
                            +{donation.points} pts
                          </Badge>
                        )}
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
