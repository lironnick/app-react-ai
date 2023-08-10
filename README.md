# PROJETO DE AI

Neste template você encontrará:

- [clarifai](https://clarifai.com/)
- [Expo](https://expo.dev/)
- [Expo ImagePicker](https://docs.expo.dev/versions/unversioned/sdk/imagepicker/?utm_source=google&utm_medium=cpc&utm_content=performancemax&gclid=Cj0KCQjwldKmBhCCARIsAP-0rfzHf6QKvmmTEVB5tVA_7yQ3YtGXrkas3LBXC7VtlwkbRGLBJGQ9g9AaAgQ1EALw_wcB)
- [Expo ImageManipulator](https://docs.expo.dev/versions/latest/sdk/imagemanipulator/)

## Expo ImagePicker

    npx expo install expo-image-picker

```json
{
  "expo": {
    "plugins": [
      [
        "expo-image-picker",
        {
          "photosPermission": "The app accesses your photos to let you share them with your friends."
        }
      ]
    ]
  }
}
```

## Expo ImageManipulator

    npx expo install expo-image-manipulator

## clarifai

É necessario logar, e escolher o tipo de modelo que você vai usar no seu projeto.

```javascript
///////////////////////////////////////////////////////////////////////////////////////////////////
// In this section, we set the user authentication, user and app ID, model details, and the URL
// of the image we want as an input. Change these strings to run your own example.
//////////////////////////////////////////////////////////////////////////////////////////////////

// Your PAT (Personal Access Token) can be found in the portal under Authentification
const PAT = 'YOUR_PAT_HERE';
// Specify the correct user_id/app_id pairings
// Since you're making inferences outside your app's scope
const USER_ID = 'clarifai';
const APP_ID = 'main';
// Change these to whatever model and image URL you want to use
const MODEL_ID = 'general-image-recognition';
const MODEL_VERSION_ID = 'aa7f35c01e0642fda5cf400f543e7c40';
const IMAGE_URL = 'https://samples.clarifai.com/metro-north.jpg';

///////////////////////////////////////////////////////////////////////////////////
// YOU DO NOT NEED TO CHANGE ANYTHING BELOW THIS LINE TO RUN THIS EXAMPLE
///////////////////////////////////////////////////////////////////////////////////

const raw = JSON.stringify({
  user_app_id: {
    user_id: USER_ID,
    app_id: APP_ID,
  },
  inputs: [
    {
      data: {
        image: {
          url: IMAGE_URL,
        },
      },
    },
  ],
});

const requestOptions = {
  method: 'POST',
  headers: {
    Accept: 'application/json',
    Authorization: 'Key ' + PAT,
  },
  body: raw,
};

// NOTE: MODEL_VERSION_ID is optional, you can also call prediction with the MODEL_ID only
// https://api.clarifai.com/v2/models/{YOUR_MODEL_ID}/outputs
// this will default to the latest version_id

fetch(
  'https://api.clarifai.com/v2/models/' +
    MODEL_ID +
    '/versions/' +
    MODEL_VERSION_ID +
    '/outputs',
  requestOptions
)
  .then((response) => response.text())
  .then((result) => console.log(result))
  .catch((error) => console.log('error', error));
```
