"use client"

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import './page.css'


export default function Home() {
  const [inputVal, setInputVal] = useState("")

  const {push} = useRouter()

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()

    push(`/data/${inputVal}`)

  }

  return (
    <div className="container">
      <div>
        <h1>Enter Your Name</h1>
      </div>

      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Your Name Here" value={inputVal} onChange={(e) => setInputVal(e.target.value)} required/>
        <button type="submit">Get Data</button>
      </form>
    </div>
  );
}
