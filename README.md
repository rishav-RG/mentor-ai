# 🚀 MentorAI - Your AI-Powered Career Coach

[![Next.js](https://img.shields.io/badge/Next.js-15.5.2-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.1.0-61DAFB?style=for-the-badge&logo=react)](https://reactjs.org/)
[![ShadCN UI](https://img.shields.io/badge/ShadCN%2FUI-Components-000000?style=for-the-badge&logo=shadcnui)](https://ui.shadcn.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-Ready-3178C6?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![Clerk](https://img.shields.io/badge/Clerk-Authentication-6C47FF?style=for-the-badge&logo=clerk)](https://clerk.com/)
[![Prisma](https://img.shields.io/badge/Prisma-ORM-2D3748?style=for-the-badge&logo=prisma)](https://www.prisma.io/)

> **MentorAI** is a comprehensive, AI-powered career development platform that helps professionals accelerate their career growth through personalized guidance, industry insights, and intelligent tools powered by Google Gemini AI.

## ✨ Features

### 🎨 **Interactive UI & Design**

- **Theme Switching**: Beautiful light/dark mode toggle for optimal user experience
- **Responsive Design**: Seamless experience across all device sizes
- **Modern Animations**: Smooth transitions and engaging visual effects
- **Professional Layout**: Clean, intuitive interface built with shadcn/ui components

### 📊 **Industry Insights Dashboard**

- **Real-time Data Visualization**: Interactive charts and graphs powered by Recharts
- **AI-Generated Industry Analysis**: Comprehensive market insights from Google Gemini API
- **Salary Benchmarking**: Current salary ranges across different roles and locations
- **Market Trends**: Industry growth rates, demand levels, and future outlook
- **Skills Intelligence**: Top in-demand skills and learning recommendations
- **Weekly Auto-Updates**: Background jobs using Inngest for fresh data

### 🛠️ **Career Growth Tools**

#### 📄 **AI Resume Builder**

- **Smart Content Generation**: AI-powered resume content using Gemini API
- **Real-time Preview**: Live editing with instant PDF export

#### ✉️ **Cover Letter Generator**

- **Personalized Creation**: Tailored cover letters based on job descriptions
- **Company Research Integration**: AI analyzes company information for customization

#### 🎯 **Interview Preparation Suite**

- **Interactive Quiz System**: Practice with industry-specific questions
- **Performance Analytics**: Track progress with detailed charts and metrics
- **Mock Interview Simulator**: AI-powered interview practice sessions
- **Feedback & Improvement**: Personalized tips based on performance data

### 🔐 **Authentication & User Management**

- **Secure Authentication**: Powered by Clerk with multiple sign-in options
- **User Onboarding**: Guided setup process for personalized experience
- **Profile Management**: Comprehensive user profiles with skill tracking
- **Progress Tracking**: Monitor career development journey

## 🛠️ Tech Stack

### **Frontend**

- **Framework**: Next.js 15.5.2 with App Router
- **UI Library**: React 19.1.0
- **Styling**: Tailwind CSS 4.0 + shadcn/ui components
- **Charts**: Recharts for data visualization
- **Icons**: Lucide React
- **Theme**: next-themes for light/dark mode

### **Backend & Database**

- **Database**: PostgreSQL hosted on Neon
- **ORM**: Prisma for type-safe database operations
- **Authentication**: Clerk for secure user management
- **Background Jobs**: Inngest for scheduled tasks

### **AI & APIs**

- **AI Provider**: Google Gemini API for content generation
- **PDF Generation**: html2pdf.js for resume exports
- **Form Handling**: React Hook Form with Zod validation

### **Development & Deployment**

- **Language**: JavaScript/TypeScript
- **Package Manager**: npm
- **Linting**: ESLint
- **Version Control**: Git

## 🚀 Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm or yarn package manager
- PostgreSQL database (Neon recommended)
- Clerk account for authentication
- Google AI Studio account for Gemini API

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/rishav-RG/mentor-ai.git
   cd mentor-ai
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up environment variables**

   Create a `.env.local` file in the root directory:

   ```env
   # Clerk Authentication
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
   CLERK_SECRET_KEY=your_clerk_secret_key

   # Clerk Routing
   NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
   NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
   NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/onboarding
   NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/onboarding

   # Database
   DATABASE_URL=your_postgresql_connection_string

   # Google Gemini AI
   GEMINI_API_KEY=your_gemini_api_key

   # Inngest (Optional - for background jobs)
   INNGEST_EVENT_KEY=your_inngest_event_key
   INNGEST_SIGNING_KEY=your_inngest_signing_key
   ```

4. **Set up the database**

   ```bash
   npx prisma generate
   npx prisma migrate dev --name init
   ```

5. **Run the development server**

   ```bash
   npm run dev
   ```

6. **Open your browser**

   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
mentor-ai/
├── app/                        # Next.js App Router pages
│   ├── (auth)/                 # Authentication routes
│   ├── (main)/                 # Protected application routes
│   │   ├── dashboard/          # Industry insights dashboard
│   │   ├── resume/             # Resume builder
│   │   ├── ai-cover-letter/    # Cover letter generator
│   │   ├── interview/          # Interview preparation
│   │   └── onboarding/         # User onboarding
│   └── api/                    # API routes
├── actions/                    # Server actions
├── components/                 # Reusable UI components
├── lib/                        # Utility functions and configurations
├── prisma/                     # Database schema and migrations
└── public/                     # Static assets
```

## 🎯 Key Features Walkthrough

### 1. **Industry Insights Dashboard**

- View comprehensive industry analysis with interactive charts
- Compare salary ranges across different roles and locations
- Track market trends and growth opportunities
- Get AI-powered recommendations for skill development

### 2. **Resume Builder**

- Create professional resumes with AI assistance
- Get ATS optimization scores and suggestions
- Export to PDF with multiple template options
- Receive personalized feedback for improvement

### 3. **Cover Letter Generator**

- Generate tailored cover letters for specific job applications
- AI analyzes job descriptions for keyword optimization
- Save multiple versions for different opportunities
- Get suggestions for compelling, personalized content

### 4. **Interview Preparation**

- Practice with industry-specific question banks
- Track performance with detailed analytics
- Get personalized improvement suggestions
- Simulate real interview scenarios

## 🔧 Configuration

### Database Schema

The application uses Prisma with the following main models:

- **User**: User profiles and preferences
- **Assessment**: Interview quiz results and analytics
- **Resume**: User resume data and ATS scores
- **CoverLetter**: Generated cover letters
- **IndustryInsight**: AI-generated industry data

### Background Jobs

Inngest handles scheduled tasks:

- Weekly industry data updates from Gemini API
- User analytics processing
- Email notifications and reminders

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) for the incredible React framework
- [Clerk](https://clerk.com/) for seamless authentication
- [Prisma](https://prisma.io/) for the excellent ORM
- [Google Gemini](https://ai.google.dev/) for powerful AI capabilities
- [shadcn/ui](https://ui.shadcn.com/) for beautiful UI components
- [Neon](https://neon.tech/) for reliable PostgreSQL hosting

---

<div align="center">
  <p>Built with ❤️ by <a href="https://github.com/rishav-RG">Rishav Goyal</a></p>
  <p>⭐ Star this repository if it helped you!</p>
</div>
