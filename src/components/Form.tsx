import React, {useState} from 'react';

export default function Form() {
    const [name, setName] = useState<string>();
    const handleSubmit = (e: any ) => {
      e.preventDefault();
    }
  
    return (
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <br />
        <input 
          type='text' 
          value={name}
          onChange={(e: React.ChangeEvent) => setName((e.target as HTMLInputElement).value)}
        />
        <input 
          type='submit' 
        />
      </form>
    )
  }