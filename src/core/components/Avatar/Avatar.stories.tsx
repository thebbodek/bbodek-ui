import { Meta } from '@storybook/react';

import Avatar from './index';
import { AvatarProps } from './types';
import { ROUNDED } from '@/core/components/Button/ButtonBase/constants';
import { SIZE } from '@/core/components/Label/constants';

const meta = {
  title: 'core/Avatar',
  component: Avatar,
  argTypes: {
    src: {
      control: 'text',
      description: 'Image Src',
    },
    alt: {
      control: 'text',
      description: 'Image Alt',
    },
    size: {
      control: 'select',
      options: Object.values(SIZE),
      description: 'Avatar Size',
    },
    rounded: {
      control: 'select',
      options: Object.values(ROUNDED),
      description: 'Avatar Rounded',
    },
  },
} satisfies Meta<typeof Avatar>;

export default meta;

export const ImageAvatar = (props: AvatarProps) => {
  return (
    <Avatar
      alt={props.alt ?? '뽀득'}
      src={
        props.src ??
        'https://avatars.slack-edge.com/2023-11-20/6219341924786_0bca2ecf54cedd4adf1c_512.jpg'
      }
      size={props.size ?? 'xs'}
      rounded={props.rounded ?? 'rounded-full'}
    />
  );
};

export const BrokenImageAvatar = (props: AvatarProps) => {
  return (
    <Avatar
      src={props.src ?? 'https://image.thebbodek.com/broken.jpg'}
      size={props.size ?? 'md'}
      rounded={props.rounded ?? 'rounded-full'}
    />
  );
};

export const LetterAvatar = (props: AvatarProps) => {
  return (
    <Avatar size={props.size ?? 'md'} rounded={props.rounded ?? 'rounded-full'}>
      {props.children ?? 'jinju'}
    </Avatar>
  );
};
