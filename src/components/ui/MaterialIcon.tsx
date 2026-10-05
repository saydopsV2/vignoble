interface MaterialIconProps {
  name: string;
  className?: string;
}

/** Renders a Google Material Symbols Outlined icon. */
export function MaterialIcon({ name, className = 'text-lg' }: MaterialIconProps) {
  return (
    <span className={`material-symbols-outlined ${className}`} aria-hidden="true">
      {name}
    </span>
  );
}
