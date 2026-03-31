interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  color?: 'dark' | 'white';
}

export default function SectionHeader({
  title,
  subtitle,
  align = 'center',
  color = 'dark',
}: SectionHeaderProps) {
  return (
    <div className={`flex flex-col gap-2 ${align === 'center' ? 'items-center text-center' : 'items-start text-left'}`}>
      <h2 className={`text-4xl font-semibold leading-tight ${color === 'white' ? 'text-white' : 'text-dark'}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`text-lg font-normal max-w-2xl ${color === 'white' ? 'text-gray-200' : 'text-dark-lighter'}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
