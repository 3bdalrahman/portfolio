# 🚀 My Portfolio Website

A modern, responsive portfolio website built with React and Vite, featuring smooth animations, contact form functionality, and a beautiful UI design.

## 🌐 Live Demo

**Visit the live site:** [https://3bdalrahman.github.io/portfolio/](https://3bdalrahman.github.io/portfolio/)

## ✨ Features

- **Responsive Design** - Optimized for all devices (desktop, tablet, mobile)
- **Modern UI/UX** - Clean and professional design with smooth animations
- **Interactive Contact Form** - Powered by EmailJS for real email functionality
- **Smooth Scrolling** - Seamless navigation between sections
- **AOS Animations** - Beautiful scroll-triggered animations
- **Dark Theme** - Elegant dark color scheme
- **Performance Optimized** - Fast loading with Vite build tool

## 🛠️ Technologies Used

- **Frontend Framework:** React 19
- **Build Tool:** Vite
- **Styling:** Tailwind CSS
- **Animations:** AOS (Animate On Scroll)
- **Icons:** React Icons
- **Email Service:** EmailJS
- **Deployment:** GitHub Pages

## 📁 Project Structure

```
my-portfolio/
├── public/
│   └── vite.svg
├── src/
│   ├── assets/
│   │   ├── github.png
│   │   ├── linkedin.png
│   │   ├── imghero.png
│   │   ├── img_about.png
│   │   ├── img_about1.png
│   │   ├── img_about2.png
│   │   └── react.svg
│   ├── components/
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── Navbar.jsx
│   │   └── Skills.jsx
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── package.json
├── vite.config.js
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/3bdalrahman/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173/`

## 📧 EmailJS Setup

To enable the contact form functionality:

1. **Sign up at [EmailJS](https://www.emailjs.com/)**
2. **Create an Email Service** (Gmail, Outlook, etc.)
3. **Create an Email Template** with these variables:
   - `{{user_name}}` - Sender's name
   - `{{user_email}}` - Sender's email
   - `{{message}}` - Message content
4. **Update credentials** in `src/components/Contact.jsx`:
   ```javascript
   const serviceId = 'YOUR_SERVICE_ID';
   const templateId = 'YOUR_TEMPLATE_ID';
   const publicKey = 'YOUR_PUBLIC_KEY';
   ```

## 🚀 Deployment

### Deploy to GitHub Pages

```bash
# Build the project
npm run build

# Deploy to GitHub Pages
npm run deploy
```

The site will be available at: `https://3bdalrahman.github.io/portfolio/`

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run deploy` - Deploy to GitHub Pages
- `npm run lint` - Run ESLint

## 🎨 Customization

### Colors
The project uses a purple-based color scheme. You can customize colors in the Tailwind classes throughout the components.

### Content
Update the content in each component:
- **Hero.jsx** - Main hero section and introduction
- **About.jsx** - About section content
- **Skills.jsx** - Skills and technologies
- **Contact.jsx** - Contact form and information

### Images
Replace images in the `src/assets/` folder with your own:
- Profile pictures
- Project screenshots
- Icons and logos

## 🔧 Configuration Files

- **vite.config.js** - Vite build configuration
- **package.json** - Dependencies and scripts
- **tailwind.config.js** - Tailwind CSS configuration
- **eslint.config.js** - ESLint rules

## 📱 Responsive Design

The portfolio is fully responsive and optimized for:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (320px - 767px)

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Contact

- **Portfolio:** [https://3bdalrahman.github.io/portfolio/](https://3bdalrahman.github.io/portfolio/)
- **GitHub:** [@3bdalrahman](https://github.com/3bdalrahman)

---

⭐ **Star this repository if you found it helpful!**
