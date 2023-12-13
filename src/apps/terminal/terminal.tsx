import { useRef, useEffect } from 'react';
import { Terminal } from 'xterm';



const XTerm =<T extends HTMLDivElement>() => {
  const termRef = useRef<T>(null);

  useEffect(() => {
    const term = new Terminal({
      
    });
    if (termRef.current) {
      term.open(termRef.current);
      term.write('skyOs@ \x1B[1;3;31muser\x1B[0m $ ');
    }

    term.onData(e =>{
      term.write(e)
    });

  

    return () => {
      if (termRef.current) {
        term.dispose();
      }
    };

    
  }, []);

  return (
    <div ref={termRef} id="terminal">

    </div>
  );
};

export default XTerm;
