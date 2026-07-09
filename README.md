# 🚗 CarVault

CarVault is a modern web application built with **Next.js** that helps you manage your vehicles and keep track of important service and maintenance dates. Instead of forgetting when your next oil change, inspection, or service is due, CarVault stores everything securely in a cloud database powered by Supabase.

Whether you own one car or several, CarVault keeps all your vehicle information organized in one place.

---

# ✨ Features

- 🚘 Add multiple vehicles
- 📝 Save vehicle details
- 🔧 Track service and maintenance dates
- 📅 Never miss upcoming services
- ☁️ Cloud database with Supabase
- ⚡ Fast and responsive interface
- 📱 Modern Next.js App Router structure

---

# 🛠 Technologies Used

- Next.js 15 (App Router)
- React
- JavaScript (ES6)
- Supabase
- Node.js
- npm
- CSS
- PostCSS
- ESLint

---

# 📁 Project Structure

```
carvault/
│
├── src/
│   └── app/
│       ├── favicon.ico
│       ├── globals.css
│       ├── layout.js
│       └── page.js
│
├── lib/
│   └── supabase.js
│
├── public/
│
├── .env.local
├── package.json
├── package-lock.json
├── next.config.mjs
├── eslint.config.mjs
├── postcss.config.mjs
├── jsconfig.json
└── README.md
```

---

# 🚀 Installation

## 1. Clone the repository

```bash
git clone https://github.com/YOUR_USERNAME/carvault.git
```

Replace `YOUR_USERNAME` with your GitHub username.

---

## 2. Navigate into the project

```bash
cd carvault
```

---

## 3. Install dependencies

```bash
npm install
```

or

```bash
npm i
```

---

# ☁️ Setting Up Supabase

## Step 1

Go to:

https://supabase.com

Create a free account if you don't already have one.

---

## Step 2

Create a new project.

Wait until the database finishes provisioning.

---

## Step 3

Open your project dashboard.

Navigate to:

```
Settings
    ↓
API
```

You will see:

- Project URL
- Project API Keys

Copy the following:

- Project URL
- anon public API key

Do **NOT** use the Service Role Key.

---

## Step 4

Create a file in the root of the project called:

```
.env.local
```

Paste the following:

```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_public_anon_key
```

Example:

```env
NEXT_PUBLIC_SUPABASE_URL=https://abcxyz.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGc...
```

Save the file.

Restart your development server if it was already running.

---

# ▶ Running the Project

Start the development server:

```bash
npm run dev
```

Open your browser and visit:

```
http://localhost:3000
```

---

# 📦 Available Commands

Install packages

```bash
npm install
```

Run development server

```bash
npm run dev
```

Build production version

```bash
npm run build
```

Start production server

```bash
npm start
```

Run ESLint

```bash
npm run lint
```

---

# 🗄 Suggested Database Tables

## cars

| Column | Type |
|---------|------|
| id | uuid |
| make | text |
| model | text |
| year | integer |
| registration | text |
| vin | text |

---

## services

| Column | Type |
|---------|------|
| id | uuid |
| car_id | uuid |
| service_type | text |
| service_date | date |
| notes | text |

---

# ⚠ Common Errors

## Missing Environment Variables

**Error**

```
Missing Supabase URL
```

**Solution**

Make sure `.env.local` exists and contains:

```env
NEXT_PUBLIC_SUPABASE_URL=...
NEXT_PUBLIC_SUPABASE_ANON_KEY=...
```

Restart the server afterwards.

---

## Invalid API Key

**Error**

```
Invalid API key
```

**Solution**

Make sure you're using the **Anon Public Key** and not the **Service Role Key**.

---

## Module Not Found

**Error**

```
Module not found
```

**Solution**

Run:

```bash
npm install
```

---

## Cannot find module

Delete dependencies and reinstall.

Linux/macOS

```bash
rm -rf node_modules
rm package-lock.json
npm install
```

Windows PowerShell

```powershell
Remove-Item node_modules -Recurse -Force
Remove-Item package-lock.json
npm install
```

---

## Port 3000 already in use

**Error**

```
EADDRINUSE
```

Run on another port:

```bash
npm run dev -- -p 3001
```

or close the application already using port 3000.

---

## Failed to Fetch

Possible reasons:

- Wrong Supabase URL
- Wrong API key
- Database tables do not exist
- Row Level Security (RLS) prevents access
- No internet connection

---

## npm is not recognized

Install Node.js:

https://nodejs.org

Verify installation:

```bash
node -v
npm -v
```

---

## Changes don't appear

Restart the server:

```bash
Ctrl + C
npm run dev
```

---

# 🚀 Future Improvements

- User Authentication
- Email Login
- Vehicle Images
- Service Reminders
- Notifications
- Fuel Consumption Tracker
- Maintenance History
- Expense Tracking
- Search & Filter Vehicles
- Export Service History as PDF
- Dark Mode

---

---

# 👨‍💻 Developer

Developed by **Merd**.

If you have any questions, suggestions, or would like to collaborate, feel free to reach out!

### 📬 Contact

- 🌐 Website: https://merdlabs.xyz
- 📷 Instagram: https://instagram.com/gottalovemerdd
- 📧 Email: merdshesaid@gmail.com

---

# ⭐ Support

If you found this project useful, consider giving it a ⭐ on GitHub!

If you discover any bugs or have ideas for new features, feel free to open an issue or submit a pull request.

---

# 📄 License

This project is licensed under the MIT License.
>>>>>>> 2a493d49a20b4a6a35aa7607b19e45c1d9d1813a
