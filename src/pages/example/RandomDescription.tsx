import React, { memo } from 'react';

function RandomDescription({ displayLength, printFromChild }: any) {
  console.log('random desc ran');
  return (
    <div>
      {displayLength},{printFromChild(displayLength)}
    </div>
  );
}

export default memo(RandomDescription);
