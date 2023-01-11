import Image from 'next/image'
import { Card } from '../components/Card.jsx'
import { IndexContent } from '../utils/links.js'

const styles = {
  container: 'padding-left-s padding-right-s container-desktop',
  grid: 'display-flex flex-wrap',
  main: 'display-flex flex-direction-column justifiy-content-center align-items-center padding-top-xxl padding-bottom-m',
  title: 'display-flex align-items-center text-align-center color-neutral-7 font-size-xl',
  subtitle: 'color-black font-size-m font-weight-600 margin-top-m margin-left-s tablet:margin-left-m',
  description: 'text-align-center margin-top-m margin-bottom-m line-height-l font-size-s',
  code: 'background-opacity-neutral-2 color-neutral-8 font-weight-500 margin-left-xxs margin-right-xxs border-radius-xs padding-xxs padding-left-xs padding-right-xs border-style-solid border-width-1 border-neutral-2 font-size-s font-family-secondary'
}

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>

        {/* SIUX Studio + Next.js */}
        <h1 className={styles.title}>
          <a href="https://siux.studio" target="_blank">
            <Image src="/images/siux-studio.svg" alt="Vercel Logo" width={80} height={80} />
          </a>
          <div className="margin-left-m margin-right-m margin-bottom-xs">+</div>
          <a href="https://nextjs.org" target="_blank">
            <Image src="/images/next-js.svg" alt="Vercel Logo" width={120} height={40} />
          </a>
        </h1>

        {/* Getting started */}
        <div className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/_app.js</code>
          {' '}and{' '}
          <code className={styles.code}>pages/index.js</code>
        </div>

        <div>
          {/* SIUX Studio links */}
          <h3 className={styles.subtitle}>Studio</h3>
          <div className={styles.grid}>
            {
              IndexContent.siuxStudioLinks.map((link, i) => {
                return (<Card key={i} link={link} />)
              })
            }
          </div>

          {/* Next links */}
          <h3 className={styles.subtitle}>Next.js</h3>
          <div className={styles.grid}>
            {
              IndexContent.nextLinks.map((link, i) => {
                return (<Card key={i} link={link} />)
              })
            }
          </div>
        </div>
      </main>
    </div>
  )
}