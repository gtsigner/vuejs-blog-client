'use strict';

var _vue = require('vue');

var _vue2 = _interopRequireDefault(_vue);

var _Hello = require('src/components/Hello');

var _Hello2 = _interopRequireDefault(_Hello);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Hello.vue', function () {
  it('should render correct contents', function () {
    var vm = new _vue2.default({
      el: document.createElement('div'),
      render: function render(h) {
        return h(_Hello2.default);
      }
    });
    expect(vm.$el.querySelector('.hello h1').textContent).to.equal('Welcome to Your Vue.js App');
  });
});

//# sourceMappingURL=Hello.spec-compiled.js.map