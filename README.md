# 📄 CVify — Interactive CV & Resume Builder

> Build polished, professional CVs and resumes in minutes — no design skills required.

![CVify Preview](https://via.placeholder.com/900x500?text=Add+a+GIF+or+screenshot+of+the+live+preview+%2B+PDF+export)

> 📸 *Replace the image above with a GIF or screenshot showcasing the live preview and PDF export in action.*

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Visit%20Site-blue?style=for-the-badge&logo=vercel)](https://your-deployment-url.vercel.app)
[![GitHub](https://img.shields.io/badge/GitHub-Caleb--Bako-181717?style=for-the-badge&logo=github)](https://github.com/Caleb-Bako)
[![TypeScript](https://img.shields.io/badge/TypeScript-Strict-3178C6?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react)](https://reactjs.org/)

---

## ✨ Features

**Document Type Selection** — Choose between a full CV or a targeted resume right from the start. CVify adapts the form layout and structure to suit the document type you need.

**Dynamic Forms** — Add, remove, and reorder sections on the fly. Every field updates the preview instantly, so you're always working with the full picture.

**Live Preview** — See exactly how your document looks as you type. No guesswork, no surprises — what you build is what you get.

**One-Click PDF Export** — Export a clean, print-ready PDF with a single click, powered by html2pdf.js. Your formatting stays intact every time.

**Responsive Design** — Fully usable on desktop, tablet, and mobile. Build your resume anywhere, on any device.

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| [React](https://reactjs.org/) | Component-based UI framework |
| [TypeScript](https://www.typescriptlang.org/) | Type-safe development |
| [Tailwind CSS](https://tailwindcss.com/) | Utility-first styling and responsive layout |
| [html2pdf.js](https://github.com/eKoopmans/html2pdf.js) | Client-side PDF generation and export |

---

## 🚀 Getting Started

Follow these steps to run CVify locally on your machine.

### Prerequisites

Make sure you have the following installed before continuing:

- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- npm or [Yarn](https://yarnpkg.com/)

### Installation

Clone the repository and install dependencies:

bash
git clone https://github.com/Caleb-Bako/Resume_Builder.git
cd Resume_Builder
npm install

### Running the Development Server

bash
npm run dev

Then open [http://localhost:5173](http://localhost:5173) in your browser to see CVify in action.

### Building for Production

bash
npm run build

The optimized production build will be output to the `dist/` folder, ready for deployment on platforms like [Vercel](https://vercel.com/) or [Netlify](https://www.netlify.com/).

---

## 🗂️ Project Structure

Resume_Builder/
├── public/              # Static assets
├── src/
│   ├── components/      # Reusable UI components
│   ├── pages/           # Main application views
│   ├── types/           # TypeScript interfaces and types
│   ├── utils/           # Helper functions and PDF export logic
│   └── App.tsx          # Root application component
├── tailwind.config.ts
├── tsconfig.json
└── package.json

---

## 🔮 Roadmap

CVify is actively developed with 40+ commits and growing. Here's what's coming next:

- 🎨 **Multiple Templates** — Choose from a library of professionally designed CV and resume templates
- 🔐 **User Authentication** — Save and manage multiple documents across sessions with secure login
- 🖱️ **Drag-and-Drop Sections** — Rearrange your resume sections intuitively with drag-and-drop support
- 🌍 **Multi-language Support** — Localized form labels and export formatting for global users
- ☁️ **Cloud Save & Sync** — Access your documents from any device, anytime

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/Caleb-Bako/Resume_Builder/issues) or open a pull request.

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/your-feature-name`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature/your-feature-name`
5. Open a Pull Request

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

<div align="center">

Built with ❤️ by **Caleb Bako**

[![GitHub](https://img.shields.io/badge/github.com%2FCaleb--Bako-181717?style=flat-square&logo=github)](https://github.com/Caleb-Bako)
[![LinkedIn](https://img.shields.io/badge/linkedin.com%2Fin%2Fcaleb--bako-0A66C2?style=flat-square&logo=linkedin)](https://linkedin.com/in/caleb-bako)

⭐ If you found CVify useful, consider giving it a star — it helps more people discover the project!

</div>
