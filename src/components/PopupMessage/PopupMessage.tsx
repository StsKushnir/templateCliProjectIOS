import React from "react";
import { View, Text, TouchableOpacity, Modal } from "react-native";
import { s } from "./PopupMessage.styles";
import SuccessfulIcon from "../../assets/icons/additional-Icons/SuccessfulIcon";
import { NavigationProps } from "../../types/NavigationTypes";
import useStore from "../../store/useStore";
interface PopupMessageProps {
  modalVisible: boolean;
  navigation: NavigationProps["navigation"];
  setModalVisible: (visible: boolean) => void;
}

const PopupMessage: React.FC<PopupMessageProps> = ({
  modalVisible,
  setModalVisible,
  navigation,
}) => {
  const { setOrderPrice, setCustomBurgerPrice, setCustomBurgerAmount } = useStore();

  const handleCloseModal = () => {
    navigation.replace("Main");
    setModalVisible(false);
    setOrderPrice(0);
    setCustomBurgerPrice(3);
    setCustomBurgerAmount(1);
  }
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => setModalVisible(false)}
    >
      <View style={s.modalBackground}>
        <View style={s.modalContainer}>
          <View style={s.successfulIconWrap}>
            <SuccessfulIcon />
          </View>
          <Text style={s.modalTitle}>Success !</Text>
          <Text style={s.modalMessage}>
            Your payment was successful. A receipt for this purchase has been
            sent to your email.
          </Text>

          <TouchableOpacity
            style={s.closeButton}
            onPress={handleCloseModal}
          >
            <Text style={s.closeButtonText}>Go Back</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default PopupMessage;
