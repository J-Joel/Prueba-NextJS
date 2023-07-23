//import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Footer/Footer';
import NavBar from './Navbar/NavBar';
import './globals.css' // Archivos CSS
// import type { Metadata } from 'next' (*) no es necesario
import { Inter } from 'next/font/google' // Fuente de letras de google
import SessionProvider from "./SessionProvider"

// Fuente de letras como inter
const inter = Inter({ subsets: ['latin'] })
//#

// Titulo de la pagina y ¿descripcion que se muestra al mostrar el link de dicha pagina?
export const metadata = { // export const metadata: Metadata = { (*) no es necesario
  title: 'Home - NextJS',
  description: 'Servicio de algo',
}
//#
// Ejecuta las paginas
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionProvider>
          <NavBar/>
          <main className='m-auto min-w-[300px] max-w-7x1 p-4'>          
            {children}
          </main>
          <Footer/>
        </SessionProvider>
      </body> 
    </html>
  )
}
