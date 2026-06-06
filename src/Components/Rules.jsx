import React from "react"
export default function Rules(){
    const [showRules, setShowRules] = React.useState(false)
    return(
<>
<button
  onClick={() => setShowRules(true)}
  className=" 
  bg-[#8f7a66]
  text-white
    font-bold
    px-2
    py-1
    rounded-lg
    hover:bg-[#7d6a58]
    hover:scale-105
    active:scale-95
    transition-all"
>
 ☰ Rules
</button>
{showRules && (
  <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
    <div className="bg-white p-6 rounded-2xl max-w-md w-[90%]">
      <h2 className="text-2xl font-bold mb-4">
        How to Play
      </h2>

      <ul className="space-y-2">
        <li>🎯 Merge tiles with the same value.</li>
        <li>🏆 Reach 2048 to win.</li>
        <li>↩️ Undo your previous move once.</li>
        <li>🧹 Erase one unwanted tile.</li>
        <li>🔄 Swap two tiles strategically.</li>
        <li>⬅️➡️⬆️⬇️ Use arrow keys or swipe to move.</li>
        <li>2️⃣+2️⃣ = 4️⃣, 4️⃣+4️⃣ = 8️⃣, and so on.</li>
        <li>💀 Game ends when no moves are possible.</li>
      </ul>

      <h3 className="font-bold mt-4 mb-2">
        Power-Ups
      </h3>

      <ul className="space-y-1">
        <li>↩️ Undo: Revert your previous move.</li>
        <li>🧹 Erase: Remove one tile.</li>
        <li>🔄 Swap: Exchange two tiles.</li>
      </ul>

      <button
        onClick={() => setShowRules(false)}
        className="mt-5 w-full py-2 rounded-lg bg-[#8f7a66] text-white"
      >
        Got it!
      </button>
    </div>
  </div>
)}
</>
    )
}