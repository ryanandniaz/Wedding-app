export default function Home() {
  return (
    <div className="w-screen h-screen overflow-hidden">
      <div style={{ padding: '56.25% 0 0 0', position: 'relative', height: '100%' }}>
        <iframe
          src="https://player.vimeo.com/video/1072709437?badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&muted=1&loop=1&background=1"
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
          allowFullScreen
          style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
          title="Ryan + Niaz Engagement Video"
        ></iframe>
      </div>
    </div>
  );
}
