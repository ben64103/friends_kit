import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

import CustomButton from "@/components/common/CustomButton";
import { setAcctType } from "@/features/auth/reducers/user/userSlice";

const AccountCardButton = ({ title }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleBtnClick = () => {
    navigate("/signup/info");
    dispatch(setAcctType(title));
  };

  const btnClass =
    "flex-center w-full min-h-[42px] !text-white text-[.8rem] text-lowercase bg-blue-600 font-medium text-[#999] rounded-lg shadow-none hover:shadow-none transition-colors hover:bg-blue-700 focus:outline-none disabled:cursor-not-allowed disabled:bg-blue-400 dark:border-t dark:border-blue-300";

  return (
    <CustomButton
      content="Continue"
      className={btnClass}
      handleClick={() => handleBtnClick()}
    />
  );
};

AccountCardButton.propTypes = { title: PropTypes.string };

export default AccountCardButton;
