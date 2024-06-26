import { IconContainer } from './IconContainer';

type TProps = {
  size?: number;
};

export const EyeIcon = ({ size = 24 }: TProps) => {
  return (
    <IconContainer size={size}>
      <path d='M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z' />
      <circle cx='12' cy='12' r='3' />
    </IconContainer>
  );
};
