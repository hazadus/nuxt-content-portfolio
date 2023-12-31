---
title: Keep SSH connections alive on Mac OS
description: Quick note on how to configure Mac OS terminal to keep SSH connections alive.
published: true
date: 2022-09-10
cover: keep-ssh-alive-mac-os.jpeg
tags:
  - MacOs
  - SSH
  - CLI
---

# Keep SSH connections alive on Mac OS

:::callout
Quick note on how to configure Mac OS terminal to keep SSH connections alive.
:::

In terminal, open ssh config file:

```
nano ~/.ssh/config
```

Add following string there:

```
ServerAliveInterval 100
```

Save config file. Your new SSH connections should be kept alive from now on.
