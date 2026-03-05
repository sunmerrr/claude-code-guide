export default function FigmaMockup() {
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

      {/* Main area: canvas + sidebar */}
      <div style={{ display: 'flex' }}>
        {/* Canvas */}
        <div style={{ flex: 1, padding: '1.25rem', minHeight: 180 }}>
          {/* Mock frame — modal dialog */}
          <div style={{
            border: '2px solid #0d99ff',
            borderRadius: 4,
            padding: '0.75rem',
            width: 'fit-content',
            position: 'relative',
            marginTop: 16,
          }}>
            <div style={{
              position: 'absolute', top: -18, left: 0,
              fontSize: '0.7rem', color: '#0d99ff', fontWeight: 600,
            }}>
              Frame 1
            </div>
            <div style={{
              background: '#3c3c3c',
              borderRadius: 12,
              padding: '1.25rem 1.5rem 1rem',
              width: 220,
            }}>
              <div style={{
                color: '#fff', fontWeight: 700, fontSize: '0.95rem',
                textAlign: 'center', marginBottom: '0.6rem',
              }}>
                제목
              </div>
              <div style={{ color: '#999', fontSize: '0.8rem', marginBottom: '1rem' }}>
                내용이 들어갑니다.
              </div>
              <div style={{ display: 'flex', gap: '0.5rem' }}>
                <div style={{
                  flex: 1, textAlign: 'center', padding: '0.5rem', borderRadius: 8,
                  background: '#555', color: '#fff', fontSize: '0.82rem', fontWeight: 600,
                }}>
                  취소
                </div>
                <div style={{
                  flex: 1, textAlign: 'center', padding: '0.5rem', borderRadius: 8,
                  background: '#ff5722', color: '#fff', fontSize: '0.82rem', fontWeight: 600,
                }}>
                  확인
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right sidebar — MCP panel */}
        <div style={{
          width: 240, borderLeft: '1px solid #444',
          background: '#1e1e1e', padding: '0.75rem',
          fontSize: '0.8rem',
        }}>
          {/* MCP header */}
          <div style={{
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            marginBottom: '0.75rem',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
              <span style={{ color: '#999', fontSize: '0.75rem' }}>&#9664;</span>
              <span style={{ color: '#e0e0e0', fontWeight: 600, fontSize: '0.82rem' }}>MCP</span>
            </div>
            <div style={{ display: 'flex', gap: 8 }}>
              <span style={{ color: '#999', fontSize: '0.75rem' }}>?</span>
              <span style={{ color: '#999', fontSize: '0.75rem' }}>&#9881;</span>
            </div>
          </div>

          {/* Selection details */}
          <div style={{ color: '#c5c5c5', fontWeight: 600, fontSize: '0.78rem', marginBottom: '0.5rem' }}>
            선택 세부사항
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.25rem' }}>
            <span style={{ color: '#999', fontSize: '0.75rem' }}>세션 활동</span>
            <span style={{ color: '#c5c5c5', fontSize: '0.75rem' }}>전송되지 않음</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
            <span style={{ color: '#999', fontSize: '0.75rem' }}>예상 토큰 수</span>
            <span style={{ color: '#c5c5c5', fontSize: '0.75rem' }}>563</span>
          </div>

          {/* Prompt box */}
          <div style={{
            background: '#2a2a2a',
            border: '1px solid #444',
            borderRadius: 6,
            padding: '0.6rem 0.75rem',
            marginBottom: '0.75rem',
          }}>
            <div style={{ color: '#c5c5c5', fontSize: '0.78rem', marginBottom: '0.35rem' }}>
              이 1개의 디자인을 Figma에서 구현하세요.
            </div>
            <div style={{
              color: '#0d99ff', fontSize: '0.72rem',
              wordBreak: 'break-all',
            }}>
              @https://www.figma.com/design/Lx0LeSZc...
            </div>
          </div>

          {/* Copy button */}
          <div style={{
            background: '#2a2a2a',
            border: '1px solid #444',
            borderRadius: 6,
            padding: '0.45rem',
            textAlign: 'center',
            color: '#c5c5c5',
            fontSize: '0.78rem',
            cursor: 'pointer',
            marginBottom: '0.5rem',
          }}>
            예제 프롬프트 복사
          </div>

          {/* Arrow annotation */}
          <div style={{
            color: '#0d99ff', fontSize: '0.72rem',
            textAlign: 'center',
          }}>
            ↑ 이 링크를 Claude Code에 붙여넣기!
          </div>
        </div>
      </div>
    </div>
  );
}
