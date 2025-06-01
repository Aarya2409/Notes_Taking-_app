import { useEffect, useState } from "react";
import axios from "../api/axiosInstance";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const [notes, setNotes] = useState([]);
  const navigate = useNavigate();

  const fetchNotes = async () => {
    try {
      const res = await axios.get("/notes"); // auto includes token
      setNotes(res.data.notes || []);
    } catch (err) {
      console.error("❌ Error fetching notes:", err);
      if (err.response?.status === 401) {
        localStorage.removeItem("token");
        navigate("/login");
      }
    }
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div>
      <h2>📒 My Notes</h2>
      <button onClick={handleLogout}>Logout</button>

      {notes.length === 0 ? (
        <p>No notes found</p>
      ) : (
        <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
          {notes.map((note) => (
            <div
              key={note.id}
              style={{
                border: "1px solid #ccc",
                padding: "1rem",
                width: "250px",
                borderRadius: "8px",
              }}
            >
              <h3>{note.title}</h3>
              <p>{note.content}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Dashboard;
