# 使用github来做版本管理

* 注册一个github账户，记住email和name.

* 下载安装一个winddows版本的git：[Git for Windows](https://gitforwindows.org/)

  ## 配置本机的公钥和私钥

* 在用户目录下新建一个 **.ssh** 目录，进入**.ssh** ,右键点击：`Git Bash Here`

* 执行：`ssh-keygen -t rsa` 并按回车。(如果提示没有ssh-keygen命令，可以在系统设置中添加可选功能，把openssh客户端和服务端一起安装。)

* 执行完成之后，会在.ssh 目录下生成两个文件。`id_rsa,id_rsa_pub`.其中`id_rsa.pub`是公钥

* 打开github的设置，选择`SSH Keys`，添加一个`new SSH key`,输入`id_rsa.pub`中的内容。

* 打开要保存在github的笔记仓库（没有就新建一个），复制SSH链接。

## 远端与本地的同步

* 在本地新建一个文件夹，用来同步github。进入文件夹执行 `Git Bash Here`
* 拉取到本地，输入 `git clone ssh链接`  ssh链接就是上一步复制的链接
* 进入有.git的新生成的文件夹，这里就可以创建树状结构的文件目录了。

## 本地提交到github

* 进入到有.github的文件夹，执行 `Git Bash Here` 

* 添加全部新文件 `git add .` 也可以手动指定添加哪些文件

* 提交：`git commit -m "描述"`

* 如果在提交这一步出错，需要设置一下githhub账户的邮箱和名字。

  ```html
  git config --global user.email "you@example.com"
  git config --global user.name "Your Name"
  ```

  设置好后，再次提交就行了。

* Push到github

  `git push`

到此，同步设置已经完成了。