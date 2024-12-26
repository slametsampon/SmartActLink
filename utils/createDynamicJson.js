export default function createDevSummaryJSON(
  id,
  tagname,
  type,
  description,
  link
) {
  return {
    id: id,
    tagname: tagname,
    type: type,
    description: description,
    link: link,
  };
}
