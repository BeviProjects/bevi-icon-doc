import type { Metadata } from "next";
import { Nunito_Sans } from 'next/font/google'
import '@/styles/main.css'

const nunitoSans = Nunito_Sans({
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: "Bevi Icon Documentation",
  description: "Generated by create next app",
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="pt-BR">
      <body className={`${nunitoSans.className}`}>
        {children}
      </body>
    </html>
  );
}

export default RootLayout