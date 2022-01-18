import './CodeBlock.scss';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

type CodeBlockProps = {
  obj: any;
  fileName: string;
  title: string;
};

const CodeBlock = (props: CodeBlockProps): JSX.Element => {
  const { obj, fileName, title } = props;

  const downloadJson = (): void => {
    var dataStr =
      'data:text/json;charset=utf-8,' +
      encodeURIComponent(JSON.stringify(obj, null, 2));
    var downloadAnchorNode = document.createElement('a');
    downloadAnchorNode.setAttribute('href', dataStr);
    downloadAnchorNode.setAttribute('download', fileName);
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
  };

  return (
    <div className="CodeBlock">
      <div className="CodeBlock-Header">
        <div className="CodeBlock-Title">{title}</div>
        <button className="CodeBlock-DownloadBtn" onClick={downloadJson}>
          <FontAwesomeIcon icon={faDownload} />
          <span>Download JSON</span>
        </button>
      </div>
      <pre>
        <code>{JSON.stringify(obj, null, 2)}</code>
      </pre>
    </div>
  );
};

export default CodeBlock;
