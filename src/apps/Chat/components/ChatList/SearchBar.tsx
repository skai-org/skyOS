/**
 * v0 by Vercel.
 * @see https://v0.dev/t/BzIRIUgYBOq
 */
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"

export default function SearchBar() {
  return (
    <div className="relative w-full max-w-sm">
      <Input className="pl-8 w-full" placeholder="Search" type="text" />
      <div className="absolute left-2 top-1/2 transform -translate-y-1/2">
        <Search className="h-4 w-4" />
      </div>
    </div>
  )
}



