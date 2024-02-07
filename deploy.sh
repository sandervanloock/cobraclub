#!/usr/bin/env sh
ng build --configuration production
aws s3 cp dist/ s3://www.cobraclub.be --profile cobraclub --recursive
