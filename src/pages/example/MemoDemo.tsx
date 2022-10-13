import React, { useState, useMemo, useCallback } from 'react';
import RandomDescription from './RandomDescription';

function MemoDemo() {
  const [value, setValue] = useState<string>('');
  const [value2, setValue2] = useState<string>('');

  const caculateLength = useMemo(() => {
    console.log('called');
    return value.length;
  }, [value]);

  const caculateLength2 = useMemo(() => {
    console.log('called2');
    return value2.length;
  }, [value2]);

  // const caculateLength = (() => {
  //   console.log('called');
  //   return value.length;
  // })();

  // const caculateLength2 = (() => {
  //   console.log('called2');
  //   return value2.length;
  // })();

  // const printFromChild = () => {
  //   console.log('called from child to parent');
  // };
  console.log('Memo parent rendered');

  const printFromChild = useCallback(
    (arg: any) => {
      console.log('called from child', arg);
    },
    [value]
  );

  return (
    <div>
      <input value={value} onChange={(e) => setValue(e.target.value)} />
      <RandomDescription
        displayLength={caculateLength}
        printFromChild={printFromChild}
      />

      <input value={value2} onChange={(e) => setValue2(e.target.value)} />
      <RandomDescription
        displayLength={caculateLength2}
        printFromChild={printFromChild}
      />
    </div>
  );
}

export default MemoDemo;
