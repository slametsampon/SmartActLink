export default function createDevSummaryJSON(tagname, type, description, link) {
  return {
    tagname: tagname,
    type: type,
    description: description,
    link: link,
  };
}
