interface PictureProps {
  photo: string
  fallback: string
  alt: string
  className?: string
}

function Picture({ photo, fallback, alt, className }: PictureProps) {
  return (
    <picture className={className}>
      <source srcSet={photo} type="image/avif" />
      <img src={fallback} alt={alt}  className={className}/>
    </picture>
  );
}

export default Picture;