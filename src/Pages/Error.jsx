import { useNavigate } from 'react-router-dom'
import error from '../assets/images/error-404.png'
export default function Error() {
    const navigate = useNavigate()
  return (
    <div className="flex min-h-[100dvh] flex-col items-center justify-center bg-background px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-md text-center">
        <img
          src={error}
          alt="404 illustration"
          width="300"
          height="300"
          className="mx-auto"
          style={{ aspectRatio: "300/300", objectFit: "cover" }}
        />
        <h1 className="mt-6 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">Page not found</h1>
        <p className="mt-4 text-muted-foreground">The page you're looking for doesn't exist or has been moved.</p>
        <div className="mt-6 flex flex-col gap-2 sm:flex-row justify-center">
          <button
           onClick={()=>navigate('/')}
            className="inline-flex items-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            prefetch={false}
          >
            Go to Homepage
          </button>
          <button
            href="#"
            className="inline-flex items-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
            prefetch={false}
          >
            Contact Us
          </button>
        </div>
      </div>
    </div>
  )
}