export default function DarkLayout({children}) {
  return (
    <div style={{
      backgroundColor: 'rgba(0, 0, 0, 0.8)',
      padding: '10px',
      borderRadius: '5px'
    }}>
      {children}
    </div>
  )
}
