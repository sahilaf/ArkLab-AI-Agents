"use client";

import { Button } from "@/components/ui/button";
import { signIn, signOut, useSession } from "next-auth/react";

const Header = () => {
  const { data: session, status } = useSession();

  return (
    <header className="backdrop-blur-xl fixed left-0 right-0 top-0 z-50">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          {/* Logo + Title */}
          <div className="flex items-center gap-3">
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-emerald-300 to-lime-200 bg-clip-text text-transparent drop-shadow-sm">
                ArkLab AI Agents
              </h1>
              <p className="text-sm text-emerald-200/80">
                Discover the best AI agents for your needs
              </p>
            </div>
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-3">
            {status === "loading" ? (
              <p className="text-amber-200">Loading...</p>
            ) : session ? (
              <Button
                variant="outline"
                size="sm"
                className="border-red-400/30 text-red-200 bg-red-950/20 backdrop-blur-sm hover:bg-red-900/30 hover:text-white transition-all duration-300"
                onClick={() => signOut()}
              >
                Logout
              </Button>
            ) : (
              <Button
                variant="outline"
                size="sm"
                className=" border-amber-400/30 text-amber-200 bg-amber-950/20 backdrop-blur-sm hover:bg-amber-900/30 hover:text-white transition-all duration-300"
                onClick={() => signIn()}
              >
                Sign In
              </Button>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
