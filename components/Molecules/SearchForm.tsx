import React from 'react';
import { Form, FormInput } from '@/components/Atom';
import SearchIcon from '@material-ui/icons/Search';
import { useForm } from 'react-hook-form';
import { SearchKeywordForm } from '@/interfaces/models/blog';

interface Props {
  onSubmit: (value?: string) => void;
}

const SearchForm = (props: Props) => {
  const { onSubmit } = props;
  const { register, handleSubmit, watch } = useForm<SearchKeywordForm>();

  const search = (data: SearchKeywordForm) => {
    const { keyword } = data;

    onSubmit(keyword);
  };

  return (
    <Form className="-search" onSubmit={handleSubmit(search)}>
      <FormInput
        type="text"
        placeholder="검색하실 내용 및 키워드를 입력해주세요."
        margin={{ top: 'auto', bottom: 'auto', left: '10px' }}
        width={'80%'}
        height={'80%'}
        style={{ border: 'none' }}
        {...register('keyword')}
        enabled={true}
      />
      <SearchIcon
        onClick={() => {
          const { keyword } = watch();
          onSubmit(keyword);
        }}
        style={{ margin: 'auto 10px auto auto', cursor: 'pointer' }}
      />
    </Form>
  );
};

export default SearchForm;
