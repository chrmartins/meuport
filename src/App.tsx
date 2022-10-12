import { Button, ChakraProvider, Flex, Text, Image } from "@chakra-ui/react";
import { useCallback, useRef } from "react";
import { Gallery, GalleryRefType } from "./components/Gallery";
import { Profile } from "./components/Profile";

const images = [
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/640px-React-icon.svg.png",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Nextjs-logo.svg/640px-Nextjs-logo.svg.png",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/640px-Unofficial_JavaScript_logo_2.svg.png",	
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/640px-Typescript_logo_2020.svg.png",	
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/640px-Node.js_logo.svg.png",	
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/640px-CSS3_logo_and_wordmark.svg.png",	
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/640px-HTML5_logo_and_wordmark.svg.png",	
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/GraphQL_Logo.svg/640px-GraphQL_Logo.svg.png",	
  }
]

function App() {
  const galleryRef = useRef<GalleryRefType>(null)

  const PreviousButton = useCallback(() => {
    if (!galleryRef.current) {
      return null
    }
    return (
      <Button
        onClick={galleryRef.current?.previousPage}
        background="transparent"
        border="none"
        width="50px"
        height="50px"
        fontSize="xl"
        position="absolute"
        left={0}
        disabled={!galleryRef.current?.hasNextPage}
      >
        <Image 
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Chevron_left.svg/640px-Chevron_left.svg.png"
          alt="Previous icon"
          width="30px"
        />
      </Button>
    );
  }, [/* previousPage, hasNextPage */]);

  const NextButton = useCallback(() => {
    if (!galleryRef.current) {
      return null
    }
    return (
      <Button
        onClick={galleryRef.current?.nextPage}
        background="transparent"
        border="none"
        width="50px"
        height="50px"
        fontSize="xl"
        position="absolute"
        right={0}
        disabled={galleryRef.current?.hasNextPage}
      >
        <Image 
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Chevron_right.svg/640px-Chevron_right.svg.png"
          alt="Next icon"
          width="30px"
        />
      </Button>
    );
  }, [/* nextPage, hasNextPage */]);
  return (
    <ChakraProvider>
      <Flex
        alignItems="center"
        justifyContent="center"
        width="100%"
        height="100vh"
      >
        <Flex flexDirection="column" gap={20}>
          <Profile />
          <Gallery
            ref={galleryRef} 
            images={images}
            previousButton={<PreviousButton />}
            nextButton={<NextButton />}
          />
        </Flex>
      </Flex>
    </ChakraProvider>
  );
}

export default App;
