import React from 'react';
import { Box, HeaderText, Flex, Text } from '@/components/Atom';

const ExplainSite: React.FC = () => {
  return (
    <Box screen={1010} margin={{ left: 'auto', right: 'auto' }} width="980px">
      <Box margin={{ top: '100px' }}>
        <HeaderText color="#333" fontWeight={400} size={28}>
          Try the various services provided by Choi Tech.
        </HeaderText>
        <Flex margin={{ top: '50px' }}>
          <Box>
            <Text size={22} margin={{ bottom: '10px' }} fontWeight={400} screen={{ width: 690, size: 18 }}>
              지식 공유
            </Text>
            <Text margin={{ top: '15px', bottom: '15px' }} size={16} fontWeight={300} lineHeight={28} screen={{ width: 690, size: 14 }}>
              Front-end 프레임워크인 React에 관련된 기술 및 경험을 공유 합니다. 주로 개발 환경 구성 및, 이슈 대응, 문제 해결 등 다양한 주제를 다루고 있습니다.
              또한, 공유한 지식에 대하여, 질의 응답 등을 이용 할 수 있습니다.
            </Text>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default ExplainSite;
