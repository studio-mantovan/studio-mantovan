'use client'

export function ResetButton() {
  return (
    <button
      onClick={() => {
        localStorage.removeItem('cookie_consent')
        window.location.reload()
      }}
      style={{
        marginTop: '1.25rem',
        display: 'inline-flex', alignItems: 'center', gap: '6px',
        background: '#1A9EC9', color: '#fff',
        fontWeight: 700, fontSize: '0.88rem',
        padding: '10px 20px', borderRadius: '50px',
        border: 'none', cursor: 'pointer',
      }}
    >
      Rivedi le preferenze cookie
    </button>
  )
}
