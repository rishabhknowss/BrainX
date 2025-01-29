import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function UserProfile() {
  return (
    <div className="bg-gray-800 p-6 rounded-lg mb-8 flex items-center">
      <Avatar className="h-16 w-16 mr-4">
        <AvatarImage src="/placeholder.svg" alt="User" />
        <AvatarFallback>JD</AvatarFallback>
      </Avatar>
      <div>
        <h2 className="text-2xl font-bold">John Doe</h2>
        <p className="text-red-500">Level 5 • 500 Tokens</p>
      </div>
    </div>
  )
}

