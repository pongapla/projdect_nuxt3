# Nuxt 3 Minimal Starter

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install the dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm run dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm run build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm run preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.

# public

ใช้เก็บรูปภาพที่สามารถเข้าถึงได้จาก path ex ./public/xxxx.jpg

# assets

ใช้เก็บ css รูปภาพ ไม่สามารถเข้าถึงจากภายนอกได้ ex ~/assets/xxxx.jpg

# router

การใช้ router มีสองวิธี คือ

- const router = userRouter();
  router.push('path ที่ต้องการ')
  แบบที่ 2
  router.push({
  path: 'path ที่ต้องการ',
  query: {
  color: 'red',
  brand: 'A'
  }
  })

1 การสร้าง โปรเจค ใน pages ให้สร้าง modul ตามทีเราต้องการ
2 สร้าง services/api ใช้ชื้อตาม modul เช่น user , product
3 สร้าง stores
