## 第一步、下载PhPstudy

浏览器输入phpsduty

或者打开：(https://www.xp.cn/download.html)

下载对应的版本，64位系统就下载64位的。

## 第二步、下载Wiki

打开github:    (www.github.com)

搜索：Wikitten，选择 devaneando/Wikitten。

找到Release或者Tags,下载V1.1.0版本，这个版本比较稳定。

## 第三步、安装phpstudy

点击安装即可,默认是安装在D:\phpstudy_pro。不需要更改。

## 第四步、设置phpstudy

![](https://cdn.staticaly.com/gh/symbolworld/PicGo@master/img/image-20221003165811877.png)

点击一键启动中的切换，把Web切换成Apache2.4.39 ,点击确定

##### 点击软件管理，找到PHP，选择对应的版本，点设置。我这里是php7.3.4nts

![](https://cdn.staticaly.com/gh/symbolworld/PicGo@master/img/image-20221003170148716.png)

##### 其他的可以不用设置了，回到首页，点击WNMP启动

## 第五步、测试环境

在浏览器中输入 localhost,可以看到站点建立成功。

## 第六步、把Wiki配置到phpsduty中

解压下载好的Wikitten-1.1.0,把整个目录下的文件，覆盖到D:\phpstudy_pro\WWW 目录下。原有的文件，删除即可。

![](https://cdn.staticaly.com/gh/symbolworld/PicGo@master/img/image-20221003171022216.png)

复制一份config.php-example为config.php.打开config.php，可以对配置文件进行编辑。

一般打开允许在线编辑：define('ENABLE_EDITING', true);

具体的功能，同英文的意思一样。

再次在浏览器打开：localhost ,即可看到整个目录。

##### 到这里，整个配置就完成了，还有两个注意点。

### 注意点1

D:\phpstudy_pro\WWW\library 目录是整个库目录，在此目录下再创建树状结构即可以浏览器端看到相应目录

### 注意点2

要使软件能够打开，后台要运行着phpstudy或者运行相应的服务。