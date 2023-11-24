# SpecflowUI-Automation

installing `codeceptjs playwright` 
```sh
npm init -y
npm install codeceptjs playwright --save-dev
```


Let's initialize a new project for that!

```sh
npx codeceptjs init
npx codeceptjs run
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