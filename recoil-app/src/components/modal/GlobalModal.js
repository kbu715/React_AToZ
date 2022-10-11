import React from "react";
import { useRecoilState } from "recoil";
import ConfirmModal from "./ConfirmModal";
import AlertModal from "./AlertModal";
import { modalState } from "../../states/modal";

export const TYPEOFMODAL = {
  ConfirmModal: "ConfirmModal",
  AlertModal: "AlertModal",
};

const ModalComponents = {
  [TYPEOFMODAL.ConfirmModal]: ConfirmModal,
  [TYPEOFMODAL.AlertModal]: AlertModal,
};

const GlobalModal = () => {
  const { modalType, modalProps } = useRecoilState(modalState)[0] || {};

  const renderComponent = () => {
    if (!modalType) {
      return null;
    }
    const ModalComponent = ModalComponents[modalType];

    return <ModalComponent {...modalProps} />;
  };

  return <>{renderComponent()}</>;
};

export default GlobalModal;
