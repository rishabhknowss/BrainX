const mockLeaderboard = [
  { name: "Alice", score: 1200 },
  { name: "Bob", score: 1150 },
  { name: "Charlie", score: 1100 },
  { name: "David", score: 1050 },
  { name: "Eve", score: 1000 },
]

export default function Leaderboard() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Leaderboard</h1>
      <div className="bg-gray-800 p-6 rounded-lg">
        <table className="w-full">
          <thead>
            <tr>
              <th className="text-left">Rank</th>
              <th className="text-left">Name</th>
              <th className="text-right">Score</th>
            </tr>
          </thead>
          <tbody>
            {mockLeaderboard.map((user, index) => (
              <tr key={user.name} className="border-t border-gray-700">
                <td className="py-2">{index + 1}</td>
                <td>{user.name}</td>
                <td className="text-right text-red-500">{user.score}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

