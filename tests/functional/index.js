define(function (require) {
    var registerSuite = require('intern!object');
    var assert = require('intern/chai!assert');

    registerSuite({
        name: 'index',

        'init test': function () {
            return this.remote
                .get(require.toUrl('tests/index.html'))
                .setFindTimeout(5000)
                .findById('ubuntu')
                .getAttribute('class')
                .then(function (className) {
                    assert.strictEqual(className, 'shell ubuntu dark shadow typed',
                        'Element should have assigned classes');
                });
        }
    });
});
