import { cn } from '../lib/utils';

type FormSubtitleProps = {
  children: React.ReactNode;
  className?: string;
};

export default function FormSubtitle({
  children,
  className,
}: FormSubtitleProps) {
  return <p className={cn('text-cool-gray', className)}>{children}</p>;
}
