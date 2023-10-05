# New-Tab

![screenshot.png](screenshot.png)

New Tab extension for Chrome and Firefox, heavily based on [Jaredk3nt's](https://github.com/Jaredk3nt/homepage).

## Installation

```sh
git clone https://github.com/sihensel/new-tab.git
```

### Chrome

Navigate to the extensions menu in your browser and tick the switch in the top right corner to enable `Developer mode`.<br>
Then, click on `Load unpacked` and select the folder containing the repo.

### Firefox

Navigate to the folder containing the repo and add all files, _excluding_ the `.git`-directory to a `zip` file.
```sh
zip new-tab.zip *
```

In Firefox, open `about:addons`, click the cog, choose `Install Add-on From File` and select the zip file you just created.<br>
Firefox is most likely going to complain about the addon being unverified. If it cannot be installed it might be necessary to set `xpinstall.signatures.required` to `false` in `about:config`. If you have any doubts, feel free to verify the source code.

__Note__: You might want to replace the hyperlinks with your own.
