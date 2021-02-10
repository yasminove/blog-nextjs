import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout.js'
import Link from 'next/link'
import utilStyles from '../styles/utils.module.css'
import Date from '../components/date'

import { getSortedPostsData } from '../lib/posts'

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <section className={utilStyles.headingMd}>
        <p>
        Hello, I am <span className={utilStyles.headingBold}>Yasmin </span>. I am a passionate developer, who is always looking for the latest trends in web development. 
        </p>
      </section>

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {
            allPostsData.map(({ id, date, title }) => (
              <li className={utilStyles.listItem} key={id}>
                <Link href={`posts/${id}`}><a>{title}</a></Link>
                <br />
                <small className={utilStyles.lightText}>
                  {/* {date} */}
                  <Date dateString={date}/>
                </small>
              </li>
            ))
          }
        </ul>
      </section>

      {/* <img src="/vercel.svg" alt="Vercel Logo" className="logo" /> */}
    </Layout>
  );
}

export async function getStaticProps(){
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}
