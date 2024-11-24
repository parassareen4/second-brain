interface inputProps {
  placeholder: string;
  onChange?: () => void;
}

export const InputComp = ({ placeholder, onChange }: inputProps) => {
  return (
    <div className="mt-4 ">
      <input
        className=" outline-1 px-10 py-2 border-slate-400 border rounded-md"
        type="text"
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
};
