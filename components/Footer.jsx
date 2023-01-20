const Footer = () => {
  return (
    <footer className="color-neutral-5 font-size-s display-flex padding-m margin-top-m margin-bottom-xxl justify-content-center align-items-center animation-fade-in animation-faster">
      <div className="font-weight-600 color-neutral-8">2023</div>
      <div className="font-weight-600 color-neutral-3 margin-right-xxs margin-left-xxs">
        —
      </div>
      <div className="margin-right-xxs">Powered by</div>
      <a href="https://siux.studio/" target="_blank" rel="noopener noreferrer">
        <div className="hover:color-primary-7 font-weight-700 color-black">
          SIUX Studio
        </div>
      </a>
    </footer>
  );
};

export { Footer };
