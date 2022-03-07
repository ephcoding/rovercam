<!-- #region INTRO -->

<div align='center'>

![rovercam readme graphic](./assets/readme/build-notes-title.png)

</div>

<div align='center'>

[resources](#resources) | [notes](#notes) | [issues](#issues) | [questions](#questions) | [connect](#connect)

</div>

:white_check_mark: display rover manifest (mission) information

:white_check_mark: user can see latest photos for each rover

:white_check_mark: user can search rover photos by SOL (Martion day)

:white_check_mark: user can search rover photos by EARTH DATE

:white_check_mark: user can filter respective rover's photos by camera

**Ideas:**

:white_large_square: user can rate/rank their favorite images

<!-- #endregion /INTRO -->

<!-- #region RESOURCES -->

<h3 id='resources' align='center'>

![rovercam readme graphic](./assets/readme/resources.png)

</h3>

<div align='center'>

[resources](#resources) | [notes](#notes) | [issues](#issues) | [questions](#questions) | [connect](#connect)

</div>
<!-- #region PROJECT MANAGEMENT -->

- [GitHub projects](https://docs.github.com/en/issues/trying-out-the-new-projects-experience/about-projects#about-projects)
  - [customize](https://docs.github.com/en/issues/trying-out-the-new-projects-experience/customizing-your-project-views) project views

<!-- #endregion /PROJECT MANAGEMENT -->

<!-- #region APIS -->

<details>
<summary>APIs</summary>

- [Mars projects](https://mars.nasa.gov/)
- [API Portal](https://api.nasa.gov/)

</details>

<!-- #endregion /APIS -->

<!-- #region DEBUGGING -->

<details>
<summary>Debugging</summary>

- debugging with [`react-devtools`](https://www.npmjs.com/package/react-devtools)
- [Reactotron]()
- [Flipper]()

</details>

<!-- #endregion /DEBUGGING -->

<!-- #region JAVASCRIPT -->

<details>
<summary>JavaScript</summary>

- using `?`: [optional chaining `?` & nullish coalescing `??`](https://www.freecodecamp.org/news/how-the-question-mark-works-in-javascript/)

</details>

<!-- #endregion /JAVASCRIPT -->

<!-- #region NAVIGATION -->

<details>
<summary>Navigation</summary>

- [docs](https://reactnavigation.org/docs/4.x/getting-started)
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
- [`addEventListener`](https://reactnavigation.org/docs/4.x/navigation-prop#addlistener---subscribe-to-updates-to-navigation-lifecycle)
- [`<NavigationEvents>`](https://reactnavigation.org/docs/4.x/navigation-events)

</details>

<!-- #endregion /NAVIGATION -->

<!-- #region PROJECT SETUP -->

<details>
<summary>Project Setup</summary>

- [docs](reactnative.dev)
- [bumping versions](https://reactnative.dev/docs/upgrading)
- [Ignite](https://github.com/infinitered/ignite) React Native boilerplate by [Infinite Red](infinite.red)
- [Storing Sensitive Info](https://reactnative.dev/docs/security#storing-sensitive-info)
  - [react-native-dotenv](https://github.com/goatandsheep/react-native-dotenv)
  - [react-native-config](https://github.com/luggit/react-native-config)
- [docs](https://docs.expo.dev)
- Infinite Red’s “Ignite” React Native boilerplate [services/api setup](https://github.com/infinitered/ignite/tree/master/boilerplate/app/services/api)
- [`expo install`](https://docs.expo.dev/guides/config-plugins/#expo-install)
- latest React Native-compatable [versions](https://docs.expo.dev/versions/latest/?redirected#each-expo-sdk-version-depends-on-a)
- [npm / yarn comparison](https://classic.yarnpkg.com/en/docs/migrating-from-npm#toc-cli-commands-comparison)
- [general colocation](https://kentcdodds.com/blog/colocation)

</details>

<!-- #endregion /PROJECT SETUP -->

<!-- #region STATE MANAGEMENT -->

<details>
<summary>State Management</summary>

- [docs](reactjs.org)
- [component lifecycles](https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/)
- [mastering useEffect](https://www.youtube.com/watch?v=dH6i3GurZW8)
- [`react-query` package](https://www.npmjs.com/package/react-query) | [docs](https://react-query.tanstack.com/)
- using `react-query` with [React Native](https://react-query.tanstack.com/react-native)
- [dynamic parallel queries](https://www.youtube.com/watch?v=yOjHT-oTFww) (`useQueries`)
- [Placeholder and Initial Data in React Query](https://tkdodo.eu/blog/placeholder-and-initial-data-in-react-query)

- [axios docs](https://github.com/axios/axios#axios)
- [use React Context effectively](https://kentcdodds.com/blog/how-to-use-react-context-effectively)
  - [fixing slow renders](https://kentcdodds.com/blog/fix-the-slow-render-before-you-fix-the-re-render)
- Net Ninja | [React Query tutorial playlist](https://www.youtube.com/playlist?list=PL4cUxeGkcC9jpi7Ptjl5b50p9gLjOFani)
- Tommy Groshong | [reduce state mgmt footprint](https://blog.testdouble.com/posts/2021-05-03-reduce-state-management-with-react-query/) with [React Query](https://react-query.tanstack.com/) ( [Tanner Linsley](https://twitter.com/tannerlinsley) )
- Kent Dodds
  - [app state mgmt with React](https://kentcdodds.com/blog/application-state-management-with-react)
  - faster React apps with [state colocation](https://kentcdodds.com/blog/state-colocation-will-make-your-react-app-faster)

</details>

<!-- #endregion /STATE MANAGEMENT -->

<!-- #region UI COMPONENTS -->

<details>
<summary>UI</summary>

- [using native Android/iOS Platform colors](https://reactnativeelements.com/docs/customization#using-the-respective-platforms-native-colors) in `react-native-elements` theme
- Shopify's React Native [styling workflow](https://shopify.engineering/5-ways-to-improve-your-react-native-styling-workflow)
- [custom background img component](https://www.sitereq.com/post/two-easy-ways-to-add-react-native-background-image)
- dynamic [image source paths](https://stackoverflow.com/a/41432660)
- [fonts: x-platform](https://github.com/react-native-training/react-native-fonts)
- [shields](https://shields.io/)
- RN | [styling](https://reactnative.dev/docs/style)
- RN | [`ImageSource`](https://reactnative.dev/docs/image#imagesource)
- [displaying images with React Native](https://blog.logrocket.com/displaying-images-with-the-react-native-image-component/)
- [`react-native-elements`](https://reactnativeelements.com/)
  - [`ThemeProvider`](https://reactnativeelements.com/docs/customization#using-themeprovider)
- [`react-native-calendars`](https://wix.github.io/react-native-calendars/docs/intro)
  - [overriding defaults](https://github.com/wix/react-native-calendars#advanced-styling)
  - [theme customization](https://github.com/wix/react-native-calendars#customizing-look--feel)
- [fonts](https://docs.expo.dev/versions/latest/sdk/font/)
- [vector icons](https://icons.expo.fyi/)
- [Inkscape](https://inkscape.org/) - vector graphic tool
- [create vector silhouettes from images](https://www.youtube.com/watch?v=PRvqcfLToqY)
- [remove background from photo](https://logosbynick.com/inkscape-how-to-remove-background/)

</details>

<!-- #endregion /UI COMPONENTS -->

<!-- #region CHECK OUT LATER -->

<details>
<summary><strong><em>CHECK OUT LATER..</em></strong></summary>

CHECK OUT LATER
( VORTX API ) [NestJS](https://nestjs.com/) | Node.js framework for building server-side apps & apis
Brad’s NestJS [crash course](https://www.youtube.com/watch?v=wqhNoDE6pb4)
used in `Ignite` | [Mobx-state-tree](https://mobx-state-tree.js.org/intro/welcome)
[`react-native-elements`](https://reactnativeelements.com/docs/overview)

MISC
[undici](https://github.com/nodejs/undici#undici) | Node.js http client ( getting added to Node )
[WHATWG](https://whatwg.org/) | web hypertext application technology working group

</details>

<!-- #endregion /CHECK OUT LATER -->

<!-- #endregion /RESOURCES -->

<!-- #region ISSUES -->

<h3 id='issues' align='center'>

![rovercam readme graphic](./assets/readme/issues.png)

</h3>

<div align='center'>

[resources](#resources) | [notes](#notes) | [issues](#issues) | [questions](#questions) | [connect](#connect)

</div>

<details>
<summary><code>DatePicker.js</code>: <code>lastDate.diff() is not a function</code> when tring to use <code>getRangeDatesMonthDiff()</code> util func</summary>

</details>

<details>
<summary>Expo crashes when picking SOL / Date ( nav to DisplayPhotosScreen )</summary>

**TRIED:**

:white_check_mark: verify route param vals passed to
'Picker' screens (photos, rover)

:white_check_mark: verify navigation object passed to 'Picker' screens

:white_check_mark: disable 'Picker'Screen nav & log passed handler args (date, sol)

:white_check_mark: attempt nav-ing w/out params & PhotosList

\* _nav works when params, PhotosList comp, & RoverCamerasList comp not used_

:white_check_mark: display PhotosList

:white_check_mark: display RoverCamerasList

**CAUSE:**

**_DisplayPhotosScreen dynamic `title` options property's values weren't strings_**

(found by accident when taking passed params out of play (might be TS time))

```javascript
// DisplayOptionsScreen Stack.Screen options:

<Stack.Screen
	name='DisplayPhotos'
	component={DisplayPhotosScreen}
	options={({ route }) => (title: route.params.value)} // <-- * gremlin
/>
```

</details>

## **LESSON:** Android natively manages JavaScript timers

<details>
<summary>details >></summary>

```reactnative
Setting a timer for a long period of time, i.e. multiple minutes, is a performance and correctness issue on Android as it keeps the timer module awake, and timers can only be called when the app is in the foreground. See https://github.com/facebook/react-native/issues/12981 for more info.
(Saw setTimeout with duration 300000ms)
```

### **Evironment**

- `"react-query": "^3.34.14"`
- `"react-native": "0.64.3"`

### **Attempted**

- [x] check out [issue link](https://github.com/facebook/react-native/issues/12981) provided in warning message
  - _\* issue was locked 20JUL01 \*_
  - JS timers get tracked natively on Android - ie. dictates timer triggers. React Native monitors the triggered timers in relation to app lifecycle / rendering
  - IF: long timer is set - app open while timer active === all good
    - ELSE IF: app bg'd BEFORE timer finishes === timer wont activate until next app open
    - EXCEPTION: headless JS timers run when app is bg'd
  - IF: on-app-open timer activation doesn't matter === ignore the warning
    - ELSE IF: timer needs to live for life of session w/out foreground trigger === find your own fix for ignoring the timer on foreground (aka. a different pkg than the one causing the warning)
  - `Alarm Manager` not to be used to wake app - waking up apps with `setTimeout` = "bad idea" (from the core team)
  - warning remains for awareness
- [ ] explore `react-query` docs for a way to shorten/adjust the timer

### **Solution**

- find package that doesn't throw the warning
- [quiet the warning](https://github.com/tannerlinsley/react-query/discussions/356)

### **Root Cause**

```javascript
var _proto = Query.prototype;

_proto.setOptions = function setOptions(options) {
	var _this$options$cacheTi;

	this.options = (0, _extends2.default)({}, this.defaultOptions, options);
	this.meta = options == null ? void 0 : options.meta; // Default to 5 minutes if not cache time is set

	// this is where the 300 seconds (^^^ 5 minutes ^^^) is coming from in the warning
	this.cacheTime = Math.max(
		this.cacheTime || 0,
		(_this$options$cacheTi = this.options.cacheTime) != null
			? _this$options$cacheTi
			: 5 * 60 * 1000
	);
};

_proto.setDefaultOptions = function setDefaultOptions(options) {
	this.defaultOptions = options;
};

_proto.scheduleGc = function scheduleGc() {
	var _this = this;

	this.clearGcTimeout();

	// cacheTime implementation
	if ((0, _utils.isValidTimeout)(this.cacheTime)) {
		this.gcTimeout = setTimeout(function () {
			_this.optionalRemove();
		}, this.cacheTime);
	}
};
```

</details>

<hr>

## **LESSON:** most Node.js modules aren't natively available in React Native

<details>
<summary>details >></summary>

```reactnative
Unable to resolve module fs from <project path>/node_modules/dotenv/lib/main.js: fs could not be found within the project or in these directories: node_modules
```

### **Environment**

- `"react-query": "^3.34.14"`
- `"react-native": "0.64.3"`

### **Attempted**

- checked out these:
  - [using core node.js modules in react native apps](https://javascript.plainenglish.io/using-core-node-js-modules-in-react-native-apps-e6002a33b6ff)
  - issue [1871](https://github.com/facebook/react-native/issues/1871?ref=hackernoon.com)
  - issue [6253](https://github.com/facebook/react-native/issues/6253?ref=hackernoon.com)
  - `browserify` [handbook](https://github.com/browserify/browserify-handbook?ref=hackernoon.com#builtins)

### **Solution**

- [`browserify`](https://browserify.org/?ref=hackernoon.com) | bundles all of your deps so you can `require` them in the browser

### **Root Cause**

- Node.js is written in C++ so it can't get bundled with React Native's JavaScript bundle

</details>

<hr>

## **LESSON:** don't call hooks AFTER `return`s

<details>
<summary>details >></summary>

### **Evironment**

attempting to render latest photos using new `useLatestPhotos` hook

### **Steps**

- S.O. [](https://stackoverflow.com/q/59339287)

### **Solution**

### **Root Cause**

I was running `LogBox.ignoreLogs(["Setting a timer"])` below returned display values.

</details>

<hr>

<!-- #endregion /ISSUES -->

<!-- #region NOTES -->

<h3 id='notes' align='center'>

![rovercam readme graphic](./assets/readme/notes.png)

</h3>

<div align='center'>

[resources](#resources) | [notes](#notes) | [issues](#issues) | [questions](#questions) | [connect](#connect)

</div>

<details>
<summary>Date / Time</summary>

- date / time format [options](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat)

</details>

## Optimizing Virtualized Lists

```javascript
VirtualizedList: You have a large list that is slow to update - make sure your renderItem function renders components that follow React performance best practices like PureComponent, shouldComponentUpdate, etc.
```

## `Promise.allSettled()` was added to React Native in v64

- `undefined is not a function (near '...Promise.allSettled...`
  - [SO answer](https://stackoverflow.com/a/70114114) | RN issue [30236](https://github.com/facebook/react-native/issues/30236)

## how to style `react-native-element` components

```JavaScript
// style RNE element that have specific style props

Card: {
  containerStyle: {
    backgroundColor: '#f00'
  }
}

// style RNE elments that don't have specific style props
// <Card.Title> becomes CardTitle

CardTitle: {
  style: {
    color: '#0f0'
  }
}
```

## Android timer warning when using `react-query`

- [S.O. answer](https://stackoverflow.com/a/70114114)
- React Native issue [30236](https://github.com/facebook/react-native/issues/30236#issuecomment-939286987)

<!-- #endregion /NOTES -->

<!-- #region QUESTIONS -->

<h3 id='questions' align='center'>

![rovercam readme graphic](./assets/readme/questions.png)

</h3>

<div align='center'>

[resources](#resources) | [notes](#notes) | [issues](#issues) | [questions](#questions) | [connect](#connect)

</div>

:white_large_square: what is the `number` img source type & how does it work / what does it do?

- [x] `DisplayPhotosScreen` is passing `latest_photos[]` to `<PhotosList photos={data.latest_photos}>`. but in `<PhotosList>`, `latest_photos` is an object with a `photos` property??
  - _forgot to destructure `photos` prop - so it was was getting treating like `props`_

<!-- #endregion /QUESTIONS -->

<!-- #region CONNECT -->

<h3 id='connect' align='center'>

![rovercam readme graphic](./assets/readme/connect.png)

</h3>

<div align='center'>

[resources](#resources) | [notes](#notes) | [issues](#issues) | [questions](#questions) | [connect](#connect)

</div>

<table align='center'>
  <tr >
    <td style="border: none;"><a alt='icon link to modevx github account' href='https://github.com/modevx' target='_blank'><img src="https://cdn.iconscout.com/icon/free/png-256/github-157-675821.png" width="90"></a></td> 
    <td style="border: none;"><a alt='icon link to modevx twitter account' href='https://twitter.com/_modevx' target='_blank'><img src="https://cdn.iconscout.com/icon/free/png-256/twitter-235-675852.png" width="90"></a></td>                      
    <td style="border: none;"><a alt='icon link to modevx email' href='mailto:ephraim@modevx.com' target='_blank'><img src="https://cdn.iconscout.com/icon/free/png-256/email-letter-envelope-message-38065.png" width="90"></a></td>  
    <td style="border: none;"><a alt='icon link to ephraim smiths linkedin account' href='https://linkedin.com/in/ephraimjsmith' target='_blank'><img src="https://cdn.iconscout.com/icon/free/png-256/linkedin-187-675833.png" width="90"></a></td>
    <td style="border: none;"><a alt='icon link to modevx instagram account' href='https://instagram.com/_modevx' target='_blank'><img src="https://cdn.iconscout.com/icon/free/png-256/instagram-2752153-2284970.png" width="90"></a></td>
  </tr>
</table>

<!-- #endregion /CONNECT -->
