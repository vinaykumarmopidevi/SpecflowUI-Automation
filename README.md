# SpecflowUI-Automation


```sh
npm init -y
npm install codeceptjs playwright --save-dev
npx codeceptjs init
```
```sh
npx codeceptjs gherkin:init
```

```sh 
npm install @codeceptjs/allure-legacy --save-dev
npx codeceptjs run --plugins allure
```


```js
allure: {
      enabled: true,
      require: '@codeceptjs/allure-legacy',
    },

```
`allure serve output`