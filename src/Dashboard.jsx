import { useEffect, useState } from "react";
import { db, auth } from "./firebase";
import { collection, getDocs } from "firebase/firestore";
import { signOut } from "firebase/auth";

export default function Dashboard() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      const col = collection(db, "specialData");
      const snapshot = await getDocs(col);
      setItems(snapshot.docs.map(doc => doc.data()));
    };

    loadData();
  }, []);

  return (
    <div>
      <h2>Dashboard</h2>

      <button onClick={() => signOut(auth)}>Logout</button>

      {items.map((item, index) => (
        <div key={index}>
          <strong>{item.title}</strong> - {item.value}
        </div>
      ))}
    </div>
  );
}
