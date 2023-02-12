type Props = {
  inputRef: React.RefObject<HTMLInputElement>;
  error: string | null;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
};

function Form({ inputRef, handleChange, handleSubmit, error }: Props) {
  return (
    <form
      className='flex flex-col gap-4 bg-white p-2 md:w-2/4 md:mx-auto border mt-6 rounded-md'
      onSubmit={handleSubmit}
    >
      <h1 className='text-2xl font-medium text-center'>Join a Poll</h1>
      <input
        className='text-center outline-none w-full'
        type='text'
        placeholder='Enter Poll Id here...'
        ref={inputRef}
        onChange={handleChange}
      />
      <button className='bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-md w-full mt-2'>Join</button>
      {error ? <p className='mt-2'>There is an error</p> : null}
    </form>
  );
}

export default Form;
