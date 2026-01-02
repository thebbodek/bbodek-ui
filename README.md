# bbodek-ui

## 📦 Installation

```bash
# With npm
npm install bbodek-ui

# With yarn
yarn add bbodek-ui
```

## ⚙️ Setup

Edit your `global.css` file:

```css
@import 'bbodek-ui/styles';
@config 'bbodek-ui/tailwind-config';
```

## 🔗 Peer Dependencies

bbodek-ui is designed to work alongside specific versions of certain peer dependencies. Ensure that your project has the following peer dependencies installed:

```json
"peerDependencies": {
  "@types/react": "^19.2.1",
  "@types/react-dom": "^19.2.1",
  "react": "^19.2.1",
  "react-dom": "^19.2.1",
  "tailwindcss": "^4.1.4"
}
```

### ✅ Resolving Peer Dependencies

Add the following to your package.json to align your project with the required versions:

```json
"resolutions": {
  "@types/react": "^19.2.1",
}
```

## ✨ Usage

```tsx
import { Button } from 'bbodek-ui';
import { useState } from 'react';

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div id='portal' />
      <ModalPopUp
        className='h-[30rem] w-[30rem]'
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      >
        Open ModalPopUp
      </ModalPopUp>
      <Button
        className='w-[20rem]'
        color='white'
        backgroundColor='primary-03'
        content='Button'
        size='h-48'
        onClick={() => setIsOpen(true)}
      />
    </>
  );
}
```

## License

bbodek-ui is made available under the MIT License.
