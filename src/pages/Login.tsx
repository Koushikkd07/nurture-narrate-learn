import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Users, Baby, Heart, Leaf } from "lucide-react";

const Login = () => {
  const [userType, setUserType] = useState<"child" | "elder" | null>(null);
  const [credentials, setCredentials] = useState({ username: "", password: "" });
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (userType === "child") {
      navigate("/child-dashboard");
    } else if (userType === "elder") {
      navigate("/elder-dashboard");
    }
  };

  if (!userType) {
    return (
      <div className="min-h-screen bg-gradient-earth flex items-center justify-center p-4">
        <div className="max-w-4xl w-full">
          <div className="text-center mb-8 animate-fade-in">
            <div className="flex justify-center mb-4">
              <div className="bg-primary rounded-full p-4 shadow-glow">
                <Leaf className="h-12 w-12 text-primary-foreground" />
              </div>
            </div>
            <h1 className="text-4xl font-bold text-foreground mb-2">
              🌱 SoilBuddy
            </h1>
            <p className="text-xl text-muted-foreground">
              Growing healthy gardens together
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Children Side */}
            <Card 
              className="cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-glow border-2 hover:border-child-primary bg-gradient-to-br from-child-primary/10 to-child-secondary/10"
              onClick={() => setUserType("child")}
            >
              <CardHeader className="text-center pb-4">
                <div className="mx-auto bg-child-primary rounded-full p-6 mb-4 animate-bounce-gentle">
                  <Baby className="h-12 w-12 text-white" />
                </div>
                <CardTitle className="text-2xl font-bold text-child-primary">
                  🎈 Kids Garden Explorer
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <div className="flex justify-center space-x-2 text-3xl mb-4">
                  <span className="animate-wiggle">🌻</span>
                  <span className="animate-bounce-gentle">🐛</span>
                  <span className="animate-wiggle">🌱</span>
                </div>
                <p className="text-lg text-muted-foreground">
                  Meet Dewey the Drop and Soily the Worm! 
                  Go on fun missions to help your garden grow strong and healthy!
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center justify-center space-x-2">
                    <span>🏆</span>
                    <span>Earn garden badges</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <span>🎮</span>
                    <span>Play soil health games</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <span>🌈</span>
                    <span>Colorful soil reports</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Elder Side */}
            <Card 
              className="cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-soft border-2 hover:border-elder-primary bg-gradient-to-br from-elder-primary/10 to-elder-secondary/10"
              onClick={() => setUserType("elder")}
            >
              <CardHeader className="text-center pb-4">
                <div className="mx-auto bg-elder-primary rounded-full p-6 mb-4">
                  <Heart className="h-12 w-12 text-primary-foreground" />
                </div>
                <CardTitle className="text-2xl font-bold text-elder-primary">
                  🌿 Garden Wisdom Hub
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <div className="flex justify-center space-x-2 text-3xl mb-4">
                  <span>🌳</span>
                  <span>📊</span>
                  <span>🔊</span>
                </div>
                <p className="text-lg text-muted-foreground">
                  Simple, clear garden insights with voice guidance.
                  Perfect for experienced gardeners who want easy-to-read soil health reports.
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center justify-center space-x-2">
                    <span>📈</span>
                    <span>Large, clear charts</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <span>🔊</span>
                    <span>Audio notifications</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <span>📋</span>
                    <span>Weekly garden reports</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-8 text-muted-foreground">
            <Users className="h-6 w-6 mx-auto mb-2" />
            <p>Choose your garden experience</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-earth flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <div className="mx-auto mb-4">
            {userType === "child" ? (
              <div className="bg-child-primary rounded-full p-4 animate-pulse-glow">
                <Baby className="h-8 w-8 text-white" />
              </div>
            ) : (
              <div className="bg-elder-primary rounded-full p-4">
                <Heart className="h-8 w-8 text-primary-foreground" />
              </div>
            )}
          </div>
          <CardTitle className={`text-2xl ${userType === "child" ? "text-child-primary" : "text-elder-primary"}`}>
            {userType === "child" ? "🎈 Kids Login" : "🌿 Garden Login"}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleLogin} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="username" className={userType === "elder" ? "text-lg" : ""}>
                {userType === "child" ? "🌟 Your Garden Name" : "Username"}
              </Label>
              <Input
                id="username"
                type="text"
                value={credentials.username}
                onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
                className={userType === "elder" ? "text-lg p-4" : ""}
                placeholder={userType === "child" ? "Little Gardener" : "Enter your username"}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password" className={userType === "elder" ? "text-lg" : ""}>
                {userType === "child" ? "🔐 Secret Garden Code" : "Password"}
              </Label>
              <Input
                id="password"
                type="password"
                value={credentials.password}
                onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
                className={userType === "elder" ? "text-lg p-4" : ""}
                placeholder={userType === "child" ? "Your secret code" : "Enter your password"}
                required
              />
            </div>
            <div className="space-y-4">
              <Button 
                type="submit" 
                variant={userType === "child" ? "child" : "elder"}
                size={userType === "elder" ? "xl" : "lg"}
                className="w-full"
              >
                {userType === "child" ? "🚀 Start Garden Adventure!" : "Enter Garden Hub"}
              </Button>
              <Button 
                type="button" 
                variant="outline" 
                onClick={() => setUserType(null)}
                className="w-full"
              >
                ← Go Back
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default Login;