type Props = {
  gap?: number;
  children: React.ReactNode;
};

function Container({ gap, children }: Props) {
  return <div className={`flex flex-col gap-${gap} md:mx-16 mx-4`}>{children}</div>;
}

export default Container;
