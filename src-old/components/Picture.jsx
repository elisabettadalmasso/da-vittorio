function Picture({ photo, fallback, alt, className }) {
  return (
    <picture className={className}>
      <source srcSet={photo} type="image/avif" />
      <img src={fallback} alt={alt}  className={className}/>
    </picture>
  );
}

export default Picture;