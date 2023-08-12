# 一、下载安装

进入官网进行下载对应平台[Download FFmpeg](http://ffmpeg.org/download.html#build-windows)

下载完成后，在它的bin/目录下有三个文件：`ffmpeg.exe` `ffplay` `ffprobe.exe` 他们分别是：编解码器，播放器和音视频分析器。

需要把bin/目录添加至环境变量path中，否则cmd识别不到ffmpeg命令。

`ffplay INPUT` 可直接播放视频

ffprobe 是分析工具，例如查看一个视频的编码格式 

`ffprobe -hide_banner xxx.mov` 可以精简查看一个视频的编码格式

这里主要介绍主角 **ffmpeg** 的使用(所有的操作都在cmd命令行中进行)

# 二、视频的封装与编码

### 视频容器封装格式：

```	
包含 mp4,mov,avi,webm,mkv 等等
```

一个视频包含视频，音频，字幕等，容器是以不同的方式和存储这些不同类型的数据。每种格式支持的视频，音频以及字幕的数量不同，所支持的视频编码格式也不同。

### 视频编码格式：

编码格式决定了视频内容的解码、压缩以及存储方式

常见的编码格式：H264、ProRes、DNXHD

编码只处理视频，封装是把视频，音频，字幕等再进行一次统一打包，最终形成完整的视频文件。

### 常用操作：

```
查看ffmpeg所支持的所有容器封闭格式列表：ffmpeg -formats
D表示解封装，E表示支持的封装。
---------
查看mp4的封装格式的说明和参数选项：ffmpeg -h muxer=mp4
Muxer mp4下面可以看到常用后缀，文件媒体类型，默认音视频编码等
还有在使用ffmpeg时的一些参数选项
----------
不同的封装格式，对视频编码格式有所不同
MOV可以支持 h264、ProRes、NDXHD
MP4支持h264,但不支持ProRes和NDXHD
查看所有视频编码格式列表：ffmpeg -codecs
D表示支持解码操作
E表示支持编码操作
V表示支持视频的编解码操作
A表示音频编解码操作
S表示字幕格式的编解码操作
I表示帧内编码
L表示该编码格式属于有损压缩方式
S表示该编码格式属于无损压缩方式
```

```
一般视频转码过程：
Demuxer-->Decoder-->encoder-->muxer
解封装---->解码------>重新编码-->重新封装
如果原始文件与目标文件的视频编码一样，则可以省去中间解码、重新编码的大量计算过程。直接 Demuxer-->muxer即可。
```

# 三、视频转码

在ffmpeg进行视频转码时，都是使用类似的命令：

````
ffpmeg -i INPUT -c:v ENCODER1 OPTIONS1 -c:a ENCODER2 OPTIONS2 OUTPUT
------参数解释-------
INPUT 	 是输入文件
ENCODER1 表示视频编码器的名称
OPTIONS1 表示视频编码器参数和选项
ENCODER2 表示音频编码器的名称
OPTIONS2 表示音频编码器参数和选项
OUTPUT 	 表示输出文件名称
所有的转换，都遵循这个规律
````

```
H264转码
ffmpeg -i INPUT -c:v libx264 -c:a aac OUTPUT
**************
我们可以选用上面的OPTIONS来进行画质、码率、限制文件大小的调整
使用：ffmpeg -h encoder=libx264 查看H264编码的参数和选项
-crf表示恒定质量模式下的画质级别，数字越小，画质越好，但转码速度也越慢。一般是16到23之间。
ffmpeg -i INPUT -c:v libx264 -crf 18 -c:a aac -ab 320k OUTPUT
-ab 表示音频码率为320k
---------------------
ProRes转码
将一个H264转为ProRes格式
ffmpeg -i INPUT -c:v prores -profile 1 -c:a aac -ab 320k OUTPUT
prores 有多个子编码规格，需要使用 -profile来进行指定
可以用 ffmpeg -h encoder=prores_ks来查看参数说明
---------------------
DNXHD转码
ffmpeg -i INPUT -c:v dnxhd -profile dhxhr_lb -pix_fmt yuv422p -c:a aac -ab 320k OUTPUT
dnxhd 有多个子编码规格，需要使用 -profile来进行指定,dnxhd还需要指定像素格式
可以用 ffmpeg -h encoder=dnxhd 来查看参数说明
---------------------
CFHD编码
ffmpeg -i INPUT -c:v cfhd -quality high -c:a aac -ab 320k OUTPUT
可以用 ffmpeg -h encoder=cfhd 来查看参数说明
```

如果两个视频编码一样，则不需要经过复杂的解码编码过程

`ffmpeg -i INPUT -c copy OUTPUT`

-c copy 表示复制输入文件中的视频与音频，相当于 -c:v -c:a

# 四、音频转码

```
常用音频格式：mp3,aac,wav,flac
aac是常用的音频编码，通常与h264相匹配
wav在ffmpeg中称为PCM编码
flac是一种无损音频压缩编码
音频最重要的四要素：
ENCODER SAMPLE CHANNEL BITRATE
编码器、 采样率、 声道、   码率
采样率一般使用 44.1KHZ和48KHZ
声道：单声道，双声道，多声道
码率：码率越高，音质越好，但一般网站要求不超过320k
-------------------
音频转码基础命令格式：
ffmpeg -i INPUT -c:a ENCODER -ar SAMPLE -ac CHANNEL -ab BITRATE OUTPUT
```

```
WAV转MP3
ffmpeg -i INPUT -c:a libmp3lame -ar 44100 -ac 2 -ab 320k OUTPUT
--------------
WAV转AAC
ffmpeg -i INPUT -c:a aac -ar 44100 -ac 2 -ab 320k OUTPUT
--------------
FLAC转MP3
ffmpeg -i INPUT -c:a libmp3lame -ar 44100 -ac 2 -ab 320k OUTPUT
```

# 五、常用操作

```
截取视频片段：
ffmpeg -ss 00:00:00 -to 00:05:23 -i INPUT -y -f mp4 -vcodec copy -acodec copy -q:v 1 OUTPUT
从INPUT文件视频里，截取0时0分0秒到0时5分23秒的视频。输出生成OUTPUT
参数说明：
-ss 起始时间
-to 终止时间
-i	输入文件
-y	无需询问，直接覆盖输出文件(如果有的话)
-f	指定输出的视频格式
-vcodec		指定视频编码格式，copy 则保持不变
-acodec 	指定音频编码格式, copy 则保持不变
-q:v	q是质量，v是视频，v的取值范围是[1,35]，1对应最佳质量
```

```
截取保存一张图片：
ffmpeg -ss 00:03:02 -i INPUT -vframes 1 output.jpg
参数说明：
-ss:起始时间
-vframes 1：取当前第一帧
---------------------------
每秒钟截取一张：
ffmpeg -i INPUT -vf fps=1 image_%d.jpg
参数说明：
-vf fps=1:表示frame per second截取一张
可以轻易写出每X秒一张的命令，比如每100秒一张：
ffmpeg -i INPUT -vf fps=1/100 image_%d.jpg
-----------------------------
保存关键帧：
ffmpeg -i INPUT -vf "select='eq(pict_type,PICT_TYPE_I)'" -vsync vfr image_%d.jpg
```

```
从视频中提取音频：
ffmpeg -i INPUT -f wav -ar 16000 OUTPUT
参数说明：
-f： 强制输出格式为wav
-ar：设置采样频率
```

音频的转换查看 [音频转码](#四、音频转码)

```
去水印：
ffmpeg -i INPUT -vf delogo=x=163:y=116:w=148:h=45:show=0 OUTPUT
在x=163，y=116，宽=148,高=45的矩形范围内，生成滤镜水印。
(x,y)和(宽,高)就是水印的位置，如果要准确找到水印位置，可以先截取一张图片，找到(x,y)和(w,h)
```

rmvb转mp4

`ffmpeg -i "02.rmvb" -vcodec libx264 -acodec copy "output.mp4"`



