title: 通过FOFA获取一些免费资源
author: 是潘达呀
tags:
  - fofa
categories: []
abbrlink: a8120869
date: 2024-03-01 16:27:00
---
> fofa那些不为人知的用法

## 外地IPTV组播源
目前各地运营商的IPTV一般在局域网环境下可通过组播观看，要实现公网浏览，多半需要公网IP进行转发，其中需要配合路由器搭建并使用UDPXY等插件，让组播转为单播。

所以一般可透过寻找开放在公网环境且搭建好UDPXY的IP或域名实现，直接观看其他省市运营商的IPTV电视频道。一般可以借助相关工具扫描IP和端口寻找搭建UDPXY且开放在公网环境的IP或域名，之前笔者就用到一款大神开发的飞速IP开放端口扫描器软件，不过感觉IP数量巨大，端口也不仅限于UDPXY默认的4022，同时还需进一步筛选，所以后面索性放弃，没有域名的大概率今天扫描能看，第二天就失效。

[获取IPTV组播源](https://fofa.info/result?qbase64=c2VydmVyPSJ1ZHB4eSIgfHwgc2VydmVyPSJIVFMvdHZoZWFkZW5kIiB8fCBzZXJ2ZXI9IkhNUyBEb3dubG9hZCBTZXJ2aWNlIiB8fCBib2R5PSJaSEdYVFYiIHx8IGJvZHk9Ii9pcHR2L2xpdmUvemhfY24uanMi)

![upload successful](/images/fofa_iptv_demo.png)

## 使用 sni反代服务器解锁Netflix迪士尼等流媒体

[获取sni反代IP](https://fofa.info/result?qbase64=Ym9keT0iQmFja2VuZCBub3QgYXZhaWxhYmxlIg%3D%3D)

获取IP后，在vps修改dns
nano /etc/resolv.conf
添加后即可食用

也可以添加到本地dns

## 永不被墙 vmess+ws+前置域
1. [参考教程地址](https://youtu.be/FT-O4Xd9gTw)
2. [fastly](https://www.fastly.com)
3. [fastly前置域](https://fofa.info/result?qbase64=Y2xvdWRfbmFtZT0iZmFzdGx5Ig%3D%3D)

VCL脚本：
```
if (req.http.Upgrade) {
    return (upgrade);
}
```

## jetbrains产品激活服务器
随便找一个，进行激活
[查找激活服务器](https://fofa.info/result?qbase64=aGVhZGVyPSJodHRwczovL2FjY291bnQuamV0YnJhaW5zLmNvbS9mbHMtYXV0aCIgIA%3D%3D)

## 别人的chatgpt服务
随便找一个，进行使用
[获取chatgpt网站](https://fofa.info/result?qbase64=Ym9keT0iQ29udGludWUgd2l0aCBBY2Nlc3MgVG9rZW4iICYmIHRpdGxlPSJQYW5kb3JhTmV4dCIgJiYgY291bnRyeT0iQ04i)

## 免费VPN节点订阅
随便找一个，进行使用
[获取免费订阅节点](https://fofa.info/result?qbase64=Ym9keT0i6Ieq5Yqo5oqT5Y%2BWdGfpopHpgZPjgIHorqLpmIXlnLDlnYDjgIHlhazlvIDkupLogZTnvZHkuIrnmoRzc%2BOAgXNzcuOAgXZtZXNz44CBdHJvamFu6IqC54K55L%2Bh5oGvIg%3D%3D)