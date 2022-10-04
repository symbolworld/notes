Python基础

编程语言分类
	编译型：C/C++,java,go...
		把源代码进行编译
		执行 效率高，平台依赖性也高
	解释型:JS, python,ruby...
		逐行对源代码进行翻译和运行
		执行效率相对较低，平台依赖性不高
		用不同解释器跨平台
python 擅长
		1.爬虫
		2.自动化
		3.科学计算
		4.人工智能
		
python唯一官方平台：https://python.org		

python开发工具
1.记事本
2.vscode	强大的编程工具
3.pycharm	专门为Python使用的工具
4.jupyter notebook 	新手不推荐

pycharm官网：https://www.jetbrains.com/pycharm/
B站地址：https://www.bilibili.com/video/BV14r4y1k7F9?p=4&spm_id_from=pageDriver&vd_source=32b7aaa5894fd28fbf78ac2058c31206

写代码必须要写注释
单行，#+空格 # 

块注释：
""" 
注释
"""
或者：
'''
这也可以注释 
'''
也可以选中要注释的行，按ctrl+/,批量注释

变量的命名规范：
	1.必须由数字/字母/下划线组成，并且不能数字开头
	2.不能python关键字，最好不用内置函数名
	3.不用中文
	4.有特定含义，让人一看就懂，最好别用太长
	5.推荐用下划线_连接或者驼峰命名
	
常量：固定不能改变的量，比如生日，圆周率，E。。。
约定变量所有字母为大写时，为常量。	

数据类型：数字，字符串，bool 	
	字符串：用''或者"" 表示单行
			用''' '''或者""" """ 表示多行
			+ 表示连接，必须同类型
			* 必须接数字，表示字符串重复次数
			input()获取的是字符串类型
	bool :True ,False
	
#用type(a)来查看数据类型
print(type(a))

数据类型转换 
转int,直接用int()
转str,直接用str()

条件判断,python没有大括号，用缩进来统一
用 == 判断是否相等
#第一种，单纯判断
a = 500
if a < 3443:
	print("hello")
	
#第二种，二选一，必有一个执行
	if condision:
		program1
	else:
		pycharm2

#第三种：多个条件,嵌套多分支
	if a > 1000:
		if ...:
		
		else:
		...
	else:
	
#第四种
	if 条件1：
		代码1
	elif 条件2：
		代码2
	elif 条件3：
		代码3
	else:
		代码4
		
可以互相多重嵌套		
必须严格缩进

循环语句
while 条件:
	...
	
break:退出循环
continue：跳过本次循环，继续执行下一次循环
	
for循环： range(0,N,index),不包含N,index是步进。
for i in range(0,10):
	print(i)
for i in range(0,10,2):
	print(i)

可以用pass来占位，保持代码完整性。


——————————————————————————————————————————第二章————————————————————————————————————————————————
数据类型
int,float,bool
str 	(*****)
list 	(*****)
tuple	(**)
set		(*)
dict	(*****)
bytes	(****)
运算符  (***)
文件操作(****)

数据类型判断：type(a)
转换，int(),str(),bool()...
转为bool时，
所有非0数字为True，0为False
所有非空字符为True，空字符为False

1.字符串格式化：
name = "Tim"
address = "aks"
age = 20
s = f"我叫{name},我住在{address},今年{age}岁"

2.索引和切片
s = "I'm fine!"
索引
print(s[0]) #第一个
print(s[-1]) #倒数第一个 
切片
print(s[1:3]) #'m 
注意边界，前面取到，后面取不到，[1,3)
print(s[-3:-1])	#从左往右切

s1 = "我爱你"
print(s1[::-1])#-1是步长，从右往左切，用方向和步长可以控制

[start:end:方向和步长]
注：start 和 end 为正数时，步长也要为正，start 和 end 为负数时，步长也要为负。

3.字符串常规操作
字符串的操作一般不会对原字符串产生影响，一般是返回一个新的字符串
就是说要用一个新的变量来的接收

s1 = s.capitalize() #首字母变大写
s1 = s.title() #单词首字母变大写
s1 = s.upper() #所有字母变大字 非常常用
s1 = s.lower() #所有字母变小写

4.字符串切割和替换

s1 = s.strip() #可以去掉s两端中的空白符(空格,\t,\n)
s1 = s.replace(old,new) #字符串替换
s1 = s.split("_")#用_对s进行切割，结果放在list当中，并且用来切割的字符串就会损失掉

5.字符串查找和判断
ret = s.find("str")#返回第一次出现的位置，没有返回-1
ret = s.index("str") #没有就报错

print("str" in s) #in 可以作查找判断，根据结果True或者False
print("str" not in s) #not in 与in相反

s.startswith("str")和s.endswith("str") #判断开始或结尾的字符串

s.isdigit()#判断是否为整数

6.补充
内置函数
len(s)
type(s)
join() 		#连接list中的内容，与spli()相反

s = "_".join(lst) #把list中的内容，用_连接起来，生成新的字符串

——————————————————————————————————————————第三章————————————————————————————————————————————————
1.列表
lst = []
#可以保存大量数据的结构
	可以存放多种数据类型
	有索引和切片功能
	与字符串有同样的操作
列表的增删改查
lst.append("list") #追加
lst.insert(0,"list")#在第0个位置插入list,效率较低
lst.extend([]) #可以合并列表，批量添加，参数是list

ret = lst.pop(3) #pop第三个索引,ret是被删除的元素
lst.remove("aaa") #把aaa从列表中删除,循环删除时，要用一个新列表保存要删除的，再遍历这个列表逐一删除

lst[4] = "new_list" #直接用索引进行修改

print(lst[3]) #直接用索引进行查询

列表会按照存放的顺序来保存
list.sort() #升序
list.sort(reverse=True) #降序，翻转= True

列表可以随意嵌套，可以直接用[]访问

2.元组

tuple = ("aaa","bbb","ccc")，不可变的列表，常用于哈希的索引
如果元组只有一个元素，要在后面加个,
不可变指的是内存地址不可变，地址上的内容其实是可变的
a,b = (1,2)
元组可以解包

3.set 集合
s = {1,2,3,"hello"}
特点：
	1、存放是无序的,无法使用pop()，只能用remove
	2、里面的数据是要可哈希的
	3、不存在重复的数据，可用于去重
	
可哈希：int,str,tuple,bool
不可哈希：list,dict,set

修改：只能先删除，再新增。
查询：for item in s:
		print(item)
交集： 	s1 & s2		或者 s1.intersection(s2)
并集：	s1 | s2		或者 s1.union(s2)
差集：	s1 - s2		或者 s1.difference(s2)


4.dict 字典
以键值对的方式存在
{key1:value1,key2:value2,key3:value3,...}

key 必须可哈希
value 可以是任意数据
如果dict的key不存在，dict["key"]会报错，dict.get("key")会返回None

删除：dict.pop("key")

拿到所有的key:	dict.keys()
拿到键值 对：	dict.items() #可以直接解包

for key, value in dic.items():
    print(key,value)
字典的嵌套直接一层一层往下找

字典的删除
temp = [] #存放要删除的key
然后遍历temp
dict.pop(temp)

5.字符集与编码

ASCII =>> 编码了128个字符 8bit=1byte

ANSI =>> 16bit的一套标准，2^16
中国用ANSI标准，编码了 gb2312，gbk编码
台湾省扩展了 big5
日本 JIS编码
彼此之间不通用

Unicode：万国码，扩充到了4个字节，太浪费空间

utf:可变长度的Unicode，可以进行数据的传输和存储
utf-8: 最短的字节长度8
		英文：8bit
		中文：24bit,3个字节
utf-16: 最短的字节长度16

bytes:
gbk:2个字节
utf-8:3个字节

str.encode("编码") 
str.decode("解码")

——————————————————————————————————————————第四章————————————————————————————————————————————————
运算符
算术：+, -, *, /, %, //(整除)
比较：>, <, <=, >=, ==,!=  
赋值: 两个值互换：a,b = (b,a)
=,+=,-=,*=
逻辑：and,or,not 
成员：in,not in #(判断某个成员是否存在)

文件操作
读
打开:
f = open(路径,mode="",encoding="")
路径：绝对路径/相对路径
mode: r(读),w(写),a(追加),with(上下文),b(读取的是非文本文件)
encoding 一般是 utf-8

w模式下，每一次open都会清空原有文件内容
打开非文本，要加上b,不需要加encoding

with模式,不需要关闭，只对本次生效。
with open("路径",mode = "r",encoding="utf-8") as f: 

读取:
content = f.read()
line = f.readline().strip()	#读取一行，strip()去掉\n\t空白等

for line in f:	#从f中读取的每一行
	print(line.strip())

文件的复制，从一个文件中读取，写到另一个文件中去
with open("路径1",mode="rb") as f1,open("路径2",mode="wb") as f2:
	for line in f1:
		f2.write(line)

——————————————————————————————————————————第五章————————————————————————————————————————————————
函数
定义：	def func():
			代码模块

调用：	func()

参数：	func(p1,p2)
实参在使用的时候，可以手动指定形参,
def func(a,b,c,d):
	代码块
func(a=1,b=2,c=3,d=4)

位置参数：按照顺序
默认参数：d 就是默认参数，可以正常传参数，实参可以不写
	def func(a,b,c,d=0):
		代码块
		
动态可变参数：#*接收到的值，放到tuple里面
	def func(*args):
		代码块
	func(1,2,3,4)	
		
关键字的动态参数：#**表示接收关键字的动态传参，会生成一个字典
	def func(**kwargs)
		代码块
	func(a=1, b = 2, c=5):

混合使用时的顺序：
位置参数 > *args > 默认值 > **kwargs
参数可以随意搭配
没有限制的传参
	def func(*args,**kwargs):
		pass

lst = ["aaa", "bbb", "ccc", "ddd", ...]
def func(*args):
	print(args)

func(*lst)	#*  在实参位置，是把列表中的元素作为位置参数地进行传递
			#** 在实参位置，是把字典的元素作为关键字参数地进行传递

返回值 ：加个return关键字
1-如果函数没有return,接收到的返回值是None
2-可以有多个返回值，以tuple的形式返回

内置函数---系统提供的函数
list,tuple之间数据相互转换
reversed  翻转
slice	切片 [1:5:2]

format,ord,chr
format -格式化
a = 18
print(format(a,"b")) #b:二进制，o:八进制，x:十六进制
print(format(a,"08b")) #以八位二进制对齐

#python在内存中使用的是unicode
a = "中"
print(ord(a)) #中 字在Unicode中的码位是20013
print(chr(20013)) #显示 中 字

for i in range(65535):
	print(chr(i) + " ",end="")

#enumerate,all,any
print(all([12,"呵呵","豆沙包"]))
#all 当成and,把[]中的内容执行and操作
#把any 当成or来看待
#enumerate 可以拿到索引和内容

hash() -进行hash运算
id()   -直接获取内存地址

help() -帮助提示，只能看类型
dir(str) -显示str有哪些操作

————————————————————函数下————————————————————
作用域：	全局或局部的区别
嵌套：		函数中包含另外函数的实现
def func1():
	a = 0
	def func2():
		pass
	pass 
	
函数是一个变量，可以作为返回值，接收的变量也是个函数
def func():
	def inner():
		print("abc")		
	return inner #返回的是一个函数
	
a = func()
a()

函数变量也可以作为另一个函数的参数。
#代理模式
def func(an):
	an()
def target():
	print("I'm a target")
	
func(target)

global:
在函数内部将变量 改为全局变量时，要使用global

nonlocal:	作用域在局部
向外找一层该变量，如果没有就再向外找一层，但不包括global

————————————-——————————————闭包————————————
不用全局变量，也可以改变函数内部的变量值
def func():
	a = 10
	def inner():
		nonlocal a
		a += 1
		return a
	return inner
ret = runc()
得到的是一个函数

闭包：
	1.可以让一个变量常驻于内存
	2.可以避免全局变量被修改

————————————--------————装饰器————————————————--
装饰器：把函数重新封装，调用方法还是一样

在函数定义前面加上
@函数名   起一个标记的作用

本质是一个闭包，在不改变原有函数调用的情况下，给函数增加新功能
使用：用户登录，日志
def wrapper(fn):	#wrapper 装饰器，fn 目标函数
	def inner():
		#....执行前
		fn()
		#....执行后
	return inner
	
解决参数问题
def wrapper(fn):
	#*,** 是为了接收位置参数和关键字参数，变成tuple和字典
	def inner(*args,**kwargs):
		#...执行前
		#*，** 是为了将tuple和字典打散还原成参数
		fn(*args,**kwargs)
		#...执行后
	retur inner
	
解决返回值问题,通用装饰器的写法
def wrapper(fn):
	#*,** 是为了接收位置参数和关键字参数，变成tuple和字典
	def inner(*args,**kwargs):
		#...执行前
		#*，** 是为了将tuple和字典打散还原成参数
		ret = fn(*args,**kwargs)
		#...执行后
		retur ret
	retur inner
@wrapper	#使用时候，在函数 前面加个@和装饰器
def func():
	pass

一个函数，可以被多个装饰器装饰
装饰器1装饰了装饰器2，装饰器2装饰了func()

@wrapper1
@wrapper2
def func():
	pass

wrapper1 wrapper2 func() wrapper2 wrapper1

迭代器
iter(str) 内置函数 直接拿到迭代器
next(str) 内置函数 
也可以通过下面方式获取
it = "abcdefg".__iter__()
it = "abcdefg".__next__()
for 一定是要拿迭代器
迭代器统一了所有不同数据类型的遍历工作。
迭代器本身也是可迭代的
特点：
只能向前不能反复
其实就是指针
惰性机制：只有使用 __next__()，才会指向下一个

生成器
生成器的本质就是迭代器
两个方案:1-生成器函数 2-生成器表达式

生成器函数关键字: yield
yield 也有返回的意思，在执行到next()的时候才返回数据,可以有多个
可以分段执行函数
def func()
	print("1234343")
	yield 100
	print(123)
	yield 200
	print(4444)
	yield 300

def order():
	lst = []
	for i in range(10000)
		lst.append(f"衣服{i}")
		if len(lst) == 50 :
			yield lst
			lst = []
			
每次只返回50件衣服，可以大大节省内存

推导式
	简化代码
	语法：
		列表推导式：[数据 for if判断] #if判断可要可不要
		集合推导式：{数据 for if判断} #if判断可要可不要
		字典推导式：{k:v for if判断}
		
	lst = [i for i in range(10)]
	lst = [i for i in range(1,10,2)]
	lst = [i for i in range(10) if i%2 == 1]
	lst1 = ["allen", "tony", "kevin", "solay"]
	lst2 = [item.upper() for item in lst1]

	lst = ["aa", "b", "cc", "d"]
	dic = {i:lst[i] for i in range(len(lst))}

生成器表达式
	语法：(数据 for if)
	
	gen = (i**2 for i in range(10))
	print(gen.__next__()) 
	生成器表达式，拿了数据就没有了。
	lst = list(gen)
	其实list(),set()等函数里面有个迭代器


匿名函数
	lambda表达式
	语法：
		变量 = lambda 参数1，参数2,... : 返回值 
		 
	fn = lambda a, b : a+b		#fn是个函数
使用：
	ret = fn(10,20)
	
zip :可以把多个可迭代的内容进行合并
lst1 = ["name1","name2", "name3"]
lst2 = ["age1","age2", "age3"]
lst3 = ["作品1","作品2", "作品3"]
需要合并对应项
result = zip(lst1,lst2,lst3)
for item in result
	print(item)

locals()  # 查询当前作用域的内容
globals() # 看到的是全局作用域的内容

sorted
排序 sorted(_itermlable,key,reverse)

lst = [12,123,33,4,566,6,76,7]
s = sorted(lst) #从小到大
s = sorted(lst,reverse = True) #翻转，从大到小

lst = ["秋天", "比克", "大堤", "地方撒给", "三", ""]
通过key来定义排序规则 key = 排序函数
func = lambda x: len(x)
s = sorted(lst,key = func)
#s = sorted(lst,key = lambda x: len(x))

lambda与sorted排序经常一起使用

filter : 过滤筛选
lst = ["张无忌", "张三丰", "张翠山", "灭绝师太", "周芷若"]

f = filter(lambda x : not x.startswith("张"), lst)
print(list(f))
#过滤非姓张的人名

map:映射
lst = [1,2,3,4,5,6,7,8,9]
r = map(lambda x : x*x , lst)
lst = list(r)

递归：函数自己调用自己
默认最大递归深度为1000