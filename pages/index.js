import Head from 'next/head'
import {Card} from 'antd';
import styles from '../styles/Home.module.css'

const {Meta} = Card;

export default function Home() {
  const cards = [1, 2, 3, 4, 5, 6];
  return (
    <div className={styles.container}>
      <Head>
        <title>Telychko Algorithms</title>
      </Head>

      <header className={styles.header}>
        <h2 className={styles.brand}>Telychko Algorithms</h2>
          <nav className={styles.nav}>
              <ul>
                  <li>Algorithms</li>
                  <li>Data Structures</li>
                  <li>Articles</li>
              </ul>
          </nav>
      </header>

      <main className={styles.main}>

                  <Card
                      hoverable
                      style={{ width: 200 }}
                  >
                      <p>Card content</p>
                      <p>Card content</p>
                      <p>Card content</p>
                  </Card>

      </main>

      <footer className={styles.footer}>
          Powered by Telychko V.
      </footer>
    </div>
  )
}
