import React from 'react';


interface FormProps {
	onQuerySubmitted: (event: React.SyntheticEvent) => void,
	query: string,
	setQuery: React.Dispatch<React.SetStateAction<string>>
}

export const Form: React.FC<FormProps> = ({onQuerySubmitted, query, setQuery}) => {

    return (
      <form onSubmit={onQuerySubmitted}>
        <label>Name:</label>
        <br />
        <input 
          type='text' 
          value={query}
		  name='query'
          onChange={(e: React.ChangeEvent) => setQuery((e.target as HTMLInputElement).value)}
        />
        <input 
          type='submit' 
        />
      </form>
    )
  }