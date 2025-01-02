import { Roboto_Slab } from 'next/font/google';
import localFont from "next/font/local";
import "./globals.css";

const robotoSlab = Roboto_Slab({
  subsets: ['latin'], // Load the Latin character set
  weight: ['100','200','300','400','500','600', '700','800','900'], 
});

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased" suppressHydrationWarning={true}>
        {children}
      </body>
    </html>
  );
}