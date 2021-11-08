import { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router";


export default function NewPlayer() {


  const [name, setName] = useState("");
  const [rank, setRank] = useState("Runt");
  const [status, setStatus] = useState("Alive")
  const [id, setId] = useState("");
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const fields = {
      name,
      rank,
      status,
    }
    const res = await axios.post(URL, { fields }, config);
    // console.log(res.data);
    setStatus("Alive")
    setRank("Runt")
    setId(res.data.id)
    history.push(`/chapterone/${res.data.id}`);
    console.log(id);
  }


  return (
    <div>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Avatar Name" className="input" />
      <button className="playbutton" onClick={handleSubmit}>Play!</button>
    </div>
  )
}

