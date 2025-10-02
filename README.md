# GrowShow Next.js Website

A modern, professional portfolio website for GrowShow server built with Next.js 14, TypeScript, and Tailwind CSS.

## Features

- 🎨 **Dark Blue Metallic Theme** - Professional and modern design
- 📱 **Fully Responsive** - Works perfectly on all devices
- ⚡ **Next.js 14** - Latest features and optimizations
- 🔒 **Production Optimized** - Minified and encrypted for deployment
- 🌟 **Real-time Server Status** - Live monitoring and updates
- 📋 **Host Configuration** - Easy copy-paste setup instructions
- 🎮 **Interactive Elements** - Smooth animations and transitions

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone or download the project
```bash
cd growshow-nextjs
```

2. Install dependencies
```bash
npm install
# or
yarn install
```

3. Run development server
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Building for Production

### Standard Build
```bash
npm run build
npm run start
```

### Static Export (Recommended for Vercel)
```bash
npm run build
```

This creates an optimized build in the `dist` folder, ready for deployment.

## Deployment

### Vercel (Recommended)

1. Push code to GitHub repository
2. Connect repository to Vercel
3. Deploy automatically

### Manual Upload

1. Run `npm run build`
2. Upload contents of `dist` folder to your web server

## Project Structure

```
src/
├── app/                 # Next.js App Router
│   ├── layout.tsx      # Root layout
│   └── page.tsx        # Home page
├── components/         # React components
│   ├── Navigation.tsx  # Header navigation
│   ├── Hero.tsx        # Landing section
│   ├── ServerStatus.tsx# Server monitoring
│   ├── Features.tsx    # Feature showcase
│   ├── HostSection.tsx # Host configuration
│   ├── Footer.tsx      # Site footer
│   └── Toast.tsx       # Notification system
└── styles/
    └── globals.css     # Global styles and utilities
```

## Configuration

### Server Status API

Update API endpoints in `ServerStatus.tsx`:
```typescript
const statusRes = await fetch('YOUR_API_ENDPOINT')
```

### Host Information

Modify host data in `HostSection.tsx`:
```typescript
const hostData = [
  {
    title: 'Your Host Type',
    content: 'your.host.configuration',
    // ...
  }
]
```

### Social Links

Update social media links in `Navigation.tsx` and `Footer.tsx`

## Customization

### Colors

Edit the color scheme in `tailwind.config.js`:
```javascript
colors: {
  primary: { /* your colors */ },
  darkBlue: { /* your colors */ },
  // ...
}
```

### Fonts

Modify fonts in `app/layout.tsx`:
```typescript
import { YourFont } from 'next/font/google'
```

## Performance

- ✅ Optimized images and assets
- ✅ Code splitting and lazy loading  
- ✅ Minified CSS and JavaScript
- ✅ Progressive Web App features
- ✅ SEO optimized with metadata

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Technologies Used

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Build**: Webpack/Turbopack
- **Deployment**: Vercel/Static

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is created for GrowShow Server. All rights reserved.

## Support

For technical support or questions:
- Discord: https://discord.gg/BFrEQgawEN
- WhatsApp: https://chat.whatsapp.com/LyVphMQX5h43woTO1fu0aZ

---

Created with ❤️ by SkyDev for the GrowShow community