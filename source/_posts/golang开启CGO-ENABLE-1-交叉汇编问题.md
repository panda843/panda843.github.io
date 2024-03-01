title: golang开启CGO_ENABLE=1 交叉汇编问题
author: 是潘达呀
tags:
  - golang
categories: []
abbrlink: eba3ae6
date: 2024-03-01 15:40:00
---
> 支持国产适配麒麟v10，需要arm架构的程序，每次手动编译太麻烦。没有用到cgo的程序交叉编译很容易，但是使用到cgo的程序交叉编译很困难。


## 编译
使用goreleaser工具自动发布，命令：
```
CGO_ENABLED=1 CC=aarch64-linux-gnu-gcc CXX=aarch64-linux-gnu-g++ AR=aarch64-linux-gnu-ar go build -ldflags="-w -s"
```

## 遇到问题
1、安装aarch64-linux-gnu-gcc、aarch64-linux-gnu-g++

使用阿里云centos7 的yum源，安装 yum install gcc-c++-aarch64-linux-gnu.x86_64  -y

2、安装依赖，yum groupinstall 'Development Tools' -y

3、编译报错

```
# runtime/cgo
_cgo_export.c:3:20: fatal error: stdlib.h: No such file or directory
 #include <stdlib.h>
                    ^
compilation terminated.
```
## 解决方案
4、经过各种查资料发现网上没有明确的方法，排查后解决办法如下：

执行命令aarch64-linux-gnu-gcc -print-sysroot，显示目标库目录
```
$ aarch64-linux-gnu-gcc -print-sysroot
/usr/aarch64-linux-gnu/sys-root
```

5、进入此目录发现是空目录，排查后是缺少依赖库文件。在[网站下载](https://releases.linaro.org/components/toolchain/binaries/latest-7/aarch64-linux-gnu/)

![upload successful](/images/golang_cgo_lib_demo.png)
6、下载上述选中文件，并解压到-print-sysroot目录即可，再次编译通过。