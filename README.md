**APPTEK DUBBING STUDIO ADOBE PREMIERE EXTENSION**

Main URL: https://apptek-dubbing-studio.vercel.app/

Download the [extension zip file](https://github.com/aryalprakash/dubbing-ppro-extension/raw/refs/heads/main/Apptek%20Dubbing%20Ppro.zip), extract and copy to Extension Folder on your device.

### Extension Folders

1. System extension folder

Win(x64): `C:\Program Files (x86)\Common Files\Adobe\CEP\extensions` and `C:\Program Files\Common Files\Adobe\CEP\extensions` (since CEP 6.1)

macOS: `/Library/Application Support/Adobe/CEP/extensions`

2. Per-user extension folder

Win: `C:\Users\<USERNAME>\AppData\Roaming\Adobe\CEP/extensions`

macOS: `~/Library/Application Support/Adobe/CEP/extensions`

How does CEP decide which extension to load?

- CEP first searches the product extension folder, then the system extension folder, and finally per-user extension folder.
- Extensions without an appropriate host application ID and version are filtered out.
- If two extensions have same extension bundle ID, the one with higher version is loaded.
- If two extensions have same extension bundle ID and same version, the one whose manifest file has latest modification date is loaded.
- If two extensions have same extension bundle ID, same version and same manifest modification date, CEP loads the first one that is found.

### Enable loading of unsigned panels

Further [relevant information](https://medium.com/adobetech/how-to-create-your-first-adobe-panel-in-6-easy-steps-f8bd4ed5778) is available from the Extensibility team.

_Note: Premiere Pro 23.x integrates CEP11, so even if you had unsigned panels
loading before (up to CEP10), you'll need to perform this step again, but for key CSXS.11._

On MacOS, type the following into Terminal, then relaunch Finder (either via
rebooting, or from the Force Quit dialog):

```html
defaults write com.adobe.CSXS.11.plist PlayerDebugMode 1
```

On Windows, make the following registry entry (a new Key, of type String):

![Registry image](Registry.png)
