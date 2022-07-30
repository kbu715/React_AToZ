# 메모

---

## CRA 로 시작한 React 프로젝트에 ESLint 와 Prettier 를 적용해보자.

1. VSCode에서 ESLint, Prettier Extension 설치

2. npm i -D prettier eslint-plugin-prettier eslint-config-prettier

```
eslint-config-prettier : ESLint와 Prettier에 중복되는 Formatting 룰 삭제

eslint-plugin-prettier : ESLint에 Prettier의 Formatting 기능 추가
```

3. root 경로에 **.eslintrc.json** 생성

```
{
    "extends": ["react-app", "plugin:prettier/recommended"]
}
```

4. VSCode - Settings - Settings.json 내용 붙여넣기 (command + shift + p)

```
{
  // Set the default
  "editor.formatOnSave": false,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  // Enable per-language
  // 사용하고자 하는 언어의 Vscode 설정 방법을 구글링하여 추가합니다. 
  // js
  "[javascript]": {
    "editor.formatOnSave": true
  },
    
  // jsx, ts 등등
  // ts
  "[typescript]": {
    "editor.formatOnSave": true
  },
  // jsx
  "[javascriptreact]": {
    "editor.formatOnSave": true
  },
  // tsx
  "[typescriptreact]": {
    "editor.formatOnSave": true
  },
  "editor.codeActionsOnSave": {
    // For ESLint
    "source.fixAll.eslint": true
  }
}
```

5. Code - Preferences - Settings (command + ',')

```
format on save 로 검색 후 체크!

default formatter로 검색

null => Prettier - Code Formatter esbenp.prettier-vscode로 수정
```

6. root 경로에 **.prettierrc** 생성

```
{
  "trailingComma": "all",
  "tabWidth": 2,
  "semi": false,
  "singleQuote": true
}
```
