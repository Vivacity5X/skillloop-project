import { Star, MapPin, Clock, Users, ThumbsUp, MessageCircle, Share2, Send } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { Workshop } from "@/lib/data";
import { useState } from "react";

interface WorkshopCardLinkedInProps {
  workshop: Workshop;
  onClick: (id: string) => void;
}

const WorkshopCardLinkedIn = ({ workshop, onClick }: WorkshopCardLinkedInProps) => {
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(Math.floor(Math.random() * 50) + 10);
  const isAlmostFull = workshop.spotsLeft <= 3;

  return (
    <div className="bg-card rounded-lg border border-border overflow-hidden">
      {/* Author header - LinkedIn post style */}
      <div className="px-4 pt-3 pb-2 flex items-start gap-2">
        <div className="w-10 h-10 rounded-full bg-primary/15 flex items-center justify-center text-primary font-bold text-sm shrink-0">
          {workshop.instructor[0]}
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-semibold text-foreground hover:text-primary hover:underline cursor-pointer">
            {workshop.instructor}
          </p>
          <p className="text-xs text-muted-foreground truncate">{workshop.instructorRole}</p>
          <p className="text-xs text-muted-foreground">2d • 🌐</p>
        </div>
        <Button variant="linkedin-outline" size="sm" className="shrink-0 text-xs h-7 px-3">
          + Follow
        </Button>
      </div>

      {/* Post text */}
      <div className="px-4 pb-2">
        <p className="text-sm text-foreground leading-relaxed">
          🎉 Excited to announce my upcoming <span className="font-semibold">{workshop.title}</span> workshop! 
          {workshop.description.slice(0, 100)}...
        </p>
      </div>

      {/* Image */}
      <div
        className="relative cursor-pointer"
        onClick={() => onClick(workshop.id)}
      >
        <img
          src={workshop.image}
          alt={workshop.title}
          loading="lazy"
          width={640}
          height={480}
          className="w-full aspect-[16/9] object-cover"
        />
        {/* Overlay card on image */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-foreground/80 to-transparent p-4">
          <div className="flex items-center gap-2 mb-1">
            <Badge className="bg-card text-foreground text-xs border-none font-medium">{workshop.category}</Badge>
            <Badge className="bg-card text-foreground text-xs border-none font-medium">{workshop.level}</Badge>
            {isAlmostFull && (
              <Badge className="bg-destructive text-destructive-foreground text-xs border-none font-medium">
                {workshop.spotsLeft} spots left!
              </Badge>
            )}
          </div>
          <h3 className="text-base font-semibold text-card">{workshop.title}</h3>
        </div>
      </div>

      {/* Workshop details strip */}
      <div className="px-4 py-2 flex items-center gap-4 text-xs text-muted-foreground border-b border-border">
        <span className="flex items-center gap-1">
          <Clock className="w-3 h-3" />
          {workshop.duration}
        </span>
        <span className="flex items-center gap-1">
          <MapPin className="w-3 h-3" />
          {workshop.location} · {workshop.distance}
        </span>
        <span className="flex items-center gap-1">
          <Users className="w-3 h-3" />
          {workshop.spotsLeft}/{workshop.totalSpots}
        </span>
        <span className="flex items-center gap-1 ml-auto">
          <Star className="w-3 h-3 fill-primary text-primary" />
          {workshop.rating} ({workshop.reviewCount})
        </span>
      </div>

      {/* Price + Book */}
      <div className="px-4 py-2 flex items-center justify-between border-b border-border">
        <div>
          <span className="text-lg font-bold text-foreground">${workshop.price}</span>
          <span className="text-xs text-muted-foreground ml-1">/ person</span>
          <span className="text-xs text-muted-foreground ml-2">· {workshop.date} · {workshop.time}</span>
        </div>
        <Button variant="linkedin" size="sm" onClick={() => onClick(workshop.id)}>
          Book Now
        </Button>
      </div>

      {/* Engagement stats */}
      <div className="px-4 py-1.5 flex items-center justify-between text-xs text-muted-foreground">
        <div className="flex items-center gap-1">
          <span className="flex -space-x-1">
            <span className="w-4 h-4 rounded-full bg-primary flex items-center justify-center text-[8px] text-primary-foreground">👍</span>
            <span className="w-4 h-4 rounded-full bg-destructive flex items-center justify-center text-[8px] text-destructive-foreground">❤️</span>
          </span>
          <span>{likeCount}</span>
        </div>
        <span>{Math.floor(Math.random() * 20) + 3} comments</span>
      </div>

      {/* Action buttons - LinkedIn style */}
      <div className="px-2 py-1 border-t border-border flex items-center">
        {[
          { icon: ThumbsUp, label: "Like", onClick: () => { setLiked(!liked); setLikeCount(l => liked ? l - 1 : l + 1); } },
          { icon: MessageCircle, label: "Comment", onClick: () => {} },
          { icon: Share2, label: "Repost", onClick: () => {} },
          { icon: Send, label: "Send", onClick: () => {} },
        ].map(({ icon: Icon, label, onClick: action }) => (
          <button
            key={label}
            onClick={action}
            className={`flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-[4px] text-xs font-semibold transition-colors hover:bg-accent ${
              label === "Like" && liked ? "text-primary" : "text-muted-foreground"
            }`}
          >
            <Icon className="w-4 h-4" strokeWidth={label === "Like" && liked ? 2.5 : 1.5} />
            {label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default WorkshopCardLinkedIn;
