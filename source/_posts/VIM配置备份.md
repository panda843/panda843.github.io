---
title: VIM配置备份
author: 是潘达呀
tags:
  - vim
  - vim-plug
categories: []
abbrlink: 51592ea
date: 2024-02-29 16:01:00
---
> [vimawesome插件网站](https://vimawesome.com/)

![vim](/images/image.png)

```
" vim-plug https://github.com/junegunn/vim-plug
" PlugInstall [name ...] [#threads]	安装插件
" PlugUpdate [name ...] [#threads]	安装或更新插件
" PlugClean[!]	删除未使用的目录（爆炸版将清除而不提示）
" PlugUpgrade	升级vim-plug本身
" PlugStatus	检查插件的状态
" PlugDiff	检查先前更新和挂起更改的更改
" PlugSnapshot[!] [output path]	生成用于还原插件的当前快照的脚本


call plug#begin('~/.vim/plugged')

" 中文文档
Plug 'yianwillis/vimcdoc'

" 自启动页面
Plug 'mhinz/vim-startify'

" 解决中文输入问题 mac only
Plug 'ybian/smartim'

" Vim solarized 主题插件
Plug 'altercation/vim-colors-solarized'

" Nerd Tree
" Plug 'preservim/nerdtree'
" Git 工具
Plug 'tpope/vim-fugitive'
" Vim 状态行
Plug 'vim-airline/vim-airline'
" Vim 状态行主题
Plug 'vim-airline/vim-airline-themes'
" Vim 注释
" gcc     注释当前行（普通模式）
" gc      可视模式下，注释当前选中的部分
" gcu     撤销上一次注释的部分，可以是一行也可以是多行
" gcgc    撤销注释当前行和邻近的上下两行
Plug 'tpope/vim-commentary'
" 显示和控制 Git 变更
Plug 'airblade/vim-gitgutter'
" git 命令集成 ariline 显示分支也需要这个插件
Plug 'tpope/vim-fugitive'
" 代码提纲
Plug 'majutsushi/tagbar'
" vim 8 新特性 绵羊游戏
Plug 'vim/killersheep'
" 支持自定义文本对象
Plug 'kana/vim-textobj-user'
" 增加行文本对象: l   dal yal cil
Plug 'kana/vim-textobj-line'
" 增加文件文本对象: e   dae yae cie
Plug 'kana/vim-textobj-entire'
" 增加缩进文本对象: i   dai yai cii - 相同缩进属于同一块
Plug 'kana/vim-textobj-indent'
" 视图模式下可伸缩选中部分，用于快速选中某些块
" v-增加选中范围 V-减少选中范围
Plug 'terryma/vim-expand-region'
" 多光标编辑
Plug 'mg979/vim-visual-multi', {'branch': 'master'}
" 有键位冲突，暂时停用 多光标编辑 next: <C-n> skip: <C-x> prev: <C-p> select all: <A-n>
" Plug 'terryma/vim-multiple-cursors'
" 快速跳转 ,,<h,k,j,l> 开启
Plug 'easymotion/vim-easymotion'
" 模糊查找
Plug 'Yggdroot/LeaderF', { 'do': ':LeaderfInstallCExtension' }
" 可视化显示缩放级别
Plug 'nathanaelkane/vim-indent-guides'
" 对齐代码的虚线，写Python尤其需要
Plug 'Yggdroot/indentLine'
" 用不同颜色高亮单词或选中块
Plug 'Yggdroot/vim-mark'
" 彩虹括号
Plug 'frazrepo/vim-rainbow'
" 智能添加/删除括号
Plug 'jiangmiao/auto-pairs'
" 自动补全单引号，双引号等
Plug 'Raimondi/delimitMate'
" 自动补全html/xml标签
Plug 'docunext/closetag.vim', { 'for': ['html', 'xml'] }
" 高亮行末空格(标红), 也可以一键去除文件中所有行行尾空格
Plug 'bronson/vim-trailing-whitespace'
" 自动完成
Plug 'ycm-core/YouCompleteMe'
" Emmet 自动补全
Plug 'mattn/emmet-vim'
" marks 标记
Plug 'kshenoy/vim-signature'
" buffers tree 用 leaderf 也行
Plug 'jlanzarotta/bufexplorer'
" Go语言插件
Plug 'fatih/vim-go'
call plug#end()

" vim-airline 顶部标签页
let g:airline#extensions#tabline#enabled = 1
" vim-airlien 主题
let g:airline_theme="bubblegum"
" vim-airline 支持powerline字体
let g:airline_powerline_fonts = 1
let g:airline_left_alt_sep = '❯'
let g:airline_right_alt_sep = '❮'
" 隐藏文件类型
let g:airline_section_x = ''
let g:airline_section_y = ''  " airline#section#create_left(['filetype'])
let g:airline_skip_empty_sections = 1

" Vim solarized 主题配置
syntax enable
set background=dark
set t_Co=256
" colorscheme solarized

" Nerd Tree 配置
" autocmd vimenter * NERDTree

" vim-commentary 注释配置
autocmd FileType python,shell,coffee set commentstring=#\ %s
autocmd FileType java,c,cpp set commentstring=//\ %s
autocmd FileType php        setlocal omnifunc=phpactor#Complete
" 复制时不能选择行号
set mouse=a
" 显示行号
set number
" 设置tab为4个空格
set ts=4
set expandtab
%retab!
" 设置delete只能删除当前行的问题
set backspace=indent,eol,start
" 显示设置为UTF-8
set termencoding=utf-8
" 高亮显示匹配括号
set showmatch
" 将文件格式转换为unix格式
set ff=unix
" 允许折叠
set foldenable
" 高亮显示当前行
set cursorline
hi CursorLine   cterm=NONE ctermbg=black guibg=NONE guifg=NONE
" 帮助系统设置为中文
set helplang=cn
" 总是显示状态行
set laststatus=2
" 检索时高亮显示匹配项
set hls
" 取消VI一致
set nocompatible
" 搜索模式忽略大小写
set ignorecase
" 如果搜索模式包含大写字符，不使用'ignorecase'选项。只有在输入搜索模式并且打开'ignorecase'选项时才会使用 
set smartcase
" 行移动
nnoremap ∆ :m .+1<CR>==
nnoremap ˚ :m .-2<CR>==
inoremap ∆ <Esc>:m .+1<CR>==gi
inoremap ˚ <Esc>:m .-2<CR>==gi
vnoremap ∆ :m '>+1<CR>gv=gv
vnoremap ˚ :m '<-2<CR>gv=gv
```
