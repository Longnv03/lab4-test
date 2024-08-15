module.exports = {
  reporters: [
    'default',
    ['jest-junit', { outputDirectory: 'reports', outputName: 'report.xml' }],
  ],
  testMatch: [
    '**/__tests__/**/*.[jt]s?(x)',
    '**/?(*.)+(spec|test).[tj]s?(x)',
  ],
};
