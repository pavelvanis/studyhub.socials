type LabelProps = {
  id?: string;
  title?: string;
  required?: boolean;
};

const Label = ({ id, title, required }: LabelProps) => {
  return (
    <label
      htmlFor={id}
      className=" w-full text-[0.67rem] ms-1 mb-1 block relative leading-[1] font-medium"
    >
      {required && <span className=" text-red- me-1">*</span>}
      {title}
    </label>
  );
};

export default Label;
