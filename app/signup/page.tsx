"use client";

import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";
import { AuthCard } from "../components/AuthCard";
import { motion } from "framer-motion";

export default function SignupPage() {
  return (
    <div className="bg-zinc-950 min-h-screen flex flex-col items-center justify-center px-4">
      <div className="relative z-10 flex flex-col items-center justify-center w-full">
        <AuthCard 
          title="Create your account"
          footerText="Already have an account?"
          footerLinkText="Login"
          footerLinkHref="/login"
        >
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
          >
            <Button 
              onClick={() => signIn("google", { callbackUrl: "/" })}
              className="w-full bg-gradient-to-r from-emerald-600 to-emerald-800 text-white hover:from-emerald-700 hover:to-emerald-900 transition-all duration-300 h-12 text-base"
            >
              Sign up with Google
            </Button>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="relative py-4"
          >
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-emerald-900/50"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-zinc-950 text-emerald-300/80">
                Or continue with
              </span>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <Button
              onClick={() =>
                signIn("credentials", {
                  email: "demo@example.com",
                  password: "password",
                  callbackUrl: "/",
                })
              }
              className="w-full bg-zinc-800 border border-emerald-900/50 text-emerald-200 hover:bg-zinc-700 hover:border-emerald-800 transition-all duration-300 h-12 text-base"
            >
              Sign up with Demo Account
            </Button>
          </motion.div>
        </AuthCard>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="mt-8 text-center text-sm text-emerald-500 max-w-md"
        >
          <p>
            By signing up, you agree to our Terms of Service and Privacy Policy.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
