# HelpBridge - Volunteer & Charity Platform

A modern, full-stack platform connecting volunteers with nonprofits, events, and causes that need help — locally or globally.

## 🌟 Features

### User Roles

- **Volunteers** – Create profiles, browse events, apply to opportunities
- **Organizations** – Post needs, manage events, track impact
- **Admins** – Manage users, approve/reject listings, moderate content

### Core Functionality

- **Volunteer Opportunity Listings** with location-based filtering and categories
- **Registration & Profiles** for both volunteers and organizations
- **Event Management** with registration system and check-in/out
- **Impact Dashboard** tracking hours volunteered and certificates
- **Donations Module** with one-time and recurring donations
- **Communication Tools** with in-app messaging
- **Advanced Search & Filter** by cause, location, time, skills

## 🚀 Tech Stack

- **Frontend**: Next.js 14 with TypeScript
- **Styling**: Tailwind CSS with custom animations
- **Database**: MySQL with Prisma ORM
- **Authentication**: NextAuth.js
- **Payments**: Stripe for donations
- **Maps**: Mapbox for location services
- **UI Components**: Custom components with Lucide React icons

## 📦 Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd helpbridge
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env` file in the root directory:

   ```env
   # Database
   DATABASE_URL="mysql://username:password@localhost:3306/helpbridge"

   # NextAuth
   NEXTAUTH_URL="http://localhost:3000"
   NEXTAUTH_SECRET="your-secret-key-here"

   # Stripe (for donations)
   STRIPE_PUBLISHABLE_KEY="pk_test_your_stripe_publishable_key"
   STRIPE_SECRET_KEY="sk_test_your_stripe_secret_key"
   STRIPE_WEBHOOK_SECRET="whsec_your_webhook_secret"

   # Email (optional - for notifications)
   EMAIL_SERVER_HOST="smtp.gmail.com"
   EMAIL_SERVER_PORT=587
   EMAIL_SERVER_USER="your-email@gmail.com"
   EMAIL_SERVER_PASSWORD="your-app-password"

   # Mapbox (for location services)
   NEXT_PUBLIC_MAPBOX_TOKEN="your_mapbox_token"
   ```

4. **Set up the database**

   ```bash
   npx prisma generate
   npx prisma db push
   ```

5. **Run the development server**

   ```bash
   npm run dev
   ```

6. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🗄️ Database Setup

### MySQL Setup Options:

**Option 1: Local MySQL Installation**

1. Install MySQL on your system
2. Create a database: `CREATE DATABASE helpbridge;`
3. Update your `.env` file with your MySQL credentials

**Option 2: Docker MySQL**

```bash
docker run --name mysql-helpbridge -e MYSQL_ROOT_PASSWORD=password -e MYSQL_DATABASE=helpbridge -p 3306:3306 -d mysql:8.0
```

Then use: `DATABASE_URL="mysql://root:password@localhost:3306/helpbridge"`

**Option 3: PlanetScale (Cloud MySQL)**

1. Create an account at [planetscale.com](https://planetscale.com)
2. Create a new database
3. Use the provided connection string in your `.env` file

## 🏗️ Project Structure

```
helpbridge/
├── app/                    # Next.js app directory
│   ├── (auth)/            # Authentication routes
│   ├── (dashboard)/       # Dashboard routes
│   ├── api/               # API routes
│   ├── events/            # Event-related pages
│   ├── organizations/     # Organization pages
│   └── volunteers/        # Volunteer pages
├── components/            # Reusable UI components
│   ├── ui/               # Base UI components
│   ├── forms/            # Form components
│   └── layout/           # Layout components
├── lib/                  # Utility functions and configurations
├── prisma/               # Database schema and migrations
└── types/                # TypeScript type definitions
```

## 🎯 Key Features Implementation

### 1. User Authentication & Profiles

- Multi-role authentication (Volunteer, Organization, Admin)
- Profile creation and management
- Email verification

### 2. Event Management

- Create and manage volunteer opportunities
- Location-based filtering
- Category-based organization
- Registration and check-in system

### 3. Impact Tracking

- Volunteer hour tracking
- Impact metrics and reports
- Certificate generation

### 4. Donation System

- Secure payment processing with Stripe
- One-time and recurring donations
- Donation history and receipts

### 5. Communication

- In-app messaging system
- Email notifications
- Event reminders

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run db:generate` - Generate Prisma client
- `npm run db:push` - Push database schema
- `npm run db:studio` - Open Prisma Studio

## 🌍 Environment Variables

Make sure to set up all required environment variables in your `.env` file. See the installation section for the complete list.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🆘 Support

For support, email harithamihimal4@gmail.com or create an issue in the repository.

---

**HelpBridge** - Connecting hearts, building communities, making a difference.
