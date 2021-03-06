# Jalapeño API Gateway Explorer
The JAGW Explorer is built for SR-App developers. It provides a way to explore the data that is available through the [Jalapeño API Gateway](https://jalapeno-api-gateway.github.io/jagw-docs/).


## Run it locally
To run it locally, clone this repository, then run

```bash
$ yarn install
$ yarn start
```

## Deploy it using the Docker Image
To deploy it using the docker image, pull the docker image from DockerHub:

```bash
$ docker pull insost/jagw-explorer
```

Then start a new container with:

```bash
$ docker run --name jagw-explorer -p 8080:80 -d insost/jagw-explorer
```

`-p` maps the host port `8080` to the container port `80`. Change port `8080` to any port you like.

This application has been built with React.

## Deploy it using the Helm chart
To deploy it using the Helm chart, follow the steps described in `deployment/README.md`
