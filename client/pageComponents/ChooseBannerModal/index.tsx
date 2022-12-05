import { Box, Image, SimpleGrid } from "@chakra-ui/react";
import React, {
  Fragment,
  ReactElement,
  useCallback,
  useEffect,
  useState,
} from "react";

import { ChooseBannerModalProps } from "./chooseBannerModal.schema";

const ChooseBannerModal: React.FC<ChooseBannerModalProps> = ({
  data,
  setModalState,
  ...rest
}): ReactElement => {
  const [selectBanner, setSelectBanner] = useState("");

  const handleChooseBannerList = useCallback((value: string) => {
    setSelectBanner(value);
  }, []);

  useEffect(() => {
    if (selectBanner) {
      setModalState({
        ...rest,
        data: {
          ...data,
          selectBanner,
        },
        isDisabled: false,
      });
    }
  }, [selectBanner]);

  useEffect(() => {
    if (data?.selectBanner) {
      setSelectBanner(data?.selectBanner);
    }
  }, [data?.selectBanner]);

  return (
    <SimpleGrid
      columns={{
        base: 3,
        md: 4,
      }}
      gap={2}>
      {data?.bannerList?.map((record: string, index: number) => {
        return (
          <Fragment key={`banner-item-${index}`}>
            <Box
              border={record === selectBanner ? "solid 2px" : "none"}
              borderColor="background.yellow">
              <Image
                onClick={() => handleChooseBannerList(record)}
                src={record}
                alt={`Banner Image ${index + 1}`}
                objectFit="cover"
                loading="lazy"
                height="100%"
                cursor="pointer"
              />
            </Box>
          </Fragment>
        );
      })}
    </SimpleGrid>
  );
};

export default ChooseBannerModal;
