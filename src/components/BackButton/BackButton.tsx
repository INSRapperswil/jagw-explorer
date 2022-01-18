import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './BackButton.scss';
import { faLongArrowAltLeft } from '@fortawesome/free-solid-svg-icons';

type BackButtonProps = {
  title: string;
  url: string;
};

const BackButton = (props: BackButtonProps): JSX.Element => {
  const { title, url } = props;
  return (
    <a className="BackButton" href={url}>
      <FontAwesomeIcon className="BackButton-Icon" icon={faLongArrowAltLeft} />
      <div className="BackButton-Title">{title}</div>
    </a>
  );
};

export default BackButton;
