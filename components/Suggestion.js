export default function Suggestion({ img, username, jobTitle }) {
  return (
    <div className="flex items-center justify-between mt-3">
      <img className="h-10 rounded-full border p-2" src={img} alt="" />
      <div className="flex-1 ml-4">
        <h2 className="font-bold text-sm">{username}</h2>
        <h3 className="text-sm text-gray-400 truncate w-[230px]">{jobTitle}</h3>
      </div>
      <button className="font-semibold text-blue-400 text-sm">Follow</button>
    </div>
  );
}
