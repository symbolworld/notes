# 一、下载安装

进入官网进行下载对应平台[Download FFmpeg](http://ffmpeg.org/download.html#build-windows)

下载完成后，在它的bin/目录下有三个文件：`ffmpeg.exe` `ffplay` `ffprobe.exe` 他们分别是：编解码器，播放器和音视频分析器。

需要把bin/目录添加至环境变量path中，否则cmd识别不到ffmpeg命令。

`ffplay 输入文件` 可直接播放视频

ffprobe 是分析工具，例如查看一个视频的编码格式 

`ffprobe -hide_banner xxx.mov` 可以精简查看一个视频的编码格式

这里主要介绍主角 **ffmpeg** 的使用

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
一般视频过程过程：
Demuxer-->Decoder-->encoder-->muxer
解封装---->解码------>重新编码-->重新封装
如果原始文件与目标文件的视频编码一样，则可以省去中间解码、重新编码的大量计算过程。直接 Demuxer-->muxer即可。
```

# 三、视频转码

在ffmpeg进行视频转码时，都是使用类似的命令：

````
ffpmeg -i INPUT -c:v ENCODER1 OPTIONS1 -c:a ENCODER2 OPTIONS2 OUTPUT
------参数解释-------
INPUT 是输入文件
ENCODER1 表示视频编码器的名称
OPTIONS1 表示视频编码器参数和选项
ENCODER2 表示音频编码器的名称
OPTIONS2 表示音频编码器参数和选项
OUTPUT 	 表示输出文件名称
所有的转换，都遵循这个规律
````

```
H264转码
ffmpeg -i 输入文件 -c:v libx264 -c:a aac 输出文件
**************
我们可以选用上面的OPTIONS来进行画质、码率、限制文件大小的调整
使用：ffmpeg -h encoder=libx264 查看H264编码的参数和选项
-crf表示恒定质量模式下的画质级别，数字越小，画质越好，但转码速度也越慢。一般是16到23之间。
ffmpeg -i 输入文件 -c:v libx264 -crf 18 -c:a aac -ab 320k 输出文件
-ab 表示音频码率为320k
---------------------
ProRes转码
将一个H264转为ProRes格式
ffmpeg -i 输入文件 -c:v prores -profile 1 -c:a aac -ab 320k 输出文件
prores 有多个子编码规格，需要使用 -profile来进行指定
可以用 ffmpeg -h encoder=prores_ks来查看参数说明
---------------------
DNXHD转码
ffmpeg -i 输入文件 -c:v dnxhd -profile dhxhr_lb -pix_fmt yuv422p -c:a aac -ab 320k 输出文件
dnxhd 有多个子编码规格，需要使用 -profile来进行指定,dnxhd还需要指定像素格式
可以用 ffmpeg -h encoder=dnxhd 来查看参数说明
---------------------
CFHD编码
ffmpeg -i 输入文件 -c:v cfhd -quality high -c:a aac -ab 320k 输出文件
可以用 ffmpeg -h encoder=cfhd 来查看参数说明
```

如果两个视频编码一样，则不需要经过复杂的解码编码过程

`ffmpeg -i 输入文件 -c copy 输出文件`

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
ffmpeg -i 输入文件 -c:a libmp3lame -ar 44100 -ac 2 -ab 320k 输出文件
--------------
WAV转AAC
ffmpeg -i 输入文件 -c:a aac -ar 44100 -ac 2 -ab 320k 输出文件
--------------
FLAC转MP3
ffmpeg -i 输入文件 -c:a libmp3lame -ar 44100 -ac 2 -ab 320k 输出文件
```

