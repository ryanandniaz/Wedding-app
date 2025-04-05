export default function Home() {
  return (
    <div style={{ margin: 0, padding: 0, overflow: 'hidden', height: '100vh' }}>
      <iframe
        src="https://player.vimeo.com/video/1072709437?autoplay=1&muted=1&background=1"
        frameBorder="0"
        allow="autoplay; fullscreen; picture-in-picture"
        allowFullScreen
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          border: 'none',
        }}
        title="Ryan + Niaz Engagement Video"
      ></iframe>
    </div>
  );
}
