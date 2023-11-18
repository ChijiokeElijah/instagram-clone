

export default function MiniProfile() {
  return (
    <div className="flex items-center justify-between mt-14 ml-10">
        <img className="h-16 w-16 rounded-full border p-2" src='https://th.bing.com/th/id/OIP.qNBaBUh5A4nnZgbCWEHLdQAAAA?w=120&h=180&c=7&r=0&o=5&pid=1.7' alt="userImage" />
        <div className="flex-1 ml-4">
            <h2 className="font-bold">CodeWithCJ</h2>
            <h3 className="text-sm text-gray-400">Welcome to Instagram</h3>
        </div>
        <button className="font-semibold text-blue-400 text-sm">Sign Out</button>
    </div>
  )
}
