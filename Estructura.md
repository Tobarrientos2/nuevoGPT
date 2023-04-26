backend/
  ├── src/
  │   ├── pages/
  │   │   ├── api/
  │   │   │   ├── [resource]/
  │   │   │   │   ├── create.ts
  │   │   │   │   ├── read.ts
  │   │   │   │   ├── update.ts
  │   │   │   │   └── delete.ts
  │   ├── lib/
  │   │   ├── sanityClient.ts
  │   │   └── auth/
  │   │       ├── authProvider.ts
  │   └── types/
  │       └── resource.ts
  ├── test/
  │   ├── unit/
  │   │   └── [resource].test.ts
  │   └── integration/
  │       └── [resource].test.ts
  └── jest.config.js


frontend/
  ├── public/
  │   └── index.html
  ├── src/
  │   ├── components/
  │   │   ├── ResourceList/
  │   │   │   ├── ResourceList.tsx
  │   │   │   └── ResourceList.module.css
  │   │   ├── ResourceForm/
  │   │   │   ├── ResourceForm.tsx
  │   │   │   └── ResourceForm.module.css
  │   │   └── App/
  │   │       ├── App.tsx
  │   │       └── App.module.css
  │   ├── services/
  │   │   ├── apiClient.ts
  │   │   └── authService.ts
  │   ├── types/
  │   │   └── resource.ts
  │   ├── pages/
  │   │   ├── Home.tsx
  │   │   ├── Login.tsx
  │   │   └── Register.tsx
  │   ├── utils/
  │   │   └── protectedRoute.tsx
  │   ├── App.tsx
  │   ├── index.tsx
  │   └── index.css
  ├── test/
  │   ├── unit/
  │   │   └── components/
  │   └── integration/
  │       └── services/
  ├── tsconfig.json
  └── package.json
