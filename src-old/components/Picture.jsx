function Picture({ foto, fallback, alt, className }) {
  return (
    <picture className={className}>
      <source srcSet={foto} type="image/avif" />
      <img src={fallback} alt={alt}  className={className}/>
    </picture>
  );
}

export default Picture;