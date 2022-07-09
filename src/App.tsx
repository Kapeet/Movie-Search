import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import {Form} from './components/Form';
import { ResponseModel } from './types';
import { MovieResults } from './components/MovieResults';

function App() {

  const [query, setQuery] = useState<string>('');

  const [fetchData, setFetchData] = useState<ResponseModel | null>(null);
  const onQuerySubmitted = async (event: React.SyntheticEvent) => {
	  event.preventDefault();
	const res = await fetch("http://www.omdbapi.com/?i=tt3896198&apikey=84ec104e&S=" +	query);
	const json = await res.json();
    console.log(json)
	setFetchData(json)
  }

  useEffect(() => {
	console.log(query)
  },[query])
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Form onQuerySubmitted={onQuerySubmitted} query={query} setQuery={setQuery} />

		{fetchData?.Search && <MovieResults movies={fetchData.Search} />}
      </header>
    </div>
  );
}

export default App;
