# vue app

### Local Development

Local dev and testing are done using `vue-cli-service-global` and lightweight wrapper components:

```sh
$ vue serve .\demo\components\HelloMeetup.vue
```

### Production Deployment

Production apps are deployed as dynamically mountable components exposed via application manifests ([webpack-manifest-plugin](https://www.npmjs.com/package/webpack-manifest-plugin)). Since this is expected to be mounted inside of an existing application, there is no loadtime bootstrapping of the application. All rendering is triggered by the parent application.
