import { Flex, Box, Image, Button, background } from "@chakra-ui/react";
import { forwardRef, useCallback, useEffect, useImperativeHandle, useState } from "react";

export type GalleryRefType = {
  hasNextPage: boolean;
  previousPage: () => void;
  nextPage: () => void;
}

type ImageType = {
  src: string;
};

type Props = {
  images: ImageType[];
  previousButton?: JSX.Element;
  nextButton?: JSX.Element;
};

export const Gallery = forwardRef<GalleryRefType, Props>(({
  images,
  previousButton: PreviousButtonCustom,
  nextButton: NextButtonCustom,
}, ref) => {
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(4);

  const [hasNextPage, setHasNextPage] = useState(false);

  useEffect(() => {
    setHasNextPage(end < images.length);
  }, [end, images.length]);

  const previousPage = () => {
    setStart((_start) => _start - 4);
    setEnd((_end) => _end - 4);
  };

  const nextPage = () => {
    setStart((_start) => _start + 4);
    setEnd((_end) => _end + 4);
  };

  const PreviousButton = useCallback(() => {
    if (!PreviousButtonCustom) {
      return (
        <Button
          onClick={() => {}}
          background="transparent"
          border="none"
          width="50px"
          height="50px"
          fontSize="xl"
          position="absolute"
          left={0}
          disabled={hasNextPage}
        >
          {"<"}
        </Button>
      );
    }
    return PreviousButtonCustom
  }, [previousPage, hasNextPage]);

  const NextButton = useCallback(() => {
    if (!NextButtonCustom) {
      return (
        <Button
          onClick={() => {}}
          background="transparent"
          border="none"
          width="50px"
          height="50px"
          fontSize="xl"
          position="absolute"
          right={0}
          disabled={!hasNextPage}
        >
          {">"}
        </Button>
      );
    }
    return NextButtonCustom;
  }, [nextPage, hasNextPage]);

  //hook para passar funções para o componente pai
  useImperativeHandle(ref, () => ({
    hasNextPage,
    previousPage,
    nextPage,
  }), [hasNextPage, previousPage, nextPage]);

  return (
    <Flex
      flex={1}
      flexDirection="row"
      justifyContent="center"
      alignItems="center"
      position="relative"
    >
      <PreviousButton />

      {images.slice(start, end).map((image, index) => (
        <Box key={image.src} width="60px" height="60px" marginRight={4}>
          <Image
            src={image.src}
            alt={`Gallery Image ${index + 1}`}
            height="100%"
            objectFit="contain"
            borderRadius="md"
          />
        </Box>
      ))}
      <NextButton />
    </Flex>
  );
});
