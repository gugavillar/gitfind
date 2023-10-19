import { Search } from '@/components/Search'
import { Github } from '@/svg/Github'
import { Header } from '@components/Header'

export const Home = () => {
  return (
    <main className="min-h-screen w-full bg-app">
      <Header />
      <div className="h-full">
        <Github />
        <Search />
      </div>
    </main>
  )
}
