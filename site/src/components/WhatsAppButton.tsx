'use client'

declare global {
  interface Window { fbq?: (...args: unknown[]) => void }
}

export default function WhatsAppButton() {
  return (
    <>
      <a
        href="https://wa.me/393519242517"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contattaci su WhatsApp"
        className="whatsapp-fab"
        onClick={() => window.fbq?.('track', 'Contact')}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          width="30"
          height="30"
          fill="#fff"
        >
          <path d="M16.003 2.667C8.639 2.667 2.667 8.638 2.667 16c0 2.354.638 4.638 1.849 6.638L2.667 29.333l6.854-1.797A13.285 13.285 0 0 0 16.003 29.333C23.365 29.333 29.333 23.362 29.333 16c0-7.362-5.968-13.333-13.33-13.333zm0 24.267a11.01 11.01 0 0 1-5.617-1.541l-.402-.239-4.068 1.067 1.085-3.962-.263-.412A10.98 10.98 0 0 1 5.003 16c0-6.065 4.935-11 11-11s11 4.935 11 11-4.935 11-11 11zm6.03-8.23c-.33-.165-1.954-.964-2.257-1.074-.303-.11-.523-.165-.744.165-.22.33-.853 1.074-1.046 1.294-.193.22-.385.248-.715.083-.33-.165-1.394-.514-2.656-1.638-.982-.874-1.645-1.953-1.837-2.283-.193-.33-.021-.508.145-.672.15-.148.33-.385.495-.578.165-.193.22-.33.33-.55.11-.22.055-.413-.028-.578-.083-.165-.744-1.794-1.019-2.456-.268-.644-.54-.557-.744-.567l-.633-.011c-.22 0-.578.083-.881.413-.303.33-1.156 1.129-1.156 2.754s1.184 3.194 1.349 3.414c.165.22 2.33 3.558 5.648 4.991.79.341 1.406.544 1.886.697.792.252 1.514.216 2.084.131.636-.095 1.954-.799 2.23-1.571.275-.771.275-1.432.193-1.571-.083-.138-.303-.22-.633-.385z" />
        </svg>
      </a>

      <style>{`
        .whatsapp-fab {
          position: fixed;
          bottom: 24px;
          right: 24px;
          z-index: 9999;
          width: 56px;
          height: 56px;
          border-radius: 50%;
          background: #25D366;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 20px rgba(37,211,102,0.45);
          text-decoration: none;
          transition: transform 0.2s, box-shadow 0.2s;
        }
        .whatsapp-fab:hover {
          transform: scale(1.1);
          box-shadow: 0 6px 28px rgba(37,211,102,0.6);
        }
      `}</style>
    </>
  )
}
