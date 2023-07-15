import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Nutritionation Lookup Station',
  description: 'The Nutritionation Lookup Station is a simple food look-up service using the FoodData Central food database',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
