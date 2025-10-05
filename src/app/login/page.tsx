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
            setTimeout(() => {
              router.push("/dashboard");
            }, 1000);
          });
        } else {
          toast.error("Invalid credentials.");
        }
      });
    });
  };

  return (
    <div className="bg-background relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="bg-primary absolute -top-48 -left-48 h-96 w-96 animate-pulse rounded-full opacity-20 blur-3xl"></div>
        <div
          className="bg-accent absolute top-1/2 right-0 h-96 w-96 animate-pulse rounded-full opacity-20 blur-3xl"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="bg-primary absolute -right-48 -bottom-48 h-96 w-96 animate-pulse rounded-full opacity-20 blur-3xl"
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
        <div className="grid items-center gap-8 lg:grid-cols-2">
          {/* Left Side - Branding & Info */}
          <div className="hidden space-y-8 lg:block">
            <div className="space-y-6">
              {/* Logo/Brand */}
              <div className="bg-primary/10 border-primary/20 inline-flex items-center gap-3 rounded-full border px-4 py-2">
                <Sparkles className="text-primary h-5 w-5" />
                <span className="text-primary font-semibold">
                  Portfolio Admin
                </span>
              </div>

              {/* Heading */}
              <div className="space-y-4">
                <h1 className="text-foreground text-5xl leading-tight font-bold lg:text-6xl">
                  Welcome Back to Your
                  <span className="from-primary to-accent mt-2 block bg-gradient-to-r bg-clip-text text-transparent">
                    Creative Space
                  </span>
                </h1>
                <p className="text-muted-foreground text-lg leading-relaxed">
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
                    className="text-muted-foreground flex items-center gap-3"
                  >
                    <div className="bg-primary/10 flex h-10 w-10 items-center justify-center rounded-lg">
                      <feature.icon className="text-primary h-5 w-5" />
                    </div>
                    <span>{feature.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side - Login Form */}
          <div className="w-full">
            <div className="bg-card border-border group relative rounded-2xl border p-8 shadow-2xl lg:p-10">
              {/* Gradient border effect */}
              <div className="from-primary to-accent absolute -inset-[1px] -z-10 rounded-2xl bg-gradient-to-r opacity-0 blur transition duration-500 group-hover:opacity-20"></div>

              {/* Mobile Logo */}
              <div className="mb-8 text-center lg:hidden">
                <div className="bg-primary/10 border-primary/20 mb-4 inline-flex items-center gap-3 rounded-full border px-4 py-2">
                  <Sparkles className="text-primary h-5 w-5" />
                  <span className="text-primary font-semibold">
                    Portfolio Admin
                  </span>
                </div>
              </div>

              {/* Form Header */}
              <div className="mb-8">
                <h2 className="text-foreground mb-2 text-3xl font-bold">
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
                    className="text-foreground mb-2 block text-sm font-medium"
                  >
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail className="text-muted-foreground absolute top-1/2 left-3 h-5 w-5 -translate-y-1/2" />
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="bg-background border-input text-foreground placeholder:text-muted-foreground focus:ring-primary w-full rounded-lg border py-3 pr-4 pl-11 transition-all focus:border-transparent focus:ring-2 focus:outline-none"
                      placeholder="you@example.com"
                      required
                    />
                  </div>
                </div>

                {/* Password Field */}
                <div>
                  <label
                    htmlFor="password"
                    className="text-foreground mb-2 block text-sm font-medium"
                  >
                    Password
                  </label>
                  <div className="relative">
                    <Lock className="text-muted-foreground absolute top-1/2 left-3 h-5 w-5 -translate-y-1/2" />
                    <input
                      type={showPassword ? "text" : "password"}
                      id="password"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      className="bg-background border-input text-foreground placeholder:text-muted-foreground focus:ring-primary w-full rounded-lg border py-3 pr-12 pl-11 transition-all focus:border-transparent focus:ring-2 focus:outline-none"
                      placeholder="••••••••"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="text-muted-foreground hover:text-foreground absolute top-1/2 right-3 -translate-y-1/2 transition-colors"
                    >
                      {showPassword ? (
                        <EyeOff className="h-5 w-5" />
                      ) : (
                        <Eye className="h-5 w-5" />
                      )}
                    </button>
                  </div>
                </div>

                {/* Remember Me  */}
                {
                  <div className="flex items-center justify-between">
                    <label className="flex cursor-pointer items-center gap-2">
                      <input
                        type="checkbox"
                        className="border-input text-primary focus:ring-primary h-4 w-4 rounded focus:ring-2"
                        onChange={(e) => {
                          setFormData({
                            ...formData,
                            isRememberMe: e.target.checked,
                          });
                        }}
                      />
                      <span className="text-muted-foreground text-sm">
                        Remember me
                      </span>
                    </label>
                  </div>
                }

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isPending}
                  className="group bg-primary text-primary-foreground hover:shadow-primary/50 relative w-full overflow-hidden rounded-lg px-8 py-3 font-semibold transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    {isPending ? "Signing in..." : "Sign In"}
                    {isPending ? (
                      <LoaderIcon className="h-5 w-5 animate-spin" />
                    ) : (
                      <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                    )}
                  </span>
                  <div className="from-primary to-accent absolute inset-0 bg-gradient-to-r opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                </button>
              </form>
            </div>

            {/* Security Badge */}
            <div className="mt-6 text-center">
              <div className="bg-card border-border inline-flex items-center gap-2 rounded-full border px-4 py-2">
                <Shield className="text-accent h-4 w-4" />
                <span className="text-muted-foreground text-xs">
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
