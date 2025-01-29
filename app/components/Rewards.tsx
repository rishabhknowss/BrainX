import { Button } from "@/components/ui/button"

export default function Rewards() {
  const rewards = [
    { name: "1-month Premium Subscription", cost: 1000 },
    { name: "Exclusive Course Access", cost: 750 },
    { name: "Custom Profile Badge", cost: 500 },
  ]

  return (
    <div className="bg-gray-800 p-6 rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Rewards</h2>
      <ul>
        {rewards.map((reward) => (
          <li key={reward.name} className="flex justify-between items-center mb-4">
            <span>{reward.name}</span>
            <Button variant="outline" size="sm">
              Redeem ({reward.cost} tokens)
            </Button>
          </li>
        ))}
      </ul>
    </div>
  )
}

