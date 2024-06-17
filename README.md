# Cosmic Next Upload File

Example of uploading files to Cosmic using Next.js and React Server Actions.

## Getting Started

First, clone this repo.

```bash
git clone https://github.com/cosmicjs/cosmic-next-upload-file
cd cosmic-next-upload-file
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

## Learn More

To learn more about Cosmic media and other API methods, visit the [Cosmic Documentation](https://www.cosmicjs.com/docs).
