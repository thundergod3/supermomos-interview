import React, { ReactElement, useState, useEffect } from "react";
import { Flex, Image as CkImage } from "@chakra-ui/react";
import dayjs from "dayjs";
import { useRouter } from "next/router";
import Image from "next/image";

import imageCalendar from "assets/images/calendar.png";
import imageClock from "assets/images/clock.png";
import imageVenue from "assets/images/map_point.png";
import imageGroup from "assets/images/group.png";
import imageCurrency from "assets/images/currency.png";

import { SocialData } from "pageComponents/CreateSocialForm/createSocialForm.schema";
import SocialsService from "services/SocialsService";

import TitleText from "components/TitleText";
import NormalText from "components/NormalText";

import {
  SocialDetailHeaderInfoContainer,
  SocialDetailHeaderInfoItem,
  SocialDetailHeaderLeftSideContainer,
  SocialDetailHeaderRightSideContainer,
  SocialDetailHeaderTimeContainer,
  SocialDetailHeaderTimeItem,
  SocialPageContainer,
  SocialPageHeaderContainer,
} from "./socialDetail.styles";
import styles from "./socialDetail.module.scss";
import { useCallback } from "react";

const SocialDetail: React.FC = (): ReactElement => {
  const [socialDetail, setSocialDetail] = useState<SocialData>();
  const [loading, setLoading] = useState(false);

  const { getSocialDetail } = SocialsService;

  const router = useRouter();

  const handleGetSocialDetail = useCallback(async (id: string) => {
    try {
      setLoading(true);

      const { data } = await getSocialDetail(id);

      setSocialDetail(data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  }, []);

  useEffect(() => {
    if (router?.query?.id) {
      handleGetSocialDetail((router as any)?.query?.id);
    }
  }, [router?.query?.id]);

  return (
    <SocialPageContainer>
      <SocialPageHeaderContainer>
        <SocialDetailHeaderLeftSideContainer>
          <TitleText
            className={styles?.title}
            title={<span>{socialDetail?.title}</span>}
            width="100%"
          />
          <SocialDetailHeaderTimeContainer>
            <SocialDetailHeaderTimeItem>
              <Image src={imageCalendar} alt="Calendar" objectFit="cover" />
              <NormalText
                text={dayjs().format("MMMM DD, ddd")}
                bold
                fontSize="28px"
                lineHeight="40px"
                color="text.grey.100"
                marginLeft="15px"
              />
            </SocialDetailHeaderTimeItem>
            <SocialDetailHeaderTimeItem>
              <Image src={imageClock} alt="Calendar" objectFit="cover" />
              <NormalText
                text={dayjs().format("hA")}
                bold
                fontSize="28px"
                lineHeight="40px"
                color="text.grey.100"
                marginLeft="15px"
              />
            </SocialDetailHeaderTimeItem>
          </SocialDetailHeaderTimeContainer>
          <SocialDetailHeaderInfoContainer>
            <SocialDetailHeaderInfoItem>
              <Image src={imageVenue} alt="Venue" objectFit="cover" />
              <NormalText
                text={socialDetail?.venue}
                bold
                fontSize="16px"
                color="text.grey.100"
                marginLeft="15px"
              />
            </SocialDetailHeaderInfoItem>
            <Flex alignItems="center">
              <SocialDetailHeaderInfoItem>
                <Image src={imageGroup} alt="Group" objectFit="cover" />
                <NormalText
                  text={`${socialDetail?.capacity}people`}
                  bold
                  fontSize="16px"
                  color="text.grey.100"
                  marginLeft="12px"
                />
              </SocialDetailHeaderInfoItem>
              <SocialDetailHeaderInfoItem>
                <Image src={imageCurrency} alt="Currency" objectFit="cover" />
                <NormalText
                  text={"$" + socialDetail?.price}
                  bold
                  fontSize="16px"
                  color="text.grey.100"
                  marginLeft="12px"
                />
              </SocialDetailHeaderInfoItem>
            </Flex>
          </SocialDetailHeaderInfoContainer>
        </SocialDetailHeaderLeftSideContainer>
        <SocialDetailHeaderRightSideContainer>
          <CkImage
            src={socialDetail?.banner}
            alt="Banner Image"
            loading="lazy"
            borderRadius="0px 64px"
            height="445px"
            width="100%"
          />
        </SocialDetailHeaderRightSideContainer>
      </SocialPageHeaderContainer>
      <NormalText
        text={socialDetail?.description}
        fontSize="16px"
        color="text.grey.100"
        marginTop="24px"
      />
    </SocialPageContainer>
  );
};

export default SocialDetail;
