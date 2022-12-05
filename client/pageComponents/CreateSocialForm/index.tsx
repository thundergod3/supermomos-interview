import React, { Fragment, useCallback, useMemo, useState } from "react";
import Image from "next/image";
import { Checkbox, Icon, Image as CkImage } from "@chakra-ui/react";
import { IoMdClose } from "react-icons/io";
import DatePicker from "react-datepicker";
import dayjs from "dayjs";
import { useRouter } from "next/router";

import imageCalendar from "assets/images/calendar.png";
import imageClock from "assets/images/clock.png";
import imageVenue from "assets/images/map_point.png";
import imageGroup from "assets/images/group.png";
import imageCurrency from "assets/images/currency.png";
import imagePicture from "assets/images/picture.png";

import {
  BANNER_LIST,
  placeholderStyle,
  PRIVACY_LIST,
  TAG_LIST,
} from "./createSocialForm.constants";
import { SocialData } from "./createSocialForm.schema";
import useModal from "hooks/useModal";
import SocialsService from "services/SocialsService";

import InputField from "components/InputField";
import NormalText from "components/NormalText";
import TextAreaField from "components/TextAreaField";
import TitleText from "components/TitleText";
import RadioGroup from "components/RadioGroup";
import ChooseBannerModal from "pageComponents/ChooseBannerModal";

import {
  CreateSocialFormBodyContainer,
  CreateSocialFormButton,
  CreateSocialFormContainer,
  CreateSocialFormHeaderContainer,
  CreateSocialFormSettingContainer,
  CreateSocialFormTagActiveItem,
  CreateSocialFormTagChooseList,
  CreateSocialFormTagItem,
  CreateSocialFormTagList,
  CreateSocialFormTagsContainer,
  CreateSocialHeaderLeftSideContainer,
  CreateSocialHeaderLeftSideNumberInputContainer,
  CreateSocialHeaderLeftSideNumberInputItem,
  CreateSocialHeaderLeftSideTimeContainer,
  CreateSocialHeaderLeftSideTimeItem,
  CreateSocialHeaderRightSideContainer,
} from "./createSocialForm.styles";
import styles from "./createSocialForm.module.scss";

const CreateSocialForm = () => {
  const [createSocialData, setCreateSocialData] = useState<SocialData>({
    title: "",
    venue: "",
    capacity: "",
    price: "",
    description: "",
    isManualApprove: false,
    privacy: "",
    tags: [],
    banner: "",
    date: "",
    time: "",
  });
  const [tagList, setTagList] = useState(TAG_LIST);
  const [loading, setLoading] = useState(false);

  const { createSocial } = SocialsService;

  const router = useRouter();

  const handleChangeCreateSocial = useCallback(
    (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = event.target;

      setCreateSocialData({
        ...createSocialData,
        [name]: value,
      });
    },
    [createSocialData]
  );

  const handleChangeManualApprove = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const { name, checked } = event.target;

      setCreateSocialData({
        ...createSocialData,
        isManualApprove: checked,
      });
    },
    [createSocialData]
  );

  const handleChangePrivacy = useCallback(
    (value: any) => {
      setCreateSocialData({
        ...createSocialData,
        privacy: value,
      });
    },
    [createSocialData]
  );

  const handleChooseTags = useCallback(
    (value: any) => {
      setCreateSocialData({
        ...createSocialData,
        tags: [...(createSocialData?.tags || []), value],
      });
      setTagList(tagList?.filter((record) => record !== value));
    },
    [tagList, createSocialData]
  );

  const handleDeleteTags = useCallback(
    (value: any) => {
      setCreateSocialData({
        ...createSocialData,
        tags: createSocialData?.tags?.filter((record) => record !== value),
      });
      setTagList([...tagList, value]);
    },
    [createSocialData, tagList]
  );

  const handleSubmitBanner = useCallback(
    async (data: any) => {
      setCreateSocialData({
        ...createSocialData,
        banner: data?.selectBanner,
      });
    },
    [createSocialData]
  );

  const handleChangeDate = useCallback(
    async (date: any) => {
      setCreateSocialData({
        ...createSocialData,
        date: new Date(date),
        dateFormat: dayjs(date).format("YYYY-MM-DD"),
      });
    },
    [createSocialData]
  );

  const handleChangeTime = useCallback(
    async (time: any) => {
      setCreateSocialData({
        ...createSocialData,
        time,
        timeFormat: dayjs(time).format("hh:mm"),
      });
    },
    [createSocialData]
  );

  const handleSubmitCreateSocial = useCallback(async () => {
    setLoading(true);

    try {
      const socialForm = {
        ...createSocialData,
        startAt: new Date(
          `${createSocialData?.dateFormat} ${createSocialData?.timeFormat}`
        ).toISOString(),
      };
      delete socialForm.date;
      delete socialForm.time;
      delete socialForm.dateFormat;
      delete socialForm.timeFormat;

      const { data } = await createSocial(socialForm);
      setLoading(false);
      router.push(`/${data?.id}`);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }, [createSocialData]);

  const { open, close, Dialog } = useModal({
    modalBody: ChooseBannerModal,
    sizeModal: "2xl",
    submitText: "Save",
    handleSubmit: handleSubmitBanner,
  });

  const isDisabled = useMemo(
    () =>
      !createSocialData?.title ||
      !createSocialData?.date ||
      !createSocialData?.time ||
      !createSocialData?.banner ||
      !createSocialData?.capacity ||
      !createSocialData?.description ||
      !createSocialData?.price ||
      !createSocialData?.privacy ||
      !createSocialData?.venue ||
      createSocialData?.tags?.length === 0,
    [createSocialData]
  );

  return (
    <CreateSocialFormContainer>
      <CreateSocialFormHeaderContainer>
        <CreateSocialHeaderLeftSideContainer>
          <InputField
            name="title"
            value={createSocialData?.title}
            onChange={handleChangeCreateSocial}
            placeholder="Untitle Event"
            background="background.purple"
            fontSize="48px"
            color="white"
            fontWeight={700}
            padding="8px 12px"
            height="68px"
            _placeholder={{
              color: "white",
            }}
            border="none"
            borderRadius={0}
            maxWidth={createSocialData?.title ? "100%" : "320px"}
          />
          <CreateSocialHeaderLeftSideTimeContainer>
            <CreateSocialHeaderLeftSideTimeItem>
              <Image
                src={imageCalendar}
                alt="Calendar Image"
                objectFit="cover"
              />
              <DatePicker
                selected={createSocialData?.date}
                onChange={handleChangeDate}
                className={styles.timeContainer}
                placeholderText="Date"
              />
            </CreateSocialHeaderLeftSideTimeItem>
            <CreateSocialHeaderLeftSideTimeItem>
              <Image src={imageClock} alt="Clock Image" objectFit="cover" />
              <DatePicker
                selected={createSocialData?.time}
                onChange={handleChangeTime}
                className={styles.timeContainer}
                placeholderText="Time"
                showTimeSelect
                showTimeSelectOnly
                timeIntervals={15}
                dateFormat="h:mm aa"
              />
            </CreateSocialHeaderLeftSideTimeItem>
          </CreateSocialHeaderLeftSideTimeContainer>
          <InputField
            name="venue"
            placeholder="Venue"
            value={createSocialData?.venue}
            onChange={handleChangeCreateSocial}
            leftInputIcon={
              <Image src={imageVenue} alt="Map Point Image" objectFit="cover" />
            }
            _placeholder={placeholderStyle}
            {...placeholderStyle}
          />
          <CreateSocialHeaderLeftSideNumberInputContainer>
            <CreateSocialHeaderLeftSideNumberInputItem>
              <InputField
                type="number"
                name="capacity"
                placeholder="Max capacity"
                value={createSocialData?.capacity}
                onChange={handleChangeCreateSocial}
                leftInputIcon={
                  <Image src={imageGroup} alt="Group Image" objectFit="cover" />
                }
                _placeholder={placeholderStyle}
                {...placeholderStyle}
              />
            </CreateSocialHeaderLeftSideNumberInputItem>
            <CreateSocialHeaderLeftSideNumberInputItem>
              <InputField
                type="number"
                name="price"
                placeholder="Cost per person"
                value={createSocialData?.price}
                onChange={handleChangeCreateSocial}
                leftInputIcon={
                  <Image
                    src={imageCurrency}
                    alt="Currency Image"
                    objectFit="cover"
                  />
                }
                _placeholder={placeholderStyle}
                {...placeholderStyle}
              />
            </CreateSocialHeaderLeftSideNumberInputItem>
          </CreateSocialHeaderLeftSideNumberInputContainer>
        </CreateSocialHeaderLeftSideContainer>
        {createSocialData?.banner ? (
          <CkImage
            onClick={() =>
              open({
                title: "Choose a banner",
                data: {
                  bannerList: BANNER_LIST,
                  selectBanner: createSocialData?.banner,
                },
                isDisabled: true,
              })
            }
            src={createSocialData?.banner}
            alt="Banner Image"
            loading="lazy"
            borderRadius="0px 64px"
            flex={{
              base: 1,
              md: 0.6,
            }}
            height="445px"
            cursor="pointer"
          />
        ) : (
          <CreateSocialHeaderRightSideContainer
            onClick={() =>
              open({
                title: "Choose a banner",
                data: { bannerList: BANNER_LIST },
                isDisabled: true,
              })
            }>
            <Image src={imagePicture} alt="Picture Image" objectFit="cover" />
            <NormalText
              text="Add a banner"
              color="text.darkBlue"
              bold
              fontSize="20px"
              marginLeft="16px"
            />
          </CreateSocialHeaderRightSideContainer>
        )}
      </CreateSocialFormHeaderContainer>
      <CreateSocialFormBodyContainer>
        <TextAreaField
          name="description"
          label="Description"
          placeholder="Description of your event.."
          value={createSocialData?.description}
          onChange={handleChangeCreateSocial}
          rows={6}
        />
        <CreateSocialFormSettingContainer>
          <TitleText
            title="Settings"
            fontSize="32px"
            lineHeight="60px"
            color="text.purple"
            background="background.yellow"
            paddingX="12px"
          />
          <Checkbox
            marginY="24px"
            isChecked={createSocialData.isManualApprove}
            mb="16px"
            width={{
              base: "100%",
              md: "50%",
            }}
            onChange={handleChangeManualApprove}>
            I want to approve attendees
          </Checkbox>
          <RadioGroup
            label="Privacy"
            value={createSocialData?.privacy}
            optionList={PRIVACY_LIST}
            onChange={handleChangePrivacy}
          />
          <CreateSocialFormTagsContainer>
            <TitleText
              title="Tag your social"
              fontSize="16px"
              color="text.grey.700"
            />
            <NormalText
              text="Pick tags for our curation engine to work its magin"
              fontSize="16px"
            />
            <CreateSocialFormTagChooseList>
              {createSocialData?.tags?.map((record, index) => (
                <Fragment key={`tag-item-${index}`}>
                  <CreateSocialFormTagActiveItem>
                    {record}

                    <Icon
                      onClick={() => handleDeleteTags(record)}
                      as={IoMdClose}
                      color="text.purple"
                      cursor="pointer"
                    />
                  </CreateSocialFormTagActiveItem>
                </Fragment>
              ))}
            </CreateSocialFormTagChooseList>
            <CreateSocialFormTagList>
              {tagList?.map((record, index) => (
                <Fragment key={`tag-item-${index}`}>
                  <CreateSocialFormTagItem
                    onClick={() => handleChooseTags(record)}>
                    {record}
                  </CreateSocialFormTagItem>
                </Fragment>
              ))}
            </CreateSocialFormTagList>
          </CreateSocialFormTagsContainer>
        </CreateSocialFormSettingContainer>
        <CreateSocialFormButton
          isLoading={loading}
          onClick={handleSubmitCreateSocial}
          disabled={isDisabled}>
          CREATE SOCIAL
        </CreateSocialFormButton>
      </CreateSocialFormBodyContainer>
      {Dialog(close)}
    </CreateSocialFormContainer>
  );
};

export default CreateSocialForm;
