import { ComponentStyleConfig} from "@chakra-ui/theme";
export const Button : ComponentStyleConfig = {
    baseStyle:{
        borderRadius:"60px",
        color:"brand.100",
        border:"1px solid",
        fontSize:"10pt",
        fontWeight: 700,
        _focus:{
            boxShadow:"none"
        }
    },
    sizes:{
        sm:{
            fontSize:"8pt"
        },
        md:{
            fontSize:"10pt"
        },
    },
    variants:{
        solid:{
            color:"white",
            bg:"blue.500",
            _hover:{
                bg: "blue.400"
            }
        },
        outline:{
            color:"blue.400",
            border:"1px solid",
            borderColor:"blue.500"
        },
        
    }
}