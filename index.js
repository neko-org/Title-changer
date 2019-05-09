const Command = require('command');
const { protocol } = require('tera-data-parser');

if (!protocol.messages.has('S_APPLY_TITLE')) {
  protocol.messages.set('S_APPLY_TITLE', new Map().set(3, [
    ['id', 'int32'],
  ]));
}

module.exports = function Title(dispatch) {
  const command = Command(dispatch);

  command.add('title', (id) => {
    if (id) dispatch.toServer('S_APPLY_TITLE', 3, { id });
  });
};
