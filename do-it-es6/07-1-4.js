function parse(qs) {
  const queryString = qs.substr(0);
  const chunks = queryString.split('&');

  const result = chunks.map((chunk) => {
    const [key, value] = chunk.split('=');
    return { key: key, value: value };
  });

  return result;
}

console.log(parse('banana=10&apple=20&orange=30'));
