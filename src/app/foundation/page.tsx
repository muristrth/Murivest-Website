import type { Metadata } from 'next'
import MurivestFoundation from '../../components/Foundation'

export const metadata: Metadata = {
  title: 'Murivest Foundation - Corporate Social Responsibility Kenya',
  description: 'Learn about Murivest Foundation\'s commitment to community development and social impact in Kenya. Our corporate social responsibility initiatives and community investment programs.',
  keywords: 'Murivest Foundation, corporate social responsibility Kenya, community development Kenya, social impact Kenya, CSR initiatives Kenya, community investment Kenya',
  openGraph: {
    title: 'Murivest Foundation - Corporate Social Responsibility Kenya',
    description: 'Learn about Murivest Foundation\'s commitment to community development and social impact in Kenya.',
    images: ['/image.png'],
  },
}

export default function FoundationPage() {
  return <MurivestFoundation />
}