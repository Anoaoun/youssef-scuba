# Youssef Scuba Diving Club - Setup Guide

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Anoaoun/youssef-scuba.git
   cd youssef-scuba
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Setup environment variables**
   ```bash
   cp .env.local.example .env.local
   ```
   
   Edit `.env.local` with your actual contact information:
   ```env
   NEXT_PUBLIC_WHATSAPP_NUMBER=961XXXXXXXX      # Your WhatsApp number
   NEXT_PUBLIC_PHONE_NUMBER=+961XXXXXXXX        # Your phone number
   NEXT_PUBLIC_EMAIL=your-email@example.com     # Your email
   ```

4. **Run development server**
   ```bash
   npm run dev
   ```
   
   Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm run start
```

---

## 📦 Project Structure

```
youssef-scuba/
├── src/
│   ├── app/
│   │   ├── page.tsx          # Main page
│   │   ├── layout.tsx        # Root layout
│   │   └── globals.css       # Global styles
│   ├── components/
│   │   ├── Header.tsx        # Navigation header
│   │   ├── Hero.tsx          # Hero section
│   │   ├── About.tsx         # About section
│   │   ├── Courses.tsx       # Courses section
│   │   ├── Trips.tsx         # Trips/Fun dives section
│   │   ├── Contact.tsx       # Contact section
│   │   └── Footer.tsx        # Footer
│   ├── config/
│   │   └── translations.ts   # English & Arabic translations
│   └── types/
│       └── index.ts          # TypeScript types
├── public/
│   └── images/               # Your images here
├── package.json
├── tsconfig.json
├── tailwind.config.js
├── next.config.js
└── README.md
```

---

## 🎨 Features

✅ **Bilingual** - English & Arabic support  
✅ **Responsive Design** - Mobile, tablet, desktop  
✅ **Professional UI** - Modern, clean, ocean-themed  
✅ **SEO Ready** - Optimized metadata  
✅ **Contact Integration** - WhatsApp, Phone, Email  
✅ **Course & Trips Showcase** - Beautiful cards with pricing  
✅ **Smooth Animations** - Fade-in, slide effects  
✅ **Dark Mode** - Eye-friendly theme  

---

## 🔧 Customization

### Update Contact Information

Edit `.env.local`:
```env
NEXT_PUBLIC_WHATSAPP_NUMBER=Your WhatsApp number (without +961)
NEXT_PUBLIC_PHONE_NUMBER=Your phone number
NEXT_PUBLIC_EMAIL=Your email address
```

### Add Your Images

1. Create `public/images/` folder
2. Add your scuba diving photos
3. Update image URLs in components (currently using placeholder images)

### Update Course Details

Edit `src/components/Courses.tsx` and modify `coursesData` array.

### Update Trip Details

Edit `src/components/Trips.tsx` and modify `tripsData` array.

### Add Your Brand Colors

Edit `tailwind.config.js`:
```js
colors: {
  primary: '#0066cc',      // Main blue
  secondary: '#00d4ff',    // Cyan
  ocean: '#006db3',        // Ocean blue
  dark: '#0f1419',         // Dark background
}
```

---

## 🌐 Deployment

### Deploy to Vercel (Recommended)

1. **Push to GitHub** (already done ✅)

2. **Go to [Vercel](https://vercel.com)**
   - Sign up with GitHub
   - Click "New Project"
   - Select `youssef-scuba` repository
   - Click "Deploy"

3. **Set Environment Variables** in Vercel dashboard:
   - `NEXT_PUBLIC_WHATSAPP_NUMBER`
   - `NEXT_PUBLIC_PHONE_NUMBER`
   - `NEXT_PUBLIC_EMAIL`

4. **Your site is live!** 🎉
   - Vercel will give you a URL
   - Optional: Add custom domain

### Deploy to Netlify

1. **Connect repository** at [Netlify](https://app.netlify.com)
2. **Build command**: `npm run build`
3. **Publish directory**: `.next`
4. **Deploy** ✅

### Deploy with Docker

```bash
docker build -t youssef-scuba .
docker run -p 3000:3000 youssef-scuba
```

---

## 📱 Phone Number Format

For WhatsApp links:
- Remove any dashes or spaces
- Remove leading zero if present
- Include country code (Lebanon = 961)

Example:
- Lebanese number: `+961 3 123456` → `961xxxxxx` in env
- WhatsApp link: `https://wa.me/961xxxxxx`

---

## ✨ Next Steps

1. ✅ Clone repo locally:
   ```bash
   git clone https://github.com/Anoaoun/youssef-scuba.git
   cd youssef-scuba
   ```

2. ✅ Update `.env.local` with your contact info

3. ✅ Add your photos to `public/images/`

4. ✅ Run `npm run dev` to test locally

5. ✅ Deploy to Vercel (free!)

6. ✅ Add custom domain (optional)

---

## 📞 Support

For issues or questions:
- Check the code comments
- Review Tailwind CSS docs
- Check Next.js documentation

---

## 📄 License

MIT - Feel free to use and modify

---

**Happy diving! 🤿**
