import styled from 'styled-components';
import { Skeleton } from '@/components/Atom';

interface Cell {
  // 셀 안 막대 폭
  width: string | number;
  // 실제 셀의 텍스트 정렬 (Table 기본은 center)
  align?: 'left' | 'center';
}

interface Props {
  cells: Cell[];
  rows?: number;
}

// Table <tbody> 안에서 로딩 중 행 자리를 표시
const TableSkeletonRows = ({ cells, rows = 5 }: Props) => {
  return (
    <>
      {Array.from({ length: rows }, (_, rowIndex) => (
        <tr key={rowIndex} aria-hidden="true">
          {cells.map((cell, cellIndex) => (
            <td key={cellIndex} style={cell.align === 'left' ? { textAlign: 'left' } : undefined}>
              <StyledCellBar width={cell.width} height={14} align={cell.align} />
            </td>
          ))}
        </tr>
      ))}
    </>
  );
};

const StyledCellBar = styled(Skeleton)<{ align?: 'left' | 'center' }>`
  margin: ${({ align }) => (align === 'left' ? '0' : '0 auto')};
`;

export default TableSkeletonRows;
