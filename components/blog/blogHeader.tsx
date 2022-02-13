import React, { useState } from 'react';
import { Flex, HeaderText } from '@/components/Atom';
import { SearchForm } from '@/components/Molecules';
import { Toaster } from '@/utils/common';
import router from 'next/router';

const BlogHeader: React.FC = () => {
  const [keyword, setKeyword] = useState<string>('');
  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    if (id === 'keyword') {
      setKeyword(value);
    }
  };
  const search = (e: any) => {
    e.preventDefault();
    if (keyword === '') {
      Toaster.showWarning('검색하실 내용 및 키워드를 입력해주세요.');
    } else {
      router.push({
        pathname: '/blog',
        query: {
          title: keyword,
        },
      });
    }
  };

  return (
    <Flex justify="space-between" margin={{ top: '20px' }} screen={{ width: 690, flexWrap: 'wrap' }}>
      <HeaderText size={26} fontWeight={400} color="rgb(18, 184, 134)">
        Related Posts
      </HeaderText>
      <SearchForm onSubmit={search} onChange={changeHandler} value={keyword} />
    </Flex>
  );
};

export default BlogHeader;
