export default function FigmaMockup() {
  const menuItem = (label, shortcut, highlight) => (
    <div style={{
      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      padding: '4px 12px',
      fontSize: '0.8rem',
      color: highlight ? '#fff' : '#c5c5c5',
      background: highlight ? '#0d99ff' : 'transparent',
      borderRadius: highlight ? 4 : 0,
      cursor: 'pointer',
      minWidth: 200,
    }}>
      <span>{label}</span>
      {shortcut && <span style={{ fontSize: '0.72rem', color: highlight ? 'rgba(255,255,255,0.7)' : '#8b8b8b', marginLeft: 24 }}>{shortcut}</span>}
    </div>
  );

  const subMenuItem = (label, highlight) => (
    <div style={{
      padding: '4px 12px',
      fontSize: '0.8rem',
      color: highlight ? '#fff' : '#c5c5c5',
      background: highlight ? '#0d99ff' : 'transparent',
      borderRadius: highlight ? 4 : 0,
      cursor: 'pointer',
      minWidth: 160,
    }}>
      {label}
    </div>
  );

  return (
    <div style={{
      background: '#2c2c2c',
      borderRadius: 8,
      overflow: 'hidden',
      marginBottom: '1.25rem',
      border: '1px solid #444',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
    }}>
      {/* Title bar */}
      <div style={{
        background: '#1e1e1e',
        padding: '6px 12px',
        display: 'flex', alignItems: 'center', gap: 6,
        borderBottom: '1px solid #444',
      }}>
        <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#ff5f57' }} />
        <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#febc2e' }} />
        <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#28c840' }} />
        <span style={{ color: '#999', fontSize: '0.75rem', marginLeft: 8 }}>Figma</span>
      </div>

      {/* Canvas area */}
      <div style={{ padding: '1.25rem', position: 'relative', minHeight: 200 }}>
        {/* Mock frame */}
        <div style={{
          border: '2px solid #0d99ff',
          borderRadius: 4,
          padding: '1rem',
          width: 'fit-content',
          position: 'relative',
        }}>
          <div style={{
            position: 'absolute', top: -20, left: 0,
            fontSize: '0.7rem', color: '#0d99ff', fontWeight: 600,
          }}>
            Frame 1
          </div>
          <div style={{
            background: '#3c3c3c',
            borderRadius: 6,
            padding: '0.75rem 1.5rem',
            color: '#e0e0e0',
            fontSize: '0.85rem',
          }}>
            Login Page
          </div>
        </div>

        {/* Context menu */}
        <div style={{
          position: 'absolute',
          top: 50, right: 40,
          background: '#2a2a2a',
          border: '1px solid #555',
          borderRadius: 6,
          padding: '4px 0',
          boxShadow: '0 4px 16px rgba(0,0,0,0.5)',
        }}>
          {menuItem('Cut', '⌘X')}
          {menuItem('Copy', '⌘C')}
          {menuItem('Paste here', '⌘V')}
          <div style={{ height: 1, background: '#444', margin: '4px 0' }} />
          <div style={{ display: 'flex', position: 'relative' }}>
            <div style={{ flex: 1 }}>
              {menuItem('Copy/Paste as', '▸', true)}
            </div>
            {/* Submenu */}
            <div style={{
              position: 'absolute',
              left: '100%',
              top: -4,
              background: '#2a2a2a',
              border: '1px solid #555',
              borderRadius: 6,
              padding: '4px 0',
              boxShadow: '0 4px 16px rgba(0,0,0,0.5)',
            }}>
              {subMenuItem('Copy as PNG')}
              {subMenuItem('Copy as SVG')}
              {subMenuItem('Copy as CSS')}
              <div style={{ height: 1, background: '#444', margin: '4px 0' }} />
              {subMenuItem('Copy link', true)}
              <div style={{
                padding: '2px 12px',
                fontSize: '0.68rem',
                color: '#0d99ff',
                marginTop: 2,
              }}>
                ↑ 이걸 클릭!
              </div>
            </div>
          </div>
          <div style={{ height: 1, background: '#444', margin: '4px 0' }} />
          {menuItem('Select layer', '▸')}
          {menuItem('Group selection', '⌘G')}
        </div>
      </div>
    </div>
  );
}
