import { Flex, Image, Text } from "@chakra-ui/react"

export const Profile = () => {
  return (
    <Flex>
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
      >
        <Text
          fontSize="4xl"
          fontWeight="semibold"
          color="#60a5fa"
        >
          Christian Martins
        </Text>
        <Text
          fontSize="lg"
          fontWeight="medium"
          color="#717171"
        >
          Desenvolvedor Front-end
        </Text>
      </Flex>
      
    </Flex>
  )
}