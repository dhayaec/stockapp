export default function Footer() {
  return (
    <footer className='fixed bottom-0 m-auto w-full'>
      <p className='text-center text-xs text-gray-500'>
        &copy; {new Date().getFullYear()} Stockr App
      </p>
    </footer>
  )
}
