
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        // mock user for demo purposes
        if (
          credentials?.email === "demo@example.com" &&
          credentials?.password === "password"
        ) {
          return { id: "1", name: "Demo User", email: "demo@example.com" };
        }
        return null;
      },
      
    }),
  ],
  pages: {
    signIn: "/login", // we’ll create this page
    signOut: "/",
  },
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
});

export { handler as GET, handler as POST };
