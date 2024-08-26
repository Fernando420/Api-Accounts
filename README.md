# Api-Stp
[<img src="https://run.pstmn.io/button.svg" alt="Run In Postman" style="width: 128px; height: 32px;">](https://god.gw.postman.com/run-collection/2365049-0d3d4f2c-9938-41e5-a330-a1a153148d79?action=collection%2Ffork&source=rip_markdown&collection-url=entityId%3D2365049-0d3d4f2c-9938-41e5-a330-a1a153148d79%26entityType%3Dcollection%26workspaceId%3D)

## Build with Docker envs

## For Staging
docker build -f ./docker_env/staging -t api-accounts . 

## For Production
docker build -f ./docker_env/production -t api-accounts .

## Run project

```bash
npm install -g foreman
npm install -g babel
npm install -g babel-env --save-dev
npm install
nf start dev=1
```