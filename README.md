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

```
```sh 
 npx codeceptjs run --grep '@tablescenario'
```


```js
allure: {
      enabled: true,
      require: '@codeceptjs/allure-legacy',
    },

```
`allure serve output`