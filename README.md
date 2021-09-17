# [Deploy Sick Fits Behind Reverse Proxy](https://proxy-sick-fits-demo-bronifty.cloud.okteto.net/)

- 2 server solution on a single endpoint via Nginx reverse proxy in Docker orchestrated by the Kubernetes framework Okteto
- local dev is done concurrently with nodemon on ports 3000 and 7777
- travis-ci builds the docker images with each git push
- dockerhub is the registry for the production images

### App is under construction

## Usage

- rename sample.env to .env and provide a working mongodb url

- docker:

```
docker-compose up
```

- node:

```
cd frontend && yarn && cd ../backend/ && yarn && yarn run concurrently
```
