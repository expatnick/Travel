'use client';

const MiddleContentBar = ({ children }: { children?: React.ReactNode }) => {
  return (
    <div className="middle-content-bar">
      <div className="content-container-inner p-6">
        {children}
      </div>
    </div>
  );
};

export default MiddleContentBar;
