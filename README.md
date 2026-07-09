🚗 CarVault

CarVault is a modern Next.js web application that helps you keep track of your vehicles in one place. Store important car information, monitor upcoming service dates, and never miss routine maintenance again.

Perfect for anyone who owns one or multiple vehicles and wants an easy way to organize maintenance history.

✨ Features
🚘 Add and manage multiple vehicles
📝 Store important car details
-Make
-Model
-Year
-Registration
-VIN (optional)
🔧 Track service & maintenance dates
📅 Get an overview of upcoming service checks
☁️ Cloud database powered by Supabase
⚡ Fast and responsive UI built with Next.js
🛠️ Technologies Used
-Next.js (App Router)
-React
-JavaScript
-Supabase
-CSS
-ESLint
-PostCSS
-Node.js
-npm

Project structure includes:

carvault/
│
├── src/app/
│   ├── layout.js
│   ├── page.js
│   ├── globals.css
│   └── favicon.ico
│
├── lib/
│   └── supabase.js
│
├── public/
├── .env.local
├── next.config.mjs
├── postcss.config.mjs
├── eslint.config.mjs
├── package.json
└── README.md

🚀 Getting Started
1. Clone the repository
git clone https://github.com/yourusername/carvault.git
2. Navigate into the project
cd carvault
3. Install dependencies
npm install

or

npm i

4. Create a Supabase project

Go to:

https://supabase.com

Create a new project.

Wait until the database finishes provisioning.

5. Get your Supabase URL & Public API Key

Inside your Supabase project:

Settings → API

Copy:

Project URL
Project API Key (anon/public)

Create a file named:

.env.local

Add:

NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_public_anon_key

Restart the development server after creating the .env.local file.

6. Run the development server
npm run dev

Open:

http://localhost:3000
📂 Database Setup

Create the required tables inside Supabase according to the application requirements.

Example tables:

Cars
id
make
model
year
registration
vin
Services
id
car_id
service_type
service_date
notes
📦 Available Scripts

Start development server

npm run dev

Build production version

npm run build

Run production server

npm start

Run ESLint

npm run lint
⚠️ Common Errors & Fixes
Missing environment variables

Error

Missing Supabase URL

Solution

Make sure .env.local exists and contains:

NEXT_PUBLIC_SUPABASE_URL=...
NEXT_PUBLIC_SUPABASE_ANON_KEY=...

Restart the server afterwards.

Module not found

Error

Module not found

Solution

Install dependencies:

npm install
Cannot find package

Error

Cannot find module...

Solution

Delete and reinstall dependencies:

rm -rf node_modules package-lock.json
npm install

Windows (PowerShell):

Remove-Item node_modules -Recurse -Force
Remove-Item package-lock.json
npm install
Port 3000 already in use

Error

EADDRINUSE

Solution

Close the process using port 3000, or run:

npm run dev -- -p 3001
Invalid Supabase API Key

Error

Invalid API key

Solution

Ensure you're using the anon/public key, not the service role key.

Failed to fetch

Possible causes:

Incorrect Supabase URL
Database tables don't exist
Row Level Security (RLS) blocks requests
Internet connection issues
npm command not found

Install Node.js from:

https://nodejs.org

Verify installation:

node -v
npm -v
Changes are not updating

Try restarting the development server:

Ctrl + C
npm run dev
📌 Future Improvements
User authentication
Service reminders & notifications
Vehicle image uploads
Fuel consumption tracking
Expense history
Export maintenance records
Mobile-friendly improvements
🤝 Contributing

Contributions, suggestions, and pull requests are welcome.

If you find a bug or have an idea for a new feature, feel free to open an issue.

📄 License

This project is licensed under the MIT License.

⭐ If you like this project, consider giving it a star on GitHub!
