服务端渲染：在服务器端直接把数据和html整合在一起，返回给浏览器
客户端渲染：
第一次请求，服务器只返回一个html骨架，第二次请求进行数据展示

web服务器其实就是请求跟响应

请求：
请求行 ->> get/post
请求头 ->> 服务器的附加信息
请求体 ->> 放请求数据

响应：
状态行 ->> 协议 状态码
响应头 ->> 放客户端的附加信息
响应体 ->> 返回真正的内容

Use-Agent 请求载体的身体标识 
Referer: 防盗链
cookie:本地字符串数据信息

GET: 显示提交
POST：隐示提交
重点在请求头和响应头

requests入门
get/post 两种获取 方式，具体看源码

-----------------数据解析-----------------
re解析(正则表达式)  
https://tool.oschina.net/regex/#
https://r2coding.com/#/README?id=%e6%ad%a3%e5%88%99%e8%a1%a8%e8%be%be%e5%bc%8f
bs4解析
xpath解析

bs4解析
<h1> </h1> 一级标题
<h2> </h2> 二级标题
# align 属性
# center

p   段落
font  字体

两种规则
<标签 属性='属性值'>被标记的内容</标签>
<标签 />

<img src="xxx.jpg"/>

# 安装 pip install bs4

xpath解析
xpath是在XML文档中搜索内容的一门语言
html是XML的一个子集

安装 lxml模块 pip install lxml
from lxml import etree
通过从根目录一步步解析到所需要的节点
通过xpath()方法来解析，参考实际代码

需要登录的网站，得获取登录页面的用户名和密码，以及服务器返回的cookie
然后通过会话session 的方式与服务器通信

# 代理
一般情况下用不到，只有大批量请求一个网站的时候才需要
原理：通过第三方的一个机器去发送请求
	{			d1
	-			d2
	-			d3
a----			.				b
	-			.
	-			.
	{			d1000

实现：
1-先实现一个正常的请求
2-用别的IP去访问

协程：当程序遇见了IO操作的时候，可以选择性的切换到其他任务上
（把CPU充分地利用，相当于CPU绑定核心）
适用于IO密集型的操作

异步协程：
import asyncio
import time
async def func():
	print("hello")
	#time.sleep(3) 	当程序出现同步操作时，异步会中断
	await asyncio.sleep(3) #把程序挂起来
	
async def func1():
	print("hello")
	#time.sleep(3)
	await asyncio.sleep(3)
	
async def func2():
	print("hello")
	#time.sleep(3)
	await asyncio.sleep(3)
	
async def func3():
	print("hello")
	#time.sleep(3)
	await asyncio.sleep(3)
	
main:
		g1 = func()
		g2 = func1()
		g3 = func2()
		g4 = func3()		
		
		#asyncio.run(g)
		tasks = [g1,g2,g3,g4]
		#一次性启动多个任务(协程)
		
		asyncio.run(asyncio.wait(tasks))


抓取视频
# <video src="视频.mp4"></video>
# 一般的视频网站是怎么做的？
# 用户上传 -> 转码(处理视频，分不同分辨率) -> 切片处理(把单个文件进行拆分，有效减少用户等待时间，服务器压力等等)

# 需要一个文件记录：1 视频播放顺序，2 视频存在的路径
# M3U 是一个文件。用utf-8编码后，就是M3U8
# 抓取视频：
1 找到m3u8文件(各种手段)
2 通过m3u8下载到ts文件
3 通过各种手段(不仅仅是编程手段)，把ts文件合并成mp4

selenium
# 让程序连接到浏览器，让浏览器来完成各种操作
# selenium 自动化测试工具
# selenium模仿人一样打开浏览器，向人一样去操作浏览器
# 我们从selenium 中直接提取网页上的各种信息
# 安装 ： pip install selenium
# 下载浏览器驱动，先查看浏览器版本，再去下载最接近的版本：
https://registry.npmmirror.com/binary.html?path=chromedriver/&spm=a2c6h.24755359.0.0.6d444dccuGjK6v 
把下载好的文件，解压后放在python解释器的目录




























