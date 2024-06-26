import clsx from 'clsx';
import { Meta } from '@storybook/react';
import React, { memo, useEffect, useState } from 'react';

import { FixedVirtualListProps } from '@/core/components/Virtual/FixedVirtualList/types';
import FixedVirtualList from './index';

const meta = {
  title: 'core/Virtual/FixedVirtualList',
  component: FixedVirtualList,
  argTypes: {
    itemHeight: {
      control: 'number',
      description: 'FixedVirtualList item Height',
    },
    containerHeight: {
      control: 'number',
      description: 'FixedVirtualList container Height',
    },
  },
} satisfies Meta<typeof FixedVirtualList>;

export default meta;

export const Default = ({
  itemHeight = 90,
  containerHeight = 500,
}: Pick<FixedVirtualListProps, 'itemHeight' | 'containerHeight'>) => {
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

  return (
    <FixedVirtualList
      listElement={'ul'}
      itemHeight={itemHeight}
      containerHeight={containerHeight}
      itemsTotalCount={itemsTotalCount}
      className={'w-[500px] bg-gray-02'}
    >
      {({ startIndex, endIndex, getTopPosition }) =>
        images.slice(startIndex, endIndex).map((image, index) => {
          const { id, author, download_url } = image;

          return (
            <FixedVirtualList.item
              key={id}
              element={'li'}
              topPosition={getTopPosition({ index })}
              height={itemHeight}
              className={'gap-x-3'}
            >
              <ImageComponent key={download_url} src={download_url} />
              <AuthorComponent key={author} author={author} />
            </FixedVirtualList.item>
          );
        })
      }
    </FixedVirtualList>
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
