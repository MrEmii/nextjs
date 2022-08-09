import { MainLayout } from '../components/layouts/MainLayout'

export default function About() {
  return (
    <MainLayout>
      <main className={'main'}>
        <h1 className={'title'}>
          Welcome to <span>About Page</span>
        </h1>

        <p className={'description'}>
          Get started by editing{' '}
          <code className={'code'}>pages/about.js</code>
        </p>
      </main>
    </MainLayout>
  )
}
