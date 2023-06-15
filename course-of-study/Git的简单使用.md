# Git的简单使用



Git是一个非常强大的版本管理工具，使用它可以方便管理我们的项目。

[Git下载地址](https://git-scm.com/downloads)

## 一、Git工作方式

如图

![](https://cdn.staticaly.com/gh/symbolworld/PicGo@main/img/111.png)

我们在使用Git之前，要先在本地初始化环境，可以直接在项目文件夹内初始化。

执行：`git init`

这样环境就初始化成功了。

此时只有一个master/main分支，首先我们需要将本地文件同步到本地的Git仓库，执行图中的两个命令

`git add .`

`git commit -m "描述"`

到这一步，同步工作就完成了。



## 二、Git的一般工作流程

以主分支master为例，我们一般不会在主分支上去修改代码，通常会新建一个新的分支，在新的分支上完成功能开发，保证没有问题后，才合并到master分支中。

我们新建一个分支dev：`git branch dev`，切换到dev分支:`git checkout dev`

此时我们有了两个分支，一个master,一个dev,所有工作都在dev上完成，完成后再合并到master。

但在实现开发中，通常时几个人一起完成，所以，仅有dev分支也是不够的，必须在dev上每人都有自己的分支。

以3人为例：

![](https://cdn.staticaly.com/gh/symbolworld/PicGo@main/img/222.png)

在dev分支上，我们建好了三个分支，ABC三个人做自己的工作，当完成工作时就合并到dev分支上。

比如A要把代码合并到dev分支上，切换到dev分支上执行：`git merge A`

但是轮到B合并时就会出错了，因为此时dev分支上的最新代码包含了A的那部分，B没有A那部分代码，所以无法合并成功。

为了解决这个问题，需要用到rebase命令，它可以替换B这边的dev的更新点，替换为上一次commit的位置。这时再合并，就能合并成功了。具体执行如下，B要先切换到自己的分支：`git checkout B`

`git rebase dev`，然后切换到dev分支：`git checkout dev`，合并B分支到dev分支上：`git merge B`

C要想合并自己的代码到dev分支上，也同样需要跟B一样的操作。

`git checkout C`

`git rebase dev`

`git checkout dev`

`git merge C`

与合并相关的命令有如下：

查看已合并的分支：`git branch --merged`

查看未合并的分支：`git branch --no-merged`

删除已合并的分支：`git branch -d <分支名>`

强制删除未合并的分支：`git branch -D <分支名>`

以上是简单的Git工作流程，主要的思想就是对分支进行管理，开发一个功能，就应该新建分支，同事来合作完成某个任务，也应该新建分支。当工作做完时，再合并删除分支。



