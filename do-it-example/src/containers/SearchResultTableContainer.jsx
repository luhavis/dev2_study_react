import { connect } from 'react-redux';
import SearchResultTable from '../components/SearchResultTable';

const mapStateToProps = (state) => {
  const { collection, searchFilter } = state;
  const hasFilter = Object.values(searchFilter).reduce(
    (result, value) => result || Boolean(value),
    false,
  ); // 검색 항목이 있는지 확인
  const { ids, entities } = collection;
  const items = ids
    .map((id) => entities[id]) // 해시맵 형태로 되어 있는 그래프 DB를 객체 배열로 변환
    .filter(
      (entity) =>
        !hasFilter || // 검색 단어에 대한 데이터가 없느면 모든 목록을 반환
        Object.entries(searchFilter).reduce(
          (result, [key, value]) => result && (!value || `${entity[key]}` === `${value}`),
          true,
        ), // filter() 함수는 참값인 데이터만 추출, reduce() 함수를 사용해 데이터 항목 id, name, age의 조건을 모두 만족하는 경우에만 참값을 반환하여 검색 결과에 해당하는 목록을 추출
    );

  return { items };
};

export default connect(mapStateToProps)(SearchResultTable);
