export function GalleryGrid({ images }) {
  return (
    <div className="grid auto-rows-[160px] grid-cols-2 gap-3 sm:auto-rows-[200px] md:grid-cols-4 md:gap-4">
      {images.map((image, index) => (
        <div key={image + index} className={`group overflow-hidden rounded-2xl shadow-sm ${index % 5 === 0 ? 'col-span-2 row-span-2' : ''}`}>
          <div
            role="img"
            aria-label={`Gallery photo ${index + 1}`}
            className="h-full w-full bg-cover bg-center transition duration-700 group-hover:scale-110"
            style={{ backgroundImage: `url("${image}")` }}
          />
        </div>
      ))}
    </div>
  );
}

export default GalleryGrid;
