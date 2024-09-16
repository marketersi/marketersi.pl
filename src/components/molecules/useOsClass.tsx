import { useState, useEffect } from 'react';

const useOsClass = () => {
  const [osClass, setOsClass] = useState('');

  useEffect(() => {
    const platform = navigator.platform.toLowerCase();
    if (platform.includes('mac')) {
      setOsClass('mac'); // For Mac devices
    } else if (platform.includes('win')) {
      setOsClass('win'); // For Windows devices
    }
  }, []);

  return osClass;
};

export default useOsClass;
