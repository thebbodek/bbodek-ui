# bbodek-ui

## 📦 Installation

```bash
# With npm
npm install bbodek-ui

# With yarn
yarn add bbodek-ui
```

## ⚙️ Setup
Edit your `tailwind.config.ts` file:
```ts
// @ts-ignore
import BbodekConfig from "bbodek-ui/tailwind.config.js";
import type { Config } from 'tailwindcss';

const config: Config = {
  ...BbodekConfig,
  content: [
    ...BbodekConfig.content,
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
}
export default config
```
Edit your `_app.tsx` file:
```tsx
import "bbodek-ui/bbodek-theme.css"; // add bbodek-theme.css
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
```

## 🔗 Peer Dependencies
bbodek-ui is designed to work alongside specific versions of certain peer dependencies. Ensure that your project has the following peer dependencies installed:
```json
"peerDependencies": {
  "@types/react": "18.2.0",
  "@types/react-dom": "18.2.0",
  "react": "18.2.0",
  "react-dom": "18.2.0",
  "tailwindcss": "3.3.5"
}
```

### ✅ Resolving Peer Dependencies
Add the following to your package.json to align your project with the required versions:
```json
"resolutions": {
  "@types/react": "18.2.0",
}
```

## ✨ Usage
```tsx
import { Button } from "bbodek-ui";
import { useState } from "react";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div id="portal"/>
      <ModalPopUp 
        className="w-[30rem] h-[30rem]" 
        isOpen={isOpen} 
        onClose={() => setIsOpen(false)}
      >
        Open ModalPopUp
      </ModalPopUp>
      <Button 
        className="w-[20rem]" 
        color="white" 
        backgroundColor="primary-03" 
        content="버튼 테스트" 
        size="h-48" 
        onClick={() => setIsOpen(true)}
      />
    <>
  )
}

```

## License

bbodek-ui is made available under the MIT License.
