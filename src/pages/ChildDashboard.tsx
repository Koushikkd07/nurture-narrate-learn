import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { 
  Droplets, 
  Thermometer, 
  Zap, 
  Trophy, 
  Star, 
  MessageCircle,
  Volume2,
  Play,
  Gift
} from "lucide-react";

const ChildDashboard = () => {
  const [soilData, setSoilData] = useState({
    moisture: 65,
    ph: 6.8,
    temperature: 22,
    nutrients: 75
  });

  const [badges, setBadges] = useState([
    { name: "First Garden Check", emoji: "🌱", earned: true },
    { name: "Water Helper", emoji: "💧", earned: true },
    { name: "pH Detective", emoji: "🕵️", earned: false },
    { name: "Super Gardener", emoji: "🏆", earned: false }
  ]);

  const [chatVisible, setChatVisible] = useState(false);

  const getHealthEmoji = (value: number, type: string) => {
    if (type === "ph") {
      if (value >= 6.0 && value <= 7.0) return "😊";
      if (value >= 5.5 && value <= 7.5) return "🙂";
      return "😟";
    }
    if (value >= 70) return "😊";
    if (value >= 50) return "🙂";
    return "😟";
  };

  const getHealthColor = (value: number, type: string) => {
    if (type === "ph") {
      if (value >= 6.0 && value <= 7.0) return "success";
      if (value >= 5.5 && value <= 7.5) return "warning";
      return "destructive";
    }
    if (value >= 70) return "success";
    if (value >= 50) return "warning";
    return "destructive";
  };

  const speakText = (text: string) => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 0.8;
      utterance.pitch = 1.2;
      speechSynthesis.speak(utterance);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-earth p-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 animate-fade-in">
          <div className="flex justify-center items-center space-x-4 mb-4">
            <div className="animate-bounce-gentle text-4xl">🌱</div>
            <h1 className="text-4xl font-bold text-child-primary">
              Garden Adventure Time!
            </h1>
            <div className="animate-wiggle text-4xl">🐛</div>
          </div>
          <p className="text-xl text-muted-foreground">
            Hey there, Little Gardener! Let's check on your soil friends! 🌻
          </p>
        </div>

        {/* Mascot Section */}
        <div className="mb-8">
          <Card className="bg-gradient-to-r from-child-primary/20 to-child-secondary/20 border-2 border-child-primary/30">
            <CardContent className="flex items-center justify-between p-6">
              <div className="flex items-center space-x-4">
                <div className="text-6xl animate-bounce-gentle">💧</div>
                <div>
                  <h3 className="text-2xl font-bold text-child-primary">Dewey the Drop says:</h3>
                  <p className="text-lg">"Your soil looks pretty good! Let's make it even better! 🌟"</p>
                </div>
              </div>
              <Button
                variant="child"
                size="lg"
                onClick={() => speakText("Your soil looks pretty good! Let's make it even better!")}
              >
                <Volume2 className="h-6 w-6" />
                Hear Dewey!
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Soil Health Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {/* Moisture */}
          <Card className="hover:scale-105 transition-all duration-300 shadow-soft">
            <CardHeader className="text-center pb-2">
              <div className="flex justify-center items-center space-x-2 mb-2">
                <div className="text-4xl animate-bounce-gentle">💧</div>
                <Droplets className="h-8 w-8 text-blue-500" />
              </div>
              <CardTitle className="text-lg">Water Level</CardTitle>
            </CardHeader>
            <CardContent className="text-center space-y-4">
              <div className="text-4xl">
                {getHealthEmoji(soilData.moisture, "moisture")}
              </div>
              <Progress value={soilData.moisture} className="h-4" />
              <div className="text-2xl font-bold text-blue-600">
                {soilData.moisture}%
              </div>
              <Badge variant={getHealthColor(soilData.moisture, "moisture") as any}>
                {soilData.moisture >= 70 ? "Perfect! 🎉" : soilData.moisture >= 50 ? "Pretty Good 👍" : "Needs Water 💧"}
              </Badge>
            </CardContent>
          </Card>

          {/* pH Level */}
          <Card className="hover:scale-105 transition-all duration-300 shadow-soft">
            <CardHeader className="text-center pb-2">
              <div className="flex justify-center items-center space-x-2 mb-2">
                <div className="text-4xl animate-wiggle">🧪</div>
                <Zap className="h-8 w-8 text-purple-500" />
              </div>
              <CardTitle className="text-lg">Soil Power (pH)</CardTitle>
            </CardHeader>
            <CardContent className="text-center space-y-4">
              <div className="text-4xl">
                {getHealthEmoji(soilData.ph, "ph")}
              </div>
              <div className="text-2xl font-bold text-purple-600">
                {soilData.ph}
              </div>
              <Badge variant={getHealthColor(soilData.ph, "ph") as any}>
                {soilData.ph >= 6.0 && soilData.ph <= 7.0 ? "Perfect Power! ⚡" : "Need Balance 🔄"}
              </Badge>
            </CardContent>
          </Card>

          {/* Temperature */}
          <Card className="hover:scale-105 transition-all duration-300 shadow-soft">
            <CardHeader className="text-center pb-2">
              <div className="flex justify-center items-center space-x-2 mb-2">
                <div className="text-4xl animate-pulse">🌡️</div>
                <Thermometer className="h-8 w-8 text-orange-500" />
              </div>
              <CardTitle className="text-lg">Soil Temperature</CardTitle>
            </CardHeader>
            <CardContent className="text-center space-y-4">
              <div className="text-4xl">
                {getHealthEmoji(soilData.temperature, "temperature")}
              </div>
              <div className="text-2xl font-bold text-orange-600">
                {soilData.temperature}°C
              </div>
              <Badge variant={getHealthColor(soilData.temperature, "temperature") as any}>
                {soilData.temperature >= 20 ? "Cozy Warm! 🔥" : "A bit Cool 🧊"}
              </Badge>
            </CardContent>
          </Card>

          {/* Nutrients */}
          <Card className="hover:scale-105 transition-all duration-300 shadow-soft">
            <CardHeader className="text-center pb-2">
              <div className="flex justify-center items-center space-x-2 mb-2">
                <div className="text-4xl animate-bounce-gentle">🍎</div>
                <Gift className="h-8 w-8 text-green-500" />
              </div>
              <CardTitle className="text-lg">Plant Food</CardTitle>
            </CardHeader>
            <CardContent className="text-center space-y-4">
              <div className="text-4xl">
                {getHealthEmoji(soilData.nutrients, "nutrients")}
              </div>
              <Progress value={soilData.nutrients} className="h-4" />
              <div className="text-2xl font-bold text-green-600">
                {soilData.nutrients}%
              </div>
              <Badge variant={getHealthColor(soilData.nutrients, "nutrients") as any}>
                {soilData.nutrients >= 70 ? "Yummy Food! 🍎" : "Needs Snacks 🥕"}
              </Badge>
            </CardContent>
          </Card>
        </div>

        {/* Mission Center */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {/* Today's Mission */}
          <Card className="bg-gradient-to-br from-child-accent/20 to-child-primary/20 border-2 border-child-accent/50">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Star className="h-6 w-6 text-child-accent animate-pulse" />
                <span className="text-child-primary">Today's Garden Mission!</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-lg">
                🎯 <strong>Mission:</strong> Help your soil drink more water!
              </div>
              <div className="text-sm text-muted-foreground">
                Your soil is a little thirsty. Give it some water and watch it smile! 💧😊
              </div>
              <Button variant="child" size="lg" className="w-full">
                <Play className="h-5 w-5 mr-2" />
                Start Mission! 🚀
              </Button>
            </CardContent>
          </Card>

          {/* Badge Collection */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Trophy className="h-6 w-6 text-yellow-500" />
                <span>Your Garden Badges</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                {badges.map((badge, index) => (
                  <div
                    key={index}
                    className={`text-center p-4 rounded-lg border-2 transition-all duration-300 ${
                      badge.earned 
                        ? "bg-child-primary/10 border-child-primary animate-pulse-glow" 
                        : "bg-gray-100 border-gray-300 opacity-50"
                    }`}
                  >
                    <div className="text-4xl mb-2">{badge.emoji}</div>
                    <div className="text-sm font-medium">{badge.name}</div>
                    {badge.earned && (
                      <div className="text-xs text-child-primary font-bold mt-1">✨ Earned!</div>
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Chat with Soily */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <div className="text-2xl animate-wiggle">🐛</div>
                <span>Chat with Soily the Worm!</span>
              </div>
              <Button
                variant="child"
                onClick={() => setChatVisible(!chatVisible)}
              >
                <MessageCircle className="h-5 w-5 mr-2" />
                {chatVisible ? "Hide Chat" : "Ask Soily!"}
              </Button>
            </CardTitle>
          </CardHeader>
          {chatVisible && (
            <CardContent>
              <div className="bg-child-primary/10 rounded-lg p-4 mb-4">
                <div className="flex items-start space-x-3">
                  <div className="text-2xl">🐛</div>
                  <div>
                    <div className="font-medium text-child-primary">Soily the Worm</div>
                    <div className="text-sm">
                      Hi there, little gardener! I see your soil needs a bit more water. 
                      Would you like me to teach you the best way to water your plants? 🌱💧
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <Button variant="child" size="sm">
                  🌊 Yes, teach me!
                </Button>
                <Button variant="outline" size="sm">
                  🤔 Tell me more
                </Button>
              </div>
            </CardContent>
          )}
        </Card>
      </div>
    </div>
  );
};

export default ChildDashboard;