import { Dispatch, SetStateAction } from "react";

export interface MessagePopupType {
  isPopupVisible: boolean;
  setIsPopupVisible: Dispatch<SetStateAction<boolean>>;
}
