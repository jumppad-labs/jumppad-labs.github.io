export function YouTube({id='dQw4w9WgXcQ'}) {
  let url = 'https://www.youtube.com/embed/' + id

  return (
    <iframe 
      class="w-full aspect-video"
      src={url}
      frameborder="0" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
      allowFullScreen>
    </iframe>
  )
}