import '@/styles/globals.css'
import Nav from '@/components/Nav';
import Head from 'next/head';


export const metadata = {
  title: "Renniel Espinosa Portfolio",
  description: "Hi! welcome to my page",
};
const RootLayout = ({children}) => {
  return (
    <html lang="en">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <body >
        <Nav />
        <main className=" bg-slate-900 min-h-screen text-blue-100 pt-28">
          {children}
        </main>
      </body>
    </html>
  )
}

export default RootLayout