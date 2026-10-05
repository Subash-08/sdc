export default function SiteLoader({ label = 'Preparing the site' }: { label?: string }) {
  return (
    <main className="site-loader" role="status" aria-live="polite">
      <div className="site-loader-grid" aria-hidden="true" />
      <div className="site-loader-frame">
        <div className="site-loader-mark"><span>SDC</span><i /></div>
        <div>
          <p className="eyebrow text-clay-300">{label}</p>
          <p className="site-loader-title">Drawing the next<br />line into place.</p>
        </div>
        <div className="site-loader-progress"><span /></div>
        <p className="site-loader-count">01 — 100</p>
      </div>
      <span className="sr-only">Loading</span>
    </main>
  );
}
