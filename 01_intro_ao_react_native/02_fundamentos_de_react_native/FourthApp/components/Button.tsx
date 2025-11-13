import React from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  variant?: "filled" | "outlined";
}

const Button: React.FC<ButtonProps> = ({
  title,
  variant = "filled",
  style,
  ...rest
}) => {
  const variantStyles =
    variant === "filled" ? styles.wrapperPrimary : styles.wrapperSecondary;
  const textStyle = variant === "filled" ? "#fff" : "#1d013f";

  return (
    <TouchableOpacity
      {...rest}
      style={[styles.wrapperCommon, variantStyles, style]}
    >
      <Text style={[styles.title, { color: textStyle }]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  wrapperCommon: {
    height: 50,
    width: "80%",
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
  },
  wrapperPrimary: {
    backgroundColor: "#1d013f",
  },
  wrapperSecondary: {
    backgroundColor: "transparent",
    borderColor: "#1d013f",
    borderWidth: 2,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
  },
});

export default Button;
