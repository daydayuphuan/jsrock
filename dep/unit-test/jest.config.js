module.exports = {
    transform: {
        '^.+\\.tsx?$': 'ts-jest',
        '.+\\.(css|styl|less|sass|scss|svg|png|jpg|ttf|woff|woff2)$':
            'jest-transform-stub'
    },
    moduleNameMapper: {
        '^@/(.*)$': '<rootDir>/src/$1'
    },
    globals: {
        'ts-jest': {
            babelConfig: true
        }
    },
    snapshotSerializers: ['enzyme-to-json/serializer'],
    setupFiles: ['./setup/register-context.ts', './setup/setups/enzyme.ts'],
    testMatch: [
        '<rootDir>/src/**/*.spec.[jt]s?(x)',
        '<rootDir>/tests/**/*.spec.[jt]s?(x)'
    ],
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
    transformIgnorePatterns: ['/node_modules/']
};
