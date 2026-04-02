# HIPRO - One Stop Creative Solution Company

HIPRO is a creative production and documentary solution platform designed to turn complexity into clarity with engaging content.

## 🚀 VPS Installation (Recommended: Docker)

The easiest way to deploy HIPRO on your VPS is using Docker.

### 1. Prerequisites
Ensure you have Docker and Docker Compose installed on your VPS.

### 2. Deployment Steps
```bash
# 1. Clone the repository
git clone git@github.com:rajaklana/hipro.v1.git
cd hipro.v1

# 2. Build the Docker image
docker build -t hipro-app .

# 3. Run the container
# Mapping VPS port 80 to container port 80
docker run -d --name hipro-container -p 80:80 hipro-app
```

Your site should now be live at your VPS IP address or domain.

---

## 🛠️ Manual Installation (Node.js)

If you prefer to run it without Docker:

### 1. Prerequisites
- Node.js (v20 or higher)
- npm

### 2. Setup
```bash
# 1. Clone the repository
git clone git@github.com:rajaklana/hipro.v1.git
cd hipro.v1

# 2. Install dependencies
npm install

# 3. Build for production
npm run build

# 4. Preview or Serve
# You can use 'serve' or any static file server to serve the ./dist folder
npx serve dist
```

---

## 🎨 UI & Design
- **Global Scaling**: The UI is scaled by **130%** by default to provide a better viewing experience.
- **Framework**: Built with [Astro](https://astro.build/) and [Tailwind CSS](https://tailwindcss.com/).

## 🧞 Commands
| Command | Action |
| :--- | :--- |
| `npm run dev` | Starts local dev server at `localhost:4321` |
| `npm run build` | Build your production site to `./dist/` |
| `npm run preview` | Preview your build locally |

## 📁 Project Structure
```text
/
├── public/          # Static assets (favicons, etc.)
├── src/
│   ├── assets/      # Images and other assets
│   ├── components/  # Astro components (Hero, Stats, etc.)
│   ├── layouts/     # Page layouts
│   ├── styles/      # Global CSS (scaling logic here)
│   └── pages/       # Main routes
├── Dockerfile       # Production build configuration
└── tailwind.config.mjs
```
