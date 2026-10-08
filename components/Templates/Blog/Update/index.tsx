'use client';

import { Box, Text, Form, FormInput, FormSubmit, FormTextArea } from '@/components/Atom';
import { PostSelectBox } from '@/components/Molecules';
import { TUIEditor } from '@/components/Organisms';
import { useUpdateBlog } from './update.hook';

const UpdateBlogComponent = (): JSX.Element => {
  const { initialized, register, errors, onSubmit, editorRef, handleEditorChange, initialMarkdown, categoryOptions } = useUpdateBlog();

  return (
    <>
      {initialized && (
        <Box width="980px" margin={{ left: 'auto', right: 'auto' }} screen={{ size: 1010, calc: '30px' }}>
          <Form margin={{ top: '40px', bottom: '200px' }} onSubmit={onSubmit}>
            <Box>
              <Text margin={{ top: '10px', bottom: '5px' }} size={12}>
                제목
              </Text>
              <FormInput
                width="50%"
                height="45px"
                type="text"
                border="1px solid #b4b2b2"
                padding={{ left: '10px', right: '10px' }}
                screen={1010}
                {...register('title', { required: true })}
                error={errors.title}
              />
            </Box>
            <Box>
              <Text margin={{ top: '10px', bottom: '5px' }} size={12}>
                요약
              </Text>
              <FormTextArea width="50%" height={100} screen={1010} {...register('summary', { required: true })} error={errors.summary} />
            </Box>
            <Box margin={{ top: '20px', bottom: '50px' }}>
              <TUIEditor ref={editorRef} onChange={handleEditorChange} initialValue={initialMarkdown} />
            </Box>
            <Box>
              <Text margin={{ top: '10px', bottom: '5px' }} size={12}>
                타입
              </Text>
              <PostSelectBox {...register('category_id')} options={categoryOptions} />
            </Box>
            <Box margin={{ top: '30px' }}>
              <FormSubmit type="submit" width="150px" radius={10} value="변경" />
            </Box>
          </Form>
        </Box>
      )}
    </>
  );
};

export default UpdateBlogComponent;
