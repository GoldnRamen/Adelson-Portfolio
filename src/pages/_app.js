import { RenderProvider } from "@/context/RenderContext";
import "../styles/globals.css";
import { Roboto, Lobster, Odibee_Sans, Saira } from 'next/font/google';

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '700'], // choose what you need
  variable: '--font-roboto', // optional CSS variable
});

const lobster = Lobster({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-lobster',
});
const odibee = Odibee_Sans({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-odibee',
});
const saira = Saira({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-saira',
});
export default function App({ Component, pageProps}) {
  return (
   <RenderProvider>
     <main lang="en" className={`${roboto.variable} ${lobster.variable} ${odibee.variable} ${saira.variable}`}>
      <Component {...pageProps} />  
    </main>
   </RenderProvider>
  );
}
