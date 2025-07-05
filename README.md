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



