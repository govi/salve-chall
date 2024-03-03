module.exports = {
  extends: [require.resolve("@salve-chall/dev")],
  ignorePatterns: ["*.test.ts", "*/node_modules/*"],
  parserOptions: {
    project: "tsconfig.json",
    tsconfigRootDir: __dirname,
    createDefaultProgram: true,
  },
}
