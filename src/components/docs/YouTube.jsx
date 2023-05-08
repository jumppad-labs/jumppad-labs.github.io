export function YouTube({id='dQw4w9WgXcQ'}) {
  let url = `https://www.youtube-nocookie.com/embed/${id}?modestbranding=1&rel=0`

  return (
    <iframe 
      className="mt-16 rounded-md bg-white/5 shadow-2xl ring-1 ring-white/10 sm:mt-24 w-full aspect-video"
      src={url}
      frameborder="0" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
      allowFullScreen>
    </iframe>
  )
}