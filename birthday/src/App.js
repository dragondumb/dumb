import React, { useState } from 'react';
import List from './List';
import data from './data';
import './index.css';

function App() {
  const today = new Date();
  const todayMonth = today.getMonth() + 1;
  const todayDate = today.getDate();

  // Filter today's birthdays
  const birthdayPeople = data.filter((person) => {
    const birthDate = new Date(person.birthday);
    return (
      birthDate.getMonth() + 1 === todayMonth &&
      birthDate.getDate() === todayDate
    );
  });

  const [people, setPeople] = useState(birthdayPeople);

  return (
    <main>
      <section className="container">
        <h3>{people.length} Birthday(s) Today</h3>
        <List people={people} />

        <div className="btn-group">
          <button onClick={() => setPeople([])}>Clear All</button>
          <button onClick={() => setPeople(data)}>View All Friends</button>
        </div>
      </section>
    </main>
  );
}

export default App;
