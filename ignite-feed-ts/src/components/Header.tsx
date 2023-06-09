import styles from "./Header.module.css";

import igniteFeedLogo from "../assets/ignite-feed-logo.svg";

export function Header() {
  return (
    <header className={styles.header}>
      <img src={igniteFeedLogo} />
      <strong>Ignite Feed</strong>
    </header>
  );
}
