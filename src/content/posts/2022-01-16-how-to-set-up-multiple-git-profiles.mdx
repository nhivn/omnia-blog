---
title: "How to set up multiple git profiles"
excerpt: "A quick, no bullshit guide to switch between git profiles on your machine."
date: 2022-01-16
tags: [git]
categories: [dev]
published: true
---


## A little bit of back story...

I only have 1 laptop which is a Macbook and I like it very much for development work. I am also very stingy so I can't justify shedding thousands of dollars to buy my own personal Mac machine. What ended up happening was that I found out that I've been commiting to public Github repositories with my work email... Cue panicking and some rebase later...

I found out that I need to update my git config to use my non-work email but I didn't want to have to keep editing between the two credentials whenever I decide to work on my personal projects.

After a bit of Googling and digging around, I discovered *the* way to seamlessly change my credentials when I perform a commit.

## The steps

The following guide is only applicable to MacOS.

* In your favourite terminal, navigate to where your `.gitconfig` file is. Usually in your home directory:

```shell
cd ~
``` 

That command should do the trick.

* I need 2 different credentials, 1 for work and 1 for personal projects. So in the user directory, I create 2 new git config files like this:

```shell
touch .gitconfig-work
touch .gitconfig-personal
```

* Within the 2 files, I set correct credentials for my commit.

In `.gitconfig-personal`

```
[user]
	name = personal-name
	email = person@email.xyz
```

In `.gitconfig-work`

```
[user]
	name = work-name
	email = work@email.xyz
```

* Now, I need to set up Git so that it works when and where to use which credentials. For this, I edit `.gitconfig` file and add.

```
[includeIf "gitdir:<PATH_TO_PERSONAL_REPOS>"]
  	path = .gitconfig-personal
[includeIf "gitdir:<PATH_TO_WORK_REPO>"]
  	path = .gitconfig-work
```

## Notes

* If you use Github like me, you should make sure that the `email` matches your account email and the `name` matches your username on Github so that Github can recognise you. Otherwise, your contribution might go to lost.
