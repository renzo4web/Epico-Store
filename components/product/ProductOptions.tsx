interface Props {
  name: string;
  values: string[];
  selectedOptions: any;
  handleChange: (name, value: string) => void;
}

const ProductOptions = ({
  name,
  values,
  selectedOptions,
  handleChange,
}: Props) => {
  const styledChecked = `text-white bg-purple-900`;
  const styledUnchecked = `text-gray-900 bg-gray-200`;

  return (
    <fieldset>
      <legend className="text-xl font-semibold">{name}</legend>
      <div className="inline-flex items-center flex-wrap">
        {values.map((value) => {
          const id = `option-${name}-${value}`;
          const isChecked = selectedOptions[name] === value;
          return (
            <label key={id} htmlFor={id}>
              <input
                className="sr-only"
                type="radio"
                id={id}
                name={`option-${name}`}
                value={value}
                checked={isChecked}
                onChange={() => handleChange(name, value)}
              />
              <div
                className={`p-2 my-3 text-lg rounded-full block cursor-pointer mr-3 ${
                  isChecked ? styledChecked : styledUnchecked
                }`}
              >
                <span className="px-2">{value}</span>
              </div>
            </label>
          );
        })}
      </div>
    </fieldset>
  );
};

export default ProductOptions;
