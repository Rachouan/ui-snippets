export type SwitchProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  "onChange"
> & {
  onChange?: (checked: boolean) => void;
};

export function Switch({ checked, onChange, ...rest }: SwitchProps) {
  return (
    <label className="relative inline-flex items-center cursor-pointer">
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange?.(e.currentTarget.checked)}
        {...rest}
        className="sr-only peer"
      />
      <div
        className={
          "w-20 h-11 transition-all ease-in-expo bg-gradient-to-br border border-zinc-200  dark:from-zinc-800 dark:to-zinc-900 dark:border-zinc-600 dark:hover:border-zinc-500 hover:border-zinc-300 hover:shadow-sm from-zinc-50 to-white outline-none rounded-lg peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full after:shadow-sm peer-checked:after:border-orange-600  after:content-[''] after:absolute after:top-1 after:start-1 after:bg-white  after:border after:border-gray-300 dark:after:border-gray-950 after:rounded-md after:h-9 after:w-9 after:transition-all after:scale-90 peer-checked:from-orange-400 peer-checked:to-orange-500 peer-checked:border-orange-600 dark:peer-checked:border-orange-300"
        }
      ></div>
    </label>
  );
}
