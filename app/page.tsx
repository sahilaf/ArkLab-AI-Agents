"use client";
import { motion } from "framer-motion";
import Header from "./components/Header";
import { AuroraBackground } from "@/components/ui/aurora-background";
import CatalogPage from "./catalogue/page";

interface Agent {
  id: string;
  name: string;
  description: string;
  status: string;
  category: string;
  pricingModel: string;
  icon: string;
  featured: boolean;
}

const Index = () => {
  
  return (
    <div className="min-h-screen bg-zinc-950 relative overflow-hidden">
      {/* Ambient radial glow */}
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-800/20 rounded-full blur-3xl" />

      <div className="relative z-10 ">
        <Header />

        <AuroraBackground className="bg-zinc-950 h-auto ">
          {/* Hero section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
            className="relative flex flex-col gap-4 items-center justify-center px-4 py-20 md:py-32 mt-36 "
          >
            <h2 className="text-4xl md:text-6xl font-bold text-center text-white drop-shadow-xl">
              EMERGE TO LIGHT
            </h2>
            <p className="text-xl text-emerald-200/90 max-w-2xl mx-auto text-center drop-shadow">
              Find the perfect AI agent for your project. From language models to image generators,
              discover cutting-edge tools to supercharge your workflow.
            </p>
          </motion.div>

          {/* Main content with subtle fade-up animation */}
          <motion.main
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6, ease: "easeInOut" }}
            viewport={{ once: true }}
            className="container mx-auto px-4 py-8 -mt-20"
          >
            <CatalogPage/>
          </motion.main>
        </AuroraBackground>

        {/* Footer */}
        <footer className="border-t border-lime-900/30 bg-zinc-950 backdrop-blur-xl mt-20">
          <div className="container mx-auto px-4 py-8">
            <div className="text-center text-slate-500 text-sm">
              <p className="mb-2">© 2024 AI Agent Catalog. Discover the future of AI.</p>
              <p className="text-xs">Built with React, TypeScript, Tailwind CSS</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;
