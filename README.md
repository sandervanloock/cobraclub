# cobraclub

## deploy
aws s3 sync . s3://cobraclub-be --profile jhipster --exclude '.idea/*'  --exclude '.git/*'

