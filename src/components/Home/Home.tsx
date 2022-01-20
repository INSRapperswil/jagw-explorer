const Home = (): JSX.Element => {
  return (
    <div className="TopologyPage Content">
      <div className="PageTitle">JAGW Explorer</div>
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
      </div>
    </div>
  );
};

export default Home;
