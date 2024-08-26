# Api-Stp

[![Run in Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/6b6c772279cbf324b6e5#?env%5Bapi-stp%5D=W3sia2V5IjoicHJvZCIsInZhbHVlIjoiaHR0cDovLzM0LjIxNS4xMzIuMTg1OjQwMDgvYXBpL3YxIiwiZGVzY3JpcHRpb24iOiIiLCJ0eXBlIjoidGV4dCIsImVuYWJsZWQiOnRydWV9LHsia2V5Ijoic3RhZ2luZyIsInZhbHVlIjoiaHR0cDovLzM1LjE2MC4yMzYuOTQ6NDAwNS9hcGkvdjEiLCJkZXNjcmlwdGlvbiI6IiIsInR5cGUiOiJ0ZXh0IiwiZW5hYmxlZCI6dHJ1ZX0seyJrZXkiOiJ0b2tlbiIsInZhbHVlIjoiWVhCcFgzTjNhWFJqYUVCMWRXeGhiR0V1YVc4NlZYVnNZV3hoTWpBeE9RPT0iLCJkZXNjcmlwdGlvbiI6IiIsInR5cGUiOiJ0ZXh0IiwiZW5hYmxlZCI6dHJ1ZX1d)

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