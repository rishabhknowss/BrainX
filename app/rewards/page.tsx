import { Button } from "@/components/ui/button"

const rewards = [
  { name: "1-month Premium Subscription", cost: 1000 },
  { name: "Exclusive Course Access", cost: 750 },
  { name: "Custom Profile Badge", cost: 500 },
]

export default function Rewards() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Rewards</h1>
      <div className="bg-gray-800 p-6 rounded-lg">
        <ul className="space-y-4">
          {rewards.map((reward) => (
            <li key={reward.name} className="flex justify-between items-center">
              <span>{reward.name}</span>
              <Button variant="outline" size="sm">
                Redeem ({reward.cost} tokens)
              </Button>
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-8 text-center">
        <h2 className="text-2xl font-bold mb-4">Share Your Achievement</h2>
        <div className="space-x-4">
          <Button variant="outline">Share on Twitter</Button>
          <Button variant="outline">Share on Facebook</Button>
          <Button variant="outline">Share on LinkedIn</Button>
        </div>
      </div>
    </div>
  )
}

