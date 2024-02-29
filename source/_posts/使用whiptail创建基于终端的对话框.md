title: 使用whiptail创建基于终端的对话框
author: 是潘达呀
tags:
  - terminal
  - whiptail
categories: []
abbrlink: cfb36c29
date: 2024-02-29 16:35:00
---
最近在工作中需要提供一个一键安装脚本，后来发现了whiptail，挺好使的记录一下，效果如下：



![upload successful](/images/whiptail_demo1.png)

![upload successful](/images/whiptail_demo3.png)

![upload successful](/images/whiptail_demo4.png)

![upload successful](/images/whiptail_demo5.png)

![upload successful](/images/whiptail_demo6.png)

> 当你写一个交互式shell脚本，你可以使用这样的对话框来接受用户的输入。whiptail可以在shell脚本中创建基于终端的对话框，消息框的过程，类似于Zenity或xdialog GUI脚本代码。whiptail预先安装在所有的Linux发布版本中。


#1	创建一个消息框
-------


一个消息框中显示一个确认按钮继续任意的文本消息。

语法：


```cpp
whiptail --title "<message box title>" --msgbox "<text to show>" <height> <width> 
```

实例：

```cpp
#!/bin/bash
whiptail --title "Test Message Box" --msgbox "Create a message box with whiptail. Choose Ok to continue." 10 60
```



![创建交互式shell脚本对话框创建交互式shell脚本对话框](/images/message_box.jpg)




#2	创建一个yes/no对话框
-------


用户输入yes或no的对话框

语法：

```cpp
whiptail --title "<dialog box title>" --yesno "<text to show>" <height> <width>
```

实例：


```cpp
#!/bin/bash
if (whiptail --title "Test Yes/No Box" --yesno "Choose between Yes and No." 10 60) then
    echo "You chose Yes. Exit status was $?."
else
    echo "You chose No. Exit status was $?."
fi
```



![创建交互式shell脚本对话框创建交互式shell脚本对话框](/images/yes_no_box.jpg)


或者，你可以是“--yes-button” ,"--no-button"选项。


```cpp
#!/bin/bash
if (whiptail --title "Test Yes/No Box" --yes-button "Skittles" --no-button "M&M's"  --yesno "Which do you like better?" 10 60) then
    echo "You chose Skittles Exit status was $?."
else
    echo "You chose M&M's. Exit status was $?."
fi
```



![创建交互式shell脚本对话框创建交互式shell脚本对话框](/images/yes_no_button_box.jpg)


#3	创建一个表单输入框
-------


如果你想用户输入任意的文本，您可以使用一个输入框。

语法：

```cpp
whiptail --title "<input box title>" --inputbox "<text to show>" <height> <width> <default-text>
```

实例：


```cpp
#!/bin/bash
PET=$(whiptail --title "Test Free-form Input Box" --inputbox "What is your pet's name?" 10 60 Wigglebutt 3>&1 1>&2 2>&3)
 
exitstatus=$?
if [ $exitstatus = 0 ]; then
    echo "Your pet name is:" $PET
else
    echo "You chose Cancel."
fi
```


![创建交互式shell脚本对话框创建交互式shell脚本对话框](/images/free_form_input_box.jpg)



#4	创建一个密码框
-------


当用户需要输入敏感信息时密码框是有用的。
语法：

```cpp
whiptail --title "<password box title>" --passwordbox "<text to show>" <height> <width>
```

实例：

```cpp
#!/bin/bash
PASSWORD=$(whiptail --title "Test Password Box" --passwordbox "Enter your password and choose Ok to continue." 10 60 3>&1 1>&2 2>&3)
 
exitstatus=$?
if [ $exitstatus = 0 ]; then
    echo "Your password is:" $PASSWORD
else
    echo "You chose Cancel."
fi
```

![创建交互式shell脚本对话框创建交互式shell脚本对话框](/images/password_box.jpg)

#5	创建一个菜单栏
-------


当你想让用户选择一个任意数量的选择中，你可以使用菜单框。

语法：


```cpp
whiptail --title "<menu title>" --menu "<text to show>" <height> <width> <menu height> [ <tag> <item> ] . . .
```


实例：

```cpp
#!/bin/bash
OPTION=$(whiptail --title "Test Menu Dialog" --menu "Choose your option" 15 60 4 \
"1" "Grilled Spicy Sausage" \
"2" "Grilled Halloumi Cheese" \
"3" "Charcoaled Chicken Wings" \
"4" "Fried Aubergine"  3>&1 1>&2 2>&3)
 
exitstatus=$?
if [ $exitstatus = 0 ]; then
    echo "Your chosen option:" $OPTION
else
    echo "You chose Cancel."
fi
```


![创建交互式shell脚本对话框创建交互式shell脚本对话框](/images/menu_dialog.jpg)



#6	创建radiolist对话框
-------


语法：

```cpp
whiptail --title "<radiolist title>" --radiolist "<text to show>" <height> <width> <list height> [ <tag> <item> <status> ] . . .
```


实例：


```cpp
#!/bin/bash
DISTROS=$(whiptail --title "Test Checklist Dialog" --radiolist \
"What is the Linux distro of your choice?" 15 60 4 \
"debian" "Venerable Debian" ON \
"ubuntu" "Popular Ubuntu" OFF \
"centos" "Stable CentOS" OFF \
"mint" "Rising Star Mint" OFF 3>&1 1>&2 2>&3)
 
exitstatus=$?
if [ $exitstatus = 0 ]; then
    echo "The chosen distro is:" $DISTROS
else
    echo "You chose Cancel."
fi
```


![创建交互式shell脚本对话框创建交互式shell脚本对话框](/images/checklist_dialog.jpg)

#7	创建一个表对话框
-------



当你想让用户选择一个列表中选择多个选项的清单对话框是有用的，radiolist对话框，只允许选择一个。
语法：

```cpp
whiptail --title "<checklist title>" --checklist "<text to show>" <height> <width> <list height> [ <tag> <item> <status> ] . . .
```

实例：


```cpp
#!/bin/bash
DISTROS=$(whiptail --title "Test Checklist Dialog" --checklist \
"Choose preferred Linux distros" 15 60 4 \
"debian" "Venerable Debian" ON \
"ubuntu" "Popular Ubuntu" OFF \
"centos" "Stable CentOS" ON \
"mint" "Rising Star Mint" OFF 3>&1 1>&2 2>&3)
 
exitstatus=$?
if [ $exitstatus = 0 ]; then
    echo "Your favorite distros are:" $DISTROS
else
    echo "You chose Cancel."
fi
```



![创建交互式shell脚本对话框创建交互式shell脚本对话框](/images/multi_checklist_dialog.jpg)



#8	创建一个进度条
-------


进度条是一个用户友好的对话框。whiptail从标准输入读取一个百分数（0～100），显示一个表内相应的计数。
语法：


```cpp
whiptail --gauge "<test to show>" <height> <width> <inital percent>
```

实例：

```cpp
#!/bin/bash
{
    for ((i = 0 ; i <= 100 ; i+=20)); do
        sleep 1
        echo $i
    done
} | whiptail --gauge "Please wait while installing" 6 60 0
```

![创建交互式shell脚本对话框创建交互式shell脚本对话框](/images/gauge.jpg)