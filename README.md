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
```

> ⚠️ `@config 'bbodek-ui/tailwind-config'`는 0.0.342부터 제거되었습니다. tailwind 4.3.1+에서 content 글롭이 config 파일 위치 기준으로 해석되어 라이브러리 클래스가 누락되던 방식이므로, 기존에 사용 중이라면 해당 라인을 삭제해주세요. 테마·safelist는 `@import 'bbodek-ui/styles'` 한 줄로 모두 적용됩니다.

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
