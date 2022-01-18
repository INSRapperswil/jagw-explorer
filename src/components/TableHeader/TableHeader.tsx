import { buildClassName } from '../../utils/classNameHelper';
import './TableHeader.scss';

type TableHeaderProps = {
  leftTitle: string;
  rightTitle: string;
  children?: React.ReactNode;
  CN?: string;
};

const TableHeader = (props: TableHeaderProps): JSX.Element => {
  const { leftTitle, rightTitle, children, CN } = props;

  return (
    <div className={buildClassName('TableHeader', CN)}>
      <div className="TableHeader-LeftTitle">{leftTitle}</div>
      <div className="TableHeader-RightTitle">
        <span>{rightTitle}</span>
        {children}
      </div>
    </div>
  );
};

export default TableHeader;
