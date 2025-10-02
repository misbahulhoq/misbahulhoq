"use client";
import React, { ChangeEvent, FormEvent, useTransition, useState } from "react";
import {
  Mail,
  Lock,
  Eye,
  EyeOff,
  ArrowRight,
  Shield,
  Sparkles,
  LoaderIcon,
} from "lucide-react";
import { baseUrl } from "@/lib/baseUrl";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    isRememberMe: false,
  });
  const [isPending, startLogin] = useTransition();
  const router = useRouter();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    startLogin(() => {
      fetch(`${baseUrl}/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
        credentials: "include", //make sure that cookies are set and sent with the request.
      }).then((res) => {
        if (res.ok) {
          res.json().then(() => {
            toast.success("Login successful! Redirecting to dashboard.");
            router.push("/dashboard");
          });
        }
      });
    });
  };

  return (
    <div className="min-h-screen bg-background relative overflow-hidden flex items-center justify-center ">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-primary rounded-full opacity-20 blur-3xl -top-48 -left-48 animate-pulse"></div>
        <div
          className="absolute w-96 h-96 bg-accent rounded-full opacity-20 blur-3xl top-1/2 right-0 animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute w-96 h-96 bg-primary rounded-full opacity-20 blur-3xl -bottom-48 -right-48 animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(currentColor 1px, transparent 1px), linear-gradient(90deg, currentColor 1px, transparent 1px)`,
          backgroundSize: "50px 50px",
          color: "var(--foreground)",
        }}
      ></div>

      {/* Main Content */}
      <div className="relative container mx-auto px-5">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left Side - Branding & Info */}
          <div className="hidden lg:block space-y-8">
            <div className="space-y-6">
              {/* Logo/Brand */}
              <div className="inline-flex items-center gap-3 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full">
                <Sparkles className="w-5 h-5 text-primary" />
                <span className="text-primary font-semibold">
                  Portfolio Admin
                </span>
              </div>

              {/* Heading */}
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                  Welcome Back to Your
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent mt-2">
                    Creative Space
                  </span>
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Manage your portfolio, update projects, and track your
                  analytics all in one place.
                </p>
              </div>

              {/* Feature List */}
              <div className="space-y-4 pt-4">
                {[
                  { icon: Shield, text: "Secure & encrypted authentication" },
                  { icon: Sparkles, text: "Real-time portfolio updates" },
                  { icon: ArrowRight, text: "Advanced analytics dashboard" },
                ].map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 text-muted-foreground"
                  >
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <feature.icon className="w-5 h-5 text-primary" />
                    </div>
                    <span>{feature.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side - Login Form */}
          <div className="w-full">
            <div className="bg-card border border-border rounded-2xl shadow-2xl p-8 lg:p-10 relative group">
              {/* Gradient border effect */}
              <div className="absolute -inset-[1px] bg-gradient-to-r from-primary to-accent rounded-2xl opacity-0 group-hover:opacity-20 blur transition duration-500 -z-10"></div>

              {/* Mobile Logo */}
              <div className="lg:hidden mb-8 text-center">
                <div className="inline-flex items-center gap-3 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-4">
                  <Sparkles className="w-5 h-5 text-primary" />
                  <span className="text-primary font-semibold">
                    Portfolio Admin
                  </span>
                </div>
              </div>

              {/* Form Header */}
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-foreground mb-2">
                  Sign In
                </h2>
                <p className="text-muted-foreground">
                  Enter your credentials to access your dashboard
                </p>
              </div>

              {/* Form Fields */}
              <form className="space-y-4" onSubmit={handleSubmit}>
                {/* Email Field */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full pl-11 pr-4 py-3 bg-background border border-input rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                      placeholder="you@example.com"
                    />
                  </div>
                </div>

                {/* Password Field */}
                <div>
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Password
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <input
                      type={showPassword ? "text" : "password"}
                      id="password"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      className="w-full pl-11 pr-12 py-3 bg-background border border-input rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                      placeholder="••••••••"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {showPassword ? (
                        <EyeOff className="w-5 h-5" />
                      ) : (
                        <Eye className="w-5 h-5" />
                      )}
                    </button>
                  </div>
                </div>

                {/* Remember Me  */}
                {
                  <div className="flex items-center justify-between">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        className="w-4 h-4 rounded border-input text-primary focus:ring-2 focus:ring-primary"
                        onChange={(e) => {
                          setFormData({
                            ...formData,
                            isRememberMe: e.target.checked,
                          });
                        }}
                      />
                      <span className="text-sm text-muted-foreground">
                        Remember me
                      </span>
                    </label>
                  </div>
                }

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isPending}
                  className="w-full group relative px-8 py-3 bg-primary text-primary-foreground font-semibold rounded-lg overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-primary/50"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    {isPending ? "Signing in..." : "Sign In"}
                    {isPending ? (
                      <LoaderIcon className="h-5 w-5 animate-spin" />
                    ) : (
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    )}
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
              </form>
            </div>

            {/* Security Badge */}
            <div className="mt-6 text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-card border border-border rounded-full">
                <Shield className="w-4 h-4 text-accent" />
                <span className="text-xs text-muted-foreground">
                  Secured with 256-bit encryption
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
