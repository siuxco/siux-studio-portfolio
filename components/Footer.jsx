import Image from 'next/image'

const styles = {
  footer: {
    main: 'color-neutral-7 display-flex padding-m justify-content-center align-items-center',
    logo: 'margin-right-xs margin-left-xs',
  }
}

const Footer = () => {
  return (
    <footer className={styles.footer.main}>
      Powered by{' '}
      <a
        href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className={styles.footer.logo}>
          <Image src="/images/siux.svg" alt="Siux Logo" width={22} height={22} />
        </span>
      </a>
      <span>+</span>
      <a
        href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className={styles.footer.logo}>
          <Image src="/images/vercel.svg" alt="Vercel Logo" width={72} height={16} />
        </span>
      </a>
    </footer>
  );
}

export { Footer };