'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import Smart from './smart';
import OtherSmart from './otherSmart';

ReactDOM.render(
  <div>
    <Smart />
    <OtherSmart />
  </div>,
  document.getElementById('app')
);