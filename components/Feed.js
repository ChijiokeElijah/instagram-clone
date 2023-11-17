'use client'

import Post from "./Posts";
import Stories from "./Stories";


export default function Feed() {
  return (
    <main>
        <section>
            {/* stories */}
            <Stories/>

            {/* Posts */}
            <Post/>
        </section>
        <section>
            {/* Mini profile */}

            {/* suggestions */}
        </section>

    </main>
  )
}
