define({
  environments: [
    { browserName: 'chrome' }
  ],

  // Name of the tunnel class to use for WebDriver tests
  tunnel: 'NullTunnel',

  // Non-functional test suite(s) to run in each browser
  suites: [ /* 'myPackage/tests/foo', 'myPackage/tests/bar' */ ],

  // Functional test suite(s) to run in each browser once non-functional tests are completed
  functionalSuites: [ 'tests/functional/index' ],

  // A regular expression matching URLs to files that should not be included in code coverage analysis
  excludeInstrumentation: /^(?:tests|node_modules|bower_components)\//
});
