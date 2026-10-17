import React from "react";

type FormInputProps = {
  id: string;
  label: string;
  type?: string;
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  className?: string;
};

export default function FormInput({
  id,
  label,
  type = "text",
  placeholder,
  value,
  onChange,
  required = false,
  className = "",
}: FormInputProps) {
  return (
    <div className={className}>
      <label
        htmlFor={id}
        className="block text-xs font-bold uppercase pl-2 tracking-wider text-slate-700 mb-1.5"
      >
        {label} {required && <span className="text-accent">*</span>}
      </label>
      <input
        id={id}
        required={required}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full px-4 py-3 rounded-sm border border-slate-200 bg-slate-50/50 text-slate-900 text-sm placeholder:text-slate-400 focus:outline-none focus:border-accent focus:bg-white focus:ring-4 focus:ring-accent/10 transition-all"
      />
    </div>
  );
}
