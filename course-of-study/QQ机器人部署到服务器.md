### QQ机器人部署到服务器

服务器：**centos7.6	3.10.0-1160.76.1.el7.x86_64**

所需环境：

**openssl>=1.1.1**

**python>=3.10**

#### OpenSSL安装

0、如果你的版本**>=1.1.1**，则不需要安装。（版本查看：**openssl version**）

1、下载**openssl**

下载地址：[下载地址)](https://github.com/openssl/openssl/tags)

2、将下载好的文件，上传到服务器，比如我放到了 **/root/qin/** 这个目录下

也可以直接下载：`wget https://www.openssl.org/source/openssl-1.1.1n.tar.gz --no-check-certificate`

本人下载的文件名是：**openssl-OpenSSL_1_1_1o.tar.gz**

3、解压：`tar -zxvf openssl-OpenSSL_1_1_1o.tar.gz`

4、`cd openssl-OpenSSL `

5、配置：`./config --prefix=/usr/local/openssl`

6、编译和安装：`make -j && make install`

7、查看版本：`openssl version`

如果版本不对，需要备份原来的，再创建软链接

8、备份：`mv /usr/bin/openssl /usr/bin/openssl.bak`

9、创建**openssl**命令软链接：

`ln -s /usr/local/openssl/bin/openssl /usr/bin/openssl `

`ldconfig`

10、对**libssl.so.1.1**文件创建软链接。假如**libssl.so.1.1** 文件在**/usr/local/openssl/lib/**下面，如果找不到就看看lib64有没有

`ln -s /usr/local/openssl/lib/libssl.so.1.1 /usr/lib64/libssl.so.1.1`

`ln -s /usr/local/openssl/lib/libcrypto.so.1.1 /usr/lib64/libcrypto.so.1.1`

`ldconfig`

11、添加环境变量，路径需要与自己系统中的相同。

` export LD_LIBRARY_PATH=/usr/local/openssl/lib:$LD_LIBRARY_PATH`

`source ~/.bash_profile`

12、再次查看版本：`openssl version`

到这里，确保版本正确再进行下一步。

### Python安装

**python**环境的要求是: **3.10=< verion <3.11**

0、安装一些必备的依赖库：`yum install -y ncurses-devel gdbm-devel xz-devel sqlite-devel tk-devel uuid-devel readline-devel bzip2-devel libffi-devel`

`yum install zlib-devel bzip2-devel openssl-devel ncurses-devel sqlite-devel readline-devel tk-devel libffi-devel gcc make -y`

1、切换到 **/root/qin/**目录，下载**Python3.10.6**（也可以下载其他版本）

`wget https://www.python.org/ftp/python/3.10.6/Python-3.10.6.tgz --no-check-certificate`

2、解压：`tar -zxvf Python-3.10.6.tgz`

3、进入**python**目录：`cd Python-3.10.6`

4、配置**Python**，指定安装目录，和指定**openssl**目录，这是必备的，不然安装**nb-cli**很有可能会失败。

`./configure --prefix=/usr/local/python3 --with-openssl=/usr/local/openssl --with-openssl-rpath=auto`

5、编译和安装：`make && make install`

如果在安装的时候，提示缺少必备的库，请先安装对应的库。

然后执行`make clean`,再`make && make install`

6、添加环境变量

```
PATH=$PATH:$HOME/bin:/usr/local/bin
export PATH
source ~/.bash_profile
```

也可以添加一个指定的别名：

```
打开~/.bashrc:  vim ~/.bashrc
添加:alias python3='/usr/local/bin/python3'
source ~/.bashrc
```

### nonebot环境配置

1、安装脚手架：`pip3 install nb-cli`

2、创建机器人：`nb create`

3、配置环境，与**windows**差不多

4、进入项目目录，执行：`python3 bot.py`

5、如果第四步出错，根据相应错误去解决。

6、实测在**windows**配置好，直接传到**linux**有问题，需要在**linux**重新执行：`nb create`

7、关于环境

**.env**是指定环境，指定为**dev**,是开发环境，指定为**prod**是生产环境。

比如在**dev**环境下，所有的配置项都要在**.env.dev**中去修改，像端口号，超级用户和其他插件的一些配置。

### cq-http配置

1、在**windows**上先配置好**windows**版本的机器人，主要是需要**config.yml**配置文件和**session.token**、**device.json**

主要是设置通信方式为：**反向websocker**

**config.yml**中添加QQ账号和反向**WS**设置：	`universal: ws://127.0.0.1:53245/onebot/v11/ws`

这里的端口号要与**nonebot**环境中的端口号相同。

2、下载**linux**版本**cq-http**，下载这个：**go-cqhttp_linux_amd64.tar.gz**

3、解压出来，放在与**windows**机器人同一目录，然后删除与**windows**相关的东西，再传到**linux**服务器上。

4、给**linux**版本的**go-cqhttp**添加权限，否则无法运行。

`chmod 777 go-cqhttp`

### 运行机器人

分别进入到服务器中机器人项目目录和cq-http目录，一般两个目录会放在一起。

执行：`python3 bot.py` 和 `./go_cqhttp`

后台运行：`nohup [command] &`

### 添加插件

1、自己开发

2、使用别人的：[none插件商店](https://nb2.baka.icu/store)

插件具体安装方法，在插件商店中可以看到。