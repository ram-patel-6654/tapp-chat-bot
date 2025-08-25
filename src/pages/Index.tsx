import { SimpleQAInterface } from "@/components/SimpleQAInterface";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-secondary/20 p-4">
      <div className="container mx-auto py-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent mb-4">
            TKIET SmartBot Assistant
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Your intelligent guide to Tatyasaheb Kore Institute of Engineering and Technology. 
            Ask any question and get instant, accurate answers.
          </p>
        </div>
        
        {/* Q&A Interface */}
        <SimpleQAInterface />
        
        {/* Footer Info */}
        <div className="text-center mt-12 text-sm text-muted-foreground">
          <p>Powered by AI • Get instant answers about TKIET admissions, courses, placements, and more</p>
        </div>
      </div>
    </div>
  );
};

export default Index;
