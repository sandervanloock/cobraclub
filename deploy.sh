#!/usr/bin/env sh
ng build --prod
aws s3 cp dist/ s3://www.cobraclub.be --profile cobraclub --recursive
