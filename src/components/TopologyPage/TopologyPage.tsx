import './TopologyPage.scss';
import jagwLogo from '../../assets/jagw-logo.svg';
import githubLogo from '../../assets/github-logo.png';

const TopologyPage = (): JSX.Element => {
  return (
    <div className="TopologyPage Content">
      <div className="PageTitle">Topology Data</div>
      <div className="TopologyPage-Intro">
        <p>
          The available topology data in the Jalapeño API Gateway does not
          change dynamically. What topology data is available and how it is
          structured can be gathered from the protobuf definitions either in the{' '}
          <a
            href="https://jalapeno-api-gateway.github.io/jagw-docs/docs/api/messages"
            rel="noopener noreferrer"
            target="_blank"
          >
            official documentation
          </a>{' '}
          or directly from the{' '}
          <a
            href="https://github.com/jalapeno-api-gateway/protorepo"
            rel="noopener noreferrer"
            target="_blank"
          >
            base repository
          </a>
          .
        </p>
        <div className="TopologyPage-ExternalLinks">
          <a
            className="TopologyPage-Link"
            href="https://jalapeno-api-gateway.github.io/jagw-docs/docs/api/messages"
            rel="noopener noreferrer"
            target="_blank"
          >
            <img
              className="TopologyPage-LinkImg"
              src={jagwLogo}
              alt="Jalapeño API Gateway Logo"
            />
            <div className="TopologyPage-LinkTitle">Official Documentation</div>
            <div className="TopologyPage-LinkText">Protobuf Messages</div>
          </a>
          <a
            className="TopologyPage-Link"
            rel="noopener noreferrer"
            href="https://github.com/jalapeno-api-gateway/protorepo"
            target="_blank"
          >
            <img
              className="TopologyPage-LinkImg"
              src={githubLogo}
              alt="GitHub Logo"
            />
            <div className="TopologyPage-LinkTitle">GitHub</div>
            <div className="TopologyPage-LinkText">Protobuf Repository</div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default TopologyPage;
