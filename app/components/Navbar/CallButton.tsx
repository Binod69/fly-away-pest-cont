import React from 'react';

const CallNowButton = ({
  phoneNumber = '+61 469 114 477',
  className,
}: {
  phoneNumber?: string;
  className?: string;
}) => {
  const handleCall = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  return (
    <button onClick={handleCall} className={className}>
      Call Now
    </button>
  );
};

export default CallNowButton;
