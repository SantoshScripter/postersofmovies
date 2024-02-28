export function FlatList({ arr, renderComponent }) {
  return arr?.map((data, id) => renderComponent(data,id));
}
