import { Meta } from '@storybook/react';
import { useEffect, useState } from 'react';

import DropdownSearch from './index';
import Avatar from '@/core/components/Avatar';
import Typography from '@/core/components/Typography';

const meta = {
  title: 'core/Dropdown/DropdownSearch',
  component: DropdownSearch,
} satisfies Meta<typeof DropdownSearch>;

export default meta;

export const Default = () => {
  const [currentValue, setCurrentValue] = useState('');
  const kindergartens = [
    {
      label: '길음동루이유치원',
      value: 'a01b0f8f-55e3-4de5-9ae9-bb77db774a40',
    },
    {
      label: '산곡동예꼬어린이집',
      value: '01f90d26-1ae4-4876-a37d-04feecaaf4d3',
    },
    {
      label: '대흥동아이들이야기어학원',
      value: 'bcca9ae3-fd7e-44ca-a335-b8ab0e6f6e69',
    },
    {
      label: '행신동꼬마루소어린이집',
      value: 'fd5e515f-c4a3-4407-b3f8-91decc1f5237',
    },
    {
      label: '효성동예그랑유치원',
      value: 'd6a388cc-53ef-470e-b2bc-ff28f2dfe598',
    },
    {
      label: '대림동파란나라유치원',
      value: '75f6808a-86f0-4be7-b773-a99faad68cab',
    },
    {
      label: '영등포동아이세상어린이집',
      value: '1c02135c-2d0b-4708-adf4-44b340dacb6f',
    },
    {
      label: '송내동열린유치원',
      value: 'a903dc9a-232c-4a88-8da4-d98060414fbb',
    },
    {
      label: '상동아이원어린이집',
      value: '57bef5cd-e129-4176-b1ff-4c68348c2c15',
    },
    {
      label: '신길동창의예원어린이집',
      value: '41ed2bd0-fb23-41a0-bd1a-4ad745b0e123',
    },
    {
      label: '반포동서초구립라클라스어린이집',
      value: '945f664b-87d2-4d45-a992-c5480032e9fa',
    },
    {
      label: '화성시비봉어린이집',
      value: '18d0a5ce-a2ba-425a-9f87-37ff58d5e89c',
    },
    {
      label: '역북동우남퍼스트빌통통어린이집',
      value: 'f269ac7d-f889-421e-a643-03c9998010e7',
    },
    {
      label: '금촌동꿈누리어린이집',
      value: 'ce8e09ec-5cd7-4729-b54b-7676189a0e92',
    },
    {
      label: '금촌동뽀뽀야어린이집',
      value: '7bc13c2b-3abf-44d1-b702-0e302a940b4f',
    },
    {
      label: '금촌동세린어린이집',
      value: 'e81f40ae-38f0-44e3-84c4-0b8e1766f83d',
    },
    {
      label: '다율동시립휴아림어린이집',
      value: '53133957-daf9-45ad-8b22-14e4df720f2b',
    },
    {
      label: '다율동파르세나키즈어린이집',
      value: 'a980ad4c-0207-40f0-b476-29605c66ed27',
    },
    {
      label: '동패동시립아름드리어린이집',
      value: '637e06d5-1ac6-48a3-a880-283a376fc6d2',
    },
    {
      label: '동패동시립한울사랑어린이집',
      value: '0e7e883f-60ae-414e-a1cc-76af2185cc4f',
    },
    {
      label: '동패동시립한울정원어린이집',
      value: 'be008908-e4ce-489b-82fc-32dd3b22817f',
    },
    {
      label: '목동동산내마을10단지어린이집',
      value: '39bb7609-f710-4aa1-b7f4-103ca78b9b9c',
    },
    {
      label: '목동동아름드리어린이집',
      value: '33bbb55e-d1ab-465f-8600-25edb09b4c47',
    },
    {
      label: '목동산내아이자람어린이집',
      value: '130130fc-d516-475e-bd6e-bdd04e1da654',
    },
    {
      label: '목동시립파크드림어린이집',
      value: 'a80c34e9-447e-4a12-9385-25b19261b80f',
    },
    {
      label: '목동시립해솔어린이집',
      value: '4b5fa119-5207-41c5-93bb-bdbc94f97d4d',
    },
    {
      label: '문발동홉스쿨어학원',
      value: '0615f383-bb9a-494d-8fef-18a4abc43a76',
    },
    {
      label: '아동동신안벧엘어린이집',
      value: '1416e8d1-fba7-473b-ba48-2e0e1c7a5863',
    },
    {
      label: '야당동한빛i어린이집',
      value: '568dde15-d164-45f6-9a15-22c36f494502',
    },
    {
      label: '와동동미술놀이터어린이집',
      value: 'da4f6fb6-df9f-4df7-b483-43da46b7d3bf',
    },
    {
      label: '와동동벽산크니크니어린이집',
      value: 'dbeeddcf-9e37-4625-8621-b3ea489c34fa',
    },
    {
      label: '파주시국제유치원',
      value: 'adb1f8cb-dee1-4562-9bf4-404ffbdb8cb7',
    },
    {
      label: '파주시글로벌리더스',
      value: '5bbc3c1e-7934-4177-80cb-a95fc75d0451',
    },
    {
      label: '파주시모아키즈플러스어린이집',
      value: 'f72d8fbb-f8d4-4cf5-937e-8b998f4226f0',
    },
    {
      label: '파주시새싹어린이집',
      value: '7f71cd5c-2951-4187-88b6-040c22acf73b',
    },
    {
      label: '파주시아이원어린이집',
      value: '3a8ee8cd-60d9-447f-8428-bbaa787039ec',
    },
    {
      label: '파주시아름솔어린이집',
      value: '1c39752e-622d-4fb4-9946-02f71773a588',
    },
    {
      label: '정릉동한가람유치원',
      value: '10db413d-ea8d-46dd-87f7-3a8330c2a754',
    },
    {
      label: '길음동나래유치원',
      value: '9be4ea28-b302-48af-b0bf-96be1d70d32c',
    },
    {
      label: '보문동은영어린이집',
      value: '55e296bc-491c-4148-bab2-9e79dccd653b',
    },
    {
      label: '보문동은영유치원',
      value: '7ecf44b5-dd12-40ee-9a44-b378a1078079',
    },
    {
      label: '보문동아뜰리에어린이집',
      value: '2b559d9d-23ff-430f-b079-35abcf59f1fa',
    },
    {
      label: '정릉동서울베네딕도유치원',
      value: '4367aab4-c4a3-43ca-920b-d0e3d4a64ec2',
    },
    {
      label: '길음동선한유치원',
      value: '4789a6bc-68e3-495d-b4e3-fe0fd24f1f6c',
    },
    {
      label: '길음동꿈터어린이집',
      value: '7216d78c-6bc9-476a-9b99-2ca4f9c13575',
    },
    {
      label: '장위동한마음유치원',
      value: '798991d9-a59e-4a9e-b7aa-4c778bd9ff1f',
    },
    {
      label: '장위동루첸키즈빌어린이집',
      value: '120c615e-f84c-48d7-a653-29edf9ca68da',
    },
    {
      label: '장위동새서울숲어린이집',
      value: 'b31733aa-d657-4bdd-9b0e-47db890cb335',
    },
    {
      label: '장위동꿈땅어린이집',
      value: 'f3effecb-5619-4a31-b4b3-65556a504789',
    },
    {
      label: '하월곡동탑주유치원',
      value: '7c33b295-0f49-4293-bf40-7f8b93883225',
    },
    {
      label: '종암동우주래미안어린이집',
      value: '9ead67ba-a11e-4bcb-96e4-5c1dea20770a',
    },
    {
      label: '종암동영재유치원',
      value: '0344d30a-7131-4814-8ee2-2111d32be8a5',
    },
    {
      label: '종암동정다운어린이집',
      value: 'f20ac9ac-e515-4031-a728-41bd47dea864',
    },
    {
      label: '종암동청운어린이집',
      value: '4561ef06-84ff-402d-a984-55c116c9810a',
    },
    {
      label: '종암동사랑유치원',
      value: 'e8fa1651-1c18-4ad5-9d8c-d4fcb80da95d',
    },
    {
      label: '종암동좋은나라유치원',
      value: 'e24e7a45-0cd8-45f1-889a-586390cfcaa7',
    },
    {
      label: '종암동킨더트리어린이집',
      value: '7fe66dd8-5b39-4221-bd02-cca6c1a0e119',
    },
    {
      label: '종암동성복어린이집',
      value: '47820825-d694-4e94-ab4e-f3805755259b',
    },
    {
      label: '돈암동희망찬유치원',
      value: '1d5ab215-63e4-49cd-9d2b-3208471707dc',
    },
    {
      label: '돈암동영암어린이집',
      value: '88326851-0cda-491f-bf7a-2eb7fe11f6c6',
    },
    {
      label: '종암동예다운어린이집',
      value: 'ad86dcb7-3d07-4dba-9d0a-fcd16c1f62f8',
    },
    {
      label: '돈암동영광유치원',
      value: 'fb092d50-efbc-4ac8-8548-e7a3776b0a82',
    },
    {
      label: '남가좌동삼성이화어린이집',
      value: '628a80db-9355-4daa-af6d-7e61dac3a2fa',
    },
    {
      label: '남가좌동은혜감사어린이집',
      value: 'fcc882f9-36c9-46c1-ae2e-5d1a9459f387',
    },
    {
      label: '냉천동성균관어린이집',
      value: 'fbc2cdc3-7ae0-4417-a3a8-a6ab2f745cf2',
    },
    {
      label: '북가좌동두란노어린이집',
      value: '847d999e-c833-4903-81e1-603661f7b94c',
    },
    {
      label: '북아현동꿈사랑어린이집',
      value: '04b8e0d1-1033-4782-8a08-4987a44c8285',
    },
    {
      label: '북아현동동우어린이나라어린이집',
      value: '262645f7-412f-43cb-9149-c6fa8c624734',
    },
    {
      label: '북아현동아현어린이집',
      value: 'e34c8d68-fce3-46f9-bff8-d2c839f1a2ac',
    },
  ];

  return (
    <DropdownSearch
      label={'정산 선택'}
      currentValue={currentValue}
      options={kindergartens}
      placeholder={'선택해주세요'}
      onChange={({ value }) => {
        setCurrentValue(value);
      }}
      className={'w-96'}
      required
    />
  );
};

export const CustomDropdownSearch = () => {
  const [currentValue, setCurrentValue] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [images, setImages] = useState<
    {
      id: string;
      author: string;
      width: number;
      height: number;
      url: string;
      download_url: string;
    }[]
  >([]);

  const getRandomImageList = async () => {
    try {
      const res = await fetch('https://picsum.photos/v2/list?page=2&limit=100');
      const data = await res.json();

      setImages(data);
      setIsLoading(false);
    } catch (e) {
      console.error(e);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getRandomImageList();
  }, []);

  const options = images.map(({ id, author, url }, i) => {
    const disabled = i === 0;

    return {
      value: id,
      text: author + id,
      disabled,
      label: (
        <div className={'flex items-center gap-2.5'}>
          <Avatar
            className={'flex-shrink-0'}
            src={url}
            alt={author}
            disabled={disabled}
          />

          <div className={'flex-v-stack w-[13rem] -space-y-0.5'}>
            <Typography
              theme={'body-02-medium'}
              text={author}
              color={disabled ? 'gray-03' : 'gray-07'}
              className={'truncate'}
            />
            <Typography
              theme={'body-03-regular'}
              text={id}
              className={'truncate'}
              color={disabled ? 'gray-03' : 'gray-06'}
            />
          </div>
        </div>
      ),
    };
  });

  return (
    <DropdownSearch
      currentValue={currentValue}
      options={options}
      placeholder={'유저 이름 또는 이메일을 입력해주세요'}
      itemsProps={{
        itemHeight: 56,
        inputProps: {
          placeholder: '유저 이름 또는 이메일을 입력해주세요',
        },
      }}
      className={'h-[3.625rem] w-[20rem]'}
      onChange={({ value }) => setCurrentValue(value)}
      disabled={isLoading}
    />
  );
};
