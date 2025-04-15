import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ShieldAlert } from "lucide-react"

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] px-4 text-center">
      <div className="mb-8">
        <ShieldAlert className="h-24 w-24 text-muted-foreground mx-auto mb-6" />
        <h1 className="text-4xl font-bold mb-2">404</h1>
        <h2 className="text-2xl font-semibold mb-4">Page Not Found</h2>
        <p className="text-muted-foreground max-w-md mx-auto mb-8">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
      </div>
      <div className="space-y-4">
        <p className="text-sm text-muted-foreground mb-4">Try one of these instead:</p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button asChild>
            <Link href="/">Go Home</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/tools/base64">Base64 Tool</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/tools/caesar">Caesar Cipher</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
