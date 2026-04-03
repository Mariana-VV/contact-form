import "./CustomCheckbox.scss";

type Props = {
  isAgree: boolean;
  setAgree: (agree: boolean) => void;
  setIsAgreeError: (error: boolean) => void;
};

export const CustomCheckbox: React.FC<Props> = ({
  isAgree,
  setAgree,
  setIsAgreeError,
}) => {
  return (
    <input
      type="checkbox"
      checked={isAgree}
      onChange={() => (setAgree(!isAgree), setIsAgreeError(false))}
    />
  );
};
