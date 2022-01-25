# Deployment - Helm

This directory contains the [Helm](https://helm.sh/) chart for the deployment with [Kubernetes](https://kubernetes.io/).

## Usage

### Installing the chart

To deploy the **Jalapeño API Gateway Explorer** with Helm, clone this repository and then run:

```bash
$ helm install <release-name> <path-to-this-directory> --namespace <namespace>
```

### Updating the chart

```bash
$ helm upgrade <release-name> <path-to-this-directory> --namespace <namespace>
```

### Uninstalling the chart

```bash
$ helm uninstall <release-name> --namespace <namespace>
```

## Accessing the application

Once deployed, the application is available at `http://<your-ip-address>:31000`.

To change the port number, edit the file `./values.yaml`.
