function parse(qs) {
  const queryString = qs.substr(0);
  const chunks = queryString.split('&');
  let result = {};

  chunks.forEach((chunk) => {
    const parts = chunk.split('=');
    const key = parts[0];
    const value = Number.isNaN(Number(parts[1])) ? parts[1] : Number(parts[1]);
    result[key] = value;
  });

  return result;
}

console.log(parse('banana=10&apple=20&orange=30'));
