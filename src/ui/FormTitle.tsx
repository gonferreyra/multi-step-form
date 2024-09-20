import { cn } from '../lib/utils';

type FormTitleProps = {
  children: React.ReactNode;
  className?: string;
};

export default function FormTitle({ children, className }: FormTitleProps) {
  return (
    <h1
      className={cn(
        'text-2xl font-extrabold text-marine-blue lg:text-4xl',
        className,
      )}
    >
      {children}
    </h1>
  );
}
