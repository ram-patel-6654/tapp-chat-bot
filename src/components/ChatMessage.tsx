import { ChatMessage as ChatMessageType } from "@/services/chatService";
import { cn } from "@/lib/utils";
import { Bot, User } from "lucide-react";

interface ChatMessageProps {
  message: ChatMessageType;
}

export const ChatMessage = ({ message }: ChatMessageProps) => {
  return (
    <div className={cn(
      "flex gap-3 mb-4 transition-all duration-300 ease-in-out",
      message.isUser ? "justify-end" : "justify-start"
    )}>
      {!message.isUser && (
        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary flex items-center justify-center">
          <Bot className="w-4 h-4 text-primary-foreground" />
        </div>
      )}
      
      <div className={cn(
        "max-w-[80%] px-4 py-3 rounded-2xl shadow-sm transition-all duration-300",
        message.isUser 
          ? "bg-chat-user text-chat-user-foreground rounded-br-md" 
          : "bg-chat-bot text-chat-bot-foreground rounded-bl-md"
      )}>
        <p className="text-sm leading-relaxed">{message.content}</p>
        <div className="text-xs opacity-70 mt-2">
          {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
        </div>
      </div>
      
      {message.isUser && (
        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-chat-user flex items-center justify-center">
          <User className="w-4 h-4 text-chat-user-foreground" />
        </div>
      )}
    </div>
  );
};