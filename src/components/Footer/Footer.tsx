import './Footer.scss';

const Footer = (): JSX.Element => {
  return (
    <div className="Footer">
      <div className="Footer-Column Footer-Left"></div>
      <div className="Footer-Column Footer-Center">
        This SR-App was developed by{' '}
        <a
          rel="noopener noreferrer"
          href="https://www.michelbongard.ch/"
          target="_blank"
        >
          Michel Bongard
        </a>
        .
      </div>
      <div className="Footer-Column Footer-Right"></div>
    </div>
  );
};

export default Footer;
