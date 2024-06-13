import React, { Suspense } from 'react';
import 'react-quill/dist/quill.snow.css';
const ReactQuill = React.lazy(() => import('react-quill'));

interface TextEditorProps {
  value: string;
  onChange: (value: string) => void;
}

export default function TextEditor({ value, onChange }: TextEditorProps) {
  return (
    <Suspense fallback={<></>}>
      <ReactQuill
        theme='snow'
        value={value}
        onChange={onChange}
        className={'h-full w-full'}
        modules={{
          toolbar: [
            [{ header: [1, 2, false] }],
            ['bold', 'italic', 'underline', 'strike'],
            [
              { list: 'ordered' },
              { list: 'bullet' },
              { indent: '-1' },
              { indent: '+1' },
            ],
            ['link'],
          ],
        }}
      />
    </Suspense>
  );
}
