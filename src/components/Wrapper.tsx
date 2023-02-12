type WrapperProps = {
  children: React.ReactNode;
};

function Wrapper({ children }: WrapperProps) {
  return <div className='flex flex-col min-h-screen bg-white'>{children}</div>;
}

export default Wrapper;
