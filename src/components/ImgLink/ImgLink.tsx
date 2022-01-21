import './ImgLink.scss';

type ImgLinkProps = {
  title: string;
  subtitle?: string;
  link: string;
  alt: string;
  imgPath: string;
  openInNewTab?: boolean;
};

const ImgLink = (props: ImgLinkProps): JSX.Element => {
  const { title, subtitle, alt, link, imgPath, openInNewTab } = props;

  return openInNewTab ? (
    <a
      className="ImgLink"
      rel="noopener noreferrer"
      href={link}
      target="_blank"
    >
      <img className="ImgLink-Img" src={imgPath} alt={alt} />
      <div className="ImgLink-Title">{title}</div>
      <div className="ImgLink-Subtitle">{subtitle}</div>
    </a>
  ) : (
    <a className="ImgLink" href={link}>
      <img className="ImgLink-Img" src={imgPath} alt={alt} />
      <div className="ImgLink-Title">{title}</div>
      <div className="ImgLink-Subtitle">{subtitle}</div>
    </a>
  );
};

export default ImgLink;
