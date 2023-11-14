import getCustomClassNameUtils from "@/core/utils/getCustomClassNameUtils";

const RecruitmentTextInputField = ({ label, name, className, placeholder, suffix, required = false, error, ...props }) => {
  return (
    <div className="flex flex-col">
      <label htmlFor="" className="text-[#6A6A6A] font-[inter] text-[14px] mb-2">
        {label} {required && <span className="text-[#F82F1E]">*</span>}
      </label>
      <div className="flex relative">
        <div className="w-full">
          <input {...props} className={getCustomClassNameUtils("w-full bg-[#F6FAFD] border rounded-full border border-solid border-[#B9C0CD] focus:border-[#F82F1E] focus:outline-none py-3 px-6", className)} type="text" placeholder={placeholder} name={name} />
          {error && <span className="text-[#F82F1E] text-[12px] ms-1">{error}</span>}
        </div>
        {suffix && <span className="absolute right-5 top-[.9rem] text-left">{suffix}</span>}
      </div>
    </div>
  );
};

export default RecruitmentTextInputField;
