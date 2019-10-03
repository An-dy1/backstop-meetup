---
description: There are only a few commands between you and a successful first test. Yay!
---

# Your first BackstopJS test

From the command line, globally install BackstopJS.

```text
$ npm install -g backstopjs
```

Check that it installed successfully.

```text
$ backstopjs -v
```

Make a directory to store your project.

```text
$ mkdir <folder_name>
```

Enter that directory.

```text
$ cd <folder_name>
```

Initialize a new BackstopJS project in that directory.

```text
$ backstop init
```

Navigate to your IDE of choice and open your project directory there. You'll have two things in there: a directory called **backstop\_data** and a file called **backstop.json**.

{% hint style="info" %}
Want to learn more about json? I like [this resource](https://www.digitalocean.com/community/tutorials/an-introduction-to-json). 
{% endhint %}

Open the backstop.json file. There are two fields you need to change here. Update the value of **"label"** to a title of your choice and the value of **"URL"** to the address of the site you're testing. For example:

```text
"label": "My first test",
"url": "https://google.com"
```

To create reference images:

```text
$ backstop reference
```

To create test images and an HTML report:

```text
$ backstop test
```

To approve your test images:

```text
$ backstop approve
```



