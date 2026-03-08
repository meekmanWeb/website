import { UseFormRegisterReturn } from "react-hook-form";

interface ProductTextFieldProps {
  id: string;
  label: string;
  placeholder?: string;
  required?: boolean;
  error?: string;
  type?: string;
  registration: UseFormRegisterReturn;
}

const ProductTextField = ({
  id,
  label,
  placeholder,
  required = false,
  error,
  type = "text",
  registration,
}: ProductTextFieldProps) => {
  return (
    <div className="space-y-1">
      <label htmlFor={id} className="block text-sm font-medium text-slate-800">
        {label} {required && <span className="text-red-600">*</span>}
      </label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        className="w-full rounded-md border border-gray-300 px-3 py-2 outline-none focus:border-primary"
        {...registration}
      />
      {error && <p className="text-sm text-red-600">{error}</p>}
    </div>
  );
};

export default ProductTextField;
