'use client';

const MiddleContentBar = ({ children }: { children?: React.ReactNode }) => {
  return (
    <div className="middle-content-bar">
      <div className="card h-full">
        <div className="content-container-inner p-6">
          {children}
        </div>
      </div>
    </div>
  );
};

export default MiddleContentBar;
