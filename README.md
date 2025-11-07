# NgCobraclub

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Deploy

### Manual Deployment
aws s3 cp dist/ s3://www.cobraclub.be --profile cobraclub --recursive

or you can run the `deploy.sh` script

### Automated Deployment (GitHub Actions)

The repository includes a GitHub Actions workflow that automatically builds and deploys the application to S3 when changes are merged to the `main` branch.

#### Setting up AWS Credentials for GitHub Actions

To enable automated deployments, you need to create AWS credentials and add them as GitHub secrets:

**1. Create an IAM User in AWS:**
   - Log in to [AWS Console](https://console.aws.amazon.com/)
   - Navigate to IAM → Users → Create User
   - User name: `github-actions-cobraclub` (or your preferred name)
   - Select "Access key - Programmatic access"

**2. Attach S3 Permissions:**
   - Attach the following inline policy to the user:
   ```json
   {
     "Version": "2012-10-17",
     "Statement": [
       {
         "Effect": "Allow",
         "Action": [
           "s3:PutObject",
           "s3:GetObject",
           "s3:DeleteObject",
           "s3:ListBucket"
         ],
         "Resource": [
           "arn:aws:s3:::www.cobraclub.be",
           "arn:aws:s3:::www.cobraclub.be/*"
         ]
       }
     ]
   }
   ```
   - Or attach the managed policy `AmazonS3FullAccess` (less secure, but simpler)

**3. Create Access Keys:**
   - In the IAM user page, go to "Security credentials" tab
   - Click "Create access key"
   - Choose "Application running outside AWS"
   - Save the **Access Key ID** and **Secret Access Key** (you won't be able to see the secret again!)

**4. Add Secrets to GitHub:**
   - Go to your GitHub repository → Settings → Secrets and variables → Actions
   - Click "New repository secret"
   - Add two secrets:
     - Name: `AWS_ACCESS_KEY_ID`, Value: [your access key ID]
     - Name: `AWS_SECRET_ACCESS_KEY`, Value: [your secret access key]

**5. Update AWS Region (if needed):**
   - Edit `.github/workflows/release.yml` and change the `aws-region` value if your S3 bucket is in a different region than `eu-west-1`

Once configured, every merge to `main` will trigger an automatic build, deployment, and GitHub release.

## new photos
use https://bulkresizephotos.com/nl to resize. 
I resized the given images with 50%

Add a new folder in assets/images
Add the new images in this folder and update homepage.component.ts


## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
