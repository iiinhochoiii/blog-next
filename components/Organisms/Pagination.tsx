import React, { useState, useEffect, SetStateAction, Dispatch } from 'react';
import styled from 'styled-components';
import { Flex, Text } from '@/components/Atom';
import { pageType } from '@/interfaces/models/blog';

interface Props {
  page?: pageType;
  pageNum?: string | number | string[];
  setPaging: Dispatch<SetStateAction<any>>;
}

const Pagination = (props: Props) => {
  const { page, pageNum, setPaging } = props;
  const [queryPage, setQueryPage] = useState(1);

  useEffect(() => {
    setQueryPage(pageNum ? Number(pageNum) : 1);
  }, [pageNum]);

  const paging = () => {
    if (page) {
      const pageArr: number[] = [];
      const pageNavSize = 5;
      const startPage = Math.ceil(queryPage / pageNavSize - 1) * pageNavSize + 1;
      const endPage = Math.ceil(queryPage / pageNavSize) * pageNavSize;

      for (let i: number = startPage; i <= endPage; i++) {
        if (i <= Math.ceil(page.totalLength / page.limit)) {
          pageArr.push(i);
        }
      }
      return pageArr;
    }
  };

  const pagination = (type?: string) => {
    if (type === 'prev') {
      if (queryPage > 1) {
        setPaging((state) => state - 1);
      }
    } else {
      if (page && queryPage < page.lastPageNum) {
        setPaging((state) => state + 1);
      }
    }
  };
  const arr: number[] | undefined = paging();

  return (
    <Flex margin={{ bottom: '70px' }} justify={'center'}>
      <Flex margin={{ left: '10px', right: '10px' }}>
        <Text onClick={() => pagination('prev')} margin={{ top: 'auto', bottom: 'auto' }} color={'rgb(18, 184, 134)'} style={{ cursor: 'pointer' }}>
          이전
        </Text>
      </Flex>
      <StyledPageContent>
        {arr &&
          arr.map((item: number) => (
            <li
              key={item}
              style={item === queryPage ? { backgroundColor: 'rgb(18,184,134)', color: '#fff', fontWeight: 400, cursor: 'unset' } : {}}
              onClick={() => {
                setPaging(item);
              }}
            >
              {item}
            </li>
          ))}
      </StyledPageContent>
      <Flex margin={{ left: '10px', right: '10px' }}>
        <Text onClick={() => pagination('next')} margin={{ top: 'auto', bottom: 'auto' }} color={'rgb(18, 184, 134)'} style={{ cursor: 'pointer' }}>
          다음
        </Text>
      </Flex>
    </Flex>
  );
};

const StyledPageContent = styled.ul`
  margin: 0;
  list-style-type: none;
  display: flex;
  padding: 0;
  & > li {
    margin: 0px 10px;
    padding: 5px 10px;
    border: 2px solid rgb(18, 184, 134);
    border-radius: 5px;
    color: rgb(18, 184, 134);
    text-decoration: none;
    cursor: pointer;
  }
`;

export default Pagination;
