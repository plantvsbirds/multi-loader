export default () => { };

export function pitch(request) {
  let items = JSON.parse(this.query.substr(1));
  items = items.map(item => `require(${JSON.stringify(`-!${item}!${request}`)});`);
  const last = items.pop();
  return `${items.join('\n')}\nmodule.exports = ${last}`;
}

