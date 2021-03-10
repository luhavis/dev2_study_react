function parse(qs) {
  var queryString = qs.substr(1);
  var chunks = qs.split('&');
  var result = {};
  for (var i = 0; i < chunks.length; i++) {
    var parts = chunks[i].split('=');
    var key = parts[0];
    var value = parts[1];
    result[key] = value;
  }
  return result;
}

console.log(parse('banana=10&apple=20&orange=30'));
