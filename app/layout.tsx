import Head from "next/head"
import { Header } from "./components/header"
import '../styles/globals.css'
export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
}



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Head>
        <title>Marketplace </title>
      </Head>
      <body>
       <Header/>
       {children}</body>
    </html>
  )
}