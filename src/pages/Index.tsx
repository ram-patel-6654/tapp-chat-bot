import { ChatInterface } from "@/components/ChatInterface";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-secondary/20 p-4 flex items-center justify-center">
      <div className="w-full">
        {/* Header Section */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent mb-2">
            TKIET SmartBot Assistant
          </h1>
          <p className="text-lg text-muted-foreground">
            Your intelligent guide to Tatyasaheb Kore Institute of Engineering and Technology
          </p>
        </div>
        
        {/* Chat Interface */}
        <ChatInterface />
        
        {/* Footer Info */}
        <div className="text-center mt-6 text-sm text-muted-foreground">
          <p>Powered by AI • Get instant answers about TKIET admissions, courses, and more</p>
        </div>
      </div>
    </div>
  );
};

export default Index;
