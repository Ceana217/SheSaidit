import type { ComponentStyleConfig } from "@chakra-ui/theme";

export const Input: ComponentStyleConfig = {
  baseStyle: {
    field: {
      fontSize: "10pt",
      bg: "gray.50",
      _placeholder: {
        color: "red.200",
      },
      _hover: {
        bg: "white",
        border: "1px solid",
        borderColor: "red.200",
      },
      _focus: {
        outline: "none",
        border: "1px solid",
        borderColor: "red.200",
      },
    },
    addons: {
      height: "30px",
    },
  },
  sizes: {
    md: {
      field: {
       
        fontSize: "10pt",
      },
    },
  },
  variants: {},
  defaultProps: {
    variant: null,
  },
};
