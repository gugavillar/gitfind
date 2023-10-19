import { Search } from '@/components/Search'
import { Github } from '@/svg/Github'
import { Header } from '@components/Header'

export const Home = () => {
  return (
    <main className="min-h-screen w-full bg-app">
      <Header />
      <div className="grid grid-cols-appColumns">
        <Github />
        <Search />
      </div>
    </main>
  )
}
