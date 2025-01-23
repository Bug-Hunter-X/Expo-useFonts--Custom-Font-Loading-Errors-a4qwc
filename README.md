# Expo useFonts Custom Font Loading Errors

This repository demonstrates a bug and its solution related to using custom fonts with the Expo `useFonts` hook. The bug involves the failure to load custom fonts, leading to either app crashes or the rendering of incorrect fonts.  Possible causes include incorrect font file paths, invalid font file formats, or race conditions.  The solution provides a corrected implementation and explains how to avoid similar issues.

## Bug Description

The `useFonts` hook in Expo sometimes fails to load custom fonts, leading to one of these problems:

* **App Crash:** The application crashes during startup or when trying to render text that requires the custom font.
* **Incorrect Font Rendering:** The app displays the default system fonts instead of the custom fonts.

## Solution

The solution involves verifying several aspects of the custom font setup:

1. **Correct File Paths:** Ensure the paths to the font files are correct relative to the project directory.
2. **Font File Format:** Verify that the font files are in a supported format (e.g., OTF, TTF).
3. **Font File Presence:** Make sure the font files are included in the project and correctly bundled by Expo.
4. **Async Operations:** Properly handle asynchronous operations when loading fonts to avoid race conditions.  Allow sufficient time for font loading before rendering text that depends on them.

## How to Reproduce

1. Clone this repository.
2. Install the dependencies: `npm install`.
3. Run the app: `expo start`.
4. Observe that the bug is initially present, resulting in incorrect font rendering (bug.js).
5. After fixing (bugSolution.js), run again to see the corrected output.
