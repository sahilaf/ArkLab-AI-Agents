"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ReactNode } from "react";

interface AuthCardProps {
  title: string;
  children: ReactNode;
  footerText: string;
  footerLinkText: string;
  footerLinkHref: string;
}

export const AuthCard = ({
  title,
  children,
  footerText,
  footerLinkText,
  footerLinkHref,
}: AuthCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-md"
    >
      <div className="bg-gradient-to-br from-[#0f1c10]/50 via-[#1e1a0f]/40 to-[#142a12]/40 border border-[#2f3b2f]/30 backdrop-blur-md rounded-2xl p-8 shadow-xl shadow-amber-400/10">
        <div className="text-center mb-8">
          <div className="bg-gradient-to-r from-amber-400 to-lime-400 text-transparent bg-clip-text">
            <h1 className="text-4xl font-bold mb-2">EMERGE</h1>
          </div>
          <h2 className="text-2xl font-bold text-slate-100">{title}</h2>
          <p className="text-emerald-400 mt-2">Continue to your account</p>
        </div>

        <div className="space-y-4">{children}</div>

        <div className="mt-8 text-center text-sm text-emerald-500">
          {footerText}{" "}
          <Link
            href={footerLinkHref}
            className="text-amber-400 hover:text-amber-300 font-medium transition-colors"
          >
            {footerLinkText}
          </Link>
        </div>
      </div>
    </motion.div>
  );
};
