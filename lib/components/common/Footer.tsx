export default function Footer() {
  return (
    <footer className='fixed bottom-0'>
      <div className='flex justify-center '>
        <p className='text-center text-xs text-gray-400'>
          &copy; {new Date().getFullYear()} Stockr App
        </p>
      </div>
    </footer>
  )
}
