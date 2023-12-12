import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hello! My name is Moses Uriarte and I am a software engineer in the making. I currently attend Lehman College and I am in my senior year. I aspire to one day
        have the chance to teach others what I have learned in my time at Lehman College and in my own personal time. I have had the chance to complete a Java intensive
        bootcamp with ApprenticeNow/Woz-U, but due to CO-VID I was not given the chance to work for them... it was heartbreaking, but we must PREVAIL and I will oneday become
        that software engineer!
        </p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  );
}