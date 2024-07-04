import React, { useEffect } from 'react';
import '../styles/MobileBody.scss';

function MobileBody({ onActivate }) {
  useEffect(() => {
    const hasActivated = sessionStorage.getItem('hasActivatedMobileBody');
    if (hasActivated) {
      onActivate();
    }
  }, [onActivate]);

  const handleClick = () => {
    sessionStorage.setItem('hasActivatedMobileBody', 'true');
    onActivate();
  };

  return (
    <div className='mobileBody section-gap'>
        <div className='mobileBody-activate-button' onClick={handleClick}>
            <p>Activate</p>
        </div>
        <div className='mobileBody-instructions'>
            <p>Click the button to activate ECHO</p>
        </div>
    </div>
  );
}

export default MobileBody;
