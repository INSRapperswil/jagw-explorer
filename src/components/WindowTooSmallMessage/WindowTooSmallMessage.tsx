import './WindowTooSmallMessage.scss';
import claustrophobicMan from '../../assets/claustrophobic-man.jpg';

const WindowTooSmallMessage = (): JSX.Element => {
  return (
    <div className="WindowTooSmallMessage">
      <img
        className="WindowTooSmallMessage-Img"
        src={claustrophobicMan}
        alt="Claustrophobic Man"
      />
      <p>You are squishing me!</p>
      <p>Please widen your window :(</p>
    </div>
  );
};

export default WindowTooSmallMessage;
