import { Meta } from '@storybook/react';

import Avatar from './index';
import { AvatarProps } from './types';
import { AVATAR_SIZE_VARIANTS } from '@/core/components/Avatar/constants';
import { ROUNDED } from '@/core/components/Button/ButtonBase/constants';

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
      options: Object.values(AVATAR_SIZE_VARIANTS),
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
      src={
        props.src ??
        'https://avatars.slack-edge.com/2023-11-20/6219341924786_0bca2ecf54cedd4adf1c_512.jpg'
      }
      alt={props.alt ?? '뽀득'}
      rounded={props.rounded ?? 'rounded-full'}
      size={props.size ?? 'xs'}
    />
  );
};

export const BrokenImageAvatar = (props: AvatarProps) => {
  return (
    <Avatar
      rounded={props.rounded ?? 'rounded-full'}
      size={props.size ?? 'md'}
      src={props.src ?? 'https://image.thebbodek.com/broken.jpg'}
    />
  );
};

export const LetterAvatar = (props: AvatarProps) => {
  return (
    <Avatar
      alt={props.alt ?? 'jinju'}
      rounded={props.rounded ?? 'rounded-full'}
      size={props.size ?? 'md'}
      useRandomColorTheme
    >
      {props.children ?? 'jinju'}
    </Avatar>
  );
};
