import { Loader2 } from "lucide-react"

export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh]">
      <Loader2 className="h-16 w-16 animate-spin text-primary" />
      <h2 className="mt-4 text-xl font-medium">Loading...</h2>
      <p className="mt-2 text-muted-foreground">Preparing your cyber tools...</p>
    </div>
  )
}
