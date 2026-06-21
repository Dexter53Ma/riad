"use client";

import { useState, useRef, useEffect } from "react";
import { cn } from "@/lib/utils";

interface Message {
  role: "user" | "ai";
  text: string;
}

const WELCOME = "Hi! I'm the Riad Les Trois Mages virtual assistant. I can help you with room details, availability, prices, or anything about your stay in Marrakech. How can I help?";

const SUGGESTIONS = [
  "What rooms are available?",
  "How much is the Melchior Suite?",
  "Do you have family rooms?",
  "Where is the riad located?",
];

function getAIResponse(input: string): string {
  const q = input.toLowerCase();

  if (q.includes("room") && (q.includes("available") || q.includes("what") || q.includes("which"))) {
    return "We have 6 beautifully styled rooms:\n\n• Bahia Room — from $120 (2 adults, riad view)\n• Balthazar Room — from $120 (2 adults, riad view)\n• Signature Room — from $130 (2 adults, city view)\n• Melchior Suite — from $399 (family, 120m²)\n• Gaspard Suite — from $399 (family, 120m²)\n• Arabesque Suite — from $399 (family, 120m²)\n\nWould you like details on a specific room?";
  }

  if (q.includes("melchior")) {
    return "The Melchior Suite is one of our premium family suites at $399/night. It features 120m² of space, a king bed, capacity for 4 adults + 2 children, a city view, separate living areas, and breathtaking panoramic views. Perfect for families!\n\nYou can book it on Airbnb, Booking.com, or directly via WhatsApp.";
  }

  if (q.includes("gaspard")) {
    return "The Gaspard Suite is $399/night with 120m², king bed, 4 adults + 2 children capacity, and stunning Atlas Mountain views. It has its own distinct Moroccan character.\n\nShall I help you book it?";
  }

  if (q.includes("arabesque")) {
    return "The Arabesque Suite is $399/night — our most intricately designed suite with 120m², hand-painted zellige tilework, a private terrace, and sweeping city views. Ideal for family gatherings!\n\nYou can book via Airbnb, Booking.com, or WhatsApp.";
  }

  if (q.includes("bahia")) {
    return "The Bahia Room is from $120/night — a cozy king-bed room (30m²) with riad courtyard view. Great for discovering the medina. Perfect for couples!\n\nWant to check availability?";
  }

  if (q.includes("balthazar")) {
    return "The Balthazar Room is from $120/night with a king bed, 33m² (slightly larger than Bahia), and courtyard views. A warm and inviting space.\n\nShall I help you book?";
  }

  if (q.includes("signature")) {
    return "The Signature Room is from $130/night — a king-bed room (30m²) with medina rooftop views. It blends modern comfort with Moroccan elegance. Great for couples and small families.";
  }

  if (q.includes("family") || q.includes("children") || q.includes("kids")) {
    return "Our family-friendly suites are the Melchior, Gaspard, and Arabesque — all $399/night with 120m², king beds, and capacity for 4 adults + 2 children. They feature separate living areas, city views, and plenty of space for families.\n\nWhich one interests you?";
  }

  if (q.includes("price") || q.includes("cost") || q.includes("how much")) {
    return "Our rooms start from $120/night:\n\n• Standard rooms: $120–$130/night (Bahia, Balthazar, Signature)\n• Family suites: $399/night (Melchior, Gaspard, Arabesque)\n\nPrices may vary by season. Check Airbnb or Booking.com for live rates!";
  }

  if (q.includes("location") || q.includes("where") || q.includes("address") || q.includes("find")) {
    return "We're located in the heart of Marrakech's Medina:\n\n📍 Derb Sidi Bouamar, Riad Zitoun Lakdim, Medina, Marrakech, Morocco\n\n📱 WhatsApp: +212 524 378 091\n📧 info@riadsestroismages.com\n\nWe can help arrange airport transfers!";
  }

  if (q.includes("check-in") || q.includes("check out") || q.includes("time")) {
    return "Check-in is at 3:00 PM and check-out is at 11:00 AM. Early check-in or late check-out may be available on request — just ask!";
  }

  if (q.includes("cancel")) {
    return "We offer free cancellation up to 48 hours before your arrival. For cancellations within 48 hours, the first night may be charged.";
  }

  if (q.includes("book") || q.includes("reserve") || q.includes("availability")) {
    return "You can book through:\n\n1. 🏠 Airbnb — instant availability\n2. 🏨 Booking.com — best price guarantee\n3. 📧 WhatsApp/Email — for custom requests\n\nWhich would you prefer?";
  }

  if (q.includes("breakfast") || q.includes("food") || q.includes("eat")) {
    return "We serve a traditional Moroccan breakfast each morning — fresh bread, msemen, amlou, fresh orange juice, mint tea, and more. It's included with your stay!";
  }

  if (q.includes("pool") || q.includes("swim")) {
    return "Yes! We have a beautiful plunge pool in our central courtyard — perfect for relaxing after a day exploring the souks.";
  }

  if (q.includes("wifi") || q.includes("internet")) {
    return "Yes, complimentary high-speed Wi-Fi is available throughout the riad — in your room, the courtyard, rooftop, and common areas.";
  }

  if (q.includes("airport") || q.includes("transfer")) {
    return "We can arrange airport transfers from Marrakech Menara Airport (just 15 minutes away). Just let us know your flight details and we'll take care of it!";
  }

  if (q.includes("hello") || q.includes("hi") || q.includes("hey") || q.includes("bonjour")) {
    return "Hello! Welcome to Riad Les Trois Mages. How can I help you today? I can tell you about our rooms, prices, or help you plan your stay.";
  }

  if (q.includes("thank") || q.includes("thanks")) {
    return "You're welcome! If you have any more questions, feel free to ask. We look forward to welcoming you to Marrakech! 🇲🇦";
  }

  return "I'd be happy to help! You can ask me about:\n\n• Room details & prices\n• Availability & booking\n• Location & directions\n• Check-in/out times\n• Breakfast & amenities\n• Airport transfers\n\nWhat would you like to know?";
}

export default function AiSupport() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([{ role: "ai", text: WELCOME }]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const send = (text: string) => {
    if (!text.trim()) return;
    const userMsg: Message = { role: "user", text: text.trim() };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setTimeout(() => {
      const aiMsg: Message = { role: "ai", text: getAIResponse(text) };
      setMessages((prev) => [...prev, aiMsg]);
    }, 500);
  };

  return (
    <>
      {/* Toggle button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "fixed bottom-20 right-4 md:bottom-8 md:right-6 z-50 w-12 h-12 md:w-14 md:h-14 flex items-center justify-center rounded-full shadow-[0_4px_20px_rgba(0,0,0,0.15)] transition-all duration-300 active:scale-90",
          isOpen
            ? "bg-[#2a3936] text-white rotate-0"
            : "bg-[#4b6753] text-white"
        )}
        aria-label="AI Support"
      >
        {isOpen ? (
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
            <path d="M6 18 18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-5 h-5 md:w-6 md:h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
            <path d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm3.375.375a.375.375 0 1 0 0-.75.375.375 0 0 0 0 .75ZM12 2a3.75 3.75 0 0 0-3.75 3.75v.75c0 1.003.344 1.927.935 2.659l.077.094a.375.375 0 0 1-.084.629 8.25 8.25 0 0 0 5.766 0 .375.375 0 0 1-.084-.63l.077-.093A3.75 3.75 0 0 0 15.75 6.5v-.75A3.75 3.75 0 0 0 12 2ZM9.75 18.75a.75.75 0 0 0 0 1.5h4.5a.75.75 0 0 0 0-1.5h-4.5Z" />
          </svg>
        )}
      </button>

      {/* Chat panel */}
      <div
        className={cn(
          "fixed bottom-36 right-4 md:bottom-24 md:right-6 z-50 w-[calc(100%-2rem)] max-w-sm transition-all duration-300 origin-bottom-right",
          isOpen ? "opacity-100 scale-100 pointer-events-auto" : "opacity-0 scale-95 pointer-events-none"
        )}
      >
        <div className="bg-white rounded-2xl shadow-[0_12px_48px_rgba(0,0,0,0.15)] border border-[#2a3936]/5 overflow-hidden flex flex-col max-h-[70vh]">
          {/* Header */}
          <div className="bg-[#4b6753] px-4 py-3 flex items-center gap-3">
            <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
              <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
                <path d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
              </svg>
            </div>
            <div>
              <p className="text-sm font-medium text-white">Riad Assistant</p>
              <p className="text-[10px] text-white/70">Always here to help</p>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3 min-h-[200px] max-h-[400px]">
            {messages.map((msg, i) => (
              <div key={i} className={cn("flex", msg.role === "user" ? "justify-end" : "justify-start")}>
                <div
                  className={cn(
                    "max-w-[85%] px-3.5 py-2.5 rounded-2xl text-[12px] md:text-[13px] leading-relaxed whitespace-pre-line",
                    msg.role === "user"
                      ? "bg-[#4b6753] text-white rounded-br-md"
                      : "bg-[#f6f4f2] text-[#2a3936] rounded-bl-md"
                  )}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Suggestions */}
          {messages.length <= 2 && (
            <div className="px-4 pb-2 flex flex-wrap gap-1.5">
              {SUGGESTIONS.map((s) => (
                <button
                  key={s}
                  onClick={() => send(s)}
                  className="text-[10px] md:text-[11px] px-3 py-1.5 bg-[#f6f4f2] text-[#4b6753] rounded-full hover:bg-[#4b6753]/10 transition-colors font-medium"
                >
                  {s}
                </button>
              ))}
            </div>
          )}

          {/* Input */}
          <div className="p-3 border-t border-[#2a3936]/5">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                send(input);
              }}
              className="flex items-center gap-2"
            >
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask me anything..."
                className="flex-1 px-3.5 py-2.5 bg-[#f6f4f2] rounded-xl text-[12px] md:text-[13px] focus:outline-none focus:ring-1 focus:ring-[#4b6753]/30 transition-all"
              />
              <button
                type="submit"
                disabled={!input.trim()}
                className="w-9 h-9 flex items-center justify-center bg-[#4b6753] text-white rounded-xl hover:bg-[#3d5645] disabled:opacity-40 disabled:cursor-not-allowed transition-all shrink-0"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                  <path d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
                </svg>
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
