import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';

export const LoadingButton = ( props ) => {
    const [isLoading, setLoading] = useState(false);
    const actionFunc = props.actionFunc;

    useEffect(() => {
      if (isLoading) {
        actionFunc().then(() => {
          setLoading(false);
        });
      }
    }, [isLoading]);
  
    const handleClick = () => setLoading(true);
  
    return (
      <Button
        variant="primary"
        disabled={isLoading}
        onClick={!isLoading ? handleClick : null}
      >
        {isLoading ? 'Loading…' : 'Click to load'}
      </Button>
    );
  }