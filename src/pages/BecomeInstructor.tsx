import { useState } from "react";
import { useNavigate } from "react-router-dom";
import LinkedInNav from "@/components/LinkedInNav";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, ArrowLeft, Users, Star, TrendingUp, Award, Briefcase, GraduationCap } from "lucide-react";
import { toast } from "sonner";

const benefits = [
  { icon: Users, title: "Reach Local Learners", desc: "Connect with curious hobbyists in your area looking for hands-on experiences." },
  { icon: TrendingUp, title: "Grow Your Brand", desc: "Build your professional reputation and gain followers through your workshops." },
  { icon: Star, title: "Earn on Your Terms", desc: "Set your own prices, schedule, and class sizes. Keep 85% of every booking." },
  { icon: Award, title: "Get Certified", desc: "Earn a SkillLoop Verified Instructor badge displayed on your profile." },
];

const stats = [
  { value: "2,400+", label: "Active Instructors" },
  { value: "18,000+", label: "Workshops Completed" },
  { value: "$2.1M", label: "Earned by Instructors" },
  { value: "4.8★", label: "Avg Instructor Rating" },
];

const steps = [
  { num: 1, title: "Apply", desc: "Fill out the application form with your expertise and experience." },
  { num: 2, title: "Get Verified", desc: "Our team reviews your profile within 48 hours." },
  { num: 3, title: "Create Workshop", desc: "Set up your first workshop with our easy-to-use tools." },
  { num: 4, title: "Start Teaching", desc: "Welcome your first students and earn from doing what you love." },
];

const BecomeInstructor = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    expertise: "",
    experience: "",
    bio: "",
    portfolio: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.expertise) {
      toast.error("Please fill in all required fields.");
      return;
    }
    setSubmitted(true);
    toast.success("Application submitted successfully!");
  };

  const updateField = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-background">
      <LinkedInNav searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

      <div className="max-w-linkedin mx-auto px-4 py-4">
        {/* Back button */}
        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary mb-4 font-semibold"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Feed
        </button>

        {submitted ? (
          /* Success State */
          <div className="bg-card rounded-lg border border-border p-8 text-center max-w-lg mx-auto">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8 text-primary" />
            </div>
            <h2 className="text-xl font-semibold text-foreground mb-2">Application Submitted!</h2>
            <p className="text-sm text-muted-foreground mb-4">
              We'll review your application and get back to you within 48 hours. Check your email for updates.
            </p>
            <Button variant="linkedin" onClick={() => navigate("/")}>
              Back to Home
            </Button>
          </div>
        ) : (
          <div className="flex gap-6">
            {/* Left Column - Info */}
            <div className="flex-1 min-w-0 space-y-2">
              {/* Hero Card */}
              <div className="bg-card rounded-lg border border-border overflow-hidden">
                <div className="h-24 bg-gradient-to-r from-primary to-primary/70" />
                <div className="px-5 pb-5 -mt-6">
                  <div className="w-16 h-16 rounded-full border-4 border-card bg-primary/10 flex items-center justify-center mb-3">
                    <GraduationCap className="w-8 h-8 text-primary" />
                  </div>
                  <h1 className="text-xl font-semibold text-foreground">Become a SkillLoop Instructor</h1>
                  <p className="text-sm text-muted-foreground mt-1">
                    Share your passion, teach your craft, and earn money doing what you love. Join our growing community of local workshop instructors.
                  </p>
                </div>
              </div>

              {/* Stats */}
              <div className="bg-card rounded-lg border border-border p-4">
                <div className="grid grid-cols-4 gap-3">
                  {stats.map((s) => (
                    <div key={s.label} className="text-center">
                      <p className="text-lg font-bold text-primary">{s.value}</p>
                      <p className="text-[11px] text-muted-foreground">{s.label}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Benefits */}
              <div className="bg-card rounded-lg border border-border p-4">
                <h2 className="text-base font-semibold text-foreground mb-3">Why Teach on SkillLoop?</h2>
                <div className="grid grid-cols-2 gap-3">
                  {benefits.map(({ icon: Icon, title, desc }) => (
                    <div key={title} className="flex gap-3 p-3 rounded-lg bg-accent/50">
                      <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                        <Icon className="w-4 h-4 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-foreground">{title}</p>
                        <p className="text-xs text-muted-foreground leading-relaxed">{desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* How It Works */}
              <div className="bg-card rounded-lg border border-border p-4">
                <h2 className="text-base font-semibold text-foreground mb-3">How It Works</h2>
                <div className="flex items-start gap-0">
                  {steps.map((step, i) => (
                    <div key={step.num} className="flex-1 relative text-center px-2">
                      <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold mx-auto mb-2">
                        {step.num}
                      </div>
                      {i < steps.length - 1 && (
                        <div className="absolute top-4 left-[calc(50%+16px)] right-[calc(-50%+16px)] h-[2px] bg-border" />
                      )}
                      <p className="text-xs font-semibold text-foreground">{step.title}</p>
                      <p className="text-[11px] text-muted-foreground leading-snug mt-0.5">{step.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Testimonial */}
              <div className="bg-card rounded-lg border border-border p-4">
                <div className="flex items-start gap-3">
                  <div className="w-12 h-12 rounded-full bg-primary/15 flex items-center justify-center text-primary font-bold shrink-0">
                    M
                  </div>
                  <div>
                    <p className="text-sm text-foreground italic leading-relaxed">
                      "Teaching on SkillLoop has been incredible. I went from hosting occasional classes to running 3 workshops a week. The platform handles everything — bookings, payments, reviews."
                    </p>
                    <p className="text-xs font-semibold text-foreground mt-2">Maria Chen</p>
                    <p className="text-xs text-muted-foreground">Ceramic Artist · 128 reviews · 4.9★</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Application Form (sticky) */}
            <div className="w-[340px] shrink-0 hidden md:block">
              <div className="sticky top-[68px]">
                <div className="bg-card rounded-lg border border-border overflow-hidden">
                  <div className="px-4 py-3 border-b border-border">
                    <h3 className="text-base font-semibold text-foreground flex items-center gap-2">
                      <Briefcase className="w-4 h-4 text-primary" />
                      Apply to Teach
                    </h3>
                    <p className="text-xs text-muted-foreground mt-0.5">Takes about 3 minutes</p>
                  </div>

                  <form onSubmit={handleSubmit} className="p-4 space-y-3">
                    <div>
                      <label className="text-xs font-semibold text-foreground block mb-1">Full Name *</label>
                      <Input
                        placeholder="Your full name"
                        value={form.name}
                        onChange={(e) => updateField("name", e.target.value)}
                        className="text-sm h-9"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-semibold text-foreground block mb-1">Email *</label>
                      <Input
                        type="email"
                        placeholder="you@example.com"
                        value={form.email}
                        onChange={(e) => updateField("email", e.target.value)}
                        className="text-sm h-9"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-semibold text-foreground block mb-1">Area of Expertise *</label>
                      <div className="flex flex-wrap gap-1.5 mb-2">
                        {["Pottery", "Coding", "Cooking", "Art", "Photography", "Music", "Fitness", "Other"].map((tag) => (
                          <Badge
                            key={tag}
                            className={`cursor-pointer text-xs transition-colors ${
                              form.expertise === tag
                                ? "bg-primary text-primary-foreground"
                                : "bg-accent text-muted-foreground hover:bg-accent/80"
                            }`}
                            onClick={() => updateField("expertise", tag)}
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div>
                      <label className="text-xs font-semibold text-foreground block mb-1">Years of Experience</label>
                      <Input
                        placeholder="e.g. 5 years"
                        value={form.experience}
                        onChange={(e) => updateField("experience", e.target.value)}
                        className="text-sm h-9"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-semibold text-foreground block mb-1">Tell us about yourself</label>
                      <Textarea
                        placeholder="Share your teaching background, what makes your workshops unique..."
                        value={form.bio}
                        onChange={(e) => updateField("bio", e.target.value)}
                        className="text-sm min-h-[80px] resize-none"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-semibold text-foreground block mb-1">Portfolio / Website</label>
                      <Input
                        placeholder="https://..."
                        value={form.portfolio}
                        onChange={(e) => updateField("portfolio", e.target.value)}
                        className="text-sm h-9"
                      />
                    </div>
                    <Button type="submit" variant="linkedin" className="w-full mt-2">
                      Submit Application
                    </Button>
                    <p className="text-[11px] text-muted-foreground text-center">
                      By applying, you agree to our Terms and Instructor Guidelines.
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BecomeInstructor;
