import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, TrendingUp, BarChart3, PieChart } from "lucide-react";
import { Button } from "@/components/ui/button";

interface HeroProps {
  backgroundImage: string;
}

export default function Hero({ backgroundImage }: HeroProps) {
  return (
    <section className="relative w-full h-[60vh] md:h-[500px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />
      <div className="absolute inset-0 z-0 bg-gradient-to-t from-background via-background/80 to-background/40 backdrop-blur-[2px]" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto space-y-6"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-medium uppercase tracking-wider">
            <TrendingUp className="w-3 h-3" />
            Advanced Financial Modeling
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white drop-shadow-sm">
            Stock<span className="text-primary">Vision</span> AI
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Professional-grade option pricing and risk analysis tools. 
            Simulate markets with Monte Carlo, Black-Scholes, and Vasicek models.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <Button size="lg" className="rounded-full px-8 bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/20 transition-all hover:scale-105">
              Start Analysis <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
            <Button size="lg" variant="outline" className="rounded-full px-8 border-white/10 bg-white/5 hover:bg-white/10 text-white backdrop-blur-sm">
              Learn Methodologies
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Abstract Shapes */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-50" />
    </section>
  );
}
