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

Tagged under: #MacOS #SSH