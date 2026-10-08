import { cookies } from 'next/headers';
import { getTokenData } from '@/apis/auth';
import { UserInfo } from '@/types/user';

const tokenName = 'uuid_token';

// 서버 컴포넌트 전용: 요청 쿠키의 토큰으로 로그인 사용자 정보를 조회한다. (기존 hoc/authorize 의 역할)
export const getServerUserInfo = async (): Promise<UserInfo | undefined> => {
  const token = cookies().get(tokenName)?.value;
  if (!token || token === 'null' || token === 'undefined') {
    return undefined;
  }

  try {
    const res = await getTokenData(token);
    const data = res?.data;
    if (!data) {
      return undefined;
    }

    return {
      user_id: data.user_id,
      email: data.email,
      name: data.name,
      phone: data.phone,
    };
  } catch (err) {
    console.log(err);
    return undefined;
  }
};
