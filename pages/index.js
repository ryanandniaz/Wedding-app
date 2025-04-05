export default function Home() {
  return (
    <div style={{
      position: 'fixed',
      top: 0, left: 0,
      width: '100vw',
      height: '100vh',
      overflow: 'hidden',
      zIndex: -1
    }}>
      <iframe
        src="https://player.vimeo.com/video/1072709437?autoplay=1&muted=1&loop=1&background=1"
        style={{
          position: 'absolute',
          top: 0, left: 0,
          width: '100%',
          height: '100%',
          border: 'none'
        }}
        allow="autoplay; fullscreen"
        allowFullScreen
      />
    </div>
  );
}
