interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  center?: boolean;
  light?: boolean;
}

export function SectionHeading({ title, subtitle, center = true, light = false }: SectionHeadingProps) {
  return (
    <div className={center ? "text-center" : ""}>
      <h2 className={`text-3xl md:text-4xl font-bold tracking-tight ${light ? "text-navy-foreground" : "text-foreground"}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-3 text-base max-w-2xl ${center ? "mx-auto" : ""} ${light ? "text-navy-foreground/70" : "text-muted-foreground"}`}>
          {subtitle}
        </p>
      )}
      <div className={`mt-4 h-1 w-16 bg-gold rounded-full ${center ? "mx-auto" : ""}`} />
    </div>
  );
}
