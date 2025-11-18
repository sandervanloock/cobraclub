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

The repository includes a GitHub Actions workflow that automatically builds and deploys the application to S3 when changes are merged to the `master` branch.

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

Once configured, every merge to `master` will trigger an automatic build, deployment, and GitHub release.

## Adding New Photos

### Automated Image Optimization Workflow

The project includes an automated image optimization script that converts images to WebP format for better performance. Follow these steps when adding new images:

#### 1. Add Your Images

Add new images to the appropriate folder in `src/assets/images/`:
```bash
# Example: Adding 2025 calendar images
mkdir -p src/assets/images/2025
# Copy your JPEG/PNG images to this folder
```

#### 2. Run the Image Optimization Scripts

**IMPORTANT:** Run BOTH scripts in order for full optimization:

```bash
# Step 1: Generate tiny placeholder images (blur-up effect)
npm run generate:placeholders

# Step 2: Convert images to WebP format
node scripts/convert-images-to-webp.js

# Or run both at once:
npm run optimize:images
```

##### Generate Placeholders Script

**What it does:**

- Creates tiny (~400 bytes) blurred versions of each image
- Saves to `src/assets/images/2025/placeholders/` and `src/assets/images/cover-placeholder.jpg`
- Used for instant page load (progressive image loading)
- Prevents blank space while full images load

**Example output:**

```
Generating tiny placeholder images...

✓ Generated cover placeholder (600 bytes)
✓ Generated 1.jpg placeholder (0KB → 486 bytes)
✓ Generated 2.jpg placeholder (0KB → 408 bytes)
...
✅ All placeholders generated!
```

##### WebP Conversion Script

**What it does:**
- Scans all subdirectories in `src/assets/images/`
- Converts `.jpg`, `.jpeg`, and `.png` files to `.webp` format
- Optimizes images with 85% quality (good balance between size and quality)
- Skips images that already have WebP versions
- Shows file size savings for each conversion

**Example output:**
```
🖼️  Starting image conversion to WebP...
Found 5 images to convert

✅ Converted januari.jpg
   Original: 284.0KB → WebP: 277.1KB (2.5% smaller)
✅ Converted februari.jpg
   Original: 191.5KB → WebP: 154.7KB (19.2% smaller)
...
✨ Image conversion complete!
```

#### 3. Update Component Data (if adding calendar images)

If you're adding new calendar images, update `src/app/homepage/homepage.component.ts`:

```typescript
this.images = [
  {
    month: 'januari',
    src: '/assets/images/2025/1-JANUARI.jpg'  // Keep .jpg extension
  },
  // Add more months...
]
```

**Note:** Keep the `.jpg` extension in the code. The template automatically loads the WebP version with JPEG fallback using the `<picture>` element.

#### 4. Test Your Changes

Build and test the application:
```bash
npm run build
ng serve
```

### Image Performance Best Practices

The application uses several performance optimizations:

1. **Progressive Image Loading (Blur-Up Technique)**
  - Tiny placeholder images (~400 bytes) load instantly
  - Creates smooth blur-to-sharp transition effect
  - Dramatically improves perceived performance
  - Users see blurred content in <100ms instead of blank space

2. **WebP Format with Fallback**
   - WebP images load for modern browsers (60-80% smaller)
   - JPEG/PNG fallback for older browsers
   - Automatic via `<picture>` element in templates

3. **Lazy Loading**
   - First image (LCP) loads immediately with `fetchpriority="high"`
   - All other images lazy load with `loading="lazy"`
   - Saves bandwidth and improves initial page load

4. **Explicit Dimensions**
   - All images have `width` and `height` attributes
   - Prevents layout shift (CLS) during page load

5. **Recommended Image Sizes**
   - Cover image: Max 3000px width
   - Calendar images: Max 1224px width
   - Keep original aspect ratio

### Manual Resize (Optional)

If images are extremely large (>5MB), consider resizing before conversion:
- Use [Bulk Resize Photos](https://bulkresizephotos.com/nl)
- Resize to 50-75% of original size
- Then run the WebP conversion script

### Troubleshooting

**Script not found?**
```bash
# Make sure you're in the project root directory
cd /path/to/cobraclub
node scripts/convert-images-to-webp.js
```

**Permission denied?**
```bash
chmod +x scripts/convert-images-to-webp.js
```

**Sharp installation failed?**
```bash
npm install --save-dev sharp
```


## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
