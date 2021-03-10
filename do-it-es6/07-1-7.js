function parse(qs) {
  const queryString = qs.substr(0);
  const chunks = queryString.split('&');

  return chunks
    .map((chunk) => {
      const [key, value] = chunk.split('=');
      return { key, value };
    })
    .reduce((result, item) => {
      result[item.key] = item.value;
      return result;
    }, {});
}

console.log(parse('banana=10&apple=20&orange=30'));
