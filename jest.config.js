module.exports = {
  testEnvironment: "jest-environment-jsdom", // môi trường giả lập trình duyệt
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"], // file setup thêm matcher
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/$1", // nếu bạn dùng alias @ trong import
  },
};
