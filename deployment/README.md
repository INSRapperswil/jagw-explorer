# Deployment - Helm

This directory contains the [Helm](https://helm.sh/) chart for the deployment with [Kubernetes](https://kubernetes.io/).

## Usage

### Installing the chart

```bash
$ helm install <release-name> jagw --namespace <namespace>
```

### Updating the chart

```bash
$ helm upgrade <release-name> jagw --namespace <namespace>
```

### Uninstalling the chart

```bash
$ helm uninstall <release-name> --namespace <namespace>
```

## Accessing the application

Once deployed, the application is available at `http://<your-ip-address>:31000`.

To change the port number, edit the file `./values.yaml`.
