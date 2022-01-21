import './TopologyPage.scss';
import jagwLogo from '../../assets/jagw-logo.svg';
import githubLogo from '../../assets/github-logo.png';
import ImgLink from '../ImgLink/ImgLink';

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
          <ImgLink
            title="Official Documentation"
            subtitle="Protobuf Messages"
            link="https://jalapeno-api-gateway.github.io/jagw-docs/docs/api/messages"
            imgPath={jagwLogo}
            alt="Jalapeño API Gateway Logo"
            openInNewTab={true}
          />
          <ImgLink
            title="GitHub"
            subtitle="Protobuf Repository"
            link="https://github.com/jalapeno-api-gateway/protorepo"
            imgPath={githubLogo}
            alt="GitHub Logo"
            openInNewTab={true}
          />
        </div>
      </div>
    </div>
  );
};

export default TopologyPage;
