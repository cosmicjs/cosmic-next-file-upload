# Cosmic Next File Upload

<img src="https://imgix.cosmicjs.com/c39201f0-2cea-11ef-adb1-8b946b3a80e4-file-upload.png?w=1200&auto=format,compression" alt="File Upload Screenshot" />

Example of uploading files to [Cosmic](https://www.cosmicjs.com/) using the [React Dropzone](https://react-dropzone.js.org), [Cosmic JavaScript SDK](https://www.npmjs.com/package/@cosmicjs/sdk), Next.js, and React Server Actions.

## Getting Started

First, clone this repo.

```bash
git clone https://github.com/cosmicjs/cosmic-next-file-upload
cd cosmic-next-file-upload
```

Then go to [Your Project > API keys](https://app.cosmicjs.com/login) and add them to a new file `.env.local`

```bash
# .env.local
COSMIC_BUCKET_SLUG=your_bucket_slug
COSMIC_READ_KEY=your_bucket_read_key
COSMIC_WRITE_KEY=your_bucket_write_key
```

Then install the app dependencies run the app.

```bash
bun i
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser and upload files. Go to the media page in your Cosmic project and see the available files.

## Features

Uses:

1. [React Dropzone](https://react-dropzone.js.org)
2. [Cosmic CMS](https://www.cosmicjs.com)
3. React Server Actions (no exposed API keys!)
4. Next.js app directory

## Learn More

To learn more about Cosmic media and other API methods, visit the [Cosmic Documentation](https://www.cosmicjs.com/docs).
