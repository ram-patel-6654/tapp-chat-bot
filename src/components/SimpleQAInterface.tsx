import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Send, Loader2, Bot } from "lucide-react";
import { chatService } from "@/services/chatService";
import { useToast } from "@/hooks/use-toast";

export const SimpleQAInterface = () => {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!question.trim() || isLoading) return;

    setIsLoading(true);
    
    try {
      const response = await chatService.sendMessage(question.trim());
      setAnswer(response);
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'An unexpected error occurred';
      setAnswer(`Error: ${errorMessage}`);
      
      toast({
        title: "Error",
        description: errorMessage,
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e as any);
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto space-y-6">
      {/* Question Input Section */}
      <Card className="p-6 shadow-lg">
        <form onSubmit={handleSubmit} className="flex gap-4">
          <Input
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Ask me anything about TKIET..."
            disabled={isLoading}
            className="flex-1 text-lg py-3 px-4 rounded-lg border-2 focus:ring-2 focus:ring-primary/20 transition-all duration-200"
          />
          <Button 
            type="submit" 
            disabled={!question.trim() || isLoading}
            className="px-8 py-3 text-lg bg-primary hover:bg-primary/90 transition-all duration-200"
          >
            {isLoading ? (
              <Loader2 className="w-5 h-5 animate-spin" />
            ) : (
              <>
                <Send className="w-5 h-5 mr-2" />
                Send
              </>
            )}
          </Button>
        </form>
      </Card>

      {/* Answer Section */}
      {(answer || isLoading) && (
        <Card className="p-6 shadow-lg min-h-[200px]">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
              <Bot className="w-5 h-5 text-primary-foreground" />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-lg mb-3 text-foreground">SmartBot Answer:</h3>
              <div className="bg-chat-bot text-chat-bot-foreground p-4 rounded-lg">
                {isLoading ? (
                  <div className="flex items-center gap-2">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-current rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-current rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-current rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                    <span className="ml-2">Thinking...</span>
                  </div>
                ) : (
                  <p className="text-base leading-relaxed">{answer}</p>
                )}
              </div>
            </div>
          </div>
        </Card>
      )}

      {/* Instructions */}
      {!answer && !isLoading && (
        <Card className="p-6 bg-secondary/20 border-dashed">
          <div className="text-center text-muted-foreground">
            <Bot className="w-12 h-12 mx-auto mb-3 opacity-50" />
            <p className="text-lg">Ask me anything about TKIET!</p>
            <p className="text-sm mt-2">
              I can help you with information about admissions, courses, fees, placements, and more.
            </p>
          </div>
        </Card>
      )}
    </div>
  );
};