
export default {
    transform: {
      '^.+\\.jsx?$': 'babel-jest'
    },
    testMatch: [
      '**/__tests__/**/*.[jt]s?(x)',    // Matches files in __tests__ directory
      '**/tests/**/*.[jt]s?(x)',         // Matches files in tests directory
      '**/?(*.)+(spec|test).[tj]s?(x)',  // Matches *.test.js and *.spec.js files
    ],
    testPathIgnorePatterns: ['/node_modules/'],
  };
  