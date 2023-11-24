import Image, { ImageProps } from 'next/image'

type Props = Omit<ImageProps, 'width' | 'height' | 'alt'>
function Avatar({ ...rest }: Props) {
  return <Image className='avatar' width={60} height={60} alt='User Avatar' {...rest} />
}

export default Avatar
