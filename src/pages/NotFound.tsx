import { Link } from "wouter";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background text-foreground flex items-center justify-center p-8">
      <div className="max-w-md text-center">
        <p className="kicker mb-4">404</p>
        <h1 className="display-xl mb-6">Page not found.</h1>
        <p className="text-foreground-2 mb-10">
          The page you're looking for doesn't exist.
        </p>
        <Link href="/" className="btn-gold">
          Return Home
        </Link>
      </div>
    </div>
  );
}
