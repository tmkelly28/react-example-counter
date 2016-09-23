'use strict';

import React from 'react';

const students = [{ name: 'Tom' }, { name: 'Griffin' }];

export default ({ counter, increment }) => (
  <div>
    <h1>Hello example</h1>
    <h3>Counter: { counter }</h3>
    { students.map((student, idx) => <h4 key={idx}>Student: {student.name}</h4>) }
    <button onClick={increment}>Increment</button>
  </div>
);