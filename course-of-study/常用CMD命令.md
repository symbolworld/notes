测试网络连通情况：

`ping IP地址`

```
ping 参数：
-l 数据包大小
-t 一直ping
-n ping 的次数
```

查看路由追踪表：

`tracert IP`

比如：`tracert www.baidu.com`

打开系统引导项：

`msconfig`

查看本机IP地址：

`ipconfig`

`ipconfig /all`

```
netsh 简单使用
查看连接过和wifi密码：
CMD下输入netsh,回车，
列举连接过的wifi：wlan show profiles
查看某个wifi密码：wlan show profiles "wifi名称" key=clear
--------------------------
静态IP和动态IP随时切换
建立一个static.cmd文件，用文件保存的好处是可以一次性更改。
static.cmd写入：
netsh interface ip set address "要修改的网卡名称" static 192.168.0.100 255.255.255.0 192.168.0.1 1
建立dhcp.cmd 写入：
netsh interface ip set address "要修改的网卡名称" dhcp 
ipconfig /release
ipconfig /renew
双击运行即可。
```

跳转特定目录：

`先进入要跳转的目录，在路径栏上直接输入 cmd 即可`

打开记事本：

`notepad`

打开画图：

`mspaint`

打开计算器：

`calc`

打开字符映射表：

`charmap`

打开注册表

`regedit.exe`

查看windows版本

`winver`

打开控制面板

`control`

打开DVD播放器：

`dvdplay`





