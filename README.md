# New-Tab

![screenshot.png](screenshot.png)

This is my New Tab extension, heavily based on [Jaredk3nt's](https://github.com/Jaredk3nt/homepage).

## Installation

```sh
git clone https://github.com/sihensel/new-tab.git
```

### Chrome

Navigate to the extensions menu in your browser and tick the switch in the top right corner to enable `Developer mode`.  
Then, click on `Load unpacked` and select the folder containing the repo.

### Firefox

Navigate to the folder containing the repo and add all files, _excluding_ the `.git`-directory to a `zip` file.

```sh
zip new-tab.zip *
```

In Firefox, open `about:addons`, click the cog, choose `Install Add-on From File` and select the zip file you just created.  
Firefox will complain about the addon being unverified. If you have any doubts, feel free to verify the source code.

You might want to replace the hyperlinks and the city ID for Openweathermap with your own.
