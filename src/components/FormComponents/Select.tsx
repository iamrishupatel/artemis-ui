import React, { ReactChild } from "react";

export interface SelectProps extends React.HTMLProps<HTMLSelectElement> {
  children: ReactChild | ReactChild[];
  /** Error description of the select */
  error?: string;
  /** Success description of the select */
  success?: string;
  /** Disabled state of the select */
  disabled?: boolean;
}

export interface OptionProps extends React.HTMLProps<HTMLOptionElement> {
  children: ReactChild;
}

export const Select: React.FC<SelectProps> = ({
  children,
  error,
  success,
  disabled,
  ...props
}) => {
  let selectContainerClass = "art-select-container";
  if (error && !success) {
    selectContainerClass = "art-select-container art-select-error";
  }
  if (success && !error) {
    selectContainerClass = "art-select-container art-select-success";
  }
  if (disabled) {
    selectContainerClass = "art-select-container art-select-disabled";
  }

  return (
    <div className={selectContainerClass}>
      <div className="art-select">
        <select {...props}>{children}</select>
      </div>

      {error && !disabled && !success && (
        <span className="art-error-text">{error}</span>
      )}
      {success && !disabled && !error && (
        <span className="art-success-text">{success}</span>
      )}
    </div>
  );
};

export const Option: React.FC<OptionProps> = ({ children, ...props }) => {
  return (
    <option className="art-select-item" {...props}>
      {children}
    </option>
  );
};

// export const Select: React.FC = ({ children, ...props }) => {
//   const [isActive, setIsActive] = useState(false);

//   const containerClass = isActive
//     ? "art-select-item-container active"
//     : "art-select-item-container";

//   const toggleActive = () => {
//     setIsActive(!isActive);
//   };
//   return (
//     <div className="art-select-container">
//       <div className="art-select-header" onClick={toggleActive}>
//         <div className="art-select-title">Select</div>
//         <AiFillCaretDown />
//       </div>
//       <div className={containerClass}>
//         <div className="art-select-item">Item 1</div>
//         <div className="art-select-item">Item 2 is little long</div>
//         <div className="art-select-item">Item 3</div>
//       </div>
//     </div>
//   );
// };
