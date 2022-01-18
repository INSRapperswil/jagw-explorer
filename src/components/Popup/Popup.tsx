import './Popup.scss';

type PopupProps = {
  title: string;
  message: string;
  onClose: () => void;
};

const Popup = (props: PopupProps): JSX.Element => {
  const { title, message, onClose } = props;

  return (
    <div className="Popup">
      <div className="Popup-Window">
        <div className="Popup-Title">{title}</div>
        <div className="Popup-Message">{message}</div>
        <button className="Popup-Btn" onClick={onClose}>
          OK
        </button>
      </div>
    </div>
  );
};

export default Popup;
