import Head from "next/head";
import useAuth from "../hooks/auth";
import AccountMenu from "./account-menu";
import styles from "./layout-new.module.css";

export default function Layout({ children }) {
  const { user } = useAuth();

  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Easy Trading Journaling &amp; Performance Insights"
        />
        <meta name="og:title" content="Fin Tea" />
      </Head>
      <header className={styles.layoutHeader}>
        <h1 className={styles.title}>Fin Tea</h1>
        <AccountMenu />
      </header>
      <div className={styles.container}>
        <main className={styles.content}>{children}</main>
      </div>
    </div>
  );
}
