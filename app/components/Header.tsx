import { Button } from "@/components/ui/button"

export default function Header() {
  return (
    <header className="flex justify-between items-center mb-8">
      <h1 className="text-3xl font-bold text-red-500">QuizPlay Learn</h1>
      <nav>
        <Button variant="outline" className="mr-2">
          Home
        </Button>
        <Button variant="outline" className="mr-2">
          Topics
        </Button>
        <Button variant="outline">Profile</Button>
      </nav>
    </header>
  )
}

