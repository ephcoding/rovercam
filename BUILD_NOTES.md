<!-- #region title -->

<div align='center'>

![rovercam readme graphic](./assets/readme/build-notes-title.png)

</div>

<div align='center'>

[Resources](#resources) | [Notes](#notes) | [Issues](#issues) | [Lessons Learned](#lessons) | [Questions](#questions) | [Connect](#connect)

</div>

<!-- #endregion /title -->

<!-- #region roadmap -->

## **ROADMAP**

### **Research**

- [ ] Mars Rover Photos API
- [ ] UX design for image-heavy apps
- [ ] UI design for image-heavy apps
- [ ] React Native image optimization best-practices
- [x] Mars img resources

### **Development**

- [ ] display images for all 4 rovers
- [ ] fetch images for all 4 rovers
- [ ] create splash screen
- [ ] set up [NASA](https://api.nasa.gov/#mars-rover-photos) Mars Rover Photos [API](https://github.com/chrisccerami/mars-photo-api) services
- [x] set up project using [Ignite](https://github.com/infinitered/ignite)

<!-- #endregion /roadmap -->

<!-- #region resources -->

<h3 id='resources' align='center'>

![rovercam readme graphic](./assets/readme/resources.png)

</h3>

<div align='center'>

[Resources](#resources) | [Notes](#notes) | [Issues](#issues) | [Lessons Learned](#lessons) | [Questions](#questions) | [Connect](#connect)

</div>

- APIs / Services
  - [`react-query` package](https://www.npmjs.com/package/react-query) | [docs](https://react-query.tanstack.com/)
- [AXIOS](https://github.com/axios/axios#axios)
- debugging with [`react-devtools`](https://www.npmjs.com/package/react-devtools)
- Expo [docs](https://docs.expo.dev)
  - [`expo install`](https://docs.expo.dev/guides/config-plugins/#expo-install)
  - [fonts](https://docs.expo.dev/versions/latest/sdk/font/)
  - [vector icons](https://icons.expo.fyi/)
- [Ignite](https://github.com/infinitered/ignite) React Native boilerplate by [Infinite Red](infinite.red)
- [Inkscape](https://inkscape.org/) - vector graphic tool
  - [create vector silhouettes from images](https://www.youtube.com/watch?v=PRvqcfLToqY)
  - [remove background from photo](https://logosbynick.com/inkscape-how-to-remove-background/)
- JavaScript
  - using `?`: [optional chaining `?` & nullish coalescing `??`](https://www.freecodecamp.org/news/how-the-question-mark-works-in-javascript/)
- NASA [Mars projects](https://mars.nasa.gov/)
- NASA [API Portal](https://api.nasa.gov/)
- [npm / yarn comparison](https://classic.yarnpkg.com/en/docs/migrating-from-npm#toc-cli-commands-comparison)
- React: [docs](reactjs.org)
  - [component lifecycles](https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/)
  - [mastering useEffect](https://www.youtube.com/watch?v=dH6i3GurZW8)
- React Native: [docs](reactnative.dev)
  - [custom background img component](https://www.sitereq.com/post/two-easy-ways-to-add-react-native-background-image)
  - dynamic [image source paths](https://stackoverflow.com/a/41432660)
  - [fonts: x-platform](https://github.com/react-native-training/react-native-fonts)
  - [Storing Sensitive Info](https://reactnative.dev/docs/security#storing-sensitive-info)
    - [react-native-dotenv](https://github.com/goatandsheep/react-native-dotenv)
    - [react-native-config](https://github.com/luggit/react-native-config)
  - [styling](https://reactnative.dev/docs/style)
    - Shopify's React Native [styling workflow](https://shopify.engineering/5-ways-to-improve-your-react-native-styling-workflow)
- React Navigation: [docs](https://reactnavigation.org/docs/4.x/getting-started)
  - [`createStackNavigator`](https://reactnavigation.org/docs/4.x/stack-navigator/)
  - [`createAppContainer`](https://reactnavigation.org/docs/4.x/app-containers#props-of-createappcontainer-on-react-native)
  - ['Getting Started'](https://reactnavigation.org/docs/4.x/getting-started) packages (with `expo install`):
    - [`react-navigation`](https://www.npmjs.com/package/react-navigation)
    - [`react-native-gesture-handler`](https://www.npmjs.com/package/react-native-gesture-handler)
    - [`react-native-reanimated`](https://www.npmjs.com/package/react-native-reanimated)
    - [`react-native-screens`](https://www.npmjs.com/package/react-native-screens)
  - [navigating to a new screen](https://reactnavigation.org/docs/4.x/navigating#navigating-to-a-new-screen)
  - [route configs](https://reactnavigation.org/docs/4.x/stack-navigator#routeconfigs)
  - [`withNavigation`](https://reactnavigation.org/docs/4.x/with-navigation/)
- README
  - [shields](https://shields.io/)
  <!-- #endregion /resources -->

<!-- #region notes -->

<h3 id='notes' align='center'>

![rovercam readme graphic](./assets/readme/notes.png)

</h3>

<div align='center'>

[Resources](#resources) | [Notes](#notes) | [Issues](#issues) | [Lessons Learned](#lessons) | [Questions](#questions) | [Connect](#connect)

</div>

[ 22FEB10 ]

## API SERVICE DESIGN PATTERNS

- Infinite Red’s “Ignite” React Native boilerplate [services/api setup](https://github.com/infinitered/ignite/tree/master/boilerplate/app/services/api)
- Tommy Groshong | [reduce state mgmt footprint](https://blog.testdouble.com/posts/2021-05-03-reduce-state-management-with-react-query/) with [React Query](https://react-query.tanstack.com/) ( [Tanner Linsley](https://twitter.com/tannerlinsley) )
- Kent Dodds
  - [app state mgmt with React](https://kentcdodds.com/blog/application-state-management-with-react)
  - faster React apps with [state colocation](https://kentcdodds.com/blog/state-colocation-will-make-your-react-app-faster)
  - [general colocation](https://kentcdodds.com/blog/colocation)
  - [use React Context effectively](https://kentcdodds.com/blog/how-to-use-react-context-effectively)
  - [fixing slow renders](https://kentcdodds.com/blog/fix-the-slow-render-before-you-fix-the-re-render)
- Net Ninja | [React Query tutorial playlist](https://www.youtube.com/playlist?list=PL4cUxeGkcC9jpi7Ptjl5b50p9gLjOFani)
- Better Dev | [make a stellar React + NASA API app](https://www.youtube.com/watch?v=UtRNVNkCBq8)

CHECK OUT LATER
( VORTX API ) [NestJS](https://nestjs.com/) | Node.js framework for building server-side apps & apis
Brad’s NestJS [crash course](https://www.youtube.com/watch?v=wqhNoDE6pb4)
used in `Ignite` | [Mobx-state-tree](https://mobx-state-tree.js.org/intro/welcome)
[`react-native-elements`](https://reactnativeelements.com/docs/overview)

MISC
[undici](https://github.com/nodejs/undici#undici) | Node.js http client ( getting added to Node )
[WHATWG](https://whatwg.org/) | web hypertext application technology working group

<!-- #endregion /notes -->

<!-- #region issues -->

<h3 id='issues' align='center'>

![rovercam readme graphic](./assets/readme/issues.png)

</h3>

<div align='center'>

[Resources](#resources) | [Notes](#notes) | [Issues](#issues) | [Lessons Learned](#lessons) | [Questions](#questions) | [Connect](#connect)

</div>

<!-- #region [unable to resolve module (fs)] -->

## **_PROBLEM_**

```reactnative
Unable to resolve module fs from /Users/eph/_repos/m-spacer/node_modules/dotenv/lib/main.js: fs could not be found within the project or in these directories: node_modules
```

## **_CAUSE_**

- _`fs` doesn't exist in React Native ( deep-dive )_

## **_SOUTION_**

- route 3rd-party API calls through server where keys/secrets are stored (prevents sensitive info getting jacked in transit)

- React Native pgks for handling config/environment variables:
  - [rovercam readme graphic](https://github.com/goatandsheep/react-native-dotenv) | [react-native-config](https://github.com/luggit/react-native-config)

<!-- #endregion /*unable to resolve module (fs)* -->
<!-- #region [unable to resolve module (removed comment top of file)] -->

<details>
<summary>Unable to resolve (deleted comment top of file) in <code>node_modules</code></summary>

## **_PROBLEM:_**

```reactnative
Unable to resolve module from <path>: could not be found within the project or in these directories: node_modules
```

## **_CAUSE:_**

I added a comment at top of file. Attempted:

[ ] deleting comment
[ ] restarting app
[ ] reset Metro cache via `yarn start --reset-cach` per error message \* returns `error: unknown option --reset-cache`

**_Actual Cause:_**

incomplete `<ImageBackground>` source path. awesome.

## **_SOLUTION:_**

add img file name to `<ImageBackground source={require('')}>`. awesome.

</details>

<!-- #endregion /[unable to resolve module (removed comment top of file)] -->

<!-- #endregion /issues -->

<!-- #region lessons learned -->

<h3 id='lessons' align='center'>

![rovercam readme graphic](./assets/readme/lessons.png)

</h3>

<div align='center'>

[Resources](#resources) | [Notes](#notes) | [Issues](#issues) | [Lessons Learned](#lessons) | [Questions](#questions) | [Connect](#connect)

</div>

<!-- #endregion /lessons learned -->

<!-- #region questions -->

<h3 id='questions' align='center'>

![rovercam readme graphic](./assets/readme/questions.png)

</h3>

<div align='center'>

[Resources](#resources) | [Notes](#notes) | [Issues](#issues) | [Lessons Learned](#lessons) | [Questions](#questions) | [Connect](#connect)

</div>

<!-- #endregion /questions -->

<!-- #region connect -->

<h3 id='connect' align='center'>

![rovercam readme graphic](./assets/readme/connect.png)

</h3>

<div align='center'>

[Resources](#resources) | [Notes](#notes) | [Issues](#issues) | [Lessons Learned](#lessons) | [Questions](#questions) | [Connect](#connect)

</div>

<!-- #endregion /connect -->
