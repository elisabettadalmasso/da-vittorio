interface PictureProps {
  foto: string
  fallback: string
  alt: string
  className?: string
}

function Picture({ foto, fallback, alt, className }: PictureProps) {
  return (
    <picture className={className}>
      <source srcSet={foto} type="image/avif" />
      <img src={fallback} alt={alt}  className={className}/>
    </picture>
  );
}

export default Picture;