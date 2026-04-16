import { ArrowLeft, Star, MapPin, Clock, Users, Calendar, Share2, Heart, CheckCircle2, ThumbsUp, MessageCircle, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import type { Workshop } from "@/lib/data";
import { useState } from "react";
import BookingModal from "./BookingModal";

interface WorkshopDetailLinkedInProps {
  workshop: Workshop;
  onBack: () => void;
}

const WorkshopDetailLinkedIn = ({ workshop, onBack }: WorkshopDetailLinkedInProps) => {
  const [liked, setLiked] = useState(false);
  const [showBooking, setShowBooking] = useState(false);

  return (
    <>
      <div className="max-w-linkedin mx-auto px-4 py-4">
        <button
          onClick={onBack}
          className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground mb-3"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to feed
        </button>

        <div className="flex gap-6">
          {/* Main content */}
          <div className="flex-1 min-w-0">
            <div className="bg-card rounded-lg border border-border overflow-hidden">
              {/* Image */}
              <img
                src={workshop.image}
                alt={workshop.title}
                width={640}
                height={480}
                className="w-full aspect-[2/1] object-cover"
              />

              <div className="p-5">
                {/* Badges */}
                <div className="flex items-center gap-2 mb-2">
                  <Badge className="bg-secondary text-secondary-foreground border-none text-xs">{workshop.category}</Badge>
                  <Badge className="bg-secondary text-secondary-foreground border-none text-xs">{workshop.level}</Badge>
                </div>

                <h1 className="text-xl font-semibold text-foreground mb-1">{workshop.title}</h1>

                <div className="flex items-center gap-2 mb-4">
                  <Star className="w-4 h-4 fill-primary text-primary" />
                  <span className="text-sm font-semibold text-foreground">{workshop.rating}</span>
                  <span className="text-sm text-muted-foreground">({workshop.reviewCount} reviews)</span>
                </div>

                {/* Instructor */}
                <div className="flex items-center gap-3 mb-5 p-3 rounded-lg border border-border">
                  <div className="w-12 h-12 rounded-full bg-primary/15 flex items-center justify-center text-primary font-bold text-lg">
                    {workshop.instructor[0]}
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-foreground hover:text-primary hover:underline cursor-pointer">{workshop.instructor}</p>
                    <p className="text-xs text-muted-foreground">{workshop.instructorRole}</p>
                  </div>
                  <Button variant="linkedin-outline" size="sm" className="text-xs">
                    + Follow
                  </Button>
                </div>

                {/* Details grid */}
                <div className="grid grid-cols-2 gap-3 mb-5">
                  {[
                    { icon: Calendar, label: workshop.date, sub: workshop.time },
                    { icon: Clock, label: workshop.duration, sub: "Duration" },
                    { icon: MapPin, label: workshop.location, sub: workshop.distance },
                    { icon: Users, label: `${workshop.spotsLeft} spots left`, sub: `of ${workshop.totalSpots}` },
                  ].map(({ icon: Icon, label, sub }) => (
                    <div key={label} className="flex items-start gap-2.5 p-3 rounded-lg bg-secondary">
                      <Icon className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                      <div>
                        <p className="text-sm font-medium text-foreground">{label}</p>
                        <p className="text-xs text-muted-foreground">{sub}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Description */}
                <div className="mb-5">
                  <h3 className="text-sm font-semibold text-foreground mb-2">About this workshop</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{workshop.description}</p>
                </div>

                {/* Tags */}
                <div className="mb-4">
                  <h3 className="text-sm font-semibold text-foreground mb-2">What's included</h3>
                  <div className="flex flex-wrap gap-3">
                    {workshop.tags.map((tag) => (
                      <div key={tag} className="flex items-center gap-1.5 text-sm text-muted-foreground">
                        <CheckCircle2 className="w-3.5 h-3.5 text-linkedin-green" />
                        {tag}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* LinkedIn-style engagement bar */}
              <div className="px-4 py-1 border-t border-border flex items-center">
                {[
                  { icon: ThumbsUp, label: "Like", active: liked, action: () => setLiked(!liked) },
                  { icon: MessageCircle, label: "Comment", active: false, action: () => {} },
                  { icon: Share2, label: "Share", active: false, action: () => {} },
                  { icon: Send, label: "Send", active: false, action: () => {} },
                ].map(({ icon: Icon, label, active, action }) => (
                  <button
                    key={label}
                    onClick={action}
                    className={`flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-[4px] text-xs font-semibold transition-colors hover:bg-accent ${
                      active ? "text-primary" : "text-muted-foreground"
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    {label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right sidebar: Booking card */}
          <div className="w-[300px] shrink-0 hidden md:block">
            <div className="bg-card rounded-lg border border-border p-4 sticky top-[68px]">
              <div className="mb-3">
                <span className="text-2xl font-bold text-foreground">${workshop.price}</span>
                <span className="text-sm text-muted-foreground ml-1">/ person</span>
              </div>

              <Button variant="linkedin" className="w-full mb-2" onClick={() => setShowBooking(true)}>
                Book Now
              </Button>
              <Button
                variant="linkedin-outline"
                className="w-full"
                onClick={() => setLiked(!liked)}
              >
                <Heart className={`w-4 h-4 ${liked ? "fill-primary" : ""}`} />
                {liked ? "Saved" : "Save"}
              </Button>

              <div className="mt-4 pt-3 border-t border-border space-y-2">
                <div className="flex justify-between text-xs">
                  <span className="text-muted-foreground">Date</span>
                  <span className="text-foreground font-medium">{workshop.date}</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-muted-foreground">Time</span>
                  <span className="text-foreground font-medium">{workshop.time}</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-muted-foreground">Duration</span>
                  <span className="text-foreground font-medium">{workshop.duration}</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-muted-foreground">Availability</span>
                  <span className="text-foreground font-medium">{workshop.spotsLeft} spots</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile sticky book bar */}
        <div className="fixed bottom-0 left-0 right-0 bg-card border-t border-border p-3 flex items-center justify-between md:hidden z-50">
          <div>
            <span className="text-lg font-bold text-foreground">${workshop.price}</span>
            <span className="text-xs text-muted-foreground ml-1">/ person</span>
          </div>
          <Button variant="linkedin" onClick={() => setShowBooking(true)}>
            Book Now
          </Button>
        </div>
      </div>

      {showBooking && <BookingModal workshop={workshop} onClose={() => setShowBooking(false)} />}
    </>
  );
};

export default WorkshopDetailLinkedIn;
