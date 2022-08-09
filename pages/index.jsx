import DarkLayout from '../components/layouts/DarkLayout'
import { MainLayout } from '../components/layouts/MainLayout'
export default function Home() {
  return (
    <main className="main">
      <h1 className="title">
        Welcome to <span>Home Page</span>
      </h1>
    </main>
  )
}

Home.getLayout = (page) => (
  <MainLayout>
    <DarkLayout>
      {page}
    </DarkLayout>
  </MainLayout>
)
