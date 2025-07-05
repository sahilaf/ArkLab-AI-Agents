# ArkLab AI Agents Catalog

A responsive, SEO-friendly Next.js application showcasing a catalog of mock AI agents — featuring user authentication with Google OAuth and demo credentials using NextAuth.js.

---

## 🚀 Features

- **AI Agents Catalog**  
  Responsive grid displaying AI agents with name, description, status, category, and pricing.

- **User Authentication**  
  - Sign up / log in with Google OAuth  
  - Sign up / log in with demo credentials (`demo@example.com` / `password`)  
  - Session management & logout using [NextAuth.js](https://next-auth.js.org/)

- **Server-Side Rendering (SSR)** for SEO and performance.

- **Modern UI Components**  
  Built with [Shadcn UI](https://ui.shadcn.com/) and subtle animations via [Framer Motion](https://www.framer.com/motion/).

- **State Management** with Redux (agent list, filters, session state).

---

## 📋 Setup Instructions

### Prerequisites

- Node.js (v16 or above)  
- Google Cloud project with OAuth 2.0 credentials (for Google login)

### Steps

1. **Clone the repo:**

   ```bash
   git clone https://github.com/yourusername/arklab-ai-agents.git
   cd arklab-ai-agents

2. **Install dependencies:**
   ```bash
   npm install

3. **Create .env.local at project root with:**
    ```bash
    GOOGLE_CLIENT_ID=your-google-client-id.apps.googleusercontent.com
    GOOGLE_CLIENT_SECRET=your-google-client-secret
    NEXTAUTH_SECRET=your-random-secret-string

4. **Start development server:**
   ```bash
   npm run dev

5. **Open in browser:**
Visit http://localhost:3000



## 🎨 Key Design Decisions & Challenges

### Next.js App Router & SSR
- Leveraged React Server Components for initial data fetching of AI agents, ensuring the content is SEO-friendly by rendering on the server.

### Authentication with NextAuth.js
- Integrated Google OAuth alongside a mock credentials provider for demo purposes.
- Managed session state with `SessionProvider` and secure redirects for smooth UX.

### Client-side Filtering & State Management
- Used Redux to manage filters and agent state, ensuring responsive UI updates without full page reloads.

### Animations
- Used Framer Motion for subtle UI polish, like card hover effects, enhancing user experience without overwhelming.

### Challenge
- Handling redirect behavior post-login was tricky due to NextAuth’s callback URL handling with the Next.js App Router.
- Setting `callbackUrl` explicitly and `NEXTAUTH_URL` environment variable solved this.

---

## 🔐 Google OAuth 2.0 Integration

- Used the [next-auth](https://next-auth.js.org/) library’s `GoogleProvider` for OAuth.
- Created OAuth credentials in Google Cloud Console with redirect URI:  
  `http://localhost:3000/api/auth/callback/google`
- Stored credentials securely in `.env.local`.
- Managed session with NextAuth’s JWT strategy.
- Handled sign-in redirects by passing `callbackUrl: "/"` to `signIn()` calls.
- **Note:** Since this is a demo, user persistence is not implemented; all Google logins are accepted without database checks.

---

## 📝 Future Improvements

- Add database integration (e.g., Prisma + PostgreSQL) to persist users and AI agents.
- Implement full user sign-up flow, user profiles, and secure route protection.
- Enhance filtering with multi-select and better UX.
- Add unit and integration tests.

---

## ⚖️ License

MIT License © Your Name
