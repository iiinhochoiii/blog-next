import React from 'react';
import { Form, Input } from '@/components/Atom';
import SearchIcon from '@material-ui/icons/Search';
import { AnyStyledComponent } from 'styled-components';

interface Props {
  onSubmit?: (e: any) => void;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
}

const SearchForm = (props: Props) => {
  const { onSubmit, onChange, value } = props;
  return (
    <Form className="-search" onSubmit={onSubmit}>
      <Input
        type="text"
        placeholder="검색하실 내용 및 키워드를 입력해주세요."
        value={value}
        id="keyword"
        onChange={onChange}
        margin={{ top: 'auto', bottom: 'auto', left: '10px' }}
        width={'80%'}
        height={'80%'}
        style={{ border: 'none' }}
      />
      <SearchIcon onClick={onSubmit} style={{ margin: 'auto 10px auto auto', cursor: 'pointer' }} />
    </Form>
  );
};

export default SearchForm;
