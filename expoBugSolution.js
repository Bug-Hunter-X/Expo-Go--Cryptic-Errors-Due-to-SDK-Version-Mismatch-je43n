The primary solution is updating your Expo Go app to the latest version or downgrading your project's SDK version to match your Expo Go app's compatibility.  You can't upgrade your Expo Go app's SDK directly, only update it via the app store.

To check your project's SDK version, examine the `app.json` (older projects) or `expo.json` (newer projects) file. The `sdkVersion` field specifies your SDK version.

For example, in `expo.json`:
```json
{
  "sdkVersion": "48.0.0"
}
```

If the SDK version in your project is higher than your Expo Go app's version, you have three options:

1. Update Expo Go:
   - Go to your device's app store and update the Expo Go app.
2. Downgrade SDK version:
   - Change the `sdkVersion` in `expo.json` to match your Expo Go app's compatibility, then re-run your app using `expo start`.
3. Use Expo Client:  Install Expo client on your computer and run the project that way.