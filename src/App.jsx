/* eslint-disable react/prop-types */
import { useState } from "react";

export default function App() {
  const [items, setItems] = useState([]); // Initialize with an empty array

  const handleAddItems = (item) => {
    setItems((items) => [...items, item]);
  };

  return (
    <>
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList items={items} /> {/* Pass items to PackingList */}
      <Stats items={items} /> {/* Pass items to Stats */}
    </>
  );
}

function Logo() {
  return <h1 className="flex justify-center text-center my-8">🐱‍🏍 Far Away 🎿</h1>;
}

function Form({ onAddItems }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();
    if (!description) return;

    const newItem = { id: Date.now(), desc: description, quantity, packed: false }; // Correct property name to "packed"
    onAddItems(newItem);
    setDescription("");
    setQuantity(1);
  }

  return (
    <div>
      <div className="text-center">FORM</div>
      <h1>Where Do You Want to Go? 👜</h1>

      <form className="add-form" onSubmit={handleSubmit}>
        <select value={quantity} onChange={(e) => setQuantity(Number(e.target.value))}>
          {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
            <option value={num} key={num}>{num}</option>
          ))}
        </select>
        <input
          type="text"
          className="border border-black"
          placeholder="Add Item"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button type="submit" className="border border-black rounded">Add new</button>
      </form>
    </div>
  );
}

function PackingList({ items }) { // Receives items as a prop
  return (
    <div>
      <ul className="flex justify-center text-center">
        {items.map((item) => (
          <Item item={item} key={item.id} />
        ))}
      </ul>
    </div>
  );
}

function Item({ item }) {
  return (
    <div className="flex justify-between list">
      <li style={item.packed ? { textDecoration: "line-through" } : {}} className="mx-7 text-md">
        {item.quantity} {item.desc}
      </li>
      <button>❌</button>
    </div>
  );
}

function Stats({ items }) { // Accepts items as a prop
  const totalItems = items.length;
  const packedItems = items.filter((item) => item.packed).length;
  const packedPercentage = totalItems ? Math.round((packedItems / totalItems) * 100) : 0;

  return (
    <footer className="flex justify-center text-center stats">
      You have {totalItems} items on your list, and you already packed {packedItems} ({packedPercentage}%).
    </footer>
  );
}
