
import minifaker from 'minifaker';
import { useEffect, useState } from 'react';
import Suggestion from './Suggestion';

export default function Suggestions() {
    const [suggestions, setSuggestions] = useState([])
    useEffect(()=>{
        const suggestions = minifaker.array(5, (i) =>({
                username: minifaker.username({locale: "en"}).toLowerCase(),
                img: `https://i.pravatar.cc/150?img=${Math.ceil(Math.random() * 70)}`,
                jobTitle: minifaker.jobTitle(),
                id: i
            }
        ))
        setSuggestions(suggestions)
    }, [])
    return (
    <div className="mt-4 ml-10">
        <div className="flex justify-between mb-5 text-sm"> 
            <h3 className="font-bold  text-gray-400"> Suggestions for you</h3>
            <button className="text-gray-60 font-semi-bold">See all</button>

        </div>
        {suggestions?.map(suggestion =>(
            <Suggestion key={suggestion.id} username={suggestion.username} img={suggestion.img} jobTitle={suggestion.jobTitle} />
        ))}
    </div>
  )
}
