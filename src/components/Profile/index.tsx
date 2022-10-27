import { Flex, Image, Text } from "@chakra-ui/react"

export const Profile = () => {
  return (
    <Flex 
      flexDirection="column"
      alignItems="center" 
    >
      <Flex alignItems="center">
        <Image
          src="https://github.com/chrmartins.png"
          alt="Imagem de perfil"
          width={48}
          height={48}
          borderRadius="full"
        />
      </Flex>
      <Flex 
        flexDirection="column"
        marginLeft={4}
        justifyContent="center"
        alignItems="center"
      >
        <Text
          fontSize="4xl"
          fontWeight="semibold"
          color="#1c2541"
        >
          Christian Martins
        </Text>
        <Text
          fontSize="lg"
          fontWeight="medium"
          color="#4fb2d4"
        >
          Desenvolvedor Front-end
        </Text>
      </Flex>
      
    </Flex>
  )
}