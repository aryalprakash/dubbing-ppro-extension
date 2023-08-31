**IDENTV PIXSEE ADOBE PREMIERE EXTENSION**

Main URL: https://identv-publishing-dashboard.pixsee.identv.com/dashboard/pixsee
Staging URL: https://identv-publishing-dashboard.fs.dev.identv.com/dashboard/pixsee

Download the desired zip file, extract and copy to Extension Folder on your device.

Extension Folders

1. System extension folder

Win(x64): C:\Program Files (x86)\Common Files\Adobe\CEP\extensions, and C:\Program Files\Common Files\Adobe\CEP\extensions (since CEP 6.1)
macOS: /Library/Application Support/Adobe/CEP/extensions

2. Per-user extension folder

Win: C:\Users\<USERNAME>\AppData\Roaming\Adobe\CEP/extensions
macOS: ~/Library/Application Support/Adobe/CEP/extensions

How does CEP decide which extension to load?

- CEP first searches the product extension folder, then the system extension folder, and finally per-user extension folder.
- Extensions without an appropriate host application ID and version are filtered out.
- If two extensions have same extension bundle ID, the one with higher version is loaded.
- If two extensions have same extension bundle ID and same version, the one whose manifest file has latest modification date is loaded.
- If two extensions have same extension bundle ID, same version and same manifest modification date, CEP loads the first one that is found.