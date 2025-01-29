export default function Leaderboard() {
  const topUsers = [
    { name: "Alice", score: 1200 },
    { name: "Bob", score: 1150 },
    { name: "Charlie", score: 1100 },
    { name: "David", score: 1050 },
    { name: "Eve", score: 1000 },
  ]

  return (
    <div className="bg-gray-800 p-6 rounded-lg mb-8">
      <h2 className="text-2xl font-bold mb-4">Leaderboard</h2>
      <ul>
        {topUsers.map((user, index) => (
          <li key={user.name} className="flex justify-between items-center mb-2">
            <span>
              {index + 1}. {user.name}
            </span>
            <span className="text-red-500">{user.score}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

