import { AppProps } from 'next/app';
import { Inter } from '@next/font/google';
import '../styles/index.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <main className={`${inter.variable} font-sans`}>
      <Component {...pageProps} />
    </main>
  );
}
