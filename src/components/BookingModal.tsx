import { X, Calendar, Clock, MapPin, CheckCircle2, CreditCard } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { Workshop } from "@/lib/data";
import { useState } from "react";

interface BookingModalProps {
  workshop: Workshop;
  onClose: () => void;
}

const BookingModal = ({ workshop, onClose }: BookingModalProps) => {
  const [step, setStep] = useState<"review" | "confirmed">("review");
  const [guests, setGuests] = useState(1);
  const total = workshop.price * guests;

  if (step === "confirmed") {
    return (
      <div className="fixed inset-0 z-50 bg-foreground/50 flex items-center justify-center p-4" onClick={onClose}>
        <div className="bg-card rounded-lg w-full max-w-md p-6 text-center border border-border" onClick={(e) => e.stopPropagation()}>
          <div className="w-14 h-14 rounded-full bg-linkedin-green/10 flex items-center justify-center mx-auto mb-4">
            <CheckCircle2 className="w-7 h-7 text-linkedin-green" />
          </div>
          <h2 className="text-lg font-semibold text-foreground mb-2">Booking Confirmed!</h2>
          <p className="text-sm text-muted-foreground mb-1">{workshop.title}</p>
          <p className="text-sm text-muted-foreground mb-4">
            {workshop.date} · {workshop.time} · {guests} guest{guests > 1 ? "s" : ""}
          </p>
          <p className="text-xs text-muted-foreground mb-5">
            Confirmation details have been sent. Check your notifications.
          </p>
          <Button variant="linkedin" className="w-full" onClick={onClose}>Done</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-50 bg-foreground/50 flex items-center justify-center p-4" onClick={onClose}>
      <div className="bg-card rounded-lg w-full max-w-md border border-border" onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-3 border-b border-border">
          <h2 className="text-base font-semibold text-foreground">Confirm Booking</h2>
          <button onClick={onClose} className="text-muted-foreground hover:text-foreground">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-5">
          {/* Summary */}
          <div className="bg-secondary rounded-lg p-3 mb-4 space-y-2">
            <h3 className="text-sm font-semibold text-foreground">{workshop.title}</h3>
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <Calendar className="w-3.5 h-3.5" />
              {workshop.date} · {workshop.time}
            </div>
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <Clock className="w-3.5 h-3.5" />
              {workshop.duration}
            </div>
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <MapPin className="w-3.5 h-3.5" />
              {workshop.location}
            </div>
          </div>

          {/* Guests */}
          <div className="flex items-center justify-between mb-4 p-3 rounded-lg bg-secondary">
            <span className="text-sm font-medium text-foreground">Guests</span>
            <div className="flex items-center gap-3">
              <button
                className="w-7 h-7 rounded-full border border-border flex items-center justify-center text-foreground hover:bg-accent transition-colors"
                onClick={() => setGuests(Math.max(1, guests - 1))}
              >−</button>
              <span className="text-foreground font-semibold w-4 text-center">{guests}</span>
              <button
                className="w-7 h-7 rounded-full border border-border flex items-center justify-center text-foreground hover:bg-accent transition-colors"
                onClick={() => setGuests(Math.min(workshop.spotsLeft, guests + 1))}
              >+</button>
            </div>
          </div>

          {/* Price */}
          <div className="space-y-2 mb-5">
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">${workshop.price} × {guests}</span>
              <span className="text-foreground">${total}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Service fee</span>
              <span className="text-foreground">$0</span>
            </div>
            <div className="border-t border-border pt-2 flex justify-between">
              <span className="font-semibold text-foreground">Total</span>
              <span className="font-bold text-foreground text-lg">${total}</span>
            </div>
          </div>

          <Button variant="linkedin" className="w-full gap-2" onClick={() => setStep("confirmed")}>
            <CreditCard className="w-4 h-4" />
            Pay ${total}
          </Button>

          <p className="text-xs text-muted-foreground text-center mt-3">
            Free cancellation up to 24 hours before
          </p>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
