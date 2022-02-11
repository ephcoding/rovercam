# [ TITLE ]

<div align='center'>

![rovercam readme graphic](./assets/readme/build-notes-title.png)

</div>

<div align='center'>

[Resources](#resources) | [Notes](#notes) | [Issues](#issues) | [Lessons Learned](#lessons) | [Questions](#questions) | [Connect](#connect)

</div>

# [ ROADMAP ]

## **Research**

- [ ] Mars Rover Photos API
- [ ] UX design for image-heavy apps
- [ ] UI design for image-heavy apps
- [ ] React Native image optimization best-practices
- [x] Mars img resources

## **Development**

- [ ] display images for all 4 rovers
- [ ] fetch images for all 4 rovers
- [ ] create splash screen
- [ ] set up [NASA](https://api.nasa.gov/#mars-rover-photos) Mars Rover Photos [API](https://github.com/chrisccerami/mars-photo-api) services
- [x] set up project using [Ignite](https://github.com/infinitered/ignite)

<h3 id='resources' align='center'>

![rovercam readme graphic](./assets/readme/resources.png)

</h3>

<div align='center'>

[Resources](#resources) | [Notes](#notes) | [Issues](#issues) | [Lessons Learned](#lessons) | [Questions](#questions) | [Connect](#connect)

</div>

# [ RESOURCES ]

## APIS & SERVICES

- [AXIOS](https://github.com/axios/axios#axios)
- [`react-query` package](https://www.npmjs.com/package/react-query) | [docs](https://react-query.tanstack.com/)
- NASA [Mars projects](https://mars.nasa.gov/)
- NASA [API Portal](https://api.nasa.gov/)

## CODE MANAGEMENT

- latest Expo SDK / React Native [versions](https://docs.expo.dev/versions/latest/?redirected#each-expo-sdk-version-depends-on-a)
- upgrading React Native to [new versions](https://reactnative.dev/docs/upgrading)
- Expo [docs](https://docs.expo.dev)
  - [`expo install`](https://docs.expo.dev/guides/config-plugins/#expo-install)
- [Ignite](https://github.com/infinitered/ignite) React Native boilerplate by [Infinite Red](infinite.red)
- [npm / yarn comparison](https://classic.yarnpkg.com/en/docs/migrating-from-npm#toc-cli-commands-comparison)
- React: [docs](reactjs.org)
  - [component lifecycles](https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/)
  - [mastering useEffect](https://www.youtube.com/watch?v=dH6i3GurZW8)
- JavaScript
  - using `?`: [optional chaining `?` & nullish coalescing `??`](https://www.freecodecamp.org/news/how-the-question-mark-works-in-javascript/)
- [Storing Sensitive Info](https://reactnative.dev/docs/security#storing-sensitive-info)
  - [react-native-dotenv](https://github.com/goatandsheep/react-native-dotenv)
  - [react-native-config](https://github.com/luggit/react-native-config)

## DEBUGGING & TESTING

- debugging with [`react-devtools`](https://www.npmjs.com/package/react-devtools)

## IMAGES / UI / VISUALS

- Expo [fonts](https://docs.expo.dev/versions/latest/sdk/font/)
- Expo [vector icons](https://icons.expo.fyi/)
- [using native Android/iOS Platform colors](https://reactnativeelements.com/docs/customization#using-the-respective-platforms-native-colors) in `react-native-elements` theme
- [Inkscape](https://inkscape.org/) - vector graphic tool
  - [create vector silhouettes from images](https://www.youtube.com/watch?v=PRvqcfLToqY)
  - [remove background from photo](https://logosbynick.com/inkscape-how-to-remove-background/)
- README
  - [shields](https://shields.io/)
- Styling
  - [`react-native-elements`](https://reactnativeelements.com/)
    - [`ThemeProvider`](https://reactnativeelements.com/docs/customization#using-themeprovider)
- [styling](https://reactnative.dev/docs/style)
  - Shopify's React Native [styling workflow](https://shopify.engineering/5-ways-to-improve-your-react-native-styling-workflow)
- React Native: [docs](reactnative.dev)
  - [custom background img component](https://www.sitereq.com/post/two-easy-ways-to-add-react-native-background-image)
  - dynamic [image source paths](https://stackoverflow.com/a/41432660)
  - [fonts: x-platform](https://github.com/react-native-training/react-native-fonts)

## NAVIGATION

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
- React Navigation | subscribing to navigation events
  - [`addEventListener`](https://reactnavigation.org/docs/4.x/navigation-prop#addlistener---subscribe-to-updates-to-navigation-lifecycle)
  - [`<NavigationEvents>`](https://reactnavigation.org/docs/4.x/navigation-events)

<h3 id='lessons' align='center'>

![rovercam readme graphic](./assets/readme/lessons.png)

</h3>

<div align='center'>

[Resources](#resources) | [Notes](#notes) | [Issues](#issues) | [Lessons Learned](#lessons) | [Questions](#questions) | [Connect](#connect)

</div>

# [ LESSONS LEARNED ]

## **LESSON:** most Node.js modules aren't naturally available in React Native

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
- quiet the warning

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

<h3 id='notes' align='center'>

![rovercam readme graphic](./assets/readme/notes.png)

</h3>

<div align='center'>

[Resources](#resources) | [Notes](#notes) | [Issues](#issues) | [Lessons Learned](#lessons) | [Questions](#questions) | [Connect](#connect)

</div>

# [ NOTES ]

## **API SERVICE DESIGN PATTERNS**

<details>
<summary>details >></summary>

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

</details>

## **CUSTOMIZING `react-native-element` COMPONENTS**

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

## **FETCHING & SYNCING DATA W/ `react-query`**

<details>
<summary>details >></summary>

- worked through Android timer warning when using `react-query`

</details>

## **REACT NATIVE \<Image\> SOURCES**

<details>
<summary>details >></summary>

_why is something as simple as using local project images such a PITA.._

> _React Native docs: [ImageSource](https://reactnative.dev/docs/image#imagesource)_
>
> `number` - opaque type returned by something like `require('./image.jpg')`.

- [displaying images with React Native](https://blog.logrocket.com/>displaying-images-with-the-react-native-image-component/)

</details>

<h3 id='questions' align='center'>

![rovercam readme graphic](./assets/readme/questions.png)

</h3>

<div align='center'>

[Resources](#resources) | [Notes](#notes) | [Issues](#issues) | [Lessons Learned](#lessons) | [Questions](#questions) | [Connect](#connect)

</div>

# [ QUESTIONS ]

<h3 id='connect' align='center'>

![rovercam readme graphic](./assets/readme/connect.png)

</h3>

<div align='center'>

[Resources](#resources) | [Notes](#notes) | [Issues](#issues) | [Lessons Learned](#lessons) | [Questions](#questions) | [Connect](#connect)

</div>

# [ CONNECT ]
