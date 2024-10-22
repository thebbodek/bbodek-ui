import clsx from 'clsx';
import { Meta } from '@storybook/react';
import React, { memo, useEffect, useRef, useState } from 'react';

import VirtualList from './index';
import { VirtualListProps } from '@/core/components/Virtual/VirtualList/types';

const meta = {
  title: 'core/Virtual/VirtualList',
  component: VirtualList,
  argTypes: {
    itemHeight: {
      control: 'number',
      description: 'VirtualList item Height',
    },
  },
} satisfies Meta<typeof VirtualList>;

export default meta;

export const Default = ({
  itemHeight = 90,
}: Pick<VirtualListProps, 'itemHeight'>) => {
  const listRef = useRef<HTMLUListElement | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [images, setImages] = useState<
    {
      id: string;
      author: string;
      width: number;
      height: number;
      url: string;
      download_url: string;
    }[]
  >([]);
  const itemsTotalCount = images.length;

  const getRandomImageList = async () => {
    try {
      const res = await fetch('https://picsum.photos/v2/list?page=2&limit=100');
      const data = await res.json();

      setImages(data);
      setIsLoading(false);
    } catch (e) {
      console.error(e);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getRandomImageList();
  }, []);

  if (isLoading) {
    return <div className={'animate-bounce'}>Loading...</div>;
  }

  if (itemsTotalCount === 0) {
    return <div className={'animate-bounce'}>Empty...</div>;
  }

  const onChange = () => {
    if (listRef.current && listRef.current.scrollTop !== 0) {
      listRef.current!.scrollTop = 0;
    }
  };

  return (
    <div className={'flex-v-stack h-[500px]'}>
      <input onChange={onChange} />
      <VirtualList
        listElement={'ul'}
        itemHeight={itemHeight}
        itemsTotalCount={itemsTotalCount}
        className={'bg-gray-02'}
        ref={listRef}
      >
        {({ startIndex, endIndex, getTopPosition }) =>
          images.slice(startIndex, endIndex).map((image, index) => {
            const { id, author, download_url } = image;

            return (
              <VirtualList.Item
                key={id}
                element={'li'}
                topPosition={getTopPosition({ index })}
                height={itemHeight}
                className={'gap-x-3'}
              >
                <ImageComponent key={download_url} src={download_url} />
                <AuthorComponent key={author} author={author} />
              </VirtualList.Item>
            );
          })
        }
      </VirtualList>
    </div>
  );
};

const AuthorComponent = memo(({ author }: { author: string }) => {
  return <div className={'text-primary-03'}>{author}</div>;
});

const ImageComponent = memo(({ src }: { src: string }) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {isLoading && (
        <div
          className={'flex aspect-video w-[150px] items-center justify-center'}
        >
          Loading Image...
        </div>
      )}
      <img
        src={src}
        className={clsx('aspect-video', isLoading ? 'hidden' : 'block')}
        width={150}
        alt=''
        onLoad={() => setIsLoading(false)}
      />
    </>
  );
});
