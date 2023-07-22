import 'bootstrap/dist/css/bootstrap.min.css';
import './globals.css' // Archivos CSS
// import type { Metadata } from 'next' (*) no es necesario
import { Inter } from 'next/font/google' // Fuente de letras de google
import { Container } from '@/app/components/bootstrap';
import NavBar from './NavBar';
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
          <NavBar/>
          <main>          
            <Container className='py-4'>
              {children}
            </Container>
          </main>
      </body> 
    </html>
  )
}
