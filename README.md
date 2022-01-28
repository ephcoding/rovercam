![project's section banner](./assets/readme_title.png)

## **OBJECTIVE**

Leverage NASA's Mars Rover Photos API to give user's the ability to explore the Red Planet through images on their mobile device.

## **MVP FUNCTIONALITY**

- display latest images from each of the 4 Rovers
- search photos by Rover
- search photos by camera
- search photos by data/Mars sol

![rovercam project status section](./assets/readme_status.png)

### **_Research_**

- [ ] deep-dive Mars Rover Photos API
- [ ] UX design for image-based apps
- [ ] architectural requirements / cost estimates

### **_Development_**

- [ ] setup NASA API creds
- [ ] wire up initial API calls (get data moving)
- [ ] establish navigation

![rovercam issues section](./assets/readme_issues.png)

<details>
<summary><code>dotenv</code> | unable to resolve module <code>'fs'</code></summary>

### **_PROBLEM_**

```reactnative
Unable to resolve module fs from /Users/eph/_repos/m-spacer/node_modules/dotenv/lib/main.js: fs could not be found within the project or in these directories: node_modules
```

### **_CAUSE_**

- _`fs` doesn't exist in React Native ( deep-dive )_

### **_SOUTION_**

- route 3rd-party API calls through server where keys/secrets are stored (prevents sensitive info getting jacked in transit)

- React Native pgks for handling config/environment variables:
  - [react-native-dotenv](https://github.com/goatandsheep/react-native-dotenv) | [react-native-config](https://github.com/luggit/react-native-config)

</details>

![rovercam resources section](./assets/readme_resources.png)

## **APIs**

- NASA's [API Portal](https://api.nasa.gov/)
  > "objective of this site is to make NASA data, including imagery, eminently accessible to application developers. This catalog focuses on broadly useful and user friendly APIs and does not hold every NASA API."

## **NASA**

- [mars.nasa.gov](https://mars.nasa.gov/)

## **NETWORK REQUESTS**

### **_[AXIOS](https://github.com/axios/axios#axios)_**

- request method [aliases](https://github.com/axios/axios#request-method-aliases)
- request [config](https://github.com/axios/axios#request-method-aliases)
- response [schema](https://github.com/axios/axios#response-schema)
- Axios [`get()`](https://github.com/axios/axios#axiosgeturl-config-1) --> modify URL
- Axios [`request()`](https://github.com/axios/axios#axiosrequestconfig-1) --> modify configs

## **REACT NATIVE**

- React Navigation | [stack navigator](https://reactnavigation.org/docs/4.x/hello-react-navigation#creating-a-stack-navigator)
- React Navigation | [navigation prop](https://reactnavigation.org/docs/4.x/navigation-prop)
- [vector icons](https://icons.expo.fyi/)
- Shopify'S React Native [styling workflow](https://shopify.engineering/5-ways-to-improve-your-react-native-styling-workflow)
- React Native-specific [styling](https://reactnative.dev/docs/style)
- React [component lifecycles](https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/)
- [Storing Sensitive Info](https://reactnative.dev/docs/security#storing-sensitive-info)
  - [react-native-dotenv](https://github.com/goatandsheep/react-native-dotenv)
  - [react-native-config](https://github.com/luggit/react-native-config)
- \<Image/\> [source]() prop

</details>

## **TOOLING**

### **_Package Management_**

- [npm cli vs. yarn cli](https://classic.yarnpkg.com/en/docs/migrating-from-npm#toc-cli-commands-comparison)

![rovercam shout-outs section](./assets/readme_shout-outs.png)

## **Chris Cerami**

_Maintains the [Mars Rover Photo API](https://github.com/chrisccerami/mars-photo-api)_

[![GitHub followers](https://img.shields.io/github/followers/chrisccerami?label=Follow&style=social)](https://github.com/chrisccerami)
[![Twitter Follow](https://img.shields.io/twitter/follow/chrisccerami?label=Follow&style=social)](https://twitter.com/chrisccerami)
